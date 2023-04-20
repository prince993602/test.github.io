function toggle(){
    document.getElementsByClassName("manus")[0].style.marginLeft = "0px";
    document.getElementsByClassName("bar")[0].style.visibility="hidden" ;
    // document.getElementsByTagName("body")[0].style.background = "#000";
}
function toggleOut(){
    document.getElementsByClassName("bar")[0].style.visibility="visible" ;
    document.getElementsByClassName("manus")[0].style.marginLeft = "-250px";
}