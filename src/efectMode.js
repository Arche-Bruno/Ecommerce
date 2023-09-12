var svg = document.getElementById('changeMode');
var moon = document.getElementById('moon');
var summer = document.getElementById('summer');
var changeMode = true; 
var changeModeLigth = true;
var body = document.body;

function handleMode() {
  
  
  
  if (changeMode) {
    body.classList.add('dark-mode'); 
    moon.style.display="block"
    summer.style.display="none"
  }
}
function handleModeLigth(){

    if(changeModeLigth){
        body.classList.remove('dark-mode'); 
        moon.style.display="none"
        summer.style.display="block"
    }
    
}

svg.addEventListener('click', handleMode);
moon.addEventListener('click', handleModeLigth)