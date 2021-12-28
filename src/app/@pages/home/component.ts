import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/@shared/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class HomePageComponent implements OnInit {
  helper: HelperService;

  constructor() {
    this.helper = new HelperService('HomePageComponent');
  }

  ngOnInit(): void {}
}
