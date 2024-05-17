import * as Function from '../../functions/index';
export const RECORD_TYPE = {
    name: 'RecordType',
    list: 'recordTypes',
    extension: '.recordType-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    setObjectname: Function.getNameOfSecondToLastFolderLevel,
    setFullName: Function.concatenateObjectNameAndName,
};
