import { Component, OnInit } from '@angular/core';
import { PlayerInfoService } from '../../Services/RetrievePlayerInfo/player-info.service'

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css'],
  providers : [PlayerInfoService]
})
export class PlayerComponentComponent implements OnInit {

  showHideDetails : boolean = false; 
  constructor(private _playerInfoService : PlayerInfoService) { }

  playerDetails_week1 : any = [];
  filterBy : string ;

  ngOnInit() {
    this._playerInfoService.getplayerInfo().subscribe((data) => {
      this.playerDetails_week1 = data;
    });

  }

  showDetails(i){
    this.showHideDetails = !this.showHideDetails;
  }

  ratingFnParent(data:string){
    console.log(data);
  }
}
