
// cette fontion change l'image: parametre1: id de l'image
function changeImage(imgID){
    // je récupère la source de l'image dans la variable imgSRC
    var imgSRC=imgID.getAttribute("src");
    // je vérifie la fin du chemin de la source et l'extrait dans la variable endOfSrc
    var endOfSrc=imgSRC.slice(13);
    if ( endOfSrc=='.jpg' ){
        //si le fichier se termine par .jpg je le termine par _2.jpg
        imgSRC=imgSRC.replace('.jpg' , '_2.jpg');
    }
    // je change l'image
    imgID.setAttribute('src',imgSRC);
}

// cette fonction remet l'image d'origine si on ne la survole pas
// function setBackImage(){
//     var monImage = document.getElementById('image1');
//     monImage.setAttribute('src' , 'images/image1.jpg');
// }
