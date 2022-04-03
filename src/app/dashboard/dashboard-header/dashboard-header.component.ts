import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service'

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  public sendData = {
    a: 1,
    b: 2,
    c: 0
  }
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.data.sendData = this.sendData
  }
  divClick() {
    this.dataService.data.iterationName = '22222222222';
    this.dataService.data.obj = {
      age: 22
    };
    this.sendData.c = 11
  }

}
