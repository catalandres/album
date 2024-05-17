import * as Function from '../../functions/index';
export const AURA_APPLICATION = {
    name: 'AuraDefinitionBundle',
    list: 'auraApplications',
    extension: '.app-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
