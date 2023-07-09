export let stockProducts = [];

let product = class {
  constructor(name, id, price, img, category, prodNumber, info, sale) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.img = img;
    this.category = category;
    this.info = info;
    this.prodNumber = prodNumber;
    this.sale = sale;
  }
};

let createAddProduct = (
  name,
  id,
  price,
  img,
  category,
  prodNumber,
  info,
  sale
) => {
  return stockProducts.push(
    new product(name, id, price, img, category, prodNumber, info, sale)
  );
};
const idRandom = () => {
  let randomId = parseInt(Math.random() * 1000);
  if (stockProducts.some((product) => product.id === randomId)) {
    randomId = parseInt(Math.random() * 1000);
  }
  return randomId;
};

createAddProduct(
  "Suavisante Frosch",
  idRandom(),
  1800,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502899/uavisanteFROSCH_ljicli.jpg",
  "limpieza",
  1,
  "SALE 20% OFF!"
);
createAddProduct(
  "Vino Malbec Tinto",
  idRandom(),
  4000,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502324/VeganoMALBEC_ze7bs0.jpg",
  "bebidas",
  2,
  "SALE 20% OFF!"
);
createAddProduct(
  "Hamburguesa Cucine y Co",
  idRandom(),
  1200,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502319/HamburguesaCUISINEYCO_ciqhfa.jpg",
  "comidas",
  3,
  "SALE 20% OFF!"
);
createAddProduct(
  "Shampo Veganis",
  idRandom(),
  1100,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502898/shampoVEGANIS_e0chzw.jpg",
  "limpieza",
  4,
  "SALE 20% OFF!"
);
createAddProduct(
  "Limpiador Limon Frosch",
  idRandom(),
  2000,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502898/LIMPIADORLIM_ONfrosch_tia4nt.jpg",
  "limpieza",
  5,
  "SALE 20% OFF!"
);
createAddProduct(
  "Desodorante Dove",
  idRandom(),
  650,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502898/DESODORANTEdove_dbm3dw.jpg",
  "limpieza",
  6,
  "SALE 20% OFF!"
);
createAddProduct(
  "Tres Legumbres Castagno",
  idRandom(),
  750,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502324/treslegumbresCASTAGNO_mxkejn.jpg",
  "comidas",
  7,
  "SALE 20% OFF!"
);
createAddProduct(
  "Texturizador de soja Carnico Magia",
  idRandom(),
  1600,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502324/texturizadodesojacarneMAGIE.webAp_vgzshj.jpg",
  "productos",
  8,
  "SALE 20% OFF!"
);
createAddProduct(
  "Vino Rosado Vegano",
  idRandom(),
  3800,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502323/VeganoROSADO_rb9oi6.jpg",
  "bebidas",
  9,
  "SALE 20% OFF!"
);
createAddProduct(
  "Vino Blanco Vegano",
  idRandom(),
  3000,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502323/VeganoBLANCO_mmgkgn.jpg",
  "bebidas",
  10,
  "SALE 20% OFF!"
);
createAddProduct(
  "Texturizado Soja Pollo Magia",
  idRandom(),
  1200,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502323/texturizadodesojapolloMAGIE.webAp_dkecqm.jpg",
  "productos",
  11,
  "SALE 20% OFF!"
);
createAddProduct(
  "Sopa Vegetales Knorr",
  idRandom(),
  520,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502323/SOPAVEGETALESknorr_xanugq.jpg",
  "productos",
  12,
  "SALE 20% OFF!"
);
createAddProduct(
  "Sopa De Verduras Knorr",
  idRandom(),
  500,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502323/sopaverdyrasKNORR_j5fmbo.jpg",
  "productos",
  13,
  "SALE 20% OFF!"
);
createAddProduct(
  "Texturizado De Carne Magia",
  idRandom(),
  1300,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502323/texturizadodesojaMAGIE_yffjbi.jpg",
  "productos",
  14,
  "SALE 20% OFF!"
);
createAddProduct(
  "Sesamo Tostado Biocesta",
  idRandom(),
  1000,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502323/sesamotostadoBIOCESTA_i8tjfr.jpg",
  "productos",
  15,
  "SALE 20% OFF!"
);
createAddProduct(
  "Salchichas Vegie Land",
  idRandom(),
  700,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502322/salchichaVegieland_o53kov.jpg",
  "comidas",
  16,
  "SALE 20% OFF!"
);
createAddProduct(
  "Sal Marina Liberato",
  idRandom(),
  400,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502322/SALMARINAliberato_hmxmj4.jpg",
  "productos",
  17,
  "SALE 20% OFF!"
);
createAddProduct(
  "Sal De Champignon Dharam",
  idRandom(),
  500,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502322/saldechampiDHARAMSINGH_bdfaab.jpg",
  "productos",
  18,
  "SALE 20% OFF!"
);
createAddProduct(
  "Salmon Revo",
  idRandom(),
  2300,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502322/SalmonREVOSALMON_vbed99.jpg",
  "comidas",
  19,
  "SALE 20% OFF!"
);
createAddProduct(
  "Ravioles Papa/Cebo Leo Fanti",
  idRandom(),
  2100,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502322/RaviolesLEOFANTIpapaycebolla_dkwmnf.jpg",
  "comidas",
  20,
  "SALE 20% OFF!"
);
createAddProduct(
  "Kombucha Te Verde",
  idRandom(),
  700,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502321/KombuchaTEverde_n6glrj.jpg",
  "bebidas",
  21,
  "SALE 20% OFF!"
);
createAddProduct(
  "Pizza Rucula y Tomate seco Vegan",
  idRandom(),
  1550,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502322/pizzaVEGANruculaytomateseco_arlamm.jpg",
  "comidas",
  22,
  "SALE 20% OFF!"
);
createAddProduct(
  "Salchichas Alves",
  idRandom(),
  800,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502322/salchichaALVES_sksthp.jpg",
  "comidas",
  23,
  "SALE 20% OFF!"
);
createAddProduct(
  "Kambucha Frutos Rojos",
  idRandom(),
  700,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502320/KombuchaFRUTOSROJOS_hmozoq.jpg",
  "bebidas",
  24,
  "SALE 20% OFF!"
);
createAddProduct(
  "Kombucha Curcuma",
  idRandom(),
  600,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502320/KombuchaCURCUMA_lwxibr.jpg",
  "bebidas",
  25,
  "SALE 20% OFF!"
);
createAddProduct(
  "Pizza Salami Vemondo",
  idRandom(),
  2400,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502322/pizzasalamiVemondo_kud2xf.jpg",
  "comidas",
  26,
  "SALE 20% OFF!"
);
createAddProduct(
  "Leche Almendra/vainilla Suk",
  idRandom(),
  800,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502318/BebidaVegeSUKvaini_evlhnb.jpg",
  "bebidas",
  27,
  "SALE 20% OFF!"
);
createAddProduct(
  "Leche Almendra s/azucar Suk",
  idRandom(),
  800,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502318/BebidaVegeSUKalmendra_pwhhqx.jpg",
  "bebidas",
  28,
  "SALE 20% OFF!"
);
createAddProduct(
  "Vodka Absolut Ruby red",
  idRandom(),
  6500,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502317/AbsolutRUBYRED_uxu1sy.jpg",
  "bebidas",
  29,
  "SALE 20% OFF!"
);
createAddProduct(
  "Shampo Coco Han",
  idRandom(),
  1400,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688502899/SHAPOCOCOhan_cfaitf.jpg",
  "limpieza",
  30,
  "SALE 20% OFF!"
);
createAddProduct(
  "Limpiador de suelos Trebol Verde",
  idRandom(),
  1800,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688652954/limpiadorDeSuelos-trebol-verde_dqexh1.jpg",
  "limpieza",
  31,
  "SALE 20% OFF!"
);
createAddProduct(
  "Lava vajillas Trebol verde",
  idRandom(),
  1000,
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_400,w_400/v1688652954/lavavajillasTREBOLVERDE_w1dwdj.jpg",
  "limpieza",
  32,
  "SALE 20% OFF!"
);

export const TotalProducts = stockProducts.length;

export const Products = stockProducts.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category] = [...acc[product.category], product];
  return acc;
}, {});