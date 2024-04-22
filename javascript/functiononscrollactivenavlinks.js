window.onscroll=function (){
   mousescrolleffect();
}

// control navigation bar postion control when scroll
function mousescrolleffect(){
    if(document.body.scrollTop >  document.getElementById("colorpagetitle").offsetHeight|| document.documentElement.scrollTop > document.getElementById("colorpagetitle").offsetHeight){
        document.getElementById("headersections").style.top = "0";
        document.getElementById("headersections").style.position = "fixed";
        document.getElementById("headersections").style.width = "100%";
    }
    else 
    {
        document.getElementById("headersections").style.top = "-100px";
        document.getElementById("headersections").style.position = "sticky";
        document.getElementById("headersections").style.width = "100%";
    }
}
