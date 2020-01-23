
$("#submitButton").click(function (){
    console.log("hello")
})

$("#submitButton").click(function (){
    console.log("hello")
    $.get('https://ergast.com/api/f1/2019/1/driverStandings.json', function (data){
         console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position)
         console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality)
    })
})