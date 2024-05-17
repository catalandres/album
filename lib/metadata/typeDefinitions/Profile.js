import * as Function from '../../functions/index';
export const PROFILE = {
    name: 'Profile',
    list: 'profiles',
    extension: '.profile-meta.xml',
    metadataType: {},
    setName: Function.getBasenameWithoutExtension,
};
