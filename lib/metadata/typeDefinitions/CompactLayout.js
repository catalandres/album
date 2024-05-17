import * as Function from '../../functions/index';
export const COMPACT_LAYOUT = {
    name: 'CompactLayout',
    list: 'compactLayouts',
    extension: '.compactLayout-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    setObjectname: Function.getNameOfSecondToLastFolderLevel,
    setFullName: Function.concatenateObjectNameAndName,
};
