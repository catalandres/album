import * as Function from '../../../src/functions/index';

describe("Name function getFirstHalfOfBasenameSplitByPeriod", () => {

  test("returns first part without extension when fileName has two parts", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.Something.object-meta.xml";
    expect(Function.getFirstHalfOfBasenameSplitByPeriod(record)).toBe(
      "Account"
    );
  });

  test("returns first part without extension when fileName has three parts", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.Something.SomethingElse.object-meta.xml";
    expect(Function.getFirstHalfOfBasenameSplitByPeriod(record)).toBe(
      "Account"
    );
  });

  test("returns first part without extension when fileName has one part", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.object-meta.xml";
    expect(Function.getFirstHalfOfBasenameSplitByPeriod(record)).toBe(
      "Account"
    );
  });

  test("returns first part when fileName is not a metadata file name", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.Something.xml";
    expect(Function.getFirstHalfOfBasenameSplitByPeriod(record)).toBe(
      "Account"
    );
  });

  test("returns fileName when fileName does not have a period", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account-xml";
    expect(Function.getFirstHalfOfBasenameSplitByPeriod(record)).toBe(
      "Account-xml"
    );
  });

  test("returns an empty string when fileName is undefined", () => {
    const record: Record<string, unknown> = {};
    record.fileName = undefined;
    expect(Function.getFirstHalfOfBasenameSplitByPeriod(record)).toBe("");
  });

  test("returns an empty string when fileName is null", () => {
    const record: Record<string, unknown> = {};
    record.fileName = null;
    expect(Function.getFirstHalfOfBasenameSplitByPeriod(record)).toBe("");
  });

  test("returns an empty string when fileName is empty", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "";
    expect(Function.getFirstHalfOfBasenameSplitByPeriod(record)).toBe("");
  });
});
