import { Component, Input, ViewChild, Optional, Inject } from '@angular/core';
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS, } from '@angular/forms';
import { ValueAccessorBase } from './value-accessor';
import { ID } from '../../utils/id';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: InputfieldComponent, 
      multi: true
    }
  ]
})
export class InputfieldComponent extends ValueAccessorBase<string> {

  @Input() type: string;
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string = " ";
  id = ID();
}
