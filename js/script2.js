function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            
            const name=data.name; 

            var firstname=document.getElementById(firstname).value;
            // Inserer id de firstname
            
            var lastname=document.getElementById(lastname).value;

            console.log(name);

            var url= "https://nba-players.herokuapp.com/players-stats/"+firstname+'/'+lastname;
            
       
        }
    }
    xhr.open('GET',);
    xhr.send()
}
 getApiData()