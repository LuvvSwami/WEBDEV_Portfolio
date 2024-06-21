var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2= "images/dice"+randomNumber2+".png";

var image1=document.getElementById("img1");
var image2=document.getElementById("img2");

image1.setAttribute("src",randomImageSource1);
image2.setAttribute("src",randomImageSource2);

if (randomImageSource1>randomImageSource2)
    document.querySelector("h1").innerHTML="🚩Player 1 wins!"
else if(randomImageSource2>randomImageSource1)
    document.querySelector("h1").innerHTML="Player 2 wins!🚩"
else
    document.querySelector("h1").innerHTML="Draw";

