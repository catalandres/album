// Copyright 2024 Andrés Catalán (@catalandres)
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import * as fs from 'node:fs';
import * as xml2js from 'xml2js';
import { array } from './util';
import { getMetadataExtension } from './util';
import { ALL_METADATA_TYPES } from './metadata/allMetadataTypes';
const parserOptions = {
    explicitArray: false,
    mergeAttrs: true,
    valueProcessors: [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        xml2js.processors.parseNumbers,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        xml2js.processors.parseBooleans,
    ],
};
export class Album {
    metadata = {};
    projectFilenames;
    metadataFilenames;
    fileTypesByExtension;
    metadataExtensions;
    constructor(filenames) {
        this.projectFilenames = filenames;
        this.fileTypesByExtension = new Map();
        for (const thisMetadataType of ALL_METADATA_TYPES) {
            if (thisMetadataType.extension) {
                this.fileTypesByExtension.set(thisMetadataType.extension, thisMetadataType);
            }
        }
        this.metadataExtensions = new Set(this.fileTypesByExtension.keys());
        this.metadataFilenames = this.projectFilenames.filter((theFile) => this.isMetadataFile(theFile));
        for (const thisFile of this.metadataFilenames) {
            const thisMetadataType = this.fileTypesByExtension.get(getMetadataExtension(thisFile));
            const xml = fs.readFileSync(thisFile, "utf-8");
            this.absorb(this.getMetadata(xml, thisFile, thisMetadataType));
        }
    }
    absorb(albumData) {
        for (const thisList of Object.keys(albumData)) {
            if (!this.metadata[thisList]) {
                this.metadata[thisList] = [];
            }
            this.metadata[thisList].push(...albumData[thisList]);
        }
    }
    isMetadataFile(thisFile) {
        return this.metadataExtensions.has(getMetadataExtension(thisFile));
    }
    getMetadata(xml, fileName, definition) {
        const album = {};
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        xml2js.parseString(xml, parserOptions, (err, result) => {
            const theRecord = result[definition.name];
            if (!definition.container) {
                this.treatRecord(theRecord, definition, fileName);
                album[definition.list] = [theRecord];
            }
            if (definition.children) {
                for (const listName of Object.keys(definition.children)) {
                    const thisMetadataType = definition.children[listName];
                    album[thisMetadataType.list] = [];
                    const records = array(theRecord[listName]);
                    for (const thisRecord of records) {
                        this.treatRecord(thisRecord, thisMetadataType, fileName);
                        album[thisMetadataType.list].push(thisRecord);
                    }
                }
            }
        });
        return album;
    }
    treatRecord(record, metadataType, fileName) {
        record.fileName = fileName;
        if (metadataType.setName) {
            record.name = metadataType.setName(record);
        }
        if (metadataType.setObjectname) {
            record.objectName = metadataType.setObjectname(record);
        }
        if (metadataType.setFullName) {
            record.fullName = metadataType.setFullName(record);
        }
        if (metadataType.transform) {
            metadataType.transform(record);
        }
    }
}
