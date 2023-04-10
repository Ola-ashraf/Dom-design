
var imgList = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.getElementById("boxContainer");
var inerrBox = document.getElementById("inerrBox");
var closeEl = document.getElementById("closeEl");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var currentIndex = 0;

for(var i=0 ; i<imgList.length ; i++){
    imgList[i].addEventListener("click" , function(e){
        boxContainer.style.display = "flex";
        var imgPath = e.target.getAttribute("src");
        inerrBox.style.backgroundImage = "url("+imgPath+")";
        currentIndex = imgList.indexOf(e.target);
    })
    
}


next.addEventListener("click",nextFun)
function nextFun(){
    currentIndex++;
    if(currentIndex == imgList.length){
        currentIndex = 0;
    }
    var imgPath = imgList[currentIndex].getAttribute("src");
    inerrBox.style.backgroundImage = "url("+imgPath+")";
}


prev.addEventListener("click",prevFun)
function prevFun(){
    currentIndex--;
    if(currentIndex<0 ){
        currentIndex = imgList.length-1
    }
    var imgPath = imgList[currentIndex].getAttribute("src");
    inerrBox.style.backgroundImage = "url("+imgPath+")";
}


closeEl.addEventListener("click",colseTag)
function colseTag(){
    boxContainer.style.display = "none"
}


document.addEventListener("keyup" , function(e){
    if(e.key == "ArrowRight"){
        nextFun()
    }else if(e.key == "ArrowLeft"){
        prevFun()
    }else if(e.key == "Escape"){
        colseTag()
    }
})


boxContainer.addEventListener("click", function(e){
    if(e.target.getAttribute("id") == "boxContainer"){
        colseTag()
    }
})