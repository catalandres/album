import * as Function from '../../functions/index';
export const APEX_TRIGGER = {
    name: 'ApexTrigger',
    list: 'apexTriggers',
    extension: '.trigger-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
