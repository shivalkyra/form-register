import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class RegexConstants {
  public static PASSWORD = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
}

export function passwordValidator(reg: RegexConstants): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !control.value.toString().match(reg)) {
      return { decimal: true };
    }
    return null;
  };
}