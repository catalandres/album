import * as Function from '../../functions/index';
export const AURA_EVENT = {
    name: 'AuraDefinitionBundle',
    list: 'auraEvents',
    extension: '.evt-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
