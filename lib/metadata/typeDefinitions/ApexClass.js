import * as Function from '../../functions/index';
export const APEX_CLASS = {
    name: 'ApexClass',
    list: 'apexClasses',
    extension: '.cls-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
