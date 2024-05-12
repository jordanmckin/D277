function checkInput(){
    let x = document.getElementById("cemail");
    let y = document.getElementById("email");

    if (x.value != y.value) {
        alert("The emails provided do not match:" + x.value + " does not match " + y.value);
    }
}
