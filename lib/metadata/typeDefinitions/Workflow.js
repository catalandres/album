import * as Type from '../typeDefinitions';
export const WORKFLOW = {
    name: 'Workflow',
    list: 'workflows',
    extension: '.workflow-meta.xml',
    container: true,
    metadataType: {},
    children: {
        rules: Type.WORKFLOW_RULE,
    },
};
