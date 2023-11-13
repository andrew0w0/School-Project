window.onload = function () {
  const directories = [
    { directory: 'sudamerica', centertext: 'SUD AMERICA', images: [2, 3, 4, 5, 6, 7] },
    { directory: 'brasile', centertext: 'BRASILE', images: [8, 9, 10, 11, 12, 13, 14] }
   ]
   
   const center_text = document.getElementsByClassName('center-text').item(0).innerHTML;
   
   const directory = directories.find(element => element.centertext === center_text);
   console.log('center_text', center_text)
   console.log('directory', directory)
   const div = document.getElementById('explanation');
   
   for (const image of directory.images) {
     var imageElement = document.createElement('img')

     if(center_text == 'SUD AMERICA') imageElement.src = `./src/images/${directory.directory}/${image}.png`;
     else imageElement.src = `../../images/${directory.directory}/${image}.png`;

     console.log('imageElement', imageElement)
   
     div.appendChild(imageElement);
   }
}
