window.onload = function(){
    var pic = document.getElementsByClassName("pic")[0];
    var leftbtn = document.getElementsByClassName("leftbtn")[0];
    var rightbtn = document.getElementsByClassName("rightbtn")[0];
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    
    var time = null;
    var circle=[
        a1,
        a2,
        a3,
        a4,
        a5
    ];
    console.log(circle);

    var image = [
        "url('./image/dogb1.jpg')",
        "url('./image/dogb2.jpg')",
        "url('./image/dogb3.jpg')",
        "url('./image/dogb4.jpg')",
        "url('./image/dogb5.jpg')"
    ];

    // console.log(image);

    var pageidx = 0;

    leftbtn.addEventListener("click",left);
    rightbtn.addEventListener("click",right);

    a1.addEventListener("click",showpage);
    a2.addEventListener("click",showpage);
    a3.addEventListener("click",showpage);
    a4.addEventListener("click",showpage);
    a5.addEventListener("click",showpage);

    circle[0].style.backgroundColor="white";

    timego();

    
    function timego(){
        time = setInterval(function(){
        pageidx++;
        for(var a = 0;a < circle.length; a++){
            circle[a].style.backgroundColor="";
        }
        if(pageidx > 4){
            pageidx = 0;
        }
        pic.style.backgroundImage = image[pageidx];
        circle[pageidx].style.backgroundColor="white";
        console.log(pageidx);
    },2500);
}


    function left(){
        clearInterval(time);
        pageidx--;
        if(pageidx < 0){
            pageidx= 4;
        }
        pic.style.backgroundImage =image[pageidx];
        for(var s=0;s<circle.length;s++){
            circle[s].style.backgroundColor="";
        }
        circle[pageidx].style.backgroundColor="white";
        console.log(pageidx);
        timego();
        // ("a"+"pageidx").style.backgroundColor="white";
    }

    function right(){
        clearInterval(time);
        pageidx++;
        if(pageidx > 4){
            pageidx= 0;
        }
        pic.style.backgroundImage =image[pageidx];
        for(var s=0;s<circle.length;s++){
            circle[s].style.backgroundColor="";
        }
        circle[pageidx].style.backgroundColor="white";
        // console.log(pageidx);
        timego();
        // console.log(pic);
    }

    function showpage(){
        clearInterval(time);
        for(var i = 0; i < circle.length;i++){
            circle[i].style.backgroundColor="";
        }
        var a = Number(this.id.substr(1));
        this.style.backgroundColor="white";
        pic.style.backgroundImage="url('./image/dogb"+a+".jpg')";
        // console.log(a);
        pageidx = a-1;
        // console.log(pageidx);
        timego();
    }



   
    
    
}