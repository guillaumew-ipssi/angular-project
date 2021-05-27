import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Appareil } from '../model/interface/appareil';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils!: Appareil[];

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
    // console.log(this.appareils);
  }

  switchOnAll() : void {
    this.appareilService.switchOnAll();
  }

  switchOffAll() : void {
    let response = confirm("Etes-vous sûr de vouloir éteindre tous vos appareils ?");
    if(response){
      this.appareilService.switchOffAll();
    }
  }

}
