import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _out: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  sendData() {
    this.out.emit()
  }

  get out(): EventEmitter<void> {
    return this._out
  }

}
