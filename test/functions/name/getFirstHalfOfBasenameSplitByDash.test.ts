import * as Function from '../../../src/functions/index';

describe("Function getFirstHalfOfBasenameSplitByDash", () => {

  test("returns first part without extension when fileName has two parts", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account-Something.object-meta.xml";
    expect(Function.getFirstHalfOfBasenameSplitByDash(record)).toBe("Account");
  });

  test("returns first part without extension when fileName has three parts", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account-Something-SomethingElse.object-meta.xml";
    expect(Function.getFirstHalfOfBasenameSplitByDash(record)).toBe("Account");
  });

  test("returns first part without extension when fileName has one part", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.object-meta.xml";
    expect(Function.getFirstHalfOfBasenameSplitByDash(record)).toBe("Account");
  });

  test("returns first part when fileName is not a metadata file name", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account-Something.xml";
    expect(Function.getFirstHalfOfBasenameSplitByDash(record)).toBe("Account");
  });

  test("returns fileName when fileName does not have a dash", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.xml";
    expect(Function.getFirstHalfOfBasenameSplitByDash(record)).toBe(
      "Account.xml"
    );
  });

  test("returns an empty string when fileName is undefined", () => {
    const record: Record<string, unknown> = {};
    record.fileName = undefined;
    expect(Function.getFirstHalfOfBasenameSplitByDash(record)).toBe("");
  });

  test("returns an empty string when fileName is null", () => {
    const record: Record<string, unknown> = {};
    record.fileName = null;
    expect(Function.getFirstHalfOfBasenameSplitByDash(record)).toBe("");
  });

  test("returns an empty string when fileName is empty", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "";
    expect(Function.getFirstHalfOfBasenameSplitByDash(record)).toBe("");
  });
});
