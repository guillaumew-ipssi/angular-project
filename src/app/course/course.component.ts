import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cours } from '../model/interface/cours';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input()
  course!: Cours;

  @Output()
  newNb = new EventEmitter<number>();

  lastNb!: number;

  constructor() {}

  ngOnInit(): void {
    this.lastNb = this.course.nb_etud;
  }

  updateNb(nb: number){
    this.course.nb_etud = nb;
    console.log(this.course);
  }
}
