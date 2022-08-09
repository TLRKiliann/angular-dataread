import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-doc',
  templateUrl: './secondary-doc.component.html',
  styleUrls: ['./secondary-doc.component.scss']
})
export class SecondaryDocComponent implements OnInit {
  teststr: string;
  strPrimary: number;

  constructor() { 
    this.teststr = "Hello";
    this.strPrimary = 44;
  }

  ngOnInit(): void {
    this.teststr = "Hello";
    this.strPrimary = 44;
  }
}
