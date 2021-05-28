import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Appareil } from '../model/interface/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  date = new Date();
  
  private appareils: Appareil[] = [

    {id: 1, appareilName: "Machine à laver", appareilStatus: "éteint", created_at: this.date},
    
    {id: 2, appareilName: "Frigo", appareilStatus: "allumé", created_at: this.date},
    
    {id: 3, appareilName: "Ordinateur", appareilStatus: "éteint", created_at: this.date}
    
    ]

  appareilsSubject = new Subject<any[]>();
    
  constructor() { }

  switchOnAll() : void {
    for (let i = 0; i < this.appareils.length; i++) {
      this.appareils[i].appareilStatus = "allumé"
    }
    this.emitAppareilSubject();
  }

  switchOffAll() : void {
    for (let i = 0; i < this.appareils.length; i++) {
      this.appareils[i].appareilStatus = "éteint"
      this.emitAppareilSubject();
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].appareilStatus = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].appareilStatus = 'éteint';
    this.emitAppareilSubject();
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject(){
    this.appareilsSubject.next(this.appareils.slice());
  }
}
