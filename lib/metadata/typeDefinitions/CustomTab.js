import * as Function from '../../functions/index';
export const CUSTOM_TAB = {
    name: 'CustomTab',
    list: 'tabs',
    extension: '.tab-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    transform: Function.transformCustomTab,
};
