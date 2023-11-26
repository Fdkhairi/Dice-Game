let randomNumber1 = Math.floor(Math.random()*6)+1;//random number generator for the first dice.

let randomNumber2 = Math.floor(Math.random()*6)+1;//random number generator for the second dice.


let image1 = document.querySelector("img.img1");//locate the image for the first dice and assign 
image1.setAttribute('src',`./images/dice${randomNumber1}.png`);//assign a new image to the first dice according to the random number.
let image2 = document.querySelector("img.img2");//locate the image for the second dice and assign
image2.setAttribute('src',`./images/dice${randomNumber2}.png`);//assign a new image to the second dice according to the random number.

if(randomNumber1<randomNumber2){//conditional statements if any dice is begger or smaller based o nthe random number.
    document.querySelector('h1').innerHTML ='Player 2 wins!🚩';
}
else if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML ='🚩Player 1 wins!';
}
else{
    document.querySelector('h1').innerHTML ='🚩DRAW!🚩';
}
// switch(randomNumber1){
//     case 1:
//         document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
//         break;
//         case 2:
//         document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
//         break;
//         case 3:
//         document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
//         break;
//         case 4:
//         document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
//         break;
//         case 5:
//         document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
//         break;
//         case 6:
//         document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
//         break;
//         default:
//         document.querySelector("img.img1").setAttribute("alt","no dice");
//         break;

// }
// switch(randomNumber2){
//     case 1:
//         document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
//         break;
//         case 2:
//         document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
//         break;
//         case 3:
//         document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
//         break;
//         case 4:
//         document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
//         break;
//         case 5:
//         document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
//         break;
//         case 6:
//         document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
//         break;
//         default:
//         document.querySelector("img.img2").setAttribute("alt","no dice");
//         break;

// }


// if(randomNumber1<randomNumber2){
//     document.querySelector('h1').innerHTML ='Player 2 wins!🚩';
// }
// else if(randomNumber1>randomNumber2){
//     document.querySelector('h1').innerHTML ='🚩Player 1 wins!';
// }
// else{
//     document.querySelector('h1').innerHTML ='🚩DRAW!🚩';
// }