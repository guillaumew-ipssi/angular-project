import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return [
      {titre: 'Angular', nb_etud: 6},
      {titre: 'Typescript', nb_etud: 9},
      {titre: 'Firebase', nb_etud: 3}
    ];
  }
}
