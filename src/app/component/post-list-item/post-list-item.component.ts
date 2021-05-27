import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Post } from '../../model/interface/post';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, AfterViewInit {

  readonly WIDTH = 600;
  readonly HEIGHT = 300;


  @Input()
  post!: Post;

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    var x = 0;
    setInterval(() => {
      this.ctx.clearRect(0, 0, 200, 200);
      this.ctx.clearRect(0, 0, 200, 200);
      this.drawCircle(x % 200);
      this.drawBorder(x % 200);
      x++;
    }, this.random(0,25));


  }

  ngAfterViewInit() {
  }

  random(min: number, max: number): number {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  drawCircle(x: any): void {
    this.ctx.beginPath();
    this.ctx.arc(x-10, 100, 10, 0, 2 * Math.PI);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
  }

  drawBorder(x: any): void {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(200, 0);
    this.ctx.lineTo(200, 200);
    this.ctx.lineTo(0, 200);
    this.ctx.lineTo(0, 0);
    this.ctx.stroke();
  }

  loveIt():void {
    this.post.loveIts+=1;
  }

  hateIt():void {
    this.post.loveIts-=1;
  }

  color(): string {
    if (this.post.loveIts < 0 ) return 'red';
    else if (this.post.loveIts > 0 ) return 'green';
    return 'grey';
  }

}
