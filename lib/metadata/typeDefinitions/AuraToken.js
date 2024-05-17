import * as Function from '../../functions/index';
export const AURA_TOKEN = {
    name: 'AuraDefinitionBundle',
    list: 'auraTokens',
    extension: '.tokens-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
