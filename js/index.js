function viewDiv(){
    document.getElementById("main1").style.display = "block";
}
  function viewDiv1(){
    document.getElementById("main2").style.display = "block";
}
  function viewDiv2(){
    var str= document.getElementById('in1').value;
    if (str == "Педагог" ||  str == "педагог"){
        document.getElementById("main3").style.display = "block";
    }
}
function viewDiv3(){
    if (document.getElementById("txa1").value == ''){
        return false
    }
    else{
        document.getElementById("CE").style.display = "block";
    }
  }
function viewDiv4(){
    document.getElementById("main4").style.display = "block";
}
function viewDiv5(){
    if (document.getElementById("txa2").value == ''){
        return false}
    else{
        document.getElementById("Rez").style.display = "block";
    }
}

function viewDiv6(){
    document.getElementById("main5").style.display = "block";
}

function viewDiv7(){
    if (document.getElementById("txa3").value == ''){
        return false}
    else{
        document.getElementById("prof").style.display = "block";
    }
}
function viewDiv8(){
    if (document.getElementById("input1").value == '' && document.getElementById("input2").value == '' && document.getElementById("input3").value == ''&&
    document.getElementById("input4").value == ''&& document.getElementById("input5").value == '' && document.getElementById("input6").value == ''&&
    document.getElementById("input7").value == ''&& document.getElementById("input8").value == '' && document.getElementById("input9").value == ''){
    return false}
    else{
    document.getElementById("DivKl").style.display = "block";
}

}
function viewDiv9(){
    if (document.getElementById("ta1").value == '' || document.getElementById("ta2").value == ''|| document.getElementById("ta3").value == ''||
    document.getElementById("ta4").value == ''){
    return false}
    else{
    document.getElementById("DivWT").style.display = "block";
}

}
function viewDiv10(){
    if (document.getElementById("uchus").value == 'учусь' && document.getElementById("tvory").value == 'творю'&& document.getElementById("rastu").value == 'расту'&&
    document.getElementById("jelay").value == 'желаю' && document.getElementById("mogu").value == 'могу'){
    return false}
    else{
    document.getElementById("end1").style.display = "block";
}

}


