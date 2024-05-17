import * as Function from '../../functions/index';
export const FLOW = {
    name: 'Flow',
    list: 'flows',
    extension: '.flow-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
    transform: Function.transformFlow,
};
