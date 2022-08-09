import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-doc',
  templateUrl: './primary-doc.component.html',
  styleUrls: ['./primary-doc.component.scss']
})
export class PrimaryDocComponent implements OnInit {
  strPrimary: number;

  constructor() {
    this.strPrimary = 44;
  }

  ngOnInit(): void {
    this.strPrimary = 44;
  }
}
