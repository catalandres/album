import * as Function from '../../functions/index';
export const LIGHTNING_WEB_COMPONENT = {
    name: 'LightningComponentBundle',
    list: 'lightningWebComponents',
    extension: '.js-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
