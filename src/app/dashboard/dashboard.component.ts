import { Component, OnInit } from '@angular/core';
import { InjectService } from '../services/inject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [InjectService]
})
export class DashboardComponent implements OnInit {
  public hero: any;

  public test: any = {
    aaa: '1111111'
  }
  constructor(private InjectServ: InjectService) { }

  ngOnInit(): void {
    console.log(this.InjectServ)
    this.hero = this.InjectServ.getHero();
    console.log(this.hero)
    console.log(this.hero.name)
    console.log(this.hero.age)
    console.log(this.hero.getName())
  }

}
