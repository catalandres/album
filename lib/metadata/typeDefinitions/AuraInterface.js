import * as Function from '../../functions/index';
export const AURA_INTERFACE = {
    name: 'AuraDefinitionBundle',
    list: 'auraInterfaces',
    extension: '.intf-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
