
// cette fonction change l'image: parametre1: id de l'image
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

// cette fonction remette l'image d'origine dès que la souris ne survol plus l'image.

function resetImage(imgID){
    // je récupère la source de l'image dans la variable imgSRC
    var imgSRC=imgID.getAttribute("src");
    // je vérifie la fin du chemin de la source et l'extrait dans la variable endOfSrc
    var endOfSrc=imgSRC.slice(13);
    if ( endOfSrc=='_2.jpg' ){
        //si le fichier se termine par .jpg je le termine par _2.jpg
        imgSRC=imgSRC.replace('_2.jpg' , '.jpg');
    }
    // je change l'image
    imgID.setAttribute('src',imgSRC);
}