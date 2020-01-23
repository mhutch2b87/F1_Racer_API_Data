function f1Data(){
    let Year = $( "#submitForm input[name=Year]" ).val()
    let Lap = $("#submitForm input[name=Lap]" ).val()
    console.log(Year, Lap)

    $.get('https://ergast.com/api/f1/' + Year + '/' + Lap + '/' + 'driverStandings.json', function(data){
        let common = data.MRData.StandingsTable.StandingsLists[0]

        //For Loop For the Table
        for(let i=0; i < 8; i++){
            let position = common.DriverStandings[i].position
            let name = common.DriverStandings[i].Driver.givenName
            let nationality = common.DriverStandings[i].Driver.nationality
            let sponser = common.DriverStandings[i].Constructors[0].name
            let points = common.DriverStandings[i].points

            //input data into table 

            $("#position" + i.toString()).text(position)
            $("#driverName" + i.toString()).text(name)
            $("#nationality" + i.toString()).text(nationality)
            $("#sponser" + i.toString()).text(sponser)
            $("#points" + i.toString()).text(points)

        }
    })

}
    