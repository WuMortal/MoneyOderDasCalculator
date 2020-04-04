import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-oder-das-calculator',
  templateUrl: './money-oder-das-calculator.component.html',
  styleUrls: ['./money-oder-das-calculator.component.css']
})
export class MoneyOderDasCalculatorComponent implements OnInit {

  key = 'MONEY_LIST';
  lockPasswordKey = 'LPK';
  money: number;
  list: any;
  isLock = true;

  constructor() {
    const listStr = localStorage.getItem(this.key);
    if (!listStr) {
      return;
    }

    this.list = JSON.parse(listStr);
    this.list.reverse();
  }
  ngOnInit(): void {

  }

  save(money: number) {
    if (!money || money <= 0) {
      alert('输入的金额必须大于 0 元。');
      return;
    }

    const setResult = this.setPassword();
    if (!setResult) {
      alert('保存失败，请设置密码。');
      return;
    }

    let data = [];
    const list = localStorage.getItem(this.key);
    if (!list) {
      data = [{
        amount: money,
        dateTime: (new Date()).toLocaleString()
      }];

    } else {
      data = JSON.parse(list);
      data.push({
        amount: money,
        dateTime: (new Date()).toLocaleString()
      });
    }

    localStorage.setItem(this.key, JSON.stringify(data));

    alert('保存成功。');
    location.reload();
  }

  load(amount: number) {
    this.money = amount;
  }

  showRecord() {
    this.isLock = !this.checkPassword();
  }

  cleanData() {
    const checkResult = this.checkPassword();
    console.log(checkResult);
    if (!checkResult) {
      return false;
    }

    const con = confirm('确认要删除历史记录吗（删除后数据将不可找回）？');
    if (con) {
      localStorage.removeItem(this.key);
      location.reload();
    }

  }

  private setPassword() {
    const password = localStorage.getItem(this.lockPasswordKey);
    if (!password) {
      const inputPas = prompt('请设置密码（请牢记密码，忘记将无法查看数据）：');
      if (!inputPas) {
        return false;
      }

      localStorage.setItem(this.lockPasswordKey, inputPas);

      return true;
    }

    return true;
  }

  private checkPassword() {
    const password = localStorage.getItem(this.lockPasswordKey);

    const inputPas = prompt('该操作需要您的密码，请输入：');
    if (!password || password !== inputPas) {
      alert('输入的密码错误。');
      return false;
    }

    return true;
  }
}
