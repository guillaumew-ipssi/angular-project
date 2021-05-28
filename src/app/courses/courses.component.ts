import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cours } from '../model/interface/cours';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Output()
  newNb = new EventEmitter<number>();

  arrayCours!: Cours[];

  nb_etuds!: number;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.arrayCours = this.coursesService.getCourses();
    // console.log(this.arrayCours);
    this.getNbEtuds();
  }

  getNbEtuds() : void {
    let total_etuds = 0;
    for (let i = 0; i < this.arrayCours.length; i++) {
      total_etuds += this.arrayCours[i].nb_etud;      
    }
    this.nb_etuds = total_etuds;
  }

  onNewNb(nb: number){
    this.newNb.emit(nb);
  }
}
