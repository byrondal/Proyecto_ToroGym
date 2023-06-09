

//Datos de los productos
const products = [
  {
    name: 'Back It Up Onesie vestido',
    seller: 'Free People',
    price: 98,
    stars: 4.4,
    reviews: 19,
    color: 'azul',
    category: 'One Piece',
    season: 'verano',
    sport: 'Yoga',
    gender: 'Mujer',
    image: 'https://images.urbndata.com/is/image/FreePeople/67268482_040_d/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720',
    url: 'https://www.freepeople.com/fpmovement/shop/back-it-up-onesie/?color=040&source=CATEGORYPRODUCTTRAY&type=REGULAR&quantity=1',
  },
  {
    name: 'Rulu High-Rise Pantalón',
    seller: 'Lululemon',
    price: 108,
    stars: 4,
    reviews: 358,
    color: 'gris',
    category: 'Jogger',
    season: 'primavera',
    sport: 'Training',
    gender: 'Mujer',
    image: 'https://images.lululemon.com/is/image/lululemon/LW5EKLS_046634_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    url: 'https://shop.lululemon.com/p/womens-joggers/Ready-to-Rulu-High-Rise-Jogger-2/_/prod11330007?color=46634',
  },
  {
    name: 'Nike Metcon 8 zapatilla',
    seller: 'Nike',
    price: 139.99,
    stars: 4,
    reviews: 35,
    color: ['negro', 'azul', 'dorado'],
    category: 'Zapatillas',
    season: 'primavera',
    sport: 'Training',
    gender: 'Hombre',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/543f44ec-73ae-4bd1-b480-32b10f38871b/metcon-8-zapatillas-de-entrenamiento-lFNllk.png',
    url: 'https://www.nike.com/es/t/metcon-8-zapatillas-de-entrenamiento-lFNllk/DO9328-003',
  },
  {
    name: 'Nike Dri-Fit camiseta',
    seller: 'Nike',
    price: 69.99,
    stars: 0,
    reviews: 0,
    color: 'verde',
    category: 'Camisetas',
    season: 'verano',
    sport: 'Training',
    gender: 'Hombre',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/08d2f3fb-3e19-4eb1-bcd7-7d3aaded83a1/dri-fit-adv-aps-camiseta-deportiva-de-manga-corta-engineered-GDkwXH.png',
    url: 'https://www.nike.com/es/t/dri-fit-adv-aps-camiseta-deportiva-de-manga-corta-engineered-GDkwXH/DX6954-371',
  },
  {
    name: 'Adidas Marimekko Top',
    seller: 'Adidas',
    price: 60,
    stars: 3.3,
    reviews: 3,
    color: ['negro', 'blanco'],
    category: 'Tops',
    season: 'verano',
    sport: 'Running',
    gender: 'Mujer',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/07c935d7b66b490bad67af6500d41188_9366/Sujetador_adidas_x_Marimekko_Running_Pocket_Marron_HR8171_21_model.jpg',
    url: 'https://www.adidas.es/sujetador-adidas-x-marimekko-running-pocket/HR8171.html',
  },
  {
    name: 'Mallas Adidas Marimekko',
    seller: 'Adidas',
    price: 60,
    stars: 4.9,
    reviews: 6,
    color: ['negro', 'blanco'],
    category: 'Mallas',
    season: 'verano',
    sport: 'Yoga',
    gender: 'Mujer',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50b24a50261f422bb5faaf740107a4cd_9366/Mallas_7-8_adidas_X_Marimekko_Optime_Training_Negro_HR8179_21_model.jpg',
    url: 'https://www.adidas.es/mallas-7-8-adidas-x-marimekko-optime-training/HR8179.html',
  },
  {
    name: 'Valdosta T-Shirt',
    seller: 'Gorillawear',
    price: 29.99,
    stars: 4,
    reviews: 18,
    color: 'negro',
    category: 'Camisetas',
    season: 'primavera',
    sport: 'Training',
    gender: 'Hombre',
    image: 'https://www.gorillawear.com/resize/90562900-valdosta-t-shirt-black-7_16257513846770.jpg/500/500/True/valdosta-t-shirt-black.jpg',
    url: 'https://www.gorillawear.com/es/articulo/6351/valdosta-t-shirt-black.html',
  },
  {
    name: 'Shorts Alex-Toussaint',
    seller: 'Puma',
    price: 60,
    stars: 0,
    reviews: 0,
    color: 'negro',
    category: 'Shorts',
    season: 'verano',
    sport: 'Running',
    gender: 'Hombre',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/523557/01/mod01/fnd/EEA/fmt/png/Shorts-PUMAxALEXTOUSSAINT-para-hombre',
    url: 'https://eu.puma.com/es/es/pd/shorts-puma%C2%A0x%C2%A0alex%C2%A0toussaint-para-hombre/523557.html?dwvar_523557_color=01&dwvar_523557_size=0140',
  },
  {
    name: 'Isabella Sweatshirt Dress',
    seller: 'Gorillawear',
    price: 30,
    stars: 5,
    reviews: 22,
    color: 'beige',
    category: 'Dress',
    season: 'otoño',
    sport: 'Streetwear',
    gender: 'Mujer',
    image: 'https://www.gorillawear.com/resize/91704120-isabella-sweatshirt-dress-beige-10_1882513834712.jpg/500/500/True/isabella-sweatshirt-dress-beige.jpg',
    url: 'https://www.gorillawear.com/product/6184/isabella-sweatshirt-dress-beige.html',
  },
  {
    name: 'Pantalón Yoga / Training',
    seller: 'Adidas',
    price: 80,
    stars: 5,
    reviews: 2,
    color: 'negro',
    category: 'Jogger',
    season: 'otoño',
    sport: 'Yoga',
    gender: 'Hombre',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/feb99fea18904bd9b035af0a00982cd4_9366/Pantalon_7-8_Training_Yoga_Designed_for_Training_Negro_HT4376_21_model.jpg',
    url: 'https://www.adidas.es/pantalon-7-8-training-yoga-designed-for-training-/HT4376.html',
  },
  {
    name: 'Nike Invincible 3 zapatilla',
    seller: 'Nike',
    price: 189.99,
    stars: 4.1,
    reviews: 134,
    color: ['negro', 'navy'],
    category: 'Zapatillas',
    season: 'invierno',
    sport: 'Running',
    gender: 'Hombre',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3eb254d-0901-4158-956a-4610180545e5/invincible-3-zapatillas-de-running-asfalto-jg0td1.png',
    url: 'https://www.nike.com/es/t/invincible-3-zapatillas-de-running-asfalto-jg0td1/DR2615-400',
  },
  {
    name: 'On Cloudmonster zapatilla',
    seller: 'On',
    price: 170,
    stars: 5,
    reviews: 12,
    color: 'blanco',
    category: 'Zapatillas',
    season: 'otoño',
    sport: 'Streetwear',
    gender: 'Mujer',
    image: 'https://images.urbndata.com/is/image/FreePeople/67850446_010_b/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720',
    url: 'https://www.freepeople.com/fpmovement/shop/on-cloudmonster-sneakers/?category=socks-sneakers&color=010&type=REGULAR&quantity=1',
  },
  {
    name: 'Nike Sportswear Tech sudadera',
    seller: 'Nike',
    price: 129.99,
    stars: 0,
    reviews: 0,
    color: 'blanco',
    category: 'Sudaderas',
    season: 'otoño',
    sport: 'Streetwear',
    gender: 'Hombre',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f08c384b-f324-42bd-a832-ffbc689ef9cf/sportswear-tech-fleece-sudadera-con-capucha-con-cremallera-completa-TDCP6j.png',
    url: 'https://www.nike.com/es/t/sportswear-tech-fleece-sudadera-con-capucha-con-cremallera-completa-TDCP6j/FJ5334-121',
  },
  {
    name: 'Nike Pro Leggins',
    seller: 'Nike',
    price: 38.97,
    stars: 3.5,
    reviews: 15,
    color: 'rojo',
    category: 'Mallas',
    season: 'primavera',
    sport: 'Training',
    gender: 'Mujer',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83ebf8ca-d6ea-4195-9a47-f18721026131/pro-leggings-de-entrenamiento-de-talle-medio-con-estampado-y-longitud-completa-7qTNpf.png',
    url: 'https://www.nike.com/es/t/pro-leggings-de-entrenamiento-de-talle-medio-con-estampado-y-longitud-completa-7qTNpf/DX0080-657',
  },
  {
    name: 'Nike Air vestido',
    seller: 'Nike',
    price: 47.97,
    stars: 3.7,
    reviews: 23,
    color: 'negro',
    category: 'Vestido',
    season: 'otoño',
    sport: 'Streetwear',
    gender: 'Mujer',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/07714752-c0d7-4640-8f11-99dcfeb0feda/air-vestido-de-manga-larga-con-estampado-vjqVSD.png',
    url: 'https://www.nike.com/es/t/air-vestido-de-manga-larga-con-estampado-vjqVSD/DV8064-010',
  },
];

//Segundo paso recoger la información de los productos para pintarlos.

const drawProducts = (products) => {
  const productsContainer = document.querySelector('#products');
  productsContainer.innerHTML = "";


  for (let i = 0; i < products.length; i++) {

    const product = products[i];

    const div$$ = document.createElement('div');
    const divImage$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    const divText$$ = document.createElement('div');
    const brand$$ = document.createElement('h3');
    const description$$ = document.createElement('h4');
    const price$$ = document.createElement('p');
    const buttonArticle$$ = document.createElement('button');
    const urlButtonArticles$$ = document.createElement('a');

    // le doy contenido a cada elemento de la carta de producto

    img$$.src = product.image;
    brand$$.textContent = product.seller;
    description$$.textContent = product.name;
    price$$.textContent = `${product.price} €`;
    urlButtonArticles$$.textContent = 'Ver artículo';
    div$$.className = 'container';
    divImage$$.className = 'img_container';
    img$$.className = "img";
    divText$$.className = 'text_container';
    urlButtonArticles$$.href = product.url;
    urlButtonArticles$$.rel = 'noopener';
    urlButtonArticles$$.target = '_blank';


    //Insertamos los elementos en html
    productsContainer.appendChild(div$$);
    div$$.appendChild(divImage$$);
    divImage$$.appendChild(img$$);
    div$$.appendChild(divText$$);
    divText$$.appendChild(brand$$);
    divText$$.appendChild(description$$);
    divText$$.appendChild(price$$);
    div$$.appendChild(buttonArticle$$);
    buttonArticle$$.appendChild(urlButtonArticles$$);


  };

};





const divContainerFilter$$ = document.querySelector('#filters');
const cleanFiltersButton$$ = document.createElement('button');
cleanFiltersButton$$.className = 'clean_button';
cleanFiltersButton$$.textContent = 'Limpiar filtros';
const divBrand$$ = document.createElement('div');
divBrand$$.className = 'brand';
const h3Brand$$ = document.createElement('h3');
const divFiltersBrand$$ = document.createElement('div');
divFiltersBrand$$.className = 'brand_filter';
h3Brand$$.textContent = 'Marcas';

divContainerFilter$$.appendChild(cleanFiltersButton$$);
divContainerFilter$$.appendChild(divBrand$$);
divBrand$$.appendChild(h3Brand$$);
divBrand$$.appendChild(divFiltersBrand$$);


const createButtonSellers = () => {
  const sellers = [];

  for (const product of products) {
    if (!sellers.includes(product.seller)) {
      sellers.push(product.seller);
    }
  }

  sellers.forEach((seller) => {
    const seller$$ = document.createElement('button');
    seller$$.textContent = seller;
    seller$$.className = 'seller';
    divFiltersBrand$$.appendChild(seller$$);
    seller$$.addEventListener('click', filter);
    cleanFiltersButton$$.addEventListener('click', filter);
  });

};

const divSport$$ = document.createElement('div');
const h3Sport$$ = document.createElement('h3');
const divFilterSport$$ = document.createElement('div');
divSport$$.className = 'sport_container';
divFilterSport$$.className = 'sport_filter';
divContainerFilter$$.appendChild(divSport$$);
divSport$$.appendChild(h3Sport$$);
divSport$$.appendChild(divFilterSport$$);
h3Sport$$.textContent = 'Deporte';

const createButtonSport = () => {
  const sports = [];
  for (const product of products) {
    if (!sports.includes(product.sport)) {
      sports.push(product.sport);
    }
  }
  sports.forEach((sport) => {
    const sport$$ = document.createElement('button');
    sport$$.textContent = sport;
    sport$$.className = 'sport';
    divFilterSport$$.appendChild(sport$$);
    sport$$.addEventListener('click', filter);
  });
};

const divPrice$$ = document.createElement('div');
const h3Price$$ = document.createElement('h3');
const pPrecie$$ = document.createElement('p');
const inputPrice$$ = document.createElement('input');
divPrice$$.className = 'price';
inputPrice$$.type = 'number';
inputPrice$$.className = 'input_price';
const inputPriceButton$$ = document.createElement('button');
inputPriceButton$$.textContent = 'Buscar';
inputPriceButton$$.className = 'search_button';
//inputPrice$$.addEventListener('input', searchPrice);
h3Price$$.textContent = 'Filtrar por precio';
pPrecie$$.textContent = 'Introduce tu presupuesto máximo';

divContainerFilter$$.appendChild(divPrice$$);
divPrice$$.appendChild(h3Price$$);
divPrice$$.appendChild(pPrecie$$);
divPrice$$.appendChild(inputPrice$$);
divPrice$$.appendChild(inputPriceButton$$);




const filter = (e) => {
  if (e.target.className === 'clean_button') {
    drawProducts(products);
  } else if (e.target.className === 'sport') {
    const productsFiltered = products.filter((product) => product.sport.includes(e.target.textContent))
    drawProducts(productsFiltered);
  } else if (e.target.className === 'seller') {
    const productsFiltered = products.filter((product) => product.seller.includes(e.target.textContent))
    drawProducts(productsFiltered);
  }
};


inputPriceButton$$.addEventListener('click', () => {
  const budget = parseFloat(inputPrice$$.value);
  if (isNaN(budget)) {
    alert('Por favor, introduce un presupuesto válido');
    return;
  }
  const productsFiltered = products.filter((product) => product.price <= budget)

  if (productsFiltered.length === 0) {
    alert('No hay productos disponibles dentro de tu presupuesto')
  } else if (drawProducts(productsFiltered));
});




createButtonSellers();
createButtonSport();
drawProducts(products);





