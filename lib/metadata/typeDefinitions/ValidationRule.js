import * as Function from '../../functions/index';
export const VALIDATION_RULE = {
    name: 'ValidationRule',
    list: 'validationRules',
    extension: '.validationRule-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    setObjectname: Function.getNameOfSecondToLastFolderLevel,
    setFullName: Function.concatenateObjectNameAndName,
};
