let elementsCC = document.querySelectorAll('.origin-center');
 
elementsCC.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //center center
  let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';
  
  element.style.setProperty("transform-origin", resultCC)
}); // forEach


let elementsTL = document.querySelectorAll('.origin-left');
 
elementsTL.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //top left
  let resultTL = x + 'px ' + y + 'px';
  
  element.style.setProperty("transform-origin", resultTL)
}); // forEach