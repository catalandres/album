import * as Function from '../../functions/index';
export const CUSTOM_OBJECT = {
    name: 'CustomObject',
    list: 'objects',
    extension: '.object-meta.xml',
    documentationUrl: 'https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_customobject.htm',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    setFullName: Function.getBasenameWithoutExtension,
    transform: Function.transformCustomObject,
};
