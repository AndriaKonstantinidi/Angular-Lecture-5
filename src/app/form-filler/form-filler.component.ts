import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.css']
})
export class FormFillerComponent {
  public carObj:Car = new Car();
  onBtnClick(){
    console.log(this.carObj)
  }
}
