import * as Function from '../../functions/index';
export const PERMISSION_SET_GROUP = {
    name: 'PermissionSetGroup',
    list: 'permissionSetGroups',
    extension: '.permissionsetgroup-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
