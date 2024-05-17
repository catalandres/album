import * as Function from "../../../src/functions/index";

describe("Function transformCustomTab", () => {

  test("performs the transformation when it is a custom object tab", () => {
    const tab: Record<string, unknown> = {};
    tab.customObject = true;
    tab.name = "CustomObject__c";
    tab.objectName = "";
    Function.transformCustomTab(tab);
    expect(tab.objectName).toBe("CustomObject__c");
  });

  test("does not perform the transformation when it is not a custom object tab", () => {
    const tab: Record<string, unknown> = {};
    tab.customObject = false;
    tab.name = "Tab Name";
    tab.objectName = "";
    Function.transformCustomTab(tab);
    expect(tab.objectName).toBe("");
  });
});
