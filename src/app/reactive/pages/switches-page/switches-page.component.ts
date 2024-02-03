import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css']
})
export class SwitchesPageComponent implements OnInit{

  public person = {
    gender: 'M',
    wantNotifications: true,
  }


  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  })



  onSave(){
    if( this.myForm.invalid )
      this.myForm.markAllAsTouched();

      const { termsAndConditions, ...newPerson } = this.myForm.value

      this.person = newPerson;
      console.log(this.myForm.value);
      console.log(this.person);

      return;
  }

  isValidField( field: string ): boolean | null{

    return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;

  }

}
