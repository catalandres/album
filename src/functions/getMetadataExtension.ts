import * as path from 'node:path';

export function getMetadataExtension(fileName: string): string {
    const baseName = path.basename(fileName);
    const extensionRegEx = /.*(\..+\-meta\.xml)/;
    const matches = baseName.match(extensionRegEx)
    return matches?.[1] || '';
}