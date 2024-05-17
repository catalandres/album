import * as path from 'node:path';
import { getMetadataExtension } from '../util';
export function concatenateObjectNameAndName(record) {
    return record.objectName + '.' + record.name;
}
export function getBasenameWithoutExtension(record) {
    const extension = getMetadataExtension(record.fileName);
    return path.basename(record.fileName).replace(extension, '');
}
export function getFullNameValue(record) {
    return record.fullName || '';
}
export function getNameOfSecondToLastFolderLevel(record) {
    return record.fileName.split(path.sep).reverse()[2];
}
export function getFirstHalfOfBasenameSplitByPeriod(record) {
    const basename = getBasenameWithoutExtension(record);
    return basename.split('.')[0];
}
export function getSecondHalfOfBasenameSplitByPeriod(record) {
    const basename = getBasenameWithoutExtension(record);
    return basename.split('.')[1];
}
export function getFirstHalfOfBasenameSplitByDash(record) {
    const basename = getBasenameWithoutExtension(record);
    return basename.split('-')[0];
}
export function getSecondHalfOfBasenameSplitByDash(record) {
    const basename = getBasenameWithoutExtension(record);
    return basename.split('-')[1];
}
