var p = document.getElementById("inp");
function clk(e){
    // p = document.getElementById("inp").value += e;
    // last = p.value.slice(p.value.length-1);
    last = p.value[p.value.length-1];
    var arr = ["+", "-", "*", "/", "%"];
    if(arr.indexOf(last) != -1 && arr.indexOf(e) != -1)
    {
        p.value = p.value.slice(0, -1) + e ;
    }
    else 
    {
        p.value += e;
    }
}

function output() {
   p.value = eval(p.value)
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
    p.value = p.value.slice(0,-1)
}