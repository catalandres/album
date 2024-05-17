import * as Function from '../../../src/functions/index';

describe("Name function getBasenameWithoutExtension", () => {

  test("returns fileName without extension when fileName is well formed", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.object-meta.xml";
    expect(Function.getBasenameWithoutExtension(record)).toBe("Account");
  });

  test("returns fileName when fileName is not well formed", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.xml";
    expect(Function.getBasenameWithoutExtension(record)).toBe("Account.xml");
  });

  test("returns an empty string when fileName is undefined", () => {
    const record: Record<string, unknown> = {};
    record.fileName = undefined;
    expect(Function.getBasenameWithoutExtension(record)).toBe("");
  });

  test("returns an empty string when fileName is null", () => {
    const record: Record<string, unknown> = {};
    record.fileName = null;
    expect(Function.getBasenameWithoutExtension(record)).toBe("");
  });

  test("returns an empty string when fileName is empty", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "";
    expect(Function.getBasenameWithoutExtension(record)).toBe("");
  });
});