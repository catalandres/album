import * as Function from '../src/functions/index';

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

// 

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

describe("Name function getSecondHalfOfBasenameSplitByPeriod", () => {
 
  test("returns second part without extension when fileName has two parts", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.Something.object-meta.xml";
    expect(Function.getSecondHalfOfBasenameSplitByPeriod(record)).toBe(
      "Something"
    );
  });

  test("returns second part without extension when fileName has three parts", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.Something.SomethingElse.object-meta.xml";
    expect(Function.getSecondHalfOfBasenameSplitByPeriod(record)).toBe(
      "Something"
    );
  });

  test("returns an empty string without extension when fileName has one part", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.object-meta.xml";
    expect(Function.getSecondHalfOfBasenameSplitByPeriod(record)).toBe(
      ""
    );
  });

  test("returns second part when fileName is not a metadata file name", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.Something.xml";
    expect(Function.getSecondHalfOfBasenameSplitByPeriod(record)).toBe(
      "Something"
    );
  });

  test("returns an empty string when fileName does not have a period", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account-xml";
    expect(Function.getSecondHalfOfBasenameSplitByPeriod(record)).toBe(
      ""
    );
  });

  test("returns an empty string when fileName is undefined", () => {
    const record: Record<string, unknown> = {};
    record.fileName = undefined;
    expect(Function.getSecondHalfOfBasenameSplitByPeriod(record)).toBe("");
  });

  test("returns an empty string when fileName is null", () => {
    const record: Record<string, unknown> = {};
    record.fileName = null;
    expect(Function.getSecondHalfOfBasenameSplitByPeriod(record)).toBe("");
  });

  test("returns an empty string when fileName is empty", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "";
    expect(Function.getSecondHalfOfBasenameSplitByPeriod(record)).toBe("");
  });
});

describe("Name function getFirstHalfOfBasenameSplitByDash", () => {

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

describe("Name function getSecondHalfOfBasenameSplitByDash", () => {

  test("returns second part without extension when fileName has two parts", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account-Something.object-meta.xml";
    expect(Function.getSecondHalfOfBasenameSplitByDash(record)).toBe(
      "Something"
    );
  });

  test("returns second part without extension when fileName has three parts", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account-Something-SomethingElse.object-meta.xml";
    expect(Function.getSecondHalfOfBasenameSplitByDash(record)).toBe(
      "Something"
    );
  });

  test("returns an empty string without extension when fileName has one part", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.object-meta.xml";
    expect(Function.getSecondHalfOfBasenameSplitByDash(record)).toBe("");
  });

  test("returns second part when fileName is not a metadata file name", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account-Something.xml";
    expect(Function.getSecondHalfOfBasenameSplitByDash(record)).toBe(
      "Something.xml"
    );
  });

  test("returns an empty string when fileName does not have a dash", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "Account.xml";
    expect(Function.getSecondHalfOfBasenameSplitByDash(record)).toBe("");
  });

  test("returns an empty string when fileName is undefined", () => {
    const record: Record<string, unknown> = {};
    record.fileName = undefined;
    expect(Function.getSecondHalfOfBasenameSplitByDash(record)).toBe("");
  });

  test("returns an empty string when fileName is null", () => {
    const record: Record<string, unknown> = {};
    record.fileName = null;
    expect(Function.getSecondHalfOfBasenameSplitByDash(record)).toBe("");
  });

  test("returns an empty string when fileName is empty", () => {
    const record: Record<string, unknown> = {};
    record.fileName = "";
    expect(Function.getSecondHalfOfBasenameSplitByDash(record)).toBe("");
  });
});


