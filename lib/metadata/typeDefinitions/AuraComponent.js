import * as Function from '../../functions/index';
export const AURA_COMPONENT = {
    name: 'AuraDefinitionBundle',
    list: 'auraComponents',
    extension: '.cmp-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
