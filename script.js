// console.log(`hello boi`);
function multiply(a,b) {
    return a*b;
}
// console.log(multiply(2,4));
var inputA, inputB, Area , ansNumber=0;

function areaShow(P,Q,R){
const newChildDiv = document.createElement("div");
newChildDiv.className = "d-flex justify-content-between align-items-center mb-4";

//For the type 1.Triangle

const typeContainer = document.createElement("p");
const typeNum = document.createElement("span");
typeNum.textContent= P + "."; // gives varying number


const typeText = document.createElement("span");
typeText.textContent = Q; //CHAD

typeContainer.appendChild(typeNum);
typeContainer.appendChild(typeText);


//For the Area
const areaAnsContainer = document.createElement(`p`);
const areaAns = document.createElement("span");
areaAns.innerText = R;

const utilsCm = document.createElement(`span`);
utilsCm.innerHTML = `cm<sup>2</sup>`; 

areaAnsContainer.appendChild(areaAns);
areaAnsContainer.appendChild(utilsCm);

//for the button
// const ansRow = document.getElementById(`ansRow`);
const ansBtn = document.createElement("button");
ansBtn.className = "btn btn-primary rounded-2 mt--4";
ansBtn.innerHTML = 'Convert to m<sup>2</sup>';

//append all to newChildDiv
newChildDiv.appendChild(typeContainer);
newChildDiv.appendChild(areaAnsContainer);
newChildDiv.appendChild(ansBtn);

// newChildDiv.appendChild(ansRow);

const gridSolve = document.querySelector(`.grid-solve`);
// console.log(gridSolve);
gridSolve.appendChild(newChildDiv);


}


//triangle
function trArea(){

    inputA = document.getElementById(`Text-1-tr`).value;
    inputB= document.getElementById(`Text-2-tr`).value;

    if (((isNaN(inputA)) || (isNaN(inputB))) || ((inputA<=0) || (inputB<=0))) {
        alert(`Please Enter Valid Number. 
1. Input Must Be Numbers
2. Numbers Must be Positive and Greater than 0 
3. Fill both input field to get results`);
        return;
    }

    Area=  0.5 * multiply(inputA,inputB);
    console.log(Area);
    //show on website
    areaShow(++ansNumber , "Triangle", Area.toFixed(2));


}
//Rectangle
function rectArea(){
    inputA = document.getElementById(`Text-1-Rc`).value;
    inputB= document.getElementById(`Text-2-Rc`).value;

    if (((isNaN(inputA)) || (isNaN(inputB))) || ((inputA<=0) || (inputB<=0))) {
        alert(`Please Enter Valid Number. 
1. Input Must Be Numbers
2. Numbers Must be Positive and Greater than 0 
3. Fill both input field to get results`);
        return;
    }

    Area= multiply(inputA,inputB);
    console.log(Area);
      //show on website
      areaShow(++ansNumber , "Rectangle", Area.toFixed(2));
    }
//Paralellogram
function paraArea(){
    inputA = document.getElementById(`Text-1-Pr`).value;
    inputB= document.getElementById(`Text-2-Pr`).value;

    if (((isNaN(inputA)) || (isNaN(inputB))) || ((inputA<=0) || (inputB<=0))) {
        alert(`Please Enter Valid Number. 
1. Input Must Be Numbers
2. Numbers Must be Positive and Greater than 0 
3. Fill both input field to get results`);
        return;
    }

    Area= multiply(inputA,inputB);
    console.log(Area);
      //show on website
      areaShow(++ansNumber , "P-gram", Area.toFixed(2));
    }
//Rhombus
function rhomArea(){
    inputA = document.getElementById(`Text-1-Rh`).value;
    inputB= document.getElementById(`Text-2-Rh`).value;

    if (((isNaN(inputA)) || (isNaN(inputB))) || ((inputA<=0) || (inputB<=0))) {
        alert(`Please Enter Valid Number. 
1. Input Must Be Numbers
2. Numbers Must be Positive and Greater than 0 
3. Fill both input field to get results`);
        return;
    }

    Area= 0.5 * multiply(inputA,inputB);
    console.log(Area);
      //show on website
      areaShow(++ansNumber , "Rhombus", Area.toFixed(2));
    }
//Pentagon
function pentArea(){
    inputA = document.getElementById(`Text-1-Pen`).value;
    inputB= document.getElementById(`Text-2-Pen`).value;

    if (((isNaN(inputA)) || (isNaN(inputB))) || ((inputA<=0) || (inputB<=0))) {
        alert(`Please Enter Valid Number. 
1. Input Must Be Numbers
2. Numbers Must be Positive and Greater than 0 
3. Fill both input field to get results`);
        return;
    }

    Area= 0.5 * multiply(inputA,inputB);
    console.log(Area);
      //show on website
      areaShow(++ansNumber , "Pentagon", Area.toFixed(2));
    }
//Ellipse
function ellipsArea(){
    inputA = document.getElementById(`Text-1-El`).value;
    inputB= document.getElementById(`Text-2-El`).value;

    if (((isNaN(inputA)) || (isNaN(inputB))) || ((inputA<=0) || (inputB<=0))) {
        alert(`Please Enter Valid Number. 
1. Input Must Be Numbers
2. Numbers Must be Positive and Greater than 0 
3. Fill both input field to get results`);
        return;
    }

    Area= 3.1416 * multiply(inputA,inputB);
    console.log(Area);
      //show on website
      areaShow(++ansNumber , "Ellipse", Area.toFixed(2));
    }
