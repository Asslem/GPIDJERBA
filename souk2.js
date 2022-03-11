///////////////////////////////////////////////////////////// houmt souk2  2022 ////////////////////////////////////////////////////////////////////////
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









let containers1=document.querySelector('.containers1');
let containersmap1=document.querySelector('.containers1_map');
let date1=new Date();
var month=date1.getMonth();
var day=date1.getDate();
var year=date1.getFullYear();







if (month == "2" && day == "26" || month == "2" && day == "27") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Anane Hatem</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5787807924758!2d10.889908815080675!3d33.87474483451064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa3618eaf8413%3A0xc4149c27d7a057f3!2sPharmacie%20HATEM%20ANANE!5e0!3m2!1sen!2stn!4v1646487621685!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "2" || month == "3" && day == "3") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Hadj Brahim Mohsen</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.49742717502613!2d10.84453285527887!3d33.888889509003185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5cf4302d68b%3A0x1f28ff9eb617211a!2sPharmacie%20Haj%20Brahim!5e0!3m2!1sen!2stn!4v1646487734099!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "9" || month == "3" && day == "10") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Khalfala Echrak </h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53017.76018673859!2d10.8199255738173!3d33.84816668433978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5b1a7a8d6e3%3A0x498ec84e351e68ae!2skhalfallah%20ichrak!5e0!3m2!1sen!2stn!4v1646487822652!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "16" || month == "3" && day == "17") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Salwa</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4945301399916!2d10.872549815080761!3d33.87691543439679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4914a6df7ff%3A0xcbcb550a62d31bbf!2sPharmacie%20Saloua%20Rojbi%20Ben%20Younes!5e0!3m2!1sen!2stn!4v1646487885387!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "23" || month == "3" && day == "24") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Dali Sihem</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.680461910259!2d10.856010072323187!3d33.87212499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c2a49cfe7d%3A0xbf67dc03db7a4f1e!2sPharmacie!5e0!3m2!1sen!2stn!4v1646488060163!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "30" || month == "4" && day == "1") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Guerfala Rim </h2>");
    containersmap1.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.8317394451656!2d10.853260490450717!3d33.86915636466037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5d8a1904eb7%3A0xdb3f697a724c5a80!2sPharmacie%20CHEFIA%20Guerfala%20Rim!5e0!3m2!1sen!2stn!4v1646488149570!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "7" || month == "4" && day == "8") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Baccar Samir </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8788943199943!2d10.862312915080485!3d33.867011834916184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c1294d2db3%3A0xb87258b54d1c9518!2sPharmacie%20Samir%20Baccar!5e0!3m2!1sen!2stn!4v1646486246967!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "14" || month == "4" && day == "15") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boubguira Adel</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.402204503704!2d10.86015691508079!3d33.87929393427209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4ec217a862d%3A0xa07239aabab9206!2sPharmacie%20Boubguira%20Adel!5e0!3m2!1sen!2stn!4v1646488260988!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "21" || month == "4" && day == "22") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Borgi Mongi</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.280795652699!2d10.857644175434825!3d33.873157280507336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e937106109%3A0xcb5885c21871e9ed!2sPharmacie%20El%20Borgi!5e0!3m2!1sen!2stn!4v1646488348011!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}












if (month == "4" && day == "28" || month == "4" && day == "29") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Anane Hatem</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5787807924758!2d10.889908815080675!3d33.87474483451064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa3618eaf8413%3A0xc4149c27d7a057f3!2sPharmacie%20HATEM%20ANANE!5e0!3m2!1sen!2stn!4v1646487621685!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "4" || month == "5" && day == "5") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Hadj Brahim Mohsen</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.49742717502613!2d10.84453285527887!3d33.888889509003185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5cf4302d68b%3A0x1f28ff9eb617211a!2sPharmacie%20Haj%20Brahim!5e0!3m2!1sen!2stn!4v1646487734099!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "11" || month == "5" && day == "12") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boubguira Adel</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.402204503704!2d10.86015691508079!3d33.87929393427209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4ec217a862d%3A0xa07239aabab9206!2sPharmacie%20Boubguira%20Adel!5e0!3m2!1sen!2stn!4v1646488260988!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "18" || month == "5" && day == "19") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Khalfala Echrak </h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53017.76018673859!2d10.8199255738173!3d33.84816668433978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5b1a7a8d6e3%3A0x498ec84e351e68ae!2skhalfallah%20ichrak!5e0!3m2!1sen!2stn!4v1646487822652!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "25" || month == "5" && day == "26") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Salwa</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4945301399916!2d10.872549815080761!3d33.87691543439679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4914a6df7ff%3A0xcbcb550a62d31bbf!2sPharmacie%20Saloua%20Rojbi%20Ben%20Younes!5e0!3m2!1sen!2stn!4v1646487885387!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "2" || month == "6" && day == "3") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Dali Sihem</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.680461910259!2d10.856010072323187!3d33.87212499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c2a49cfe7d%3A0xbf67dc03db7a4f1e!2sPharmacie!5e0!3m2!1sen!2stn!4v1646488060163!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "9" || month == "6" && day == "10") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Guerfala Rim </h2>");
    containersmap1.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.8317394451656!2d10.853260490450717!3d33.86915636466037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5d8a1904eb7%3A0xdb3f697a724c5a80!2sPharmacie%20CHEFIA%20Guerfala%20Rim!5e0!3m2!1sen!2stn!4v1646488149570!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "16" || month == "6" && day == "17") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Saber </h2>");
    containersmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6682681297407!2d10.85720646508061!3d33.87243918463169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa568e46b2953%3A0xe7dda89cbc2d1d41!2sLabassi%20Saber%20Pharmacy!5e0!3m2!1sen!2stn!4v1646485811218!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "23" || month == "6" && day == "24") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Borgi Mongi</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.280795652699!2d10.857644175434825!3d33.873157280507336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e937106109%3A0xcb5885c21871e9ed!2sPharmacie%20El%20Borgi!5e0!3m2!1sen!2stn!4v1646488348011!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "30" || month == "6" && day == "31") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Aroua Ahlem </h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7877838572394!2d10.860155715080586!3d33.86935963479316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c17f18a703%3A0x44931c7071096b3e!2sPharmacie%20Aroua!5e0!3m2!1sen!2stn!4v1646486064262!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}











if (month == "7" && day == "6" || month == "7" && day == "7") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Anane Hatem</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5787807924758!2d10.889908815080675!3d33.87474483451064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa3618eaf8413%3A0xc4149c27d7a057f3!2sPharmacie%20HATEM%20ANANE!5e0!3m2!1sen!2stn!4v1646487621685!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "13" || month == "7" && day == "14") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Hadj Brahim Mohsen</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.49742717502613!2d10.84453285527887!3d33.888889509003185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5cf4302d68b%3A0x1f28ff9eb617211a!2sPharmacie%20Haj%20Brahim!5e0!3m2!1sen!2stn!4v1646487734099!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "20" || month == "7" && day == "21") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Khalfala Echrak </h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53017.76018673859!2d10.8199255738173!3d33.84816668433978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5b1a7a8d6e3%3A0x498ec84e351e68ae!2skhalfallah%20ichrak!5e0!3m2!1sen!2stn!4v1646487822652!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "27" || month == "7" && day == "28") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Salwa</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4945301399916!2d10.872549815080761!3d33.87691543439679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4914a6df7ff%3A0xcbcb550a62d31bbf!2sPharmacie%20Saloua%20Rojbi%20Ben%20Younes!5e0!3m2!1sen!2stn!4v1646487885387!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "3" || month == "8" && day == "4") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Dali Sihem</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.680461910259!2d10.856010072323187!3d33.87212499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c2a49cfe7d%3A0xbf67dc03db7a4f1e!2sPharmacie!5e0!3m2!1sen!2stn!4v1646488060163!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "10" || month == "8" && day == "11") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Guerfala Rim </h2>");
    containersmap1.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.8317394451656!2d10.853260490450717!3d33.86915636466037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5d8a1904eb7%3A0xdb3f697a724c5a80!2sPharmacie%20CHEFIA%20Guerfala%20Rim!5e0!3m2!1sen!2stn!4v1646488149570!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "17" || month == "8" && day == "18") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Baccar Samir </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8788943199943!2d10.862312915080485!3d33.867011834916184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c1294d2db3%3A0xb87258b54d1c9518!2sPharmacie%20Samir%20Baccar!5e0!3m2!1sen!2stn!4v1646486246967!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "24" || month == "8" && day == "25") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boubguira Adel</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.402204503704!2d10.86015691508079!3d33.87929393427209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4ec217a862d%3A0xa07239aabab9206!2sPharmacie%20Boubguira%20Adel!5e0!3m2!1sen!2stn!4v1646488260988!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "1" || month == "9" && day == "2") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Borgi Mongi</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.280795652699!2d10.857644175434825!3d33.873157280507336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e937106109%3A0xcb5885c21871e9ed!2sPharmacie%20El%20Borgi!5e0!3m2!1sen!2stn!4v1646488348011!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}










if (month == "9" && day == "8" || month == "9" && day == "9") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Anane Hatem</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5787807924758!2d10.889908815080675!3d33.87474483451064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa3618eaf8413%3A0xc4149c27d7a057f3!2sPharmacie%20HATEM%20ANANE!5e0!3m2!1sen!2stn!4v1646487621685!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "15" || month == "9" && day == "16") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Hadj Brahim Mohsen</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.49742717502613!2d10.84453285527887!3d33.888889509003185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5cf4302d68b%3A0x1f28ff9eb617211a!2sPharmacie%20Haj%20Brahim!5e0!3m2!1sen!2stn!4v1646487734099!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "22" || month == "9" && day == "23") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boubguira Adel</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.402204503704!2d10.86015691508079!3d33.87929393427209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4ec217a862d%3A0xa07239aabab9206!2sPharmacie%20Boubguira%20Adel!5e0!3m2!1sen!2stn!4v1646488260988!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "29" || month == "9" && day == "30") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Khalfala Echrak </h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53017.76018673859!2d10.8199255738173!3d33.84816668433978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5b1a7a8d6e3%3A0x498ec84e351e68ae!2skhalfallah%20ichrak!5e0!3m2!1sen!2stn!4v1646487822652!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "5" || month == "10" && day == "6") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Rojbi Salwa</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4945301399916!2d10.872549815080761!3d33.87691543439679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4914a6df7ff%3A0xcbcb550a62d31bbf!2sPharmacie%20Saloua%20Rojbi%20Ben%20Younes!5e0!3m2!1sen!2stn!4v1646487885387!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "12" || month == "10" && day == "13") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Dali Sihem</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.680461910259!2d10.856010072323187!3d33.87212499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c2a49cfe7d%3A0xbf67dc03db7a4f1e!2sPharmacie!5e0!3m2!1sen!2stn!4v1646488060163!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "19" || month == "10" && day == "20") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Guerfala Rim </h2>");
    containersmap1.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.8317394451656!2d10.853260490450717!3d33.86915636466037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5d8a1904eb7%3A0xdb3f697a724c5a80!2sPharmacie%20CHEFIA%20Guerfala%20Rim!5e0!3m2!1sen!2stn!4v1646488149570!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "26" || month == "10" && day == "27") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Saber </h2>");
    containersmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6682681297407!2d10.85720646508061!3d33.87243918463169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa568e46b2953%3A0xe7dda89cbc2d1d41!2sLabassi%20Saber%20Pharmacy!5e0!3m2!1sen!2stn!4v1646485811218!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "3" || month == "11" && day == "4") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Borgi Mongi</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.280795652699!2d10.857644175434825!3d33.873157280507336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e937106109%3A0xcb5885c21871e9ed!2sPharmacie%20El%20Borgi!5e0!3m2!1sen!2stn!4v1646488348011!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "10" || month == "11" && day == "11") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Aroua Ahlem </h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7877838572394!2d10.860155715080586!3d33.86935963479316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c17f18a703%3A0x44931c7071096b3e!2sPharmacie%20Aroua!5e0!3m2!1sen!2stn!4v1646486064262!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}







if (month == "11" && day == "17" || month == "11" && day == "18") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Anane Hatem</h2>");
    containersmap1.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5787807924758!2d10.889908815080675!3d33.87474483451064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa3618eaf8413%3A0xc4149c27d7a057f3!2sPharmacie%20HATEM%20ANANE!5e0!3m2!1sen!2stn!4v1646487621685!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "24" || month == "11" && day == "25") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Hadj Brahim Mohsen</h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.49742717502613!2d10.84453285527887!3d33.888889509003185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5cf4302d68b%3A0x1f28ff9eb617211a!2sPharmacie%20Haj%20Brahim!5e0!3m2!1sen!2stn!4v1646487734099!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "31" || month == "0" && day == "1" && year == "2023") {
    containers1.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Khalfala Echrak </h2>");
    containersmap1.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53017.76018673859!2d10.8199255738173!3d33.84816668433978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5b1a7a8d6e3%3A0x498ec84e351e68ae!2skhalfallah%20ichrak!5e0!3m2!1sen!2stn!4v1646487822652!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}