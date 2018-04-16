function setQWERABC0100(){
    // find the dropdown
    var ddl = document.getElementById("QWERABC0100");
    // find the selected option
    var selectedOption = ddl.options[ddl.selectedIndex];
    // find the attribute value
    var Frequency = selectedOption.getAttribute("option");

    // find the textbox
    var textBoxABC0101 = document.getElementById("QWER-ABC-01-DAYS");

    // find the textbox
    var textBoxABC0102 = document.getElementById("QWER-ABC-01-RATE");
    
    // set the textbox value
    if(Frequency=="1"){
        textBoxABC0101.value = "";
        textBoxABC0102.value = "";
    }
       else if(Frequency=="2"){
        textBoxABC0101.value = "7";
        textBoxABC0102.value = "62.70";
    }   
        else if(Frequency=="3"){
        textBoxABC0101.value = "7";
        textBoxABC0102.value = "57.90";
    }   
        else if(Frequency=="4"){
        textBoxABC0101.value = "7";
        textBoxABC0102.value = "73.10";
    }   
        else if(Frequency=="5"){
        textBoxABC0101.value = "7";
        textBoxABC0102.value = "57.90";
    }   
        else if(Frequency=="6"){
        textBoxABC0101.value = "7";
        textBoxABC0102.value = "73.10";
    }   
        else if(Frequency=="7"){
        textBoxABC0101.value = "7";
        textBoxABC0102.value = "57.90";
    }   
        else if(Frequency=="8"){
        textBoxABC0101.value = "7";
        textBoxABC0102.value = "73.10";
    }   
        else if(Frequency=="9"){
        textBoxABC0101.value = "";
        textBoxABC0102.value = "";
    }
}