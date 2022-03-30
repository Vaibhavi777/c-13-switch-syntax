var input,heading;
// var input2,heading2

function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
  //create a heading
 heading=createElement('h1','Enter any vowel')
 heading.position(20,100)
 //create a input
 input=createInput()
 input.position(25,210)
 textAlign(CENTER)
 textSize(50)
//  heading2=createElement('h2','Test')
//  heading2.position(27,150)
//  input2=createInput()
//  input2.position(50,300)
}

function draw() {
var value=input.value()
// console.log(value)
 // var value2=input2.value()
  //console.log(value2)
  //adding the switch syntax
//   switch(value){
// case 'a': console.log("it is a vowel");
// break;
// case 'e': console.log("it is a vowel");
// break;
// case 'i': console.log("it is a vowel");
// break;
// case 'o': console.log("it is a vowel");
// break;
// case 'u': console.log("it is a vowel");
// break;
// default:
//   console.log("error")
//   }
switch(value){
case 'one': console.log("coca cola");
break;
case 'two': console.log("pepsi");
break;
case 'three': console.log("lays");
break;
case 'four': console.log("thumbs up");
break;
default:
  console.log("please type numbers between 1 and 4.");
}
}

