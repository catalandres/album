import * as Function from '../../functions/index';
export const CUSTOM_FIELD = {
    name: 'CustomField',
    list: 'fields',
    extension: '.field-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    setObjectname: Function.getNameOfSecondToLastFolderLevel,
    setFullName: Function.concatenateObjectNameAndName,
};
