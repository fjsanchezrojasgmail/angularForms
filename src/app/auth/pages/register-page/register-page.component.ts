import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from 'src/app/shared/validators/validators';
import * as regularValidators from '../../../shared/validators/validators-patterns';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group ({
    name: ['',[Validators.required, Validators.pattern(regularValidators.firstNameAndLastnamePattern) ]],
    email: ['',[Validators.required, Validators.pattern(regularValidators.emailPattern) ]],
    username: ['',[ Validators.required, customValidators.cantBeStrider ]],
    password: ['',[Validators.required]],
    password2: ['',[Validators.required, Validators.minLength(6)]],
    // favoriteGames: this.fb.array([
    //   ['Metal Gear', Validators.required],
    //   ['Death Stranding', Validators.required],
    // ])
  })

  public newFavorite: FormControl = new FormControl('',Validators.required);

  constructor( private fb: FormBuilder){

  }

  isValidField( field: string ): boolean | null{

    return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;

  }

  onSubmit():void{

    if ( this.myForm.invalid ) {

        this.myForm.markAllAsTouched();

        return;

    }

      console.log(this.myForm.value);

      this.myForm.reset();

  }

}
