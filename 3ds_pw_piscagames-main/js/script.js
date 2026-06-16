function verificarLogin(){
let login = document.getElementById("login").value;
let senha = document.getElementById("senha").value;

if (login==="maioral" && senha=== "pinkpantheress diva"){
    alert("seje bem viade");
    window.location.href="gaymes.html";
} 
else {
    alert("senha incorreta troxao");
}

login = document.getElementById("login").value='';
senha = document.getElementById("senha").value='';

}