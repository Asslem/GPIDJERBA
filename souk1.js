///////////////////////////////////////////////////////// Houmt Souk1 2022 /////////////////////////////////////////////////////////
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





let containers = document.querySelector('.containers');
let containersmap = document.querySelector('.containers_map');
let date1=new Date();
var month=date1.getMonth();
var day=date1.getDate();
var year=date1.getFullYear();



if (month == "2" && day == "26" || month == "2" && day == "27") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Kenissi Aouab</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6053191902934!2d10.856043965080657!3d33.874061084546476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8fccc78a1%3A0xf4d4e64360900f44!2zUGhhcm1hY2llIGRlIERqZXJiYSDYtdmK2K_ZhNmK2Kkg2K7ZhtmK2LPZig!5e0!3m2!1sen!2stn!4v1646485036761!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "2" || month == "3" && day == "3") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boumessouer Zekri</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.0343737446183!2d10.85543041618797!3d33.87244180603379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e7ed6e8e77%3A0x37e38481828091e8!2sPharmacie%20Boumessouer%20Zekri!5e0!3m2!1sen!2stn!4v1646485353839!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "9" || month == "3" && day == "10") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Abdelfatah </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7322874941046!2d10.858468915080577!3d33.87078963471805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa589198042e9%3A0x67fd827abe744cbb!2sPharmacie%20LABASSI%20ABDELFATTAH!5e0!3m2!1sen!2stn!4v1646485502768!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "16" || month == "3" && day == "17") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben ghorbal Abdelkrim</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.571608066637!2d10.855170115080686!3d33.87492963450092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8642dcbc9%3A0x188d81e94602134a!2spharmacie%20ben%20ghorbal!5e0!3m2!1sen!2stn!4v1646485685059!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "23" || month == "3" && day == "24") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Jrad Majid</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6619244531435!2d10.857639015080679!3d33.87260263462301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e9d650359f%3A0x5ba653955efd8ea5!2sPharmacie%20Jrad!5e0!3m2!1sen!2stn!4v1646485754336!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "3" && day == "30" || month == "4" && day == "1") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Saber </h2>");
    containersmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6682681297407!2d10.85720646508061!3d33.87243918463169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa568e46b2953%3A0xe7dda89cbc2d1d41!2sLabassi%20Saber%20Pharmacy!5e0!3m2!1sen!2stn!4v1646485811218!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "7" || month == "4" && day == "8") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Denguir Nouredine</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5032364421304!2d10.854699315080776!3d33.87669113440851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e89902f861%3A0x9334d64142790a88!2sPharmacie%20Denguir!5e0!3m2!1sen!2stn!4v1646485890439!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "14" || month == "4" && day == "15") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Msallem Raja</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.226485871046!2d10.860563525434934!3d33.8738569304339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5021294f5b9%3A0xc3f3b3765b62c7d3!2sPharmacie%20M%E2%80%99sallem!5e0!3m2!1sen!2stn!4v1646485956215!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "21" || month == "4" && day == "22") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Barouni Tarek</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.524344065121!2d10.85302331508079!3d33.87614733443717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e636f929ef%3A0xc580157da33d85ea!2sPharmacy%20Tarek%20Barouni!5e0!3m2!1sen!2stn!4v1646486008308!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "4" && day == "28" || month == "4" && day == "29") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Aroua Ahlem </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7877838572394!2d10.860155715080586!3d33.86935963479316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c17f18a703%3A0x44931c7071096b3e!2sPharmacie%20Aroua!5e0!3m2!1sen!2stn!4v1646486064262!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}








if (month == "5" && day == "4" || month == "5" && day == "5") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Kenissi Aouab</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6053191902934!2d10.856043965080657!3d33.874061084546476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8fccc78a1%3A0xf4d4e64360900f44!2zUGhhcm1hY2llIGRlIERqZXJiYSDYtdmK2K_ZhNmK2Kkg2K7ZhtmK2LPZig!5e0!3m2!1sen!2stn!4v1646485036761!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "11" || month == "5" && day == "12") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boumessouer Zekri</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.0343737446183!2d10.85543041618797!3d33.87244180603379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e7ed6e8e77%3A0x37e38481828091e8!2sPharmacie%20Boumessouer%20Zekri!5e0!3m2!1sen!2stn!4v1646485353839!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "18" || month == "5" && day == "19") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben ghorbal Abdelkrim</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.571608066637!2d10.855170115080686!3d33.87492963450092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8642dcbc9%3A0x188d81e94602134a!2spharmacie%20ben%20ghorbal!5e0!3m2!1sen!2stn!4v1646485685059!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "5" && day == "25" || month == "5" && day == "26") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Jrad Majid</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6619244531435!2d10.857639015080679!3d33.87260263462301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e9d650359f%3A0x5ba653955efd8ea5!2sPharmacie%20Jrad!5e0!3m2!1sen!2stn!4v1646485754336!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "2" || month == "6" && day == "3") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Abdelfatah </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7322874941046!2d10.858468915080577!3d33.87078963471805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa589198042e9%3A0x67fd827abe744cbb!2sPharmacie%20LABASSI%20ABDELFATTAH!5e0!3m2!1sen!2stn!4v1646485502768!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "9" || month == "6" && day == "10") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Denguir Nouredine</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5032364421304!2d10.854699315080776!3d33.87669113440851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e89902f861%3A0x9334d64142790a88!2sPharmacie%20Denguir!5e0!3m2!1sen!2stn!4v1646485890439!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "16" || month == "6" && day == "17") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Baccar Samir </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8788943199943!2d10.862312915080485!3d33.867011834916184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c1294d2db3%3A0xb87258b54d1c9518!2sPharmacie%20Samir%20Baccar!5e0!3m2!1sen!2stn!4v1646486246967!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "23" || month == "6" && day == "24") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Msallem Raja</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.226485871046!2d10.860563525434934!3d33.8738569304339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5021294f5b9%3A0xc3f3b3765b62c7d3!2sPharmacie%20M%E2%80%99sallem!5e0!3m2!1sen!2stn!4v1646485956215!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "6" && day == "30" || month == "6" && day == "31") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Barouni Tarek</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.524344065121!2d10.85302331508079!3d33.87614733443717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e636f929ef%3A0xc580157da33d85ea!2sPharmacy%20Tarek%20Barouni!5e0!3m2!1sen!2stn!4v1646486008308!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}











if (month == "7" && day == "6" || month == "7" && day == "7") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Kenissi Aouab</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6053191902934!2d10.856043965080657!3d33.874061084546476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8fccc78a1%3A0xf4d4e64360900f44!2zUGhhcm1hY2llIGRlIERqZXJiYSDYtdmK2K_ZhNmK2Kkg2K7ZhtmK2LPZig!5e0!3m2!1sen!2stn!4v1646485036761!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "13" || month == "7" && day == "14") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boumessouer Zekri</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.0343737446183!2d10.85543041618797!3d33.87244180603379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e7ed6e8e77%3A0x37e38481828091e8!2sPharmacie%20Boumessouer%20Zekri!5e0!3m2!1sen!2stn!4v1646485353839!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "7" && day == "20" || month == "7" && day == "21") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Abdelfatah </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7322874941046!2d10.858468915080577!3d33.87078963471805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa589198042e9%3A0x67fd827abe744cbb!2sPharmacie%20LABASSI%20ABDELFATTAH!5e0!3m2!1sen!2stn!4v1646485502768!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}
if (month == "7" && day == "27" || month == "7" && day == "28") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben ghorbal Abdelkrim</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.571608066637!2d10.855170115080686!3d33.87492963450092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8642dcbc9%3A0x188d81e94602134a!2spharmacie%20ben%20ghorbal!5e0!3m2!1sen!2stn!4v1646485685059!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "3" || month == "8" && day == "4") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Jrad Majid</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6619244531435!2d10.857639015080679!3d33.87260263462301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e9d650359f%3A0x5ba653955efd8ea5!2sPharmacie%20Jrad!5e0!3m2!1sen!2stn!4v1646485754336!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "10" || month == "8" && day == "11") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Saber </h2>");
    containersmap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6682681297407!2d10.85720646508061!3d33.87243918463169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa568e46b2953%3A0xe7dda89cbc2d1d41!2sLabassi%20Saber%20Pharmacy!5e0!3m2!1sen!2stn!4v1646485811218!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "17" || month == "8" && day == "18") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Denguir Nouredine</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5032364421304!2d10.854699315080776!3d33.87669113440851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e89902f861%3A0x9334d64142790a88!2sPharmacie%20Denguir!5e0!3m2!1sen!2stn!4v1646485890439!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "8" && day == "24" || month == "8" && day == "25") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Msallem Raja</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.226485871046!2d10.860563525434934!3d33.8738569304339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5021294f5b9%3A0xc3f3b3765b62c7d3!2sPharmacie%20M%E2%80%99sallem!5e0!3m2!1sen!2stn!4v1646485956215!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "1" || month == "9" && day == "2") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Barouni Tarek</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.524344065121!2d10.85302331508079!3d33.87614733443717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e636f929ef%3A0xc580157da33d85ea!2sPharmacy%20Tarek%20Barouni!5e0!3m2!1sen!2stn!4v1646486008308!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "8" || month == "9" && day == "9") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Aroua Ahlem </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7877838572394!2d10.860155715080586!3d33.86935963479316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c17f18a703%3A0x44931c7071096b3e!2sPharmacie%20Aroua!5e0!3m2!1sen!2stn!4v1646486064262!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}










if (month == "9" && day == "15" || month == "9" && day == "16") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Kenissi Aouab</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6053191902934!2d10.856043965080657!3d33.874061084546476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8fccc78a1%3A0xf4d4e64360900f44!2zUGhhcm1hY2llIGRlIERqZXJiYSDYtdmK2K_ZhNmK2Kkg2K7ZhtmK2LPZig!5e0!3m2!1sen!2stn!4v1646485036761!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "22" || month == "9" && day == "23") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boumessouer Zekri</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.0343737446183!2d10.85543041618797!3d33.87244180603379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e7ed6e8e77%3A0x37e38481828091e8!2sPharmacie%20Boumessouer%20Zekri!5e0!3m2!1sen!2stn!4v1646485353839!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "9" && day == "29" || month == "9" && day == "30") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben ghorbal Abdelkrim</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.571608066637!2d10.855170115080686!3d33.87492963450092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8642dcbc9%3A0x188d81e94602134a!2spharmacie%20ben%20ghorbal!5e0!3m2!1sen!2stn!4v1646485685059!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "5" || month == "10" && day == "6") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Jrad Majid</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6619244531435!2d10.857639015080679!3d33.87260263462301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e9d650359f%3A0x5ba653955efd8ea5!2sPharmacie%20Jrad!5e0!3m2!1sen!2stn!4v1646485754336!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "12" || month == "10" && day == "13") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Abdelfatah </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7322874941046!2d10.858468915080577!3d33.87078963471805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa589198042e9%3A0x67fd827abe744cbb!2sPharmacie%20LABASSI%20ABDELFATTAH!5e0!3m2!1sen!2stn!4v1646485502768!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "19" || month == "10" && day == "20") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Denguir Nouredine</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5032364421304!2d10.854699315080776!3d33.87669113440851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e89902f861%3A0x9334d64142790a88!2sPharmacie%20Denguir!5e0!3m2!1sen!2stn!4v1646485890439!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "10" && day == "26" || month == "10" && day == "27") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Baccar Samir </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8788943199943!2d10.862312915080485!3d33.867011834916184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4c1294d2db3%3A0xb87258b54d1c9518!2sPharmacie%20Samir%20Baccar!5e0!3m2!1sen!2stn!4v1646486246967!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "3" || month == "11" && day == "4") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Msallem Raja</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.226485871046!2d10.860563525434934!3d33.8738569304339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5021294f5b9%3A0xc3f3b3765b62c7d3!2sPharmacie%20M%E2%80%99sallem!5e0!3m2!1sen!2stn!4v1646485956215!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "10" || month == "11" && day == "11") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Barouni Tarek</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.524344065121!2d10.85302331508079!3d33.87614733443717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e636f929ef%3A0xc580157da33d85ea!2sPharmacy%20Tarek%20Barouni!5e0!3m2!1sen!2stn!4v1646486008308!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}






if (month == "11" && day == "17" || month == "11" && day == "18") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Kenissi Aouab</h2>");
    containersmap.innerHTML = (" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6053191902934!2d10.856043965080657!3d33.874061084546476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e8fccc78a1%3A0xf4d4e64360900f44!2zUGhhcm1hY2llIGRlIERqZXJiYSDYtdmK2K_ZhNmK2Kkg2K7ZhtmK2LPZig!5e0!3m2!1sen!2stn!4v1646485036761!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "24" || month == "11" && day == "25") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Boumessouer Zekri</h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.0343737446183!2d10.85543041618797!3d33.87244180603379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa4e7ed6e8e77%3A0x37e38481828091e8!2sPharmacie%20Boumessouer%20Zekri!5e0!3m2!1sen!2stn!4v1646485353839!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if (month == "11" && day == "31" || month == "0" && day == "1" && year == "2023") {
    containers.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Labassi Abdelfatah </h2>");
    containersmap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7322874941046!2d10.858468915080577!3d33.87078963471805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa589198042e9%3A0x67fd827abe744cbb!2sPharmacie%20LABASSI%20ABDELFATTAH!5e0!3m2!1sen!2stn!4v1646485502768!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}