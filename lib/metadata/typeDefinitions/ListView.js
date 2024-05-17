import * as Function from '../../functions/index';
export const LIST_VIEW = {
    name: 'ListView',
    list: 'listViews',
    extension: '.listView-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    setObjectname: Function.getNameOfSecondToLastFolderLevel,
    setFullName: Function.concatenateObjectNameAndName,
};
