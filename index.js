var a=Math.floor(Math.random()*6)+1;
var src1="images/dice"+a+".png";
document.querySelector(".img1").setAttribute("src",src1);
var b=Math.floor(Math.random()*6)+1;
var src2="images/dice"+b+".png";
document.querySelectorAll("img")[1].setAttribute("src",src2);
if(a>b)
{
    document.querySelector("h1").textContent="Player 1 is winner!!";
}
else if(a<b)
     document.querySelector("h1").textContent="Player 2 is winner!!";
else
    document.querySelector("h1").textContent="Draw!!";     