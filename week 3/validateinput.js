function validateinput(event){
    event.preventdefault();
    let firstname = document.getElementById("fname").nodeValue;
console.log("firstname");



let firstname = firstname +  + lastname;
if(firstlast.length < 20){
    alert(" not enough charachters please retry youre name");
 return;
}
console.log("validfirstnadlastname");

let parsedZip = parseInt(zip);

if(zip.length != 5 || (!Number.isInteger(parseInt(zip) && parseInt(zip) < 9999 )) ){
    alert("invalid zipcode. zip must be a number of 5 digits");
    return;
}
console.log("zip.valid")
}

window.addEventListener("DOMContentLoaded" , (event) =>{ 
    const form = document.getElementById("myform");
    if (form) {
        form.addEventListener("submit" , validateinput);
    }
})