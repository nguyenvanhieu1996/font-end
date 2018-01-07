var indexSlider = 1;

showSlider();
function plusSlider(m){
    showSlider(indexSlider +=m);
}
function currentDiv(n) {
    showSlider(indexSlider = n);
  }
function showSlider(n){
    var vitri = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    for(var i = 0 ; i< vitri.length;i++){
        vitri[i].style.display = "none";
    }
    // for(var j = 0; j< dots.length;j++ ){
    //     dots[j].className = dots.className.replace(" changedots","");
    // }
    indexSlider++;
    if(indexSlider > vitri.length){
        indexSlider = 1;
    }
    // if(indexSlider < 1){
    //     indexSlider = vitri.length;
    // }
    vitri[indexSlider-1].style.display = "block";
    //dots[indexSlider-1].className += " changedots";
    setTimeout(showSlider, 1000); 


}