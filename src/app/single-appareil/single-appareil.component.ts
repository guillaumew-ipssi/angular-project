import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name!: string |undefined;

  status!: string |undefined;

  constructor(private appareilService: AppareilService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const ID = this.activatedRoute.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+ID)?.appareilName;
    this.status = this.appareilService.getAppareilById(+ID)?.appareilStatus;
  }

  getColor(): string {
    if(this.status == "allumé"){
      return "green";
    } 
    else {
      return "red";
    }; 
  }

}
