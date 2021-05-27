import { Injectable } from '@angular/core';
import { Appareil } from '../model/interface/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  date = new Date();
  
  appareils: Appareil[] = [

    {id: 1, appareilName: "Machine à laver", appareilStatus: "éteint", created_at: this.date},
    
    {id: 2, appareilName: "Frigo", appareilStatus: "allumé", created_at: this.date},
    
    {id: 3, appareilName: "Ordinateur", appareilStatus: "éteint", created_at: this.date}
    
    ]
    
  constructor() { }

  switchOnAll() : void {
    for (let i = 0; i < this.appareils.length; i++) {
      this.appareils[i].appareilStatus = "allumé"
    }
  }

  switchOffAll() : void {
    for (let i = 0; i < this.appareils.length; i++) {
      this.appareils[i].appareilStatus = "éteint"
    }
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
}
