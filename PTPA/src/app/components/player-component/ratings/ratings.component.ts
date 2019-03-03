import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input() rating : number;
  @Output() ratingToParent : EventEmitter<string> = new EventEmitter();
  rating_arr : any = [];
  constructor() { }

  ngOnInit() {
    this.rating_arr = Array(Math.round(this.rating)).fill(Math.round(this.rating));
  }

  sendRatingtoParent(){
    this.ratingToParent.emit('Rating Value  = '+ this.rating);
  }
}
