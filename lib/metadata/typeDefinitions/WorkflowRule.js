import * as Function from '../../functions/index';
export const WORKFLOW_RULE = {
    name: 'WorkflowRule',
    list: 'workflowRules',
    metadataType: {},
    setName: Function.getFullNameValue,
    setObjectname: Function.getBasenameWithoutExtension,
    setFullName: Function.concatenateObjectNameAndName,
};
