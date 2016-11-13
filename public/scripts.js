tryCreate = function(name, objective, goal){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.open("POST",  "http://microloans-project-josephch405.c9users.io:8081/api/project/create?name=" + name +"&objective=" + objective +"&goal="+goal);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "0110fcf4-f6d0-6cc9-cd29-9f016e89e213");
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    
    xhr.send();
}

tryLogin = function(user, pass) {
    var data = null;
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "http://microloans-project-josephch405.c9users.io:8081/api/user/login?username=" + user +"&password=" + pass);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "1d4dc60b-22f1-af7f-5189-49a692efe72b");
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
            console.log(this.responseText);
            if (this.responseText == "logged in"){
                window.location.replace('./home');
            }
            else{
              alert("Invalid login information");
            }
        }
    });
    
    xhr.send(data);
}

getSession = function(){
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://microloans-project-josephch405.c9users.io:8081/api/user/session");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "454edc21-3109-8425-99bf-c3b1aff70d1d");

    xhr.send(data);
}
var globalUser = {
    username: "",
    name: "",
    email: "",
    money: 0
    
}


getData = function(){
    var bob;
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            globalUser = JSON.parse(this.responseText);
            
            //document.getElementById("username").innerHTML = globalUser.username;
            document.getElementById("money").innerHTML = "$" + globalUser.money ;
            document.getElementById("name").innerHTML = globalUser.name;
            //document.getElementById("email").innerHTML = globalUser.email;
            console.log(JSON.parse(this.responseText));
        }
        });
    xhr.open("POST", "http://microloans-project-josephch405.c9users.io:8081/api/user/data");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "d82cd445-efa4-2a1d-e565-f01881fa40eb");


    xhr.send(data);
}


var globalProject = {
    name: "",
    objective: "",
    goal: 0,
    current: 0,
    
}


getDataP = function(){
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            globalProject = JSON.parse(this.responseText);
            
            document.getElementById("name").innerHTML = globalProject.name;
            document.getElementById("objective"),innerHTML = globalProject.objective;
            document.getElementById("goal").innerHTML = globalProject.goal;
            document.getElementById("current").innerHTML = globalProject.current;
            console.log(JSON.parse(this.responseText));
        }
        });
    xhr.open("POST", "http://microloans-project-josephch405.c9users.io:8081/api/project/data");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "11042d82-ab27-7197-5cb0-3c9c69e59b7b");


    xhr.send(data);
}


tryRegister = function(name, user, pass, email, creditcard) {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
             if (this.responseText == "user created"){
                window.location.replace('./home');
            }
            else{
              alert("Invalid registration information");
            }
        }
    });
    
    var createPOST = "http://microloans-project-josephch405.c9users.io:8081/api/user/create";

    xhr.open("POST", createPOST + "?name=" + name + "&username=" + user + "&password=" + pass + 
        "&email=" + email + "&creditcard=" + creditcard);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "454edc21-3109-8425-99bf-c3b1aff70d1d");

    xhr.send(data);
}