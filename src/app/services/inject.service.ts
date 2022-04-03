import { Injectable } from '@angular/core';
import { Hero } from '../../assets/globalSet';

@Injectable({
  providedIn: 'root'
})
export class InjectService {

  constructor() { }
  getHero() {
    return new Hero()
  }
}
