import * as Function from '../../../src/functions/index';

describe("Name function getFullNameValue", () => {

  test("returns fullName when fullName is present", () => {
    const record: Record<string, unknown> = {};
    record.fullName = "Something";
    expect(Function.getFullNameValue(record)).toBe("Something");
  });

  test("returns an empty string fullName is undefined", () => {
    const record: Record<string, unknown> = {};
    record.fullName = undefined;
    expect(Function.getFullNameValue(record)).toBe('');
  });

  test("returns an empty string fullName is null", () => {
    const record: Record<string, unknown> = {};
    record.fullName = null;
    expect(Function.getFullNameValue(record)).toBe('');
  });

  test("returns an empty string fullName is empty", () => {
    const record: Record<string, unknown> = {};
    record.fullName = '';
    expect(Function.getFullNameValue(record)).toBe('');
  });
});