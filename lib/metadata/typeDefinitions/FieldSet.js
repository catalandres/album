import * as Function from '../../functions/index';
export const FIELD_SET = {
    name: 'FieldSet',
    list: 'fieldSets',
    extension: '.fieldSet-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    setObjectname: Function.getNameOfSecondToLastFolderLevel,
    setFullName: Function.concatenateObjectNameAndName,
};
