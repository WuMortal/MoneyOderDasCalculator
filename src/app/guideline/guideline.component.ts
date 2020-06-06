import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css']
})
export class GuidelineComponent implements OnInit {

  guidelineImageSrcList = [
    't6zdsg.jpg',
    't6zaQS.jpg',
    't6zNz8.jpg',
    't6zDds.jpg',
    't6zwLQ.jpg',
    't6zBZj.jpg',
    't6zron.jpg'
  ];
  sayingMaxCount = 1111;
  saying = '正在生成...';
  currentGuidelineImageSrc: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    const week = new Date().getDay();
    this.currentGuidelineImageSrc = `https://s1.ax1x.com/2020/06/06/${this.guidelineImageSrcList[week]}`;

    this.httpClient.get<Array<string>>('/assets/saying.json').subscribe(res => {
      const index = Math.ceil(Math.random() * this.sayingMaxCount);
      this.saying = res[index];
      console.log(index);
    });
  }

}
