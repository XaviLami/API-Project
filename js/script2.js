function documentAdd(){

    
    var lastname=document.getElementById('lastname').value;
   
    var firstname=document.getElementById('firstname').value;
    
   

   var url= "https://apiv2.apifootball.com/?action=get_players&player_name="+lastname+' '+firstname+"&APIkey=9fcbb3a5d4186964a9ed7ca00436dd5d8ad73b012662543323acee31e46b9f09";

   //var url ="https://apiv2.apifootball.com/?action=get_players&player_name=messi lionel&APIkey=9fcbb3a5d4186964a9ed7ca00436dd5d8ad73b012662543323acee31e46b9f09"


   fetch(url).then(function (resp) {return resp.json()}).then(function (data) {

   console.log(data)
   console.log(data[0].team_name)
   var resp =  data[0];
   
   document.querySelector('div.Age').innerHTML = 'Age : '+ resp.player_age;
   document.querySelector('div.NameTeam').innerHTML = "Nom d'équipe : " + resp.team_name;
   document.querySelector('div.Number').innerHTML = 'Numéro : '+ resp.player_number;

   })
}
  

     
