import * as Function from '../../functions/index';
export const APEX_PAGE = {
    name: 'ApexPage',
    list: 'apexPages',
    extension: '.page-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
