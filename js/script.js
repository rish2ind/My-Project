//------------------------------------- Geography Section ----------------------------------//
function myFun(){
    var x = document.getElementById('mor');
    var y = document.getElementById('btn');
    var z = document.getElementById('dots');
    if(x.style.display === 'none'){
        x.style.display = 'inline';
        y.innerHTML = 'Read Less';
        z.style.display = 'none';
    }
    else{
        x.style.display = 'none';
        y.innerHTML = 'Read More';
        z.style.display = 'inline';
    }
}
//------------------------------------- Biodiversity Section -------------------------------//
function myFunc(){
    var x = document.getElementById('more');
    var y = document.getElementById('myBtn');
    if(x.style.display === 'none'){
        x.style.display = 'inline';
        y.innerHTML = 'Read Less';
    }
    else{
        x.style.display = 'none';
        y.innerHTML = 'Read More';
    }
}
//------------------------------------ Culture Section -------------------------------------//
function myFunct(){
    var x = document.getElementById('mores');
    var y = document.getElementById('myBtns');
    if(x.style.display === 'none'){
        x.style.display = 'inline';
        y.innerHTML = 'Read Less';
    }
    else{
        x.style.display = 'none';
        y.innerHTML = 'Read More';
    }
}