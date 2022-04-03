import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service'

@Component({
  selector: 'app-dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.css']
})
export class DashboardFooterComponent implements OnInit {
  public colorStyle = 'colorStyle1'
  public blodStyle = 'blodStyle1'
  public classBlur = true;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.dataService)
    console.log(this.dataService.data.sendData)
  }

  getClass(className: string, className2: string) {
    let obj: any = {}
    obj[className] = this.dataService.boolean
    obj[className2] = this.dataService.data.boolean
    return obj
  }
  changeClass() {
    this.dataService.boolean = !this.dataService.boolean
    this.dataService.data.boolean = !this.dataService.data.boolean
  }
}
