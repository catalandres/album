import { Metadata as SalesforceMetadata } from './metadata/salesforceMetadata';
import { Extended } from './metadata/metadataType';
type AlbumData = Record<string, Array<Extended<SalesforceMetadata>>>;
export declare class Album {
    metadata: AlbumData;
    private projectFilenames;
    private metadataFilenames;
    private fileTypesByExtension;
    private metadataExtensions;
    constructor(filenames: string[]);
    private absorb;
    private isMetadataFile;
    private getMetadata;
    private treatRecord;
}
export {};
