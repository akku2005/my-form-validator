// validator.ts
import { isRequired, isEmail, minLength } from "./validators";
import { asyncEmailCheck } from "./asyncValidators";

type SyncValidator = (value: any) => boolean;
type AsyncValidator = (value: any) => Promise<boolean>;

interface Validators {
  [key: string]: SyncValidator | AsyncValidator;
}

export class FormValidator {
  private validators: Validators;

  constructor(validators: Validators) {
    this.validators = validators;
  }

  public validate(
    value: any,
    validatorName: string
  ): boolean | Promise<boolean> {
    const validator = this.validators[validatorName];
    if (typeof validator === "function") {
      return validator(value);
    }
    throw new Error(`Validator ${validatorName} not found`);
  }

  public async validateAll(values: {
    [key: string]: any;
  }): Promise<{ [key: string]: boolean }> {
    const results: { [key: string]: boolean } = {};
    for (const [key, value] of Object.entries(values)) {
      results[key] = await this.validate(value, key);
    }
    return results;
  }
}

// Example usage
const validator = new FormValidator({
  email: isEmail,
  name: minLength(3),
  asyncEmail: asyncEmailCheck,
});

(async () => {
  console.log(
    await validator.validateAll({
      email: "test@example.com",
      name: "John",
      asyncEmail: "test@domain.com",
    })
  );
})();
