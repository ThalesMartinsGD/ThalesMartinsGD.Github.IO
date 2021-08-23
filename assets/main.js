var links = document.links;
for (var i = 0; i < links.length; i++) {
    links[i].target = "_blank";
}

function openTab(evt, tabName, tabGroup) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(tabGroup);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(tabGroup + "links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}