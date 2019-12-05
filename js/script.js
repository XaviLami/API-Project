function documentAdd(){

    
     var lastname=document.getElementById('lastname').value;
    
     var firstname=document.getElementById('firstname').value;
     // Inserer id de firstname
    

    var url= "https://nba-players.herokuapp.com/players-stats/"+lastname+'/'+firstname;


    fetch(url).then(function (resp) {return resp.json()}).then(function (data) {

    console.log(data)

    console.log('Assist par match '+ data.assists_per_game);
    document.querySelector('div.Assist').innerHTML = 'Assist par match : '+ data.assists_per_game;
    document.querySelector('div.NameTeam').innerHTML = "Nom d'équipe : " + data.team_name;
    document.querySelector('div.PointsMatch').innerHTML = 'Points par match : '+ data.points_per_game;

    })
}
   

      
