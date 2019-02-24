import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor() { }

  getplayerInfo(){
    return [
      {
          "playerId": 1,
          "playerNombres": "ANA GABRIELA AGUIRRE",
          "playerConducto": "2",
          "playerAsistencia": "1",
          "playerRendimientoFisico": "5",
          "playerAdecuado": "5",
          "playerRendimientoAcademico": "5",
          "playerHorasAMentorear": "5",
          "playerAsititoLaLiga": "1"
      },
      {
         "playerId": 2,
          "playerNombres": "BARBARA YOC",
          "playerConducto": "2",
          "playerAsistencia": "1",
          "playerRendimientoFisico": "5",
          "playerAdecuado": "5",
          "playerRendimientoAcademico": "5",
          "playerHorasAMentorear": "5",
          "playerAsititoLaLiga": "1"
      },
      {
         "playerId": 3,
          "playerNombres": "JENNIFER ALONZO",
          "playerConducto": "2",
          "playerAsistencia": "6",
          "playerRendimientoFisico": "5",
          "playerAdecuado": "2",
          "playerRendimientoAcademico": "5",
          "playerHorasAMentorear": "5",
          "playerAsititoLaLiga": "1"
      },
      {
         "playerId": 4,
          "playerNombres": "ALICIA CHIVALÁN",
          "playerConducto": "2",
          "playerAsistencia": "6",
          "playerRendimientoFisico": "5",
          "playerAdecuado": "5",
          "playerRendimientoAcademico": "5",
          "playerHorasAMentorear": "8",
          "playerAsititoLaLiga": "1"
      },
      {
          "playerId": 5,
          "playerNombres": "ALMA XOT",
          "playerConducto": "6",
          "playerAsistencia": "1",
          "playerRendimientoFisico": "5",
          "playerAdecuado": "3",
          "playerRendimientoAcademico": "5",
          "playerHorasAMentorear": "5",
          "playerAsititoLaLiga": "1"
      }
  ];


  }
}
