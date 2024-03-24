function clk(e){
    document.getElementById("inp").value += e
}
function output() {
   var a = document.getElementById("inp");
   a.value = eval(a.value)
}
function clrA() {
    if (document.getElementById("inp")) {
        var check = prompt("Do you wnat to clear!");
        if(check == "yes"){
            document.getElementById("inp").value = " ";
        }else {
            document.getElementById("inp").value += e
        }
    }
    
}
function clr() {
    var b = document.getElementById("inp");
    b.value = b.value.slice(0,-1)
}