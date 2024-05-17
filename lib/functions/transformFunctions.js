export function transformCustomObject(object) {
    const suffix = object.name?.match('__([A-Za-z0-9]+$)')?.at(0);
    // https://salesforce.stackexchange.com/questions/101844/what-are-the-object-and-field-name-suffixes-that-salesforce-uses-such-as-c-an#101845
    switch (suffix) {
        case '__c':
            break;
        case '__mdt':
            break;
        case '__e':
            break;
        default:
            break;
    }
}
export function transformCustomTab(tab) {
    if (tab.customObject) {
        tab.objectName = tab.name;
    }
}
export function transformFlow(flow) {
    if (flow.start) {
        const flowStart = flow.start;
        flow.objectName = flowStart.object ?? '';
        flow.triggerType = flowStart.triggerType ?? '';
        flow.recordTriggerType = flowStart.recordTriggerType ?? '';
    }
}
export function transformRole(role) {
    role.label = role.name;
    role.name = role.fullName;
}
