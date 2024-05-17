import * as Function from '../../../src/functions/index';

describe("Name function getNameOfSecondToLastFolderLevel", () => {

  test('returns correct value when fileName is well formed', () => {
      const record: Record<string, unknown> = {};
      record.fileName =
        "/path/to/sfdx/project/force-app/main/default/objects/Account/Account.object-meta.xml";
      expect(Function.getNameOfSecondToLastFolderLevel(record)).toBe("objects");
  });

  test("returns an empty string when fileName is too short", () => {
    const record: Record<string, unknown> = {};
    record.fileName =
      "Account/Account.object-meta.xml";
    expect(Function.getNameOfSecondToLastFolderLevel(record)).toBe("");
  });

  test("returns an empty string when fileName is undefined", () => {
    const record: Record<string, unknown> = {};
    record.fileName = undefined;
    expect(Function.getNameOfSecondToLastFolderLevel(record)).toBe("");
  });

  test("returns an empty string when fileName is null", () => {
    const record: Record<string, unknown> = {};
    record.fileName = null;
    expect(Function.getNameOfSecondToLastFolderLevel(record)).toBe("");
  });

  test("returns an empty string when fileName is empty", () => {
    const record: Record<string, unknown> = {};
    record.fileName = '';
    expect(Function.getNameOfSecondToLastFolderLevel(record)).toBe("");
  });
});