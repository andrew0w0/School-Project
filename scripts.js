

window.onload = async function () {
  const div = document.getElementById('explanation');

  const directories = [
    { directory: 'sudamerica', centertext: 'SUD AMERICA', images: [2, 3, 4, 5, 6, 7] },
    { directory: 'brasile', centertext: 'BRASILE', images: [8, 9, 10, 11, 12, 13, 14] },
    { directory: 'argentina', centertext: 'ARGENTINA', images: [21, 22, 23, 24, 25, 26, 27] },
    { directory: 'venezuela', centertext: 'VENEZUELA', images: [36, 37, 38, 39, 40] },
    { directory: 'peru', centertext: 'PERÙ', images: [15, 16, 17, 18, 19, 20] },
    { directory: 'colombia', centertext: 'COLOMBIA', images: [29, 30, 31, 32, 33, 34] }
   ]
   
   const center_text = document.getElementsByClassName('center-text').item(0).innerHTML;
   
   const directory = directories.find(element => element.centertext === center_text);
   console.log('center_text', center_text)
   console.log('directory', directory)
   
   for (const image of directory.images) {
     var imageElement = document.createElement('img')

     if(directory.images.indexOf(image) == 0) imageElement.style.paddingTop = '0px'

     if(center_text == 'SUD AMERICA') imageElement.src = `./src/images/${directory.directory}/${image}.png`;
     else imageElement.src = `../../images/${directory.directory}/${image}.png`;

     console.log('imageElement', imageElement)
   
     div.appendChild(imageElement);
   }

   /*div.addEventListener('', function() {
    // Codice da eseguire quando l'utente entra nel divisore
  document.getElementsByTagName('header').item(0).style.background = "rgba(0, 0, 0, 0.8)";
    // Puoi aggiungere qui qualsiasi altra logica o azione che desideri eseguire
});

div.addEventListener('focusout', function() {
  // Codice da eseguire quando l'utente entra nel divisore
document.getElementsByTagName('header').item(0).style.background = "rgba(0, 0, 0, 0.2)";
  // Puoi aggiungere qui qualsiasi altra logica o azione che desideri eseguire
})*/
}