///////////////////////////////////////////////////////////// Midoune2 2022///////////////////////////////////////////////////////////////

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


let containerm1=document.querySelector('.containerm1');
let containermmap1=document.querySelector('.containerm1_map');
let date1=new Date();
var month=date1.getMonth();
var day=date1.getDate();
var year=date1.getFullYear();



if(month=="2" && day=="26" || month=="2" && day=="27"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Jaballah Maher</h2>");
    containermmap1.innerHTML=(" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20152.68790290919!2d10.971960193085078!3d33.82861885548762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9730747ea8ad%3A0xae185b634c05f6e8!2sPharmacie%20Maher%20Jaballah!5e0!3m2!1sen!2stn!4v1645378430144!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="3" && day=="2" || month=="3" && day=="3"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Slim Chokri</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.912330245491!2d10.981943315079286!3d33.814575437664864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97de57c3b1ed%3A0x709a515b1b68dbe!2sPharmacie%20Slim!5e0!3m2!1sen!2stn!4v1645381646895!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="3" && day=="9" || month=="3" && day=="10"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Gaied Amira </h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.96347210446!2d10.990191215079943!3d33.839052636382554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa981d517e18f5%3A0xd21169d7c2d8f38!2spharmacie%20djerba%20la%20douce!5e0!3m2!1sen!2stn!4v1645382590164!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="3" && day=="16" || month=="3" && day=="17"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Gana Chiraz</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.801354097647!2d10.981118915079394!3d33.81743903751485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97e07f0d5087%3A0xd5c2637f23e721b0!2spharmacie%20chiraz%20gana!5e0!3m2!1sen!2stn!4v1646040962210!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="3" && day=="23" || month=="3" && day=="24"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Labassi Sami</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.01610614563!2d10.98503731507923!3d33.811897437805186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97dc0f20de77%3A0xc7097b3d7c7f3b95!2spharmacie%20sami%20labassi!5e0!3m2!1sen!2stn!4v1646041504292!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="3" && day=="30" || month=="4" && day=="1"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Said Afif </h2>");
    containermmap1.innerHTML=("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.964932123996!2d10.983132115079233!3d33.81321803773592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9757855ace13%3A0xc8087d66a43f4e67!2spharmacie%20Ben%20Said%20Afif%20%22%20pharmacie%20la%20libert%C3%A9%20%22!5e0!3m2!1sen!2stn!4v1646041730216!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="4" && day=="7" || month=="4" && day=="8"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Chafia</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.888900974739!2d10.992525377694575!3d33.80917749377283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4403a4f13%3A0x80c23857a281462e!2sPHARMACIE%20CHAFIA%20MIDOUN!5e0!3m2!1sen!2stn!4v1646042102632!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}




if(month=="4" && day=="14" || month=="4" && day=="15"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Jaballah Maher</h2>");
    containermmap1.innerHTML=(" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20152.68790290919!2d10.971960193085078!3d33.82861885548762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9730747ea8ad%3A0xae185b634c05f6e8!2sPharmacie%20Maher%20Jaballah!5e0!3m2!1sen!2stn!4v1645378430144!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="4" && day=="21" || month=="4" && day=="22"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Slim Chokri</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.912330245491!2d10.981943315079286!3d33.814575437664864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97de57c3b1ed%3A0x709a515b1b68dbe!2sPharmacie%20Slim!5e0!3m2!1sen!2stn!4v1645381646895!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="4" && day=="28" || month=="4" && day=="29"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Gaied Amira </h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.96347210446!2d10.990191215079943!3d33.839052636382554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa981d517e18f5%3A0xd21169d7c2d8f38!2spharmacie%20djerba%20la%20douce!5e0!3m2!1sen!2stn!4v1645382590164!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="5" && day=="4" || month=="5" && day=="5"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Gana Chiraz</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.801354097647!2d10.981118915079394!3d33.81743903751485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97e07f0d5087%3A0xd5c2637f23e721b0!2spharmacie%20chiraz%20gana!5e0!3m2!1sen!2stn!4v1646040962210!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="5" && day=="11" || month=="5" && day=="12"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Labassi Sami</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.01610614563!2d10.98503731507923!3d33.811897437805186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97dc0f20de77%3A0xc7097b3d7c7f3b95!2spharmacie%20sami%20labassi!5e0!3m2!1sen!2stn!4v1646041504292!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="5" && day=="18" || month=="5" && day=="19"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Said Afif </h2>");
    containermmap1.innerHTML=("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.964932123996!2d10.983132115079233!3d33.81321803773592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9757855ace13%3A0xc8087d66a43f4e67!2spharmacie%20Ben%20Said%20Afif%20%22%20pharmacie%20la%20libert%C3%A9%20%22!5e0!3m2!1sen!2stn!4v1646041730216!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="5" && day=="25" || month=="5" && day=="26"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Chafia</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.888900974739!2d10.992525377694575!3d33.80917749377283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4403a4f13%3A0x80c23857a281462e!2sPHARMACIE%20CHAFIA%20MIDOUN!5e0!3m2!1sen!2stn!4v1646042102632!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}





if(month=="6" && day=="2" || month=="6" && day=="3"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Jaballah Maher</h2>");
    containermmap1.innerHTML=(" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20152.68790290919!2d10.971960193085078!3d33.82861885548762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9730747ea8ad%3A0xae185b634c05f6e8!2sPharmacie%20Maher%20Jaballah!5e0!3m2!1sen!2stn!4v1645378430144!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="6" && day=="9" || month=="6" && day=="10"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Slim Chokri</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.912330245491!2d10.981943315079286!3d33.814575437664864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97de57c3b1ed%3A0x709a515b1b68dbe!2sPharmacie%20Slim!5e0!3m2!1sen!2stn!4v1645381646895!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="6" && day=="16" || month=="6" && day=="17"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Gaied Amira </h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.96347210446!2d10.990191215079943!3d33.839052636382554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa981d517e18f5%3A0xd21169d7c2d8f38!2spharmacie%20djerba%20la%20douce!5e0!3m2!1sen!2stn!4v1645382590164!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="6" && day=="23" || month=="6" && day=="24"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Gana Chiraz</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.801354097647!2d10.981118915079394!3d33.81743903751485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97e07f0d5087%3A0xd5c2637f23e721b0!2spharmacie%20chiraz%20gana!5e0!3m2!1sen!2stn!4v1646040962210!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="6" && day=="30" || month=="6" && day=="31"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Labassi Sami</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.01610614563!2d10.98503731507923!3d33.811897437805186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97dc0f20de77%3A0xc7097b3d7c7f3b95!2spharmacie%20sami%20labassi!5e0!3m2!1sen!2stn!4v1646041504292!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="7" && day=="6" || month=="7" && day=="7"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Said Afif </h2>");
    containermmap1.innerHTML=("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.964932123996!2d10.983132115079233!3d33.81321803773592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9757855ace13%3A0xc8087d66a43f4e67!2spharmacie%20Ben%20Said%20Afif%20%22%20pharmacie%20la%20libert%C3%A9%20%22!5e0!3m2!1sen!2stn!4v1646041730216!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="7" && day=="13" || month=="7" && day=="14"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Chafia</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.888900974739!2d10.992525377694575!3d33.80917749377283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4403a4f13%3A0x80c23857a281462e!2sPHARMACIE%20CHAFIA%20MIDOUN!5e0!3m2!1sen!2stn!4v1646042102632!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}





if(month=="7" && day=="20" || month=="7" && day=="21"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Jaballah Maher</h2>");
    containermmap1.innerHTML=(" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20152.68790290919!2d10.971960193085078!3d33.82861885548762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9730747ea8ad%3A0xae185b634c05f6e8!2sPharmacie%20Maher%20Jaballah!5e0!3m2!1sen!2stn!4v1645378430144!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="7" && day=="27" || month=="7" && day=="28"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Slim Chokri</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.912330245491!2d10.981943315079286!3d33.814575437664864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97de57c3b1ed%3A0x709a515b1b68dbe!2sPharmacie%20Slim!5e0!3m2!1sen!2stn!4v1645381646895!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="8" && day=="3" || month=="8" && day=="4"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Gaied Amira </h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.96347210446!2d10.990191215079943!3d33.839052636382554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa981d517e18f5%3A0xd21169d7c2d8f38!2spharmacie%20djerba%20la%20douce!5e0!3m2!1sen!2stn!4v1645382590164!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="8" && day=="10" || month=="8" && day=="11"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Gana Chiraz</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.801354097647!2d10.981118915079394!3d33.81743903751485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97e07f0d5087%3A0xd5c2637f23e721b0!2spharmacie%20chiraz%20gana!5e0!3m2!1sen!2stn!4v1646040962210!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="8" && day=="17" || month=="8" && day=="18"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Labassi Sami</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.01610614563!2d10.98503731507923!3d33.811897437805186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97dc0f20de77%3A0xc7097b3d7c7f3b95!2spharmacie%20sami%20labassi!5e0!3m2!1sen!2stn!4v1646041504292!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="8" && day=="24" || month=="8" && day=="25"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Said Afif </h2>");
    containermmap1.innerHTML=("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.964932123996!2d10.983132115079233!3d33.81321803773592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9757855ace13%3A0xc8087d66a43f4e67!2spharmacie%20Ben%20Said%20Afif%20%22%20pharmacie%20la%20libert%C3%A9%20%22!5e0!3m2!1sen!2stn!4v1646041730216!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="9" && day=="1" || month=="9" && day=="2"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Chafia</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.888900974739!2d10.992525377694575!3d33.80917749377283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4403a4f13%3A0x80c23857a281462e!2sPHARMACIE%20CHAFIA%20MIDOUN!5e0!3m2!1sen!2stn!4v1646042102632!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}





if(month=="9" && day=="8" || month=="9" && day=="9"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Jaballah Maher</h2>");
    containermmap1.innerHTML=(" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20152.68790290919!2d10.971960193085078!3d33.82861885548762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9730747ea8ad%3A0xae185b634c05f6e8!2sPharmacie%20Maher%20Jaballah!5e0!3m2!1sen!2stn!4v1645378430144!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="9" && day=="15" || month=="9" && day=="16"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Slim Chokri</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.912330245491!2d10.981943315079286!3d33.814575437664864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97de57c3b1ed%3A0x709a515b1b68dbe!2sPharmacie%20Slim!5e0!3m2!1sen!2stn!4v1645381646895!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="9" && day=="22" || month=="9" && day=="23"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Gaied Amira </h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.96347210446!2d10.990191215079943!3d33.839052636382554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa981d517e18f5%3A0xd21169d7c2d8f38!2spharmacie%20djerba%20la%20douce!5e0!3m2!1sen!2stn!4v1645382590164!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="9" && day=="29" || month=="9" && day=="30"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Gana Chiraz</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.801354097647!2d10.981118915079394!3d33.81743903751485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97e07f0d5087%3A0xd5c2637f23e721b0!2spharmacie%20chiraz%20gana!5e0!3m2!1sen!2stn!4v1646040962210!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="10" && day=="5" || month=="10" && day=="6"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Labassi Sami</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.01610614563!2d10.98503731507923!3d33.811897437805186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97dc0f20de77%3A0xc7097b3d7c7f3b95!2spharmacie%20sami%20labassi!5e0!3m2!1sen!2stn!4v1646041504292!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="10" && day=="12" || month=="10" && day=="13"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Said Afif </h2>");
    containermmap1.innerHTML=("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.964932123996!2d10.983132115079233!3d33.81321803773592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9757855ace13%3A0xc8087d66a43f4e67!2spharmacie%20Ben%20Said%20Afif%20%22%20pharmacie%20la%20libert%C3%A9%20%22!5e0!3m2!1sen!2stn!4v1646041730216!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="10" && day=="19" || month=="10" && day=="20"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Chafia</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.888900974739!2d10.992525377694575!3d33.80917749377283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97c4403a4f13%3A0x80c23857a281462e!2sPHARMACIE%20CHAFIA%20MIDOUN!5e0!3m2!1sen!2stn!4v1646042102632!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}





if(month=="10" && day=="26" || month=="10" && day=="27"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Jaballah Maher</h2>");
    containermmap1.innerHTML=(" <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20152.68790290919!2d10.971960193085078!3d33.82861885548762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9730747ea8ad%3A0xae185b634c05f6e8!2sPharmacie%20Maher%20Jaballah!5e0!3m2!1sen!2stn!4v1645378430144!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="11" && day=="3" || month=="11" && day=="4"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Slim Chokri</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.912330245491!2d10.981943315079286!3d33.814575437664864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97de57c3b1ed%3A0x709a515b1b68dbe!2sPharmacie%20Slim!5e0!3m2!1sen!2stn!4v1645381646895!5m2!1sen!2stn'  allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="11" && day=="10" || month=="11" && day=="11"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Gaied Amira</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.96347210446!2d10.990191215079943!3d33.839052636382554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa981d517e18f5%3A0xd21169d7c2d8f38!2spharmacie%20djerba%20la%20douce!5e0!3m2!1sen!2stn!4v1645382590164!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="11" && day=="17" || month=="11" && day=="18"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Gana Chiraz</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.801354097647!2d10.981118915079394!3d33.81743903751485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97e07f0d5087%3A0xd5c2637f23e721b0!2spharmacie%20chiraz%20gana!5e0!3m2!1sen!2stn!4v1646040962210!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}
if(month=="11" && day=="24" || month=="11" && day=="25"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Labassi Sami</h2>");
    containermmap1.innerHTML=("<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.01610614563!2d10.98503731507923!3d33.811897437805186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa97dc0f20de77%3A0xc7097b3d7c7f3b95!2spharmacie%20sami%20labassi!5e0!3m2!1sen!2stn!4v1646041504292!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}

if(month=="11" && day=="31" || month=="0" && day=="1" && year=="2023"){
    containerm1.innerHTML=("<h2 class='petit_titre8'>Pharmacie Ben Said Afif </h2>");
    containermmap1.innerHTML=("  <iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.964932123996!2d10.983132115079233!3d33.81321803773592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa9757855ace13%3A0xc8087d66a43f4e67!2spharmacie%20Ben%20Said%20Afif%20%22%20pharmacie%20la%20libert%C3%A9%20%22!5e0!3m2!1sen!2stn!4v1646041730216!5m2!1sen!2stn' allowfullscreen='' loading='lazy'></iframe>")
}
