/////////////////////////////////////////////////////// elmay 2022 /////////////////////////////////////////////////////////////////

function darck() {
    const audio3 = new Audio();
    audio3.src = "calme.mp3";
    audio3.play();
    const moon = document.querySelector('#moon');
    const sun = document.querySelector('#sun');
    const body = document.querySelector('body');
    const t = document.querySelector('.grand_titre');
    const tx = document.querySelector('.petit_titre8');
    moon.style.transform = "rotateZ(640deg)";
    moon.style.zIndex = "-2"
    sun.style.zIndex = "2"
    sun.style.transform = "rotateZ(640deg)";
    t.style.opacity = "1"
    tx.style.opacity = "1"
    t.style.transform = "translateY(0%) translateX(-2.5em)"
    tx.style.transform = "translateX(0%) translateY(2em)"
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
let containerr = document.querySelector('.containerr');
let containermap = document.querySelector('.container_map');
let date1 = new Date();
var month = date1.getMonth();
var day = date1.getDate();
var year = date1.getFullYear();






if (month == "2" && day == "26" || month == "2" && day == "27") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "2" || month == "3" && day == "3") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "9" || month == "3" && day == "10") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "3" && day == "16" || month == "3" && day == "17") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "23" || month == "3" && day == "24") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "30" || month == "4" && day == "1") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "4" && day == "7" || month == "4" && day == "8") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "14" || month == "4" && day == "15") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "21" || month == "4" && day == "22") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}






if (month == "4" && day == "28" || month == "4" && day == "25") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "4" || month == "5" && day == "5") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "11" || month == "5" && day == "12") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "5" && day == "18" || month == "5" && day == "19") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "25" || month == "5" && day == "26") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "2" || month == "6" && day == "3") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "6" && day == "9" || month == "6" && day == "10") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "16" || month == "6" && day == "17") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "23" || month == "6" && day == "24") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "6" && day == "30" || month == "6" && day == "31") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "6" || month == "7" && day == "7") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "13" || month == "7" && day == "14") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "7" && day == "20" || month == "7" && day == "21") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "27" || month == "7" && day == "28") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "3" || month == "8" && day == "4") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "8" && day == "10" || month == "8" && day == "11") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "17" || month == "8" && day == "18") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "24" || month == "8" && day == "25") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "9" && day == "1" || month == "9" && day == "2") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "8" || month == "9" && day == "9") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "15" || month == "9" && day == "16") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "9" && day == "22" || month == "9" && day == "23") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "29" || month == "9" && day == "30") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "5" || month == "10" && day == "6") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "10" && day == "12" || month == "10" && day == "13") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "19" || month == "10" && day == "20") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "26" || month == "10" && day == "27") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "11" && day == "3" || month == "11" && day == "4") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "10" || month == "11" && day == "11") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "17" || month == "11" && day == "18") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hamouda </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.5913333738497!2d10.882654527066757!3d33.80286977101223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb826a80d3f5%3A0x1e9ffbaa802b5ced!2sPharmacie%20Ben%20Hammouda!5e0!3m2!1sen!2stn!4v1644402749470!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "11" && day == "24" || month == "11" && day == "25") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Knis</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.127107719671!2d10.88269281354421!3d33.801085537971005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb83c3eaea69%3A0xe719dc56a3a2f53!2sPharmacie%20Knis!5e0!3m2!1sen!2stn!4v1644600980319!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "30" || month == "0" && day == "1" && year == "2023") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Amara Jamel</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.1245352390563!2d10.883067375948794!3d33.801199663479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabb818796ffe5%3A0x6291d8f935857610!2z2LXZitiv2YTZitip!5e0!3m2!1sen!2stn!4v1644603630327!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}










