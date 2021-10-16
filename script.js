function addNewWEField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.classList.add('iconInsideTextArea');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter your work experience here");
    newNode.setAttribute("onClick", "testFunction()")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewQual(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('qualField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter your qualifications here");
    
    let qualOb = document.getElementById("qualifications");
    let qualAddButtonOb = document.getElementById("qualAddButton");

    qualOb.insertBefore(newNode, qualAddButtonOb);
}

//test function

function testFunction(){
    // alert("Function is active");
    
}

//function to generate CV

function generateCV(){
    let nameFieldOb = document.getElementById("nameField").value;
    let nameTempOb = document.getElementById("nameTemp");
    nameTempOb.innerHTML = nameFieldOb;
    
    document.getElementById("nameTemp2").innerHTML = nameFieldOb;
    document.getElementById("contactTemp").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressTemp").innerHTML = document.getElementById("addressField").value; 
    document.getElementById("linkedInTemp").innerHTML = document.getElementById("linkedInField").value;
    document.getElementById("hackerRankTemp").innerHTML = document.getElementById("hackerRankField").value;
    document.getElementById("stackOverflowTemp").innerHTML = document.getElementById("stackOverflowField").value;
    document.getElementById("objectiveTemp").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");
    let str = '';

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weTemp").innerHTML = str;

    let quals = document.getElementsByClassName("qualField");
    let str1 = '';

    for(let q of quals){
        str1 = str1 + `<li> ${q.value}</li>`;
    }

    document.getElementById("qualTemp").innerHTML = str1;

    //code for uploading profile photo

    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the image into template

    reader.onloadend = function () {
        document.getElementById("imgTemp").src = reader.result;
    }

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
}

//function to print CV in template

function printCV(){
    window.print();
}