// validator.test.ts
import { FormValidator } from "../src/validator";
import { isEmail, minLength } from "../src/validators";
import { asyncEmailCheck } from "../src/asyncValidators";

test("should validate email correctly", () => {
  const validator = new FormValidator({ email: isEmail });
  expect(validator.validate("test@example.com", "email")).toBe(true);
  expect(validator.validate("invalid-email", "email")).toBe(false);
});

test("should validate name length correctly", () => {
  const validator = new FormValidator({ name: minLength(3) });
  expect(validator.validate("John", "name")).toBe(true);
  expect(validator.validate("Jo", "name")).toBe(false);
});

test("should validate async email check", async () => {
  const validator = new FormValidator({ asyncEmail: asyncEmailCheck });
  await expect(
    validator.validate("test@domain.com", "asyncEmail")
  ).resolves.toBe(true);
  await expect(validator.validate("invalid-email", "asyncEmail")).resolves.toBe(
    false
  );
});
