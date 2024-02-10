import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from 'src/app/shared/validators/validators';
//import * as regularValidators from '../../../shared/validators/validators-patterns';
//import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group ({
    name: ['',[Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ]],
    //email: ['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern) ],[ new EmailValidatorService()]],
    email: ['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern) ],[ this.emailValidatorService ]],
    username: ['',[ Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],
    // favoriteGames: this.fb.array([
    //   ['Metal Gear', Validators.required],
    //   ['Death Stranding', Validators.required],
    // ])
  },
  {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
    ]
  })

  public newFavorite: FormControl = new FormControl('',Validators.required);

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService,
    ){

  }

  isValidField( field: string ){

    return this.validatorsService.isValidField(this.myForm, field)

  }

  onSubmit(){

        this.myForm.markAllAsTouched();
        console.log(this.myForm);


  }

}
