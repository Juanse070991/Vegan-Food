export let recetas = [];
let receta = class {
  constructor(name, id, description, info, img, recetaNumber, productos) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.img = img;
    this.info = info;
    this.recetaNumber = recetaNumber;
    this.productos = productos;
  }
};
let createAddRecipe = (
  name,
  id,
  description,
  info,
  img,
  recetaNumber,
  productos
) => {
  return recetas.push(
    new receta(name, id, description, info, img, recetaNumber, productos)
  );
};
const idRandom = () => {
  let randomId = parseInt(Math.random() * 1000);
  if (recetas.some((product) => product.id === randomId)) {
    randomId = parseInt(Math.random() * 1000);
  }
  return randomId;
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

createAddRecipe(
  "Hamburguesa Vegana",
  idRandom(),
  "Ingredientes: (PARA 4 PERSONAS) 4 tazas de Betabeles rallado finamente 2 tazas de Zanahorias rallada finamente 1 taza de Leche 1/2 taza de Harina integral 1/2 taza de Amaranto 1/4 taza de Aceite de coco 2 tazas de Chips de camote y papa 1 taza de Yogur griego 2 cucharadas de Cebollín picado 4 hojas de Lechuga fresca 4 Bollos o Pan para hamburguesa integrales Chile con cebolla, toreados 1 Aguacate en rebanadas Sal al gusto Pimienta al gusto.",
  "Procedimiento: CUECE el betabel y la zanahoria hasta que estén suaves.AÑADE la harina y mezcla por 2 minutos.VIERTE la leche y salpimienta.TAPA y cocina por 5 minutos hasta que se consuma el líquido.ENFRÍA y mezcla con el huevo y el amaranto.FORMA las hamburguesas.DORA en una sartén.TUESTA el pan.MEZCLA el yogur con el cebollín y salpimienta.UNTA el yogur en la base del pan.COLOCA una hoja de lechuga, la hamburguesa, chiles toreados, aguacate y los chips.SIRVE..",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688664062/hamburguesa-vegana_talox5.jpg",
  random(0, 2),

);
createAddRecipe(
  "Camarones Empanizados",
  idRandom(),
  "Ingredientes: (PARA 2 PERSONAS) 20 pzas de Camarones 1 pizca de Pimienta 1 pizca de Ajo en polvo 1/2 cdita de Paprika Chile de Árbol molido y al gusto 1/4 de pza de Pimiento Morrón en rajas 1 cda de Mantequilla",
  "Procedimiento :LIMPIA los camarones y se retira la tripa.MEZCLA todas las especias: pimienta, ajo en polvo, paprika y chile de árbol y se vierte en los camarones.COLOCA la mantequilla en el microondas para que se derrita. Se coloca la mantequilla en los camarones.PON los camarones y las rajas de chile morrón en papel aluminio y cubre con el mismo papel.COLOCA en el sartén o comal a fuego bajo o bien en una freidora de aire a 140 grados por 15 minutos.SIRVE y acompaña con lo que gustes.",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688664722/camarones-empanizados-salsa-mango_evtnbn.jpg",
  0,
  
);
createAddRecipe(
  "Tortitas de queso panela en salsa verde, receta fácil y deliciosa",
  idRandom(),
  "Ingredientes: 1 tz de queso panela 1 huevo 1/4 tz pan molido 1 cucharada de oregano Sal Y Pimienta a gusto Aceite a gusto 1/2 de cebollas en cuartos 1 diente de ajo 5 jitomates 2 chiles habaneros 1/2 tz de cilandro fresco 1 cucharada de comino entero 3 pimientas gordas 1/2 tz de caldo de pollo Cebolla morada fileteada Queso panela desmoronado" ,
  "Procedimiento: MEZCLA el queso con el huevo, el pan molido, el orégano y sazona a tu gusto con sal y pimienta.FORMA tortitas con ayuda de tus manos y fríelas en un sartén a fuego medio con un poco de aceite. Escurre sobre papel absorbente. Reserva.Para la salsa verde, en un sartén CALIENTA una cucharada de aceite y fríe la cebolla, el ajo, los tomates, el chile habanero, el cilantro, el comino, la pimienta gorda, y cocina hasta que se suavicen las verduras.RELLENA con el caldo de pollo, cocina hasta que se reduzca a la mitad y rectifica sazón. Licúa la preparación anterior hasta obtener una salsa.En un plato SIRVE un espejo de salsa coloca las tortitas encima, decora con un abanico de aguacate, la cebolla morada, y el queso panela. Disfruta..",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688665170/tortitas-de-queso-con-salsa-verde_inqf9c.jpg",
  random(0, 2),
 
);
createAddRecipe(
  "Ensalada de quinoa, frijoles y aguacate",
  idRandom(),
  "Ingredientes: (PARA 2 PERSONAS) 2 tzs de Quinoa precocida 1 lata de Frijoles encurtidos 1 Pimiento troceado 1 Cebolla morada picada 1 Aguacate pelado y en cubos 1 diente de Ajo pelado y picado finamente 1 puñado de hierbas aromáticas (menta, albahaca, cilantro y perejil) Jugo de Lima Sal y pimienta",
  "Procedimiento: MEZCLA todo los ingredientes en un bowl.SIRVE y disfruta esta deliciosa ensalada de quinoa, frijoles y aguacate.",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688665958/ensaladablog_tyoltl.jpg",
  2,
 
);
createAddRecipe(
  "Frijoles charros",
  idRandom(),
  "Ingredientes: (PARA 4 PERSONAS) 250 g. Frijoles bayos 2 l. Agua 200 g. Tocino en trozo picado en cuadritos 200 g. Chorizo o longaniza 1 cebolla blanca 4 ajos 4 Chiles de árbol secos 1/2 taza Cilantro fresco c/n Sal en grano",
  "ProcedimientoREMOJA los frijoles una noche entera.ESCURRE y en una olla de presión COCINA los frijoles con ¼ de cebolla, ajo y un chile de árbol.Mientras, en una olla aparte DORA muy bien el tocino picado en cuadritos. SACA del fuego y reserva.Siguiente DORA el chorizo, SACA del fuego y reserva.AÑADE un par de cucharadas de manteca a la olla y añade ¼ de cebolla picada finamente, deja acitronar.AGREGA el ajo picado finamente y deja cocinar 3 minutos más.AÑADE el tocino y chorizo dorados y al final los frijoles cocidos.VIERTE el caldo que quedó de los frijoles.SAZONA con sal de grano y añade dos chiles de árbol.Deja HERVIR por 10 minutos.ACOMPAÑA con más cebolla picada finamente, chile serrano picado y aguacate.",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688666108/frijoles-charros-4_ipye0u.jpg",
  random(0, 2),

);
createAddRecipe(
  "Tacos de frijoles",
  idRandom(),
  "Ingredientes: (PARA 4 PERSONAS) 1 Cebolla morada en cubos 1 Pimiento Morrón en cubos 1 Pimiento Verde en cubos 1 Zanahoria en rebanadas delgadas 1 Calabaza picada 1 rama de Tomillo 2 tzs de Frijoles negros cocidos 1/2 tz de Cilantro fileteado 2 cdas de Aceite Sal y pimienta al gusto 100 g de Requesón 1/2 kg de tortillas de maíz",
  "Procedimiento: CALIENTA una sartén con el aceite y acitrona la cebolla. Agrega los pimientos y cocina por 5 minutos.AÑADE la zanahoria y la calabaza, salpimienta y cocina por 3 minutos más.AGREGA los frijoles e incorpora cuidando de no maltratarlos. Rectifica sazón, agrega el tomillo y reserva.CALIENTA las tortillas y agrega las verduras, espolvorea el requesón y el cilantro. Acompaña con salsa roja.DISFRUTA estos deliciosos tacos de frijoles.",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688666405/receta-de-tacos-de-frijoles_asznnq.jpg",
  1,
 
);
createAddRecipe(
  "Enchiladas vegetarianas con hojas de acelgas",
  idRandom(),
  "Ingredientes: (PARA 4 PERSONAS) 16 hojas de Acelgas grandes 1 1/2 tzs de Arroz blanco al vapor 1 tz de lentejas cocidas 2 cdas de Cebollas finamente picada 1/2 tz de Granos de Elote 1 cda de Aceite. PARA LA SALSA: 3 jitomates asados 1/4 de Cebolla asada 80 g de Cacahuates sin sal 1 cda de Aceite Sal y pimienta al gusto. PARA ACOMPAÑAR: 1 tz de Crema 180 g de Queso Fresco desmoronado hojas de Cilantro fresco",
  "Procedimiento: HIERVE dos litros de agua. Retira el tallo a las acelgas.COCINA las hojas en el agua hirviendo por dos minutos o hasta que se sientan suaves.ESCURRE y deja secar sobre un paño de cocina o papel absorbente.PARA LA SALSALICÚA todos los ingredientes y sofríe la salsa.SALPIMIENTA y cocina por unos minutos, si es necesario vierte agua.COCINA hasta que espese ligeramente. ACITRONA la cebolla y añade el arroz y las lentejas. Agrega el elote y salpimienta.COCINA por unos minutos.COLOCA este relleno en cada hoja de acelga. Envuelve.SIRVE y baña con la salsa. Acompaña con crema, queso, cilantro y cacahuate espolvoreado. DISFRUTA estas deliciosas enchiladas vegetarianas con hojas de acelgas",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688666719/enchilada_vsp1ph.jpg",
  random(0, 2),
 
);
createAddRecipe(
  "Salchichas de pavo botaneras",
  idRandom(),
  "Ingredientes: (PARA 4 PERSONAS) 300 gramos Salchichas de pavo San Rafael 3 piezas de chiles serranos picados finamente 2 piezas de cebolla cambray 1 Naranja 2 cucharadas de salsa inglesa 1 cucharada Maggie 2 limones verdes 1 limón amarillo c/n Sal y pimienta c/n Salsa Tabasco.",
  "Procedimiento: Picar las salchichas de forma sesgada.Picar las cebollas cambray en rodajas finas. NO tirar el tallo, usarlo también.En un sartén, calentar el aceite vegetal. Una vez bien caliente, añadir las cebollas picadas. ACITRONAR.Añadir el chile picado y luego las salchichas de pavo hasta que estén bien DORADAS.INCORPORAR los demás ingredientes.SERVIR con ralladura de limón amarillo fresco..",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688666971/salchichas-botaneras_eq3lun.jpg",
  random(0, 2),

);
createAddRecipe(
  "Cheesecake de piña y coco ",
  idRandom(),
  "Ingredientes: (PARA 4 PERSONAS). PARA LA BASE 1 1/2 tzs de Galletas María molidas 1 tz de Mantequilla fundida 1 cda de Azúcar- PARA EL RELLENO 400 g de Queso crema 1 tz de Crema de coco 1 tz de Crema para batir Colorante amarillo 1/2 tz de Coco molido 3 sobres de Grenetina hidratada y fundida 1 1/2 tzs de Piña en Almíbar en cubos 1 tz de Coco tostado",
  "Procedimiento: PARA LA BASE: MEZCLA todos los ingredientes y coloca sobre la base de un molde desmontable.REFRIGERA por 30 minutos.PARA EL RELLENOACREMA el queso con la crema de coco, y vierte la crema para batir sin dejar de mezclar.VIERTE la grenetina y el colorante sin dejar de batir.AÑADE la piña y mezcla de manera envolvente.VIERTE sobre la base. Alisa la superficie y refrigera por 3 horas.SIRVE y decora con el coco tostado, espolvoreando todas las orillas.",
  "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_400,w_600/v1688667164/chiskake_oqup24.jpg",
  random(0, 2),
  
);
export const TotalRecetas = recetas.length;