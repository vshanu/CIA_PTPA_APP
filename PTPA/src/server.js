var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');


app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/authenticate', function(req, res)
{
    if(req.body.username && req.body.password){
        res.send({
            isLoggedIn: true
        });
    } else {
        res.send({
            isLoggedIn: false
        });
    }
});

app.get('/playerinfo', function(req, res){
    res.send([
        {
            "playerId": 1,
            "playerNombres": "ANA GABRIELA AGUIRRE",
            "playerConducto": "2",
            "playerAsistencia": "1",
            "playerRendimientoFisico": "5",
            "playerAdecuado": "5",
            "playerRendimientoAcademico": "5",
            "playerHorasAMentorear": "5",
            "playerAsititoLaLiga": "4"
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
            "playerAsititoLaLiga": "3"
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
            "playerHorasAMentorear": "5",
            "playerAsititoLaLiga": "2"
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
            "playerAsititoLaLiga": "5"
        }
    ]);
})

app.listen(3000, function(){

    console.log('Server running @ localhost:3000');
    
})