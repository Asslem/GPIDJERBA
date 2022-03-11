///////////////////////////////////////////////////////// Midoune1 2022 /////////////////////////////////////////////////////////

function darck() {
    const audio3 = new Audio();
    audio3.src = "calme.mp3";
    audio3.play();
    const moon = document.querySelector('#moon');
    const sun = document.querySelector('#sun');
    const body = document.querySelector('body');
    const t = document.querySelector('.grand_titre');
    const tx = document.querySelector('.petit_titre8');
    body.style.backgroundColor = "rgba(0,0,0,0.3)";
    moon.style.transform = "rotateZ(640deg)";
    moon.style.zIndex = "-2"
    sun.style.zIndex = "2"
    sun.style.transform = "rotateZ(640deg)";
    t.style.opacity = "1"
    tx.style.opacity = "1"
    t.style.transform = "translateY(0%) translateX(-2.5em)"
    tx.style.transform = "translateX(0%) translateY(5em)"
    t.style.transition = "1s";
    tx.style.transition = "1s";
}
function white() {
    const audio3 = new Audio();
    audio3.src = "calme.mp3";
    audio3.play();
    const moon = document.querySelector('#moon');
    const sun = document.querySelector('#sun');
    const body = document.querySelector('body');
    const t = document.querySelector('.grand_titre');
    const tx = document.querySelector('.petit_titre8');
    body.style.backgroundColor = "white";
    moon.style.transform = "rotateZ(-400deg)";
    sun.style.zIndex = "-2"
    moon.style.zIndex = "2"
    sun.style.transform = "rotateZ(-400deg)";
    t.style.transform = "translateY(-100%)"
    tx.style.transform = "translateX(-120%)"
    t.style.opacity = "0"
    tx.style.opacity = "0"
    t.style.transition = "1s";
    tx.style.transition = "1s";
}
function debut() {
    const t = document.querySelector('.grand_titre');
    const tx = document.querySelector('.petit_titre8');
    t.style.transform = "translateY(-100%)"
    tx.style.transform = "translateX(-120%)"
    t.style.opacity = "0"
    tx.style.opacity = "0"
}
function translate(){
    const t = document.querySelector('.grand_titre');
    const box=document.querySelector('.box');
    t.style.transform = "translateX(-50%)";
    box.style.transform = "translateX(50%)";
    t.style.opacity = "1";
    box.style.opacity = "1";
    t.style.transition = "1s";
    box.style.transition = "1s";
}
function translate1(){
    const t = document.querySelector('.grand_titre');
    t.style.transform = "translateX(-50%)";
    t.style.opacity = "1";
    t.style.transition = "1s";
}

function translate3(){
    const tx1=document.querySelector('.petit_titre8');
    tx1.style.transform = "translateX(0%)";
    tx1.style.opacity = "1";
    tx1.style.transition = "1s";
}













let containerm = document.querySelector('.containerm');
let containermmap = document.querySelector('.containerm_map');
let date1=new Date();
var month=date1.getMonth();
var day=date1.getDate();
var year=date1.getFullYear();









if (month == "2" && day == "26" || month == "2" && day == "27") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ourir</h2>");
    containermmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1961971051564!2d10.986977815079127!3d33.80724963804855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97da5ff5ea7f%3A0x28c0c84e3edf04af!2sPharmacie%20Ourir!5e0!3m2!1sen!2stn!4v1644669232545!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "2" || month == "3" && day == "3") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Satouri Mongi</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1227498441626!2d10.98766791507916!3d33.809145237949316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97db0551a139%3A0xf3bad300bf58ed09!2sPharmacie%20SATOURI%20Mongi!5e0!3m2!1sen!2stn!4v1644670220158!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "9" || month == "3" && day == "10") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Zouaoui </h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9682608527373!2d10.988362415079296!3d33.81313213774044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97122ef7873f%3A0x40b3c2394e29aa9!2sPharmacie%20Kods%20Zouaoui%20Jamaa!5e0!3m2!1sen!2stn!4v1644670388765!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")

}

if (month == "3" && day == "16" || month == "3" && day == "17") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Hamdane</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.184523123319!2d10.98818491507909!3d33.80755093803274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa970688d11d1f%3A0x9eef92956f6ecb11!2sPHARMACIE%20LABASSI%20HAMDAN!5e0!3m2!1sen!2stn!4v1644670735290!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "23" || month == "3" && day == "24") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Daghssen Safa</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1111217824946!2d10.991123615079166!3d33.80944533793348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4c046be8b%3A0xd501d1fe86eca84a!2zUGhhcm1hY2llIEVTU0FGQSDYtdmK2K_ZhNmK2Kkg2KfZhNi12YHYp9ih!5e0!3m2!1sen!2stn!4v1644670937794!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "30" || month == "4" && day == "1") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Bouziri Insaf </h2>");
    containermmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.2652239935137!2d10.989597415079064!3d33.8054680381419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97d0009223c9%3A0x8ccded1c0a331d01!2sPharmacie%20Bouziri%20Insaf%20Ep%20Ben%20Haj%20Yahya!5e0!3m2!1sen!2stn!4v1644671055130!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "7" || month == "4" && day == "8") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Moez</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.423249851718!2d10.985359914741865!3d33.84171556371222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa98039a3d1b33%3A0x94fba8d22a833e44!2sPharmacy%20Rojbi%20Moez!5e0!3m2!1sen!2stn!4v1644671534090!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "4" && day == "14" || month == "4" && day == "15") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ourir</h2>");
    containermmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1961971051564!2d10.986977815079127!3d33.80724963804855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97da5ff5ea7f%3A0x28c0c84e3edf04af!2sPharmacie%20Ourir!5e0!3m2!1sen!2stn!4v1644669232545!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "21" || month == "4" && day == "22") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Satouri Mongi</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1227498441626!2d10.98766791507916!3d33.809145237949316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97db0551a139%3A0xf3bad300bf58ed09!2sPharmacie%20SATOURI%20Mongi!5e0!3m2!1sen!2stn!4v1644670220158!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "28" || month == "4" && day == "29") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Zouaoui </h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9682608527373!2d10.988362415079296!3d33.81313213774044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97122ef7873f%3A0x40b3c2394e29aa9!2sPharmacie%20Kods%20Zouaoui%20Jamaa!5e0!3m2!1sen!2stn!4v1644670388765!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")

}

if (month == "5" && day == "4" || month == "5" && day == "5") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Hamdane</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.184523123319!2d10.98818491507909!3d33.80755093803274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa970688d11d1f%3A0x9eef92956f6ecb11!2sPHARMACIE%20LABASSI%20HAMDAN!5e0!3m2!1sen!2stn!4v1644670735290!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "11" || month == "5" && day == "12") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Daghssen Safa</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1111217824946!2d10.991123615079166!3d33.80944533793348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4c046be8b%3A0xd501d1fe86eca84a!2zUGhhcm1hY2llIEVTU0FGQSDYtdmK2K_ZhNmK2Kkg2KfZhNi12YHYp9ih!5e0!3m2!1sen!2stn!4v1644670937794!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "18" || month == "5" && day == "19") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Bouziri Insaf </h2>");
    containermmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.2652239935137!2d10.989597415079064!3d33.8054680381419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97d0009223c9%3A0x8ccded1c0a331d01!2sPharmacie%20Bouziri%20Insaf%20Ep%20Ben%20Haj%20Yahya!5e0!3m2!1sen!2stn!4v1644671055130!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "25" || month == "5" && day == "26") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Moez</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.423249851718!2d10.985359914741865!3d33.84171556371222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa98039a3d1b33%3A0x94fba8d22a833e44!2sPharmacy%20Rojbi%20Moez!5e0!3m2!1sen!2stn!4v1644671534090!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "6" && day == "2" || month == "6" && day == "3") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ourir</h2>");
    containermmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1961971051564!2d10.986977815079127!3d33.80724963804855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97da5ff5ea7f%3A0x28c0c84e3edf04af!2sPharmacie%20Ourir!5e0!3m2!1sen!2stn!4v1644669232545!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "9" || month == "6" && day == "10") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Satouri Mongi</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1227498441626!2d10.98766791507916!3d33.809145237949316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97db0551a139%3A0xf3bad300bf58ed09!2sPharmacie%20SATOURI%20Mongi!5e0!3m2!1sen!2stn!4v1644670220158!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "16" || month == "6" && day == "17") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Zouaoui </h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9682608527373!2d10.988362415079296!3d33.81313213774044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97122ef7873f%3A0x40b3c2394e29aa9!2sPharmacie%20Kods%20Zouaoui%20Jamaa!5e0!3m2!1sen!2stn!4v1644670388765!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")

}

if (month == "6" && day == "23" || month == "6" && day == "24") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Hamdane</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.184523123319!2d10.98818491507909!3d33.80755093803274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa970688d11d1f%3A0x9eef92956f6ecb11!2sPHARMACIE%20LABASSI%20HAMDAN!5e0!3m2!1sen!2stn!4v1644670735290!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "30" || month == "6" && day == "31") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Daghssen Safa</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1111217824946!2d10.991123615079166!3d33.80944533793348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4c046be8b%3A0xd501d1fe86eca84a!2zUGhhcm1hY2llIEVTU0FGQSDYtdmK2K_ZhNmK2Kkg2KfZhNi12YHYp9ih!5e0!3m2!1sen!2stn!4v1644670937794!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "6" || month == "7" && day == "7") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Bouziri Insaf </h2>");
    containermmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.2652239935137!2d10.989597415079064!3d33.8054680381419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97d0009223c9%3A0x8ccded1c0a331d01!2sPharmacie%20Bouziri%20Insaf%20Ep%20Ben%20Haj%20Yahya!5e0!3m2!1sen!2stn!4v1644671055130!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "13" || month == "7" && day == "14") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Moez</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.423249851718!2d10.985359914741865!3d33.84171556371222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa98039a3d1b33%3A0x94fba8d22a833e44!2sPharmacy%20Rojbi%20Moez!5e0!3m2!1sen!2stn!4v1644671534090!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "7" && day == "20" || month == "7" && day == "21") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ourir</h2>");
    containermmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1961971051564!2d10.986977815079127!3d33.80724963804855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97da5ff5ea7f%3A0x28c0c84e3edf04af!2sPharmacie%20Ourir!5e0!3m2!1sen!2stn!4v1644669232545!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "27" || month == "7" && day == "28") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Satouri Mongi</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1227498441626!2d10.98766791507916!3d33.809145237949316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97db0551a139%3A0xf3bad300bf58ed09!2sPharmacie%20SATOURI%20Mongi!5e0!3m2!1sen!2stn!4v1644670220158!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "3" || month == "8" && day == "4") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Zouaoui </h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9682608527373!2d10.988362415079296!3d33.81313213774044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97122ef7873f%3A0x40b3c2394e29aa9!2sPharmacie%20Kods%20Zouaoui%20Jamaa!5e0!3m2!1sen!2stn!4v1644670388765!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")

}

if (month == "8" && day == "10" || month == "8" && day == "11") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Hamdane</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.184523123319!2d10.98818491507909!3d33.80755093803274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa970688d11d1f%3A0x9eef92956f6ecb11!2sPHARMACIE%20LABASSI%20HAMDAN!5e0!3m2!1sen!2stn!4v1644670735290!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "17" || month == "8" && day == "18") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Daghssen Safa</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1111217824946!2d10.991123615079166!3d33.80944533793348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4c046be8b%3A0xd501d1fe86eca84a!2zUGhhcm1hY2llIEVTU0FGQSDYtdmK2K_ZhNmK2Kkg2KfZhNi12YHYp9ih!5e0!3m2!1sen!2stn!4v1644670937794!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "24" || month == "8" && day == "25") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Bouziri Insaf </h2>");
    containermmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.2652239935137!2d10.989597415079064!3d33.8054680381419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97d0009223c9%3A0x8ccded1c0a331d01!2sPharmacie%20Bouziri%20Insaf%20Ep%20Ben%20Haj%20Yahya!5e0!3m2!1sen!2stn!4v1644671055130!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "1" || month == "9" && day == "2") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Moez</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.423249851718!2d10.985359914741865!3d33.84171556371222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa98039a3d1b33%3A0x94fba8d22a833e44!2sPharmacy%20Rojbi%20Moez!5e0!3m2!1sen!2stn!4v1644671534090!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "9" && day == "8" || month == "9" && day == "9") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ourir</h2>");
    containermmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1961971051564!2d10.986977815079127!3d33.80724963804855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97da5ff5ea7f%3A0x28c0c84e3edf04af!2sPharmacie%20Ourir!5e0!3m2!1sen!2stn!4v1644669232545!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "15" || month == "9" && day == "16") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Satouri Mongi</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1227498441626!2d10.98766791507916!3d33.809145237949316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97db0551a139%3A0xf3bad300bf58ed09!2sPharmacie%20SATOURI%20Mongi!5e0!3m2!1sen!2stn!4v1644670220158!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "22" || month == "9" && day == "23") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Zouaoui </h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9682608527373!2d10.988362415079296!3d33.81313213774044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97122ef7873f%3A0x40b3c2394e29aa9!2sPharmacie%20Kods%20Zouaoui%20Jamaa!5e0!3m2!1sen!2stn!4v1644670388765!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")

}

if (month == "9" && day == "29" || month == "9" && day == "30") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Hamdane</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.184523123319!2d10.98818491507909!3d33.80755093803274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa970688d11d1f%3A0x9eef92956f6ecb11!2sPHARMACIE%20LABASSI%20HAMDAN!5e0!3m2!1sen!2stn!4v1644670735290!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "5" || month == "10" && day == "6") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Daghssen Safa</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1111217824946!2d10.991123615079166!3d33.80944533793348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4c046be8b%3A0xd501d1fe86eca84a!2zUGhhcm1hY2llIEVTU0FGQSDYtdmK2K_ZhNmK2Kkg2KfZhNi12YHYp9ih!5e0!3m2!1sen!2stn!4v1644670937794!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "12" || month == "10" && day == "13") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Bouziri Insaf </h2>");
    containermmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.2652239935137!2d10.989597415079064!3d33.8054680381419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97d0009223c9%3A0x8ccded1c0a331d01!2sPharmacie%20Bouziri%20Insaf%20Ep%20Ben%20Haj%20Yahya!5e0!3m2!1sen!2stn!4v1644671055130!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "19" || month == "10" && day == "20") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Moez</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.423249851718!2d10.985359914741865!3d33.84171556371222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa98039a3d1b33%3A0x94fba8d22a833e44!2sPharmacy%20Rojbi%20Moez!5e0!3m2!1sen!2stn!4v1644671534090!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "10" && day == "26" || month == "10" && day == "27") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ourir</h2>");
    containermmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1961971051564!2d10.986977815079127!3d33.80724963804855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97da5ff5ea7f%3A0x28c0c84e3edf04af!2sPharmacie%20Ourir!5e0!3m2!1sen!2stn!4v1644669232545!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "3" || month == "11" && day == "4") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Satouri Mongi</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1227498441626!2d10.98766791507916!3d33.809145237949316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97db0551a139%3A0xf3bad300bf58ed09!2sPharmacie%20SATOURI%20Mongi!5e0!3m2!1sen!2stn!4v1644670220158!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "10" || month == "11" && day == "11") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Zouaoui </h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9682608527373!2d10.988362415079296!3d33.81313213774044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97122ef7873f%3A0x40b3c2394e29aa9!2sPharmacie%20Kods%20Zouaoui%20Jamaa!5e0!3m2!1sen!2stn!4v1644670388765!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")

}

if (month == "11" && day == "17" || month == "11" && day == "18") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Hamdane</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.184523123319!2d10.98818491507909!3d33.80755093803274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa970688d11d1f%3A0x9eef92956f6ecb11!2sPHARMACIE%20LABASSI%20HAMDAN!5e0!3m2!1sen!2stn!4v1644670735290!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "24" || month == "11" && day == "25") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Daghssen Safa</h2>");
    containermmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1111217824946!2d10.991123615079166!3d33.80944533793348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4c046be8b%3A0xd501d1fe86eca84a!2zUGhhcm1hY2llIEVTU0FGQSDYtdmK2K_ZhNmK2Kkg2KfZhNi12YHYp9ih!5e0!3m2!1sen!2stn!4v1644670937794!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "31" || month == "0" && day == "1" && year == "2023") {
    containerm.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Bouziri Insaf </h2>");
    containermmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.2652239935137!2d10.989597415079064!3d33.8054680381419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97d0009223c9%3A0x8ccded1c0a331d01!2sPharmacie%20Bouziri%20Insaf%20Ep%20Ben%20Haj%20Yahya!5e0!3m2!1sen!2stn!4v1644671055130!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}
