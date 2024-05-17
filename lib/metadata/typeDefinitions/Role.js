import * as Function from '../../functions/index';
export const ROLE = {
    name: 'Role',
    list: 'roles',
    extension: '.role-meta.xml',
    metadataType: {},
    setFullName: Function.getBasenameWithoutExtension,
    transform: Function.transformRole,
};
