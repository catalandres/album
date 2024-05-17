import * as Function from '../../functions/index';
export const USER_ACCESS_POLICY = {
    name: 'UserAccessPolicy',
    list: 'userAccessPolicies',
    extension: '.useraccesspolicy-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
