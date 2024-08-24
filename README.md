# My Form Validator

A versatile form validation package with support for both synchronous and asynchronous validation. Easily integrate predefined validators or create your own custom validators.

## Features

- **Predefined Validators**: Includes commonly used validators like email format and minimum length.
- **Custom Validators**: Easily add your own custom validation logic.
- **Synchronous and Asynchronous Validation**: Supports both immediate and async checks.

## Installation

To install the package, use npm:

```bash
npm install my-form-validator

```

Or with Yarn:

```
yarn add my-form-validator

```

### Usage

Importing the Package

```
import { FormValidator } from 'my-form-validator';
import { isEmail, minLength } from 'my-form-validator/validators';
import { asyncEmailCheck } from 'my-form-validator/asyncValidators';
```

### Example

Here's how you can use the package to perform validations:

```
// Create an instance of FormValidator with predefined and custom validators
const validator = new FormValidator({
  email: isEmail,                // Validate email format
  name: minLength(3),            // Validate name length of at least 3 characters
  asyncEmail: asyncEmailCheck   // Asynchronously check email validity
});

// Synchronous validation
const emailValid = validator.validate('test@example.com', 'email');
console.log('Email valid:', emailValid); // Output: true or false

// Asynchronous validation
validator.validate('test@domain.com', 'asyncEmail').then(isValid => {
  console.log('Async email valid:', isValid); // Output: true or false
});

// Validate multiple fields at once
validator.validateAll({
  email: 'test@example.com',
  name: 'John',
  asyncEmail: 'test@domain.com'
}).then(results => {
  console.log('Validation results:', results);
  // Output: { email: true, name: true, asyncEmail: true }
});
```

### API

`FormValidator`

- Constructor

```
new FormValidator(validators: Validators)

```

- `validators`: An object where keys are validator names and values are validator functions.
- Methods :
  `validate(value: any, validatorName: string): boolean | Promise<boolean>`
  - Validate a single field against a specified validator.
  - Returns a boolean or a promise that resolves to a boolean.
- `validateAll(values: { [key: string]: any }): Promise<{ [key: string]: boolean }>`
  - Validate multiple fields at once.
  - Returns a promise that resolves to an object with validation results for each field.

### Validators :

- `isEmail(value: string): boolean`
  - Checks if the value is a valid email address.
- `minLength(min: number)(value: string): boolean`
  - Checks if the value has at least the specified minimum length.

### Async Validators :

- `asyncEmailCheck(value: string): Promise<boolean> `
  - Example of an asynchronous validator that checks if the email exists or meets certain criteria.

### Contact

For any questions or feedback, please reach out to asakashsahu20@gmail.com.
