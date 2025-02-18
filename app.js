const darkToggle = document.getElementsByClassName("theme-toggle")[0];
const body = document.body;

// handle button click darkmode
darkToggle.onclick = () => {
    if(body.classList.contains('light')){
        toggleToDark();
        localStorage.setItem('isDark', true);
    }
    else{
        toggleToLight();
        localStorage.removeItem('isDark');
    }
}

function toggleToDark(){
    body.classList.remove('light');
    body.classList.add('dark');
}

function toggleToLight(){
    body.classList.remove('dark');
    body.classList.add('light');
}

// apply cached theme on reload
const isDark = localStorage.getItem('isDark');

if(isDark){
    toggleToDark();
}
