var butos=document.getElementById("buton");
butos.addEventListener("click",myfunc);
function myfunc(){
    window.open ("https://maps.app.goo.gl/mNos8fnHotD5TEVT9","blank","width=300, height:200");
}
var spana =document.getElementById("spans");
var timer=setInterval(horloge,1000);
function horloge (){
    
    var dat=new Date();
    spana.textContent="veuillez nous contacter  pour obtenir votre reduction : " + dat.toLocaleTimeString();
}
