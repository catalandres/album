import * as Function from "../../../src/functions/index";

describe("Function getMetadataExtension", () => {
    
  test("captures a well formed extension", () => {
  const fileName =
    "force-app/main/default/objects/Account/Account.something-meta.xml";
  expect(Function.getMetadataExtension(fileName)).toEqual(
    ".something-meta.xml"
  );
  });

  test("does not capture a not well formed extension", () => {
    const fileName =
    "force-app/main/default/objects/Account/Account-meta.xml";
    expect(Function.getMetadataExtension(fileName)).toEqual(
    ""
    );
  });
});
