import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css']
})
export class GuidelineComponent implements OnInit {

  sayingMaxCount = 1111;
  saying: string;
  guidelineImageSrc: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    const week = new Date().getDay();
    this.guidelineImageSrc = `/assets/guidelineImages/${week}.jpg`;

    this.httpClient.get<Array<string>>('/assets/saying.json').subscribe(res => {
      const index = Math.ceil(Math.random() * this.sayingMaxCount);
      this.saying = res[index];
      console.log(index);
    });
  }

}
