import * as Function from '../../functions/index';
export const APEX_COMPONENT = {
    name: 'ApexComponent',
    list: 'apexComponents',
    extension: '.component-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
