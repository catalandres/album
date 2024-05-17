import * as Function from '../../functions/index';
export const WEBLINK = {
    name: 'WebLink',
    list: 'webLinks',
    extension: '.webLink-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    setObjectname: Function.getNameOfSecondToLastFolderLevel,
    setFullName: Function.concatenateObjectNameAndName,
};
