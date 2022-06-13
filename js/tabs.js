function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablink");
    
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("tab-active");
        var target = tablinks[i].dataset.target;
        document.getElementById(target).classList.remove('active');
    }

    evt.classList.add('tab-active');
    var target = evt.dataset.target;
    document.getElementById(target).classList.add('active');
}

function Tablinks(){
    var theme = window.location.hash.substring(1);
    var li = document.getElementById(theme+"_link")
    if (theme && li){
        openCity(li, theme);
    }
}

window.onload=Tablinks