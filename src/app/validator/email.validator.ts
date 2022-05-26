import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class RegexConstantsEmail {
  public static EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
}

export function emailValidator(reg: RegexConstantsEmail): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !control.value.toString().match(reg)) {
      return { email: true };
    }
    return null;
  };
}