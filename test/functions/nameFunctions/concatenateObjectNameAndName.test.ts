import * as Function from '../../../src/functions/index';

describe('Name function concatenateObjectNameAndName', () => {

    test('concatenates objectName and name when both are present', () => {
        const record: Record<string, unknown> = {};
        record.objectName = 'Account';
        record.name = 'Something';
        expect(Function.concatenateObjectNameAndName(record)).toBe('Account.Something');
    });

    test("returns objectName when name is undefined", () => {
      const record: Record<string, unknown> = {};
      record.objectName = "Account";
      record.name = undefined;
      expect(Function.concatenateObjectNameAndName(record)).toBe("Account");
    });

    test("returns objectName when name is null", () => {
      const record: Record<string, unknown> = {};
      record.objectName = "Account";
      record.name = null;
      expect(Function.concatenateObjectNameAndName(record)).toBe("Account");
    });

    test("returns objectName when name is empty", () => {
      const record: Record<string, unknown> = {};
      record.objectName = "Account";
      record.name = '';
      expect(Function.concatenateObjectNameAndName(record)).toBe("Account");
    });

    test("returns name when objectName is undefined", () => {
      const record: Record<string, unknown> = {};
      record.objectName = undefined;
      record.name = "Something";
      expect(Function.concatenateObjectNameAndName(record)).toBe("Something");
    });

    test("returns name when objectName is null", () => {
      const record: Record<string, unknown> = {};
      record.objectName = null;
      record.name = "Something";
      expect(Function.concatenateObjectNameAndName(record)).toBe("Something");
    });

    test("returns name when objectName is empty", () => {
      const record: Record<string, unknown> = {};
      record.objectName = '';
      record.name = "Something";
      expect(Function.concatenateObjectNameAndName(record)).toBe("Something");
    });

    test("returns an empty string if both objectName and name are absent", () => {
        const record: Record<string, unknown> = {};
        expect(Function.concatenateObjectNameAndName(record)).toBe('');
    });
})