import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../my.validators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',
        [
          Validators.email,
          Validators.required,
          MyValidators.restrictedEmails
        ],
        [
          MyValidators.uniqueEmail
        ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Kiev', Validators.required)
      }),
      skills: new FormArray([])
    });
  }


  submit() {
    console.log(`form submitted`, this.form);
    const formData = {...this.form.value};
    console.log(formData);

    this.form.reset();
  }

  setCapital() {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kiev',
      by: 'Minsk'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    console.log(city);
    this.form.patchValue({address: {city: city}});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray> this.form.get('skills')).push(control);
  }
}
