import * as Function from '../../functions/index';
export const LAYOUT = {
    name: 'Layout',
    list: 'layouts',
    extension: '.layout-meta.xml',
    metadataType: {},
    setName: Function.getSecondHalfOfBasenameSplitByDash,
    setObjectname: Function.getFirstHalfOfBasenameSplitByDash,
    setFullName: Function.getBasenameWithoutExtension,
};
