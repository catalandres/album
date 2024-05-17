import * as Function from "../src/functions/index";

describe("Transform function transformCustomObject", () => {

  test('identifies custom objects', () => {
    const object: Record<string, unknown> = {};
    object.name = 'CustomObject__c';
    Function.transformCustomObject(object);
    expect(object.type).toBe("Custom Object");
  });

  test("identifies custom metadata types", () => {
    const object: Record<string, unknown> = {};
    object.name = "CustomMetadataType__mdt";
    Function.transformCustomObject(object);
    expect(object.type).toBe("Custom Metadata Type");
  });

  test("identifies platform events", () => {
    const object: Record<string, unknown> = {};
    object.name = "PlatformEvent__e";
    Function.transformCustomObject(object);
    expect(object.type).toBe("Platform Event");
  });

  test("identifies external objects", () => {
    const object: Record<string, unknown> = {};
    object.name = "ExternalObject__x";
    Function.transformCustomObject(object);
    expect(object.type).toBe("External Object");
  });

  test("identifies standard objects", () => {
    const object: Record<string, unknown> = {};
    object.name = "StandardObject";
    Function.transformCustomObject(object);
    expect(object.type).toBe("Standard Object");
  });

  test("does not identified random suffixes", () => {
    const object: Record<string, unknown> = {};
    object.name = "ThisObjectType__DoesNotExist";
    Function.transformCustomObject(object);
    expect(object.type).toBe("");
  });
});