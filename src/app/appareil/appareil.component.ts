import { Component, Input, OnInit } from '@angular/core';
import { Appareil } from '../model/interface/appareil';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()
  appareil!: Appareil;

  constructor() {}

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareil.appareilStatus;
  }

  getColor(): string {
    if(this.appareil.appareilStatus == "allumé"){
      return "green";
    } 
    else {
      return "red";
    }; 
  }

  activate(): void {
    this.appareil.appareilStatus = "allumé";
  }

  deactivate(): void {
    this.appareil.appareilStatus = "éteint";
  }

}
