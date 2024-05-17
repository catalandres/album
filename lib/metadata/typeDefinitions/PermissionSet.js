import * as Function from '../../functions/index';
export const PERMISSION_SET = {
    name: 'PermissionSet',
    list: 'permissionSets',
    extension: '.permissionset-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
