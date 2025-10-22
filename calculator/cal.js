const displayresult=document.getElementById("display");
function display(inpute){
    displayresult.value+=inpute;
}
function cleardisplay(){
    displayresult.value="";
}
function equalsign(){
    try{
        displayresult.value=eval(displayresult.value);
    }
    catch(error){
        displayresult.value="Error"
    }
}
function deletdisplay(){
     displayresult.value=displayresult.value.slice(0,-1);
}
function changesign(){
    if(displayresult.value){
        if(displayresult.value.startsWith('-')){
            displayresult.value=displayresult.value.substring(1);
        }
        else{
          displayresult.value='-'+ displayresult.value
        }
    }
}
 
