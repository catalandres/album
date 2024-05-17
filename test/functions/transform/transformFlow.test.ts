import * as Function from "../../../src/functions/index";

describe("Function transformFlow", () => {

  test("performs the transformation when there is a FlowStart element", () => {
    const flow: Record<string, unknown> = {};
    const flowStart: Record<string, unknown> = {};

    flow.objectName = 'Contact';
    flow.triggerType = 'None';
    flow.recordTriggerType = 'Create';

    flowStart.object = 'Account';
    flowStart.triggerType = 'RecordAfterSave';
    flowStart.recordTriggerType = 'Update';

    flow.start = flowStart;

    Function.transformFlow(flow);

    expect(flow.objectName).toBe("Account");
    expect(flow.triggerType).toBe("RecordAfterSave");
    expect(flow.recordTriggerType).toBe("Update");
  });

  test("performs the transformation when there is a FlowStart element with undefined values", () => {
    const flow: Record<string, unknown> = {};
    const flowStart: Record<string, unknown> = {};

    flow.objectName = "Contact";
    flow.triggerType = "None";
    flow.recordTriggerType = "Create";

    flowStart.object = undefined;
    flowStart.triggerType = undefined;
    flowStart.recordTriggerType = undefined;

    flow.start = flowStart;

    Function.transformFlow(flow);

    expect(flow.objectName).toBe("");
    expect(flow.triggerType).toBe("");
    expect(flow.recordTriggerType).toBe("");
  });

  test("performs the transformation when there is a FlowStart element with null values", () => {
    const flow: Record<string, unknown> = {};
    const flowStart: Record<string, unknown> = {};

    flow.objectName = "Contact";
    flow.triggerType = "None";
    flow.recordTriggerType = "Create";

    flowStart.object = null;
    flowStart.triggerType = null;
    flowStart.recordTriggerType = null;

    flow.start = flowStart;

    Function.transformFlow(flow);

    expect(flow.objectName).toBe("");
    expect(flow.triggerType).toBe("");
    expect(flow.recordTriggerType).toBe("");
  });

  test("performs the transformation when there is a FlowStart element with empty values", () => {
    const flow: Record<string, unknown> = {};
    const flowStart: Record<string, unknown> = {};

    flow.objectName = "Contact";
    flow.triggerType = "None";
    flow.recordTriggerType = "Create";

    flowStart.object = '';
    flowStart.triggerType = '';
    flowStart.recordTriggerType = '';

    flow.start = flowStart;

    Function.transformFlow(flow);

    expect(flow.objectName).toBe("");
    expect(flow.triggerType).toBe("");
    expect(flow.recordTriggerType).toBe("");
  });

  test("does not perform the transformation when there is no FlowStart element", () => {
    const flow: Record<string, unknown> = {};

    flow.objectName = "Contact";
    flow.triggerType = "None";
    flow.recordTriggerType = "Create";

    Function.transformFlow(flow);

    expect(flow.objectName).toBe("Contact");
    expect(flow.triggerType).toBe("None");
    expect(flow.recordTriggerType).toBe("Create");
  });
});
