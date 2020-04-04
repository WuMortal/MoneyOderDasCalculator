import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  increase = 0;
  form = new FormGroup({
    holdingShare: new FormControl(''),
    holdingCost: new FormControl(''),
    latestNetWorth: new FormControl(''),
    expectCost: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data) {
    if (data.expectCost <= data.latestNetWorth) {
      alert('期望的成本必须小于当前最新净值。');
      return;
    }
    const amount = data.holdingShare * data.holdingCost;
    // tslint:disable-next-line: max-line-length
    this.increase = -(amount * data.latestNetWorth * data.expectCost - amount * data.holdingCost * data.latestNetWorth) / (data.holdingCost * data.expectCost - data.holdingCost * data.latestNetWorth);
  }

  onReset() {
    this.form.reset();
    this.increase = 0;
  }

}
