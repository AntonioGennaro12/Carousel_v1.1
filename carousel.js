// Lógica del carrusel
let contCarou = 0;
const carouselSlide = (direction) => {
    const carousel = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemWidth = carouselItems[0].offsetWidth;
    console.log("itWi:"+itemWidth);
    const containerWidth = carousel.offsetWidth;
    console.log("coWi:"+containerWidth);
    const visibleItems = Math.floor(containerWidth / itemWidth);
    console.log("viIt:"+visibleItems);
    const totalItems = carouselItems.length;
    console.log("toIt:"+totalItems);
    // Calcular la cantidad de slides que deben mostrarse
    const slidesToShow = Math.min(visibleItems, totalItems);
    console.log("slTS:"+slidesToShow);
    // Calcular el desplazamiento en píxeles
    const slideWidth = itemWidth * slidesToShow;
    console.log("slWi:"+slideWidth);
    const slideOffset = direction * slideWidth;
    console.log("slOf:"+slideOffset);
    // Obtener la posición actual
    const currentPosition = carousel.scrollLeft;
    // El scroll left no funciona por lo tanto toda esta parte no se usa...
    const newPosition = currentPosition + slideOffset;
    console.log("cuPo:"+currentPosition);
    console.log("nwPo:"+newPosition);
    // const prueba de parametros posibles
    const paramPrueba = carousel.scrollWidth; //da 7999 debería dar 8000?
    console.log("pPru:"+paramPrueba);
    // Ajustar la posición para mostrar los slides correctamente
    const maxPosition = (totalItems - slidesToShow) * itemWidth;
    const minPosition = 0;
    console.log("mxPo:"+maxPosition);
    let adjustedPosition = Math.max(minPosition, Math.min(maxPosition, newPosition));
    console.log("adPo1:"+adjustedPosition);
    // console.log("adPo:"+adjustedPosition); NO LA IMPRIMO 
    // Si el desplazamiento excede el ancho total, ajustar a la posición máxima
    // Idem para la mínima
    //if (adjustedPosition === maxPosition && newPosition > maxPosition) {
    //  adjustedPosition = maxPosition;}
    // USO ESTE ALGORITMO EN SU LUGAR , CON AGREGADO DE BOTON PARA IR AL FINAL O PPIO EN UN TOQUE.
    if ((direction == 1)||(direction == -1)){ 
      contCarou += direction;
      console.log("coCa:"+contCarou);
      console.log("mxPo:"+((maxPosition/itemWidth)+1));
      if (contCarou == ((maxPosition/itemWidth)+1)){contCarou--}
      else if (contCarou < 0){contCarou++};
      adjustedPosition = (currentPosition + (itemWidth*contCarou));
    }
    else {
      if (direction > 0) {
          adjustedPosition = (maxPosition);
          contCarou = (maxPosition/itemWidth);
        }
      else {
        adjustedPosition = (minPosition);
        contCarou = 0;
      }
    }
    console.log("adPo2:"+adjustedPosition);
    // Aplicar la transformación CSS para mover el carrusel
    carousel.style.transform = `translateX(-${adjustedPosition}px)`;
  };

