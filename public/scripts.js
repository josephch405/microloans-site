tryCreate = function(name, objective, goal){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.open("POST",  "http://microloans-project-josephch405.c9users.io:8081/api/project/create?name=" + name +"&objective=" + objective +"&goal="+goal);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "0110fcf4-f6d0-6cc9-cd29-9f016e89e213");
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
            if(this.responseText == "Project created"){
                window.location.replace('./home');

            }
            
            else{
                alert("Project name taken")
            }
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

var globalCB;

getData = function(cb){
    var bob;
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            globalUser = JSON.parse(this.responseText);
            
            //document.getElementById("username").innerHTML = globalUser.username;
            if(document.getElementById("money")){
            document.getElementById("money").innerHTML = "$" + globalUser.money ;}
            if (document.getElementById("name")){
            document.getElementById("name").innerHTML = "Welcome, " + globalUser.name;}
            //document.getElementById("email").innerHTML = globalUser.email;
            console.log(JSON.parse(this.responseText));
        }
        });
    xhr.open("POST", "http://microloans-project-josephch405.c9users.io:8081/api/user/data");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "d82cd445-efa4-2a1d-e565-f01881fa40eb");


    xhr.send(data);
}


var globalProjects = [];

//only for one proj
getDataP = function(projId){
    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    
    console.log("getdatap try");

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log("globalCB try");
            if(globalCB){
            console.log("globalCB done");
            console.log(this.responseText);
            
            globalCB(JSON.parse(this.responseText))};
            
            globalProjects.push(JSON.parse(this.responseText));
        }
        });
        
        console.log("ID RIGHT BEHIND");
        console.log(projId);
    xhr.open("POST", "http://microloans-project-josephch405.c9users.io:8081/api/project/data?projID="+projId);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "11042d82-ab27-7197-5cb0-3c9c69e59b7b");

    xhr.send();
}


tryRegister = function(name, user, pass, email, creditcard) {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
             if (this.responseText == "user created"){
                window.location.replace('./');
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

checkHasProject = function(){
    if (globalUser.ownProject == ""){
        var a = document.getElementById("MyProject");
        a.href = "./new-project";
    }
    
    else{
        var a = document.getElementById("MyProject");
        a.href = "./Repayment";
    }
}

joinProject = function(pid, quant){
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
             if (this.responseText == "ok"){
                 alert("You are now a supporter!")
                window.location.replace('./home');
            }
            else{
              alert("Something went wrong");
            }
        }
    });
    
    var createPOST = "http://microloans-project-josephch405.c9users.io:8081/api/project/join";

    xhr.open("POST", createPOST + "?pid=" + pid + "&quant=" + quant);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "5b312c12-57f3-2035-c2e4-cc92641b3bc5");

    xhr.send(data);
}