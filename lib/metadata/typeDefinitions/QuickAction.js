import * as Function from '../../functions/index';
export const QUICK_ACTION = {
    name: 'QuickAction',
    list: 'quickActions',
    extension: '.quickAction-meta.xml',
    metadataType: {},
    setName: Function.getSecondHalfOfBasenameSplitByPeriod,
    setObjectname: Function.getFirstHalfOfBasenameSplitByPeriod,
    setFullName: Function.getBasenameWithoutExtension,
};
