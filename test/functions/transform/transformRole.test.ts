import * as Function from "../../../src/functions/index";

describe("Function transformRole", () => {

  test("performs the transformation", () => {
    const role: Record<string, unknown> = {};
    role.name = "Some User Role";
    role.fullName = "SomeUserRole";
    Function.transformRole(role);
    expect(role.label).toBe("Some User Role");
    expect(role.name).toBe("SomeUserRole");
  });
});
