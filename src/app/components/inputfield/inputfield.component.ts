import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from './ValueAccessorBase';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css'],

  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: InputfieldComponent, multi: true}
  ]
})
export class InputfieldComponent extends ValueAccessorBase<string> {

  @Input() type: string;
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string = " ";

}
