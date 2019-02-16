document.getElementById('myEvent').addEventListener('click', function () {
    alert('You have successfully triggered the event');
}, false); // This is task 1

var requestURL = 'https://jsonplaceholder.typicode.com/todos';

var request = new XMLHttpRequest();
var users;
request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        users = JSON.parse(this.responseText);
        createCard(users)
    }
};

request.open('GET', requestURL, true);
request.send();

function createCard(jsonObj) {
    
    for (var i = 0; i < jsonObj.length; i++) {
        var container = document.getElementById("cardContainer");
        
        var myArticle = document.createElement('div');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');

        myPara1.innerHTML = "User Id: " + users[i].userId;
        myPara2.innerHTML = "Id: " + users[i].id;
        myPara3.innerHTML = "Title: " + users[i].title;

        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        container.appendChild(myArticle);
    }
}
