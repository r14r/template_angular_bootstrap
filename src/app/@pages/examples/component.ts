import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/@shared/services/helper.service';

@Component({
  selector: 'app-examples',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ExamplesPageComponent implements OnInit {
  helper: HelperService;

  constructor() {
    this.helper = new HelperService('ExamplesPageComponent');
  }

  ngOnInit(): void {}
}
