// MENU
// var menu = "closed";
sessionStorage.setItem("opened_history","false")
keyboard_tracker = setInterval(() => {
    document.getElementById("numbTracker").focus()
}, 100);

function sqr(x){
    return(x*x) 
}

// console.log(menu)
document.getElementById("menu_icon").addEventListener("click", ()=> {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("blur").style.marginTop = "0px"
    
});

sessionStorage.setItem("saviour","0")

function show(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("blur").style.marginTop = "-900px"
    document.getElementById("blur").style.visibility = "visible"

}
// numbers = document.querySelectorAll(".numbs");

// function write(n)
//     numbers[n].addEventListener("click", ()=> {
//     writeNumber(n)
// })

function writeN(n){
topScreen = document.getElementById("top");
bottomScreen = document.getElementById("bottom");
bottomLength = bottomScreen.innerHTML.length
if(bottomLength <= 15 || sessionStorage.getItem("saviour") + "r" == sessionStorage.getItem("_lastanswer") ){
    
        // if(topScreen.innerHTML.endsWith("+") == false || topScreen.innerHTML.endsWith("-") == false || topScreen.innerHTML.endsWith("x") == false || topScreen.innerHTML.endsWith("/") == false && topScreen.innerHTML.length > 0){
        //     alert("mm")
        // }
        if(bottomScreen.innerHTML == "0"){
            bottomScreen.innerHTML = n
            sessionStorage.setItem("saviour", bottomScreen.innerHTML)

        } else if(sessionStorage.getItem("saviour") + "r" == sessionStorage.getItem("_lastanswer")){
        if(topScreen.innerHTML.endsWith("+") == false && topScreen.innerHTML.endsWith("-") == false && topScreen.innerHTML.endsWith("x") == false && topScreen.innerHTML.endsWith("/") == false && topScreen.innerHTML.length > 0){
            topScreen.innerHTML += "+"
        }
            
            sessionStorage.setItem("saviour", bottomScreen.innerHTML)
            bottomScreen.innerHTML = n
            sessionStorage.setItem("_lastanswer", "")
            sessionStorage.setItem("saviour", bottomScreen.innerHTML)
        } else if(topScreen.innerHTML.includes("+") == true || topScreen.innerHTML.includes("-") == true || topScreen.innerHTML.includes("x") == true || topScreen.innerHTML.includes("/") == true){
            bottomScreen.innerHTML += n
            sessionStorage.setItem("_lastanswer", "")
            sessionStorage.setItem("saviour", bottomScreen.innerHTML)

        } else {
            // if(n == "00" && n.value.length > 1){
            //     bottomScreen.innerHTML += "00"
            // } else {
                sessionStorage.setItem("_lastanswer", "")
            bottomScreen.innerHTML += n
            sessionStorage.setItem("saviour", bottomScreen.innerHTML)
            // }
        }
        
        document.getElementById("numbTracker").focus()
        
    }
    
    resize()
}

function point(){
bottomLength = bottomScreen.innerHTML.length
topScreen = document.getElementById("top");
bottomScreen = document.getElementById("bottom");
    if(bottomLength <= 15 ){
        if(bottomScreen.innerHTML.length > 0 ){
            bottomScreen.innerHTML += "."
            sessionStorage.setItem("saviour", bottomScreen.innerHTML)
        } else {
            bottomScreen.innerHTML = "0."
            sessionStorage.setItem("saviour", bottomScreen.innerHTML)
        }
        document.getElementById("numbTracker").focus()
        resize()

    }
}

function invers(){
    bottomLength = bottomScreen.innerHTML.length
    topScreen = document.getElementById("top");
    bottomScreen = document.getElementById("bottom");
    inverse = 1/(bottomScreen.innerHTML)
    topScreen.innerHTML += "1/(" + bottomScreen.innerHTML + ")"
    bottomScreen.innerHTML = inverse
    sessionStorage.setItem("saviour", bottomScreen.innerHTML)

    document.getElementById("numbTracker").focus()
    sessionStorage.setItem("_lastanswer", inverse + "r")
    x = setTimeout( ()=> {
    if(bottomLength >= 17){
        bottomScreen.innerHTML = inverse.toExponential(10);
        sessionStorage.setItem("saviour", inverse)
    }
    }, 0)
    resize()
    
    
}

function percentage(){
bottomScreen = document.getElementById("bottom");
bottomLength = bottomScreen.innerHTML.length
topScreen = document.getElementById("top");

topScreen.innerHTML = sessionStorage.getItem("saviour")/100
bottomScreen.innerHTML = sessionStorage.getItem("saviour")/100
sessionStorage.setItem("saviour",bottomScreen.innerHTML)
sessionStorage.setItem("_lastanswer",bottomScreen.innerHTML + "r")
document.getElementById("numbTracker").focus()
resize()
if(bottomLength >= 15){
    bottomScreen.innerHTML = eval(bottomScreen.innerHTML).toExponential(10);
    sessionStorage.setItem("saviour", bottomScreen.innerHTML)
}
}

function arith(n){
topScreen = document.getElementById("top");
bottomScreen = document.getElementById("bottom");
        if(bottomScreen.innerHTML.length == 0 ){    
            if(topScreen.innerHTML.endsWith("+") == true || topScreen.innerHTML.endsWith("-") == true || topScreen.innerHTML.endsWith("x") == true || topScreen.innerHTML.endsWith("/") == true){
                    console.log("... error [there is a pending symbol]")
                    topScreen.innerHTML = topScreen.innerHTML.slice(0,-1) + n
                } 
        } else if(sessionStorage.getItem("saviour") + "r" == sessionStorage.getItem("_lastanswer")){
            topScreen.innerHTML += n
        }else {
            if(topScreen.innerHTML.length < 2){
                topScreen.innerHTML = bottomScreen.innerHTML
                topScreen.innerHTML += n
                bottomScreen.innerHTML = ""
                sessionStorage.setItem("saviour", bottomScreen.innerHTML)

            } else {
                topScreen.innerHTML += bottomScreen.innerHTML
                topScreen.innerHTML += n
                bottomScreen.innerHTML = ""
                sessionStorage.setItem("saviour", bottomScreen.innerHTML)
            }
    
        }
        document.getElementById("numbTracker").focus()
        
}

function sign(){
    topScreen = document.getElementById("top");
    bottomScreen = document.getElementById("bottom");
    bottomLength = bottomScreen.innerHTML.length;

    bottomScreen.innerHTML = -1 * bottomScreen.innerHTML
}

function solve(){
    topScreen = document.getElementById("top");
    bottomScreen = document.getElementById("bottom");
    bottomLength = bottomScreen.innerHTML.length;

    if(topScreen.innerHTML.endsWith("+") == false && topScreen.innerHTML.endsWith("-") == false && topScreen.innerHTML.endsWith("x") == false && topScreen.innerHTML.endsWith("/") == false && topScreen.innerHTML.length > 0){
        topScreen.innerHTML += "+" + bottomScreen.innerHTML
        actual = "+" + bottomScreen.innerHTML
        resize()
    }

    actuall = topScreen.innerText.replace("x", "*");
    actual = actuall.replace("sqrt", "Math.sqrtt");

    if(bottomScreen.innerHTML + "r" == sessionStorage.getItem("_lastanswer")){
        topScreen.innerHTML = topScreen.innerHTML
        resize()
    } else {
        if(topScreen.innerHTML.endsWith("+") == true || topScreen.innerHTML.endsWith("-") == true || topScreen.innerHTML.endsWith("x") || topScreen.innerHTML.endsWith("/") == true){
            topScreen.innerHTML += bottomScreen.innerHTML
            actual += bottomScreen.innerHTML;
            resize()
        }
        else{
            topScreen.innerHTML = bottomScreen.innerHTML
            actual = bottomScreen.innerHTML;
            console.log("input a sign! ")
            resize()
        }
    }
    bottomScreen.innerHTML = eval(actual);
    sessionStorage.setItem("saviour",eval(actual))
    sessionStorage.setItem("_lastanswer",eval(actual) + "r")
    console.log(eval(actual))
    document.getElementById("numbTracker").focus()
    resize()
    if(bottomLength >= 15){
        bottomScreen.innerHTML = eval(bottomScreen.innerHTML).toExponential(10);
        sessionStorage.setItem("saviour", bottomScreen.innerHTML)
    }
}

function backspace(){
topScreen = document.getElementById("top");
bottomScreen = document.getElementById("bottom");
bottomLength = bottomScreen.innerHTML.length;
if(bottomLength <= 1){
    bottomScreen.innerHTML = "0"
    sessionStorage.setItem("saviour", bottomScreen.innerHTML)
} else if(bottomScreen.innerHTML.length > 0){
    bottomScreen.innerHTML = bottomScreen.innerHTML.slice(0,-1)
    sessionStorage.setItem("saviour", bottomScreen.innerHTML)
} 
    resize()
}

function clear_few(){
topScreen = document.getElementById("top");
bottomScreen = document.getElementById("bottom");
bottomScreen.innerHTML = ""
sessionStorage.setItem("saviour", bottomScreen.innerHTML)
document.getElementById("numbTracker").focus()
}


function clear_all(){
topScreen = document.getElementById("top");
bottomScreen = document.getElementById("bottom");
bottomScreen.innerHTML = "" 
topScreen.innerHTML = ""
sessionStorage.setItem("saviour", bottomScreen.innerHTML)
document.getElementById("numbTracker").focus()

}




// if(bottomScreen.innerHTML == sessionStorage.getItem("_lastanswer")){
//     topScreen.innerHTML = topScreen.innerHTML;
// }

function track(){
    f = document.getElementById("numbTracker").value
    n = f.replace("*", "x")
    if(n == 0 || n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7 || n == 8 || n == 9){
        writeN(n)
    }
    if(n === "+" || n == "-" || n == "x" || n == "/" ){
        arith(n)
    }
    if(n == "."){
        point()
    }
    if(n == "="){
        solve()
    }
    if(n == "r"){
        root()
    }
    if(n == "q" || n == "s"){
        square()
    }
    if(n == "c"){
        clear_few()
    }
    if(n == "%"){
        percentage()
    }
    
    document.getElementById("numbTracker").value = ""
}

function root(){
    topScreen = document.getElementById("top");
    bottomScreen = document.getElementById("bottom");
    bottomLength = bottomScreen.innerHTML.length;
    sqrt = Math.sqrt(bottomScreen.innerHTML)
    topScreen.innerHTML = "sqrt(" + bottomScreen.innerHTML + ")"
    bottomScreen.innerHTML = sqrt
    sessionStorage.setItem("saviour", bottomScreen.innerHTML)

    document.getElementById("numbTracker").focus()
    sessionStorage.setItem("_lastanswer", sqrt + "r")
    x = setTimeout( ()=> {
    if(bottomLength >= 17){
        bottomScreen.innerHTML = sqrt.toExponential(10);
        sessionStorage.setItem("saviour",sqrt)
    }
    }, 0)
    resize()
}

function square(){
    topScreen = document.getElementById("top");
    bottomScreen = document.getElementById("bottom");
    bottomLength = bottomScreen.innerHTML.length;
    sqr = sqr(bottomScreen.innerHTML)
    topScreen.innerHTML = "sqr(" + bottomScreen.innerHTML + ")"
    bottomScreen.innerHTML = sqr
    sessionStorage.setItem("saviour", bottomScreen.innerHTML)
    document.getElementById("numbTracker").focus()
    sessionStorage.setItem("_lastanswer", sqr + "r")
    x = setTimeout( ()=> {
    if(bottomLength >= 17){
        bottomScreen.innerHTML = sqr.toExponential(10);
        sessionStorage.setItem("saviour",sqr)
    }
    }, 0)
    resize()
}

// let tester = "I am not sure"
// alert(tester.replace(/not|sure/g,"damn" && "okay"))

function resize() {
    bottomScreen = document.getElementById("bottom");
    bottomLength = bottomScreen.innerHTML.length
    if(bottomLength >= 12){
    bottomScreen.style.fontSize = (-(bottomLength - 1) + 55) + "px";
    }
    // if(bottomLength == 12 ){
    //     bottomScreen.style.fontSize = "50px";
    // }
    // if(bottomLength == 13 ){
    //     bottomScreen.style.fontSize = "48px";
    // } 
    // if(bottomLength == 14){
    //     bottomScreen.style.fontSize = "46px";
    // }
    // if(bottomLength == 15){
    //     bottomScreen.style.fontSize = "42px";
    // }
    // if(bottomLength == 16){
    //     bottomScreen.style.fontSize = "40px";
    // }
    // if(bottomLength == 17){
    //     bottomScreen.style.fontSize = "38px";
    //     alert("hjksdyik")
    // }
}

// sofo = setInterval( () => {
// topScreen = document.getElementById("top");
// bottomScreen = document.getElementById("bottom");
//     bottomScreen.addEventListener(click,alert("kk"))
// }, 1000)


                    // MEMMORY  
var topScreen = document.getElementById("top");
var bottomScreen = document.getElementById("bottom");
var history = document.getElementById("lists")
if(sessionStorage.getItem("m_Length") == NaN){
    var i = 0
}else{
    var i = sessionStorage.getItem("m_Length")
}
function mSave(n){
    i = Number(i) + 1
    sessionStorage.setItem("m_Length",i)
    sessionStorage.setItem("m"+i,n * bottomScreen.innerHTML)
    sessionStorage.setItem("opened_history","false")


    memory = document.createElement("div");
    memory.classList.add("memory")
    document.getElementById("lists").appendChild(memory)
    memory.innerHTML = sessionStorage.getItem("m"+i)
}                    

function mPlus(){
    if(sessionStorage.getItem("m_Length") === null){
        mSave(+1)
        sessionStorage.setItem("opened_history","false")
    } else {
    sessionStorage.setItem("m_Length",i)
    sessionStorage.setItem("opened_history","false")
    sessionStorage.setItem("m" + sessionStorage.getItem("m_Length"),Number(sessionStorage.getItem("m" + sessionStorage.getItem("m_Length"))) + Number(sessionStorage.getItem("saviour")))
    memory = document.createElement("div");
    memory.classList.add("memory")
    document.getElementById("lists").appendChild(memory)
    memory.innerHTML = sessionStorage.getItem("m"+i)
    }
}

function mSub(){
    
    if(sessionStorage.getItem("m_Length") === null){
        mSave(-1)
        sessionStorage.setItem("opened_history","false")

    } else {
    sessionStorage.setItem("m_Length",i)
    sessionStorage.setItem("opened_history","false")
    sessionStorage.setItem("m" + sessionStorage.getItem("m_Length"),Number(sessionStorage.getItem("m" + sessionStorage.getItem("m_Length"))) - Number(sessionStorage.getItem("saviour")))
    
    memory = document.createElement("div");
    memory.classList.add("memory")
    document.getElementById("lists").appendChild(memory)
    memory.innerHTML = sessionStorage.getItem("m"+i)
}
}

function m_recall(){
    if(sessionStorage.getItem("mr") == "true"){
    sessionStorage.setItem("opened_history","false")
    bottomScreen.innerHTML = sessionStorage.getItem("m" + sessionStorage.getItem("m_Length"))
    }
}

function mc(){
    if(sessionStorage.getItem("mc") == "true"){
        for(x=1;x <= i;x++){
            i = 0
            sessionStorage.removeItem("m" + x)
            sessionStorage.removeItem("m_Length")
            sessionStorage.setItem("opened_history","false")

        }
    }
}

function mHistory(){
    if(sessionStorage.getItem("m") == "true"){
    document.getElementById("keys").style.display = "none"
    document.getElementById("History").style.display = "grid"
    // if(sessionStorage.getItem("opened_history") == "false"){
    //     for(i=1;i<=sessionStorage.getItem("m_Length");i++){
    //         // console.log(i)
    //         memory = document.createElement("div");
    //         memory.classList.add("memory")
    //         document.getElementById("lists").appendChild(memory)
    //         memory.innerHTML = sessionStorage.getItem("m"+i)
    //     }
    // }
    chill = setTimeout(() => {
        sessionStorage.setItem("opened_history","true")
    }, 100);
    }
}

blur_m_Ai = setInterval(() => {
    if(sessionStorage.getItem("m_Length") < 1 ){
        document.getElementById("mc").style.color = "#7A7A7A"
        sessionStorage.setItem("mc","false")
        document.getElementById("mr").style.color = "#7A7A7A"
        sessionStorage.setItem("mr","false")
        document.getElementById("mHistory").style.color = "#7A7A7A"
        sessionStorage.setItem("m","false")
    } else {
        document.getElementById("mc").style.color = "#000"
        sessionStorage.setItem("mc","true")
        document.getElementById("mr").style.color = "#000"
        sessionStorage.setItem("mr","true")
        document.getElementById("mHistory").style.color = "#000"
        sessionStorage.setItem("m","true")
    }
}, 100);


function shows(){
    if(sessionStorage.getItem("m") == "true"){
        document.getElementById("keys").style.display = "grid"
        document.getElementById("History").style.display = "none"
    }
}

function empty(){
    document.getElementById("keys").style.display = "grid"
    document.getElementById("History").style.display = "none"

    mc()
}

// alert(document.head.styleSheets)