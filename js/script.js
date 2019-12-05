function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            
            const key=get_players.team_key; 
            
            console.log(key);
            
            
           
            
           
            
            
        }
    }
    xhr.open('GET', 'https://apiv2.apifootball.com/?action=get_players&player_name=ronaldo cristiano&APIkey=9fcbb3a5d4186964a9ed7ca00436dd5d8ad73b012662543323acee31e46b9f09');
    xhr.send()
}
 getApiData()