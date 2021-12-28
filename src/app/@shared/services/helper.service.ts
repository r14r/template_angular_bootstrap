import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  module: string = '';

  constructor(
    @Inject(String) module: string,
    @Inject(String) line: string = ''
  ) {
    this.module = module;
    this.log('constructor', line);
  }

  log(func: string, line = '') {
    console.log(
      '[' + this.module.padEnd(20) + '] ' + func.padEnd(20) + '|' + line
    );
  }
}
