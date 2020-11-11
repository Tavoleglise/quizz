gsap.registerPlugin(ScrollToPlugin);

const resultado1 = "resultado 1";
const resultado2 = "resultado 2";
const resultado3 = "resultado 3";
//Apivita acondicionadores

const p11 = [
  "src/images/APIVITA_ACONDICIONADORES/10-10-09-057 CONDITIONER GENTLE DAILY.png",
  "Apivita Uso Frecuente Acondicionador Orgánico con Manzanilla y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-uso-frecuente-acondicionador-organico-con-manzanilla-y-miel/p/000000000070520018",
];

const p12 = [
  "src/images/APIVITA_ACONDICIONADORES/10-10-09-062 CONDITIONER MOISTURIZING ALL TYPES.png",
  "Apivita Hydration Acondicionador Orgánico Hidratante con Ácido Hialurónico y Aloe",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-hydration-acondicionador-organico-hidratante-con-acido-hialuronico-y-aloe/p/000000000070520002",
];

const p13 = [
  "src/images/APIVITA_ACONDICIONADORES/10-10-09-063 CONDITIONER COLOR PROTECT.png",
  "Apivita Color Acondicionador Orgánico Protector con Girasol y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-color-acondicionador-organico-protector-con-girasol-y-miel/p/000000000070520001",
];

const p14 = [
  "src/images/APIVITA_ACONDICIONADORES/10-10-09-064 CONDITIONER SHINE _ REVITALIZING.png",
  "Apivita Shine Acondicionador Orgánico Revitalizante con Naranja y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-shine-acondicionador-organico-revitalizante-con-naranja-y-miel/p/000000000070520003",
];

const p15 = [
  "src/images/APIVITA_ACONDICIONADORES/10-10-09-065 CONDITIONER NOURISH _ REPAIR.png",
  "Apivita Reparación Intensa Acondicionador Orgánico con Olivo y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-reparacion-intensa-acondicionador-organico-con-olivo-y-miel/p/000000000070520004",
];

//Apivita aqua beelicious
const p21 = [
  "src/images/APIVITA_AQUA_BEE_LICIOUS/BEELICIOUS_OILFREE_LIGHT_TUBE_AND_BOX.png",
  "Apivita Aqua Beelicious Crema-Gel Hidratante Orgánico con Flores y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cosmetica-natural/apivita-aqua-beelicious-crema-gel-hidratante-organico-con-flores-y-miel/p/000000000070520020",
];

const p22 = [
  "src/images/APIVITA_AQUA_BEE_LICIOUS/AQUA_BEELICIOUS_EYE_GEL_TUBE_AND_BOX.png",
  "Apivita Aqua Beelicious Gel Hidratante Para contorno de ojos con flores y miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cosmetica-natural/apivita-aqua-beelicious-gel-hidratante-para-contorno-de-ojos-con-flores-y-miel/p/000000000070520016",
];

const p23 = [
  "src/images/APIVITA_AQUA_BEE_LICIOUS/AQUA_BEELICIOUS_BOOSTER_TUBE_AND_BOX.png",
  "Apivita Aqua Beelicious Booster Hidratante Orgánico y Refrescante con Flores y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cosmetica-natural/apivita-aqua-beelicious-booster-hidratante-organico-y-refrescante-con-flores-y-miel/p/000000000070520019",
];

//Apivita bee radiante
const p31 = [
  "src/images/APIVITA_BEE_RADIANT/10-22-01-632 BEE RADIANT LIGHT JAR _ BOX.png",
];

const p32 = [
  "src/images/APIVITA_BEE_RADIANT/10-22-01-634 BEE RADIANT EYE TUBE _ BOX.png",
];

const p33 = [
  "src/images/APIVITA_BEE_RADIANT/10-22-01-636 BEE RADIANT SERUM BOTTLE _ BOX.png",
];

//Apivita crema de manos
const p41 = [
  "src/images/APIVITA_CREMAS_MANOS/10-22-12-400 HAND CREAM HONEY.png",
  "Apivita Hidratación Intensiva Crema de Manos Orgánica con Ácido Hialurónico y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-hidratacion-intensiva-crema-de-manos-organica-con-acido-hialuronico-y-miel/p/000000000070520009",
];

const p42 = [
  "src/images/APIVITA_CREMAS_MANOS/10-22-12-401 HAND CREAM JASMINE.png",
  "Apivita Moisturizing Crema Para Manos Hidratante con Jasmín y Propóleo",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-moisturizing-crema-para-manos-hidratante-con-jasmin-y-propoleo/p/000000000070520011",
];

const p43 = [
  "src/images/APIVITA_CREMAS_MANOS/10-22-12-402 HAND CREAM HYPERICUM.png",
  "Apivita Crema Para Manos Orgánica con Hierba de San Juan y Cera de Abeja",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-crema-para-manos-organica-con-hierba-de-san-juan-y-cera-de-abeja/p/000000000070520010",
];

//Apivita lanzamiento 2020
const p51 = [
  "src/images/APIVITA_LANZAMIENTOS_2020/10-10-08-151 SHAMPOO TONIC MEN.png",
];

const p52 = [
  "src/images/APIVITA_LANZAMIENTOS_2020/10-10-08-152 SHAMPOO TONIC WOMEN.png",
];

const p53 = [
  "src/images/APIVITA_LANZAMIENTOS_2020/10-10-08-154 SHAMPOO DRY DANDRUFF.png",
];

const p54 = [
  "src/images/APIVITA_LANZAMIENTOS_2020/10-10-08-156 SHAMPOO OILY DANDRUFF.png",
];

const p55 = [
  "src/images/APIVITA_LANZAMIENTOS_2020/10-10-09-059 CONDITIONER TONIC.png",
];

const p56 = [
  "src/images/APIVITA_LANZAMIENTOS_2020/10-10-10-066 LOTION TONIC BOTTLE _ BOX.jpg",
];

//Apivita leche corporal
const p61 = [
  "src/images/APIVITA_LECHE_CORPORAL/10-22-12-392 TONIC MOUNTAIN TEA BODY MILK.png",
  "Apivita Tonic Mountain Te Leche Corporal Hidratante y Energetizante",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-tonic-mountain-te-leche-corporal-hidratante-y-energetizante/p/000000000070520013",
];

const p62 = [
  "src/images/APIVITA_LECHE_CORPORAL/10-22-12-393 REFRESHING FIG BODY MILK.png",
  "Apivita Refreshing Fig Shampoo con Aceites e Higo",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-refreshing-fig-shampoo-con-aceites-e-higo/p/000000000070520021",
];

const p63 = [
  "src/images/APIVITA_LECHE_CORPORAL/10-22-12-394 PURE JASMINE BODY MILK.png",
  "Apivita Leche Corporal Hidratante con Jasmín Puro",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-leche-corporal-hidratante-con-jasmin-puro/p/000000000070520014",
];

const p64 = [
  "src/images/APIVITA_LECHE_CORPORAL/10-22-12-397 ROYAL HONEY BODY CREAM.png",
  "Apivita Royal Honey Crema Corporal Orgánica Hidratante Enriquecida con Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-royal-honey-crema-corporal-organica-hidratante-enriquecida-con-miel/p/000000000070520042",
];

//Apivita limpiadores
const p71 = [
  "src/images/APIVITA_LIMPIADORES/10-22-00-523 FACE _ EYE  FOAM CLEASING 200ML.png",
  "Apivita Crema-Espuma Limpiadora Para Cara y Ojos con Oliva, Lavanda y Propolis",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-crema-espuma-limpiadora-para-cara-y-ojos-con-oliva%2C-lavanda-y-propolis/p/000000000070520043",
];

const p72 = [
  "src/images/APIVITA_LIMPIADORES/10-22-00-526 CLEANSING MILK 3IN1 200ML.png",
  "Apivita Leche Corporal Orgánica 3 En 1 Limpiadora para Rostro y Ojos",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cosmetica-natural/apivita-leche-corporal-organica-3-en-1-limpiadora-para-rostro-y-ojos/p/000000000070520017",
];

const p73 = [
  "src/images/APIVITA_LIMPIADORES/10-22-00-528 CLEANSING GEL.png",
  "Apivita Cleansing Gel Purificante Orgánico para Rostro con Lima y Propóleo",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-cleansing-gel-purificante-organico-para-rostro-con-lima-y-propoleo/p/000000000070520044",
];

//Apivita mascarilla cabello
const p81 = [
  "src/images/APIVITA_MASCARILLAS_CABELLO/10-10-09-114 MASK COLORED HAIR.png",
  "Apivita Mascarilla Orgánica Para El Cabello Protectora de Color con Girasol y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-mascarilla-organica-para-el-cabello-protectora-de-color-con-girasol-y-miel/p/000000000070520007",
];

const p82 = [
  "src/images/APIVITA_MASCARILLAS_CABELLO/10-10-09-115 MASK NOURISH _ REPAIR HAIR.png",
  "Apivita Mascarilla para Cabello Nutritiva y Reparadora para Cabello con Olivo y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-mascarilla-para-cabello-nutritiva-y-reparadora-para-cabello-con-olivo-y-miel/p/000000000070520008",
];

//Apivita Mascarilla nueva imagen
const p91 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-159 EXPRESS OLIVE FOIL _ BOX.png",
  "Apivita Oliva Mascarilla Facial Orgánica Exfoliante Intensiva",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-oliva-mascarilla-facial-organica-exfoliante-intensiva/p/000000000070520040",
];

const p92 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-160 EXPRESS ALOE FOIL _ BOX.png",
  "Apivita Aloe Mascarilla Orgánica Facial Hidratante y Refrescante 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-aloe-mascarilla-organica-facial-hidratante-y-refrescante-8%2B8ml/p/000000000070520031",
];
const p93 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-161 EXPRESS ORANGE FOIL _ BOX.png",
  "Apivita Naranja Mascarilla Facial Orgánica para Luminosidad 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-naranja-mascarilla-facial-organica-para-luminosidad-8%2B8ml/p/000000000070520034",
];

const p94 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-162 EXPRESS CUCUMBER FOIL _ BOX.png",
  "Apivita Pepino Mascarilla Orgánica Facial Hidratante Intensiva 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-pepino-mascarilla-organica-facial-hidratante-intensiva-8%2B8ml/p/000000000070520032",
];

const p95 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-164 EXPRESS GREEN CLAY FOIL _ BOX.png",
  "Apivita Arcilla Verde Mascarilla Facial Orgánica para Limpieza Profunda 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-arcilla-verde-mascarilla-facial-organica-para-limpieza-profunda-8%2B8ml/p/000000000070520033",
];

const p96 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-166 EXPRESS PROPOLIS FOIL & BOX.jpg",
  "Apivita Propoleo Mascarilla Facial Orgánica Purificante para Pieles Grasas 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-propoleo-mascarilla-facial-organica-purificante-para-pieles-grasas-8%2B8ml/p/000000000070520036",
];

const p97 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-167 EXPRESS APRICOT FOIL _ BOX.png",
  "Apivita Albaricoque Mascarilla Facial Orgánica Exfoliante Suave 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-albaricoque-mascarilla-facial-organica-exfoliante-suave-8%2B8ml/p/000000000070520039",
];

const p98 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-168 EXPRESS POMEGRANATE  FOIL _ BOX.png",
  "Apivita Granada Mascarilla Facial Iluminación y revitalización para piel apagada 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-granada-mascarilla-facial-iluminacion-y-revitalizacion-para-piel-apagada-8%2B8ml/p/000000000070520035",
];

const p99 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-169 EXPRESS GRAPE FOIL _ BOX.png",
  "Apivita Uva Mascarilla Facial Antiarrugas y Reafirmante 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-uva-mascarilla-facial-antiarrugas-y-reafirmante-8%2B8ml/p/000000000070520038",
];

const p910 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-172 EXPRESS ROYAL JELLY FOIL _ BOX.png",
  "Apivita Jalea Real Mascarilla Orgánica Reafirmante y Revitalizante 8+8ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-jalea-real-mascarilla-organica-reafirmante-y-revitalizante-8%2B8ml/p/000000000070520037",
];

const p911 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-175 EXPRESS EYE GINKGO BILOBA FOIL _ BOX.png",
  "Apivita Ginkgo Biloba Mascarilla Para Contorno de Ojos, Ojeras y Signos de Fatiga 2+2ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-ginkgo-biloba-mascarilla-para-contorno-de-ojos%2C-ojeras-y-signos-de-fatiga-2%2B2ml/p/000000000070520030",
];

const p912 = [
  "src/images/APIVITA_MASCARILLAS_NUEVA_IMAGEN/10-22-44-176 EXPRESS EYE GRAPE FOIL _ BOX.png",
  "Apivita Uva Mascarilla Orgánica Antiarrugas para el Contorno de Ojos 2+2ML",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-uva-mascarilla-organica-antiarrugas-para-el-contorno-de-ojos-2%2B2ml/p/000000000070520041",
];

//Apivita shampoos
const p101 = [
  "src/images/APIVITA_SHAMPOOS/10-10-08-153 SHAMPOO GENTLE DAILY.png",
  "Apivita Frecuent ShampooOrgánico Suave Uso Diario con Manzanilla y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-frecuent-shampooorganico-suave-uso-diario-con-manzanilla-y-miel/p/000000000070520026",
];
const p102 = [
  "src/images/APIVITA_SHAMPOOS/10-10-08-159 SHAMPOO MOISTURIZING.png",
  "Apivita Hydration Shampoo Orgánico Hidratante con Ácido Hialurónico y Aloe",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-hydration-shampoo-organico-hidratante-con-acido-hialuronico-y-aloe/p/000000000070520025",
];
const p103 = [
  "src/images/APIVITA_SHAMPOOS/10-10-08-160 SHAMPOO COLOR PROTECT.png",
  "Apivita Color Shampoo Orgánico Protector De Cabello Teñido con Girasol y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-color-shampoo-organico-protector-de-cabello-tenido-con-girasol-y-miel/p/000000000070520024",
];
const p104 = [
  "src/images/APIVITA_SHAMPOOS/10-10-08-161 SHAMPOO SHINE _ REVITALIZING.png",
  "Apivita Intense Repair Shampoo Orgánico Nutritivo y Reparador con Oliva y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-intense-repair-shampoo-organico-nutritivo-y-reparador-con-oliva-y-miel/p/000000000070520015",
];
const p105 = [
  "src/images/APIVITA_SHAMPOOS/10-10-08-162 SHAMPOO NOURISH _ REPAIR.png",
  "Apivita Intense Repair Shampoo Orgánico Nutritivo y Reparador con Oliva y Miel",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-del-cabello/apivita-intense-repair-shampoo-organico-nutritivo-y-reparador-con-oliva-y-miel/p/000000000070520015",
];

//Apivita shower GEL
const p111 = [
  "src/images/APIVITA_SHOWER_GEL/10-22-12-378 REFRESHING FIG SHOWER GEL.png",
  "Apivita Refreshing Fig Shampoo con Aceites e Higo",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-refreshing-fig-shampoo-con-aceites-e-higo/p/000000000070520021",
];
const p112 = [
  "src/images/APIVITA_SHOWER_GEL/10-22-12-379 PURE JASMINE SHOWER GEL 250ML.png",
  "Apivita Pure Jasmine Shampoo con Aceite Jasmín",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-pure-jasmine-shampoo-con-aceite-jasmin/p/000000000070520022",
];
const p113 = [
  "src/images/APIVITA_SHOWER_GEL/10-22-12-384 TONIC MOUNTAIN TEA SHOWER GEL 250ML.png",
  "Apivita Tonic Mountain Tea Gel De Ducha con Aceites Esenciales",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-tonic-mountain-tea-gel-de-ducha-con-aceites-esenciales/p/000000000070520005",
];
const p114 = [
  "src/images/APIVITA_SHOWER_GEL/10-22-12-385 ROYAL HONEY SHOWER GEL 250ML.png",
  "Apivita Honey Royal Gel Ducha Orgánico con Aceites Esenciales y Miel Real",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cuidado-de-la-piel/apivita-honey-royal-gel-ducha-organico-con-aceites-esenciales-y-miel-real/p/000000000070520006",
];

//Apivita wine elixir
const p121 = [
  "src/images/APIVITA_WINE_ELIXIR/10-22-01-609 WINE ELIXIR LIGHT JAR _ BOX.png",
  "Apivita Wine Elixir Crema Orgánica Antiarrugas Efecto Lifting de Textura Ligera",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cosmetica-natural/apivita-wine-elixir-crema-organica-antiarrugas-efecto-lifting-de-textura-ligera/p/000000000070520027",
];
const p122 = [
  "src/images/APIVITA_WINE_ELIXIR/10-22-01-611 WINE ELIXIR SERUM BOTTLE _ BOX.png",
  "Apivita Wine Elixir Suero Orgánico Antiarrugas Efecto Lifting para Rostro",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cosmetica-natural/apivita-wine-elixir-suero-organico-antiarrugas-efecto-lifting-para-rostro/p/000000000070520029",
];
const p123 = [
  "src/images/APIVITA_WINE_ELIXIR/10-22-01-614 WINE ELIXIR EYE BOTTLE _ BOX.png",
  "Apivita Wine Elixir Crema Orgánica Antiarrugas Efecto Lifting de Ojos y Labios",
  "https://www.farmaciasanpablo.com.mx/salud-natural/cuidado-personal/cosmetica-natural/apivita-wine-elixir-crema-organica-antiarrugas-efecto-lifting-de-ojos-y-labios/p/000000000070520028",
];

const results = {
  respuestaP1: null,
  respuestaP2: null,
  respuestaP3: null,
};
const get_started = () => {
  gsap.to(window, { duration: 1, scrollTo: "#quizz" });
};
const getAnswers = (numeroPregunta, numeroRespuesta) => {
  let respuestas = document.getElementsByClassName(
    `answersPackage${numeroPregunta}`
  ).children;

  if (numeroPregunta == 1) {
    results.respuestaP1 = numeroRespuesta;
  } else if (numeroPregunta == 2) {
    results.respuestaP2 = numeroRespuesta;
  } else if (numeroPregunta == 3) {
    results.respuestaP3 = numeroRespuesta;
  }
};

const activateAnswer = (numeroPregunta, numeroRespuesta) => {
  const elements = document.getElementById(`answersPackage${numeroPregunta}`)
    .children;
  Array.prototype.forEach.call(elements, (item) => {
    if (
      item.className.includes(
        `answerPackage${numeroPregunta}__${numeroRespuesta}`
      )
    ) {
      item.classList.add(`answerPackage${numeroPregunta}__active`);
    } else {
      item.classList.remove(`answerPackage${numeroPregunta}__active`);
    }
  });
};

const analizar = () => {
  let diarioContainer = document.getElementById("diario");
  let semanalContainer = document.getElementById("semanal");
  let resultado = `${results.respuestaP1}${results.respuestaP2}${results.respuestaP3}`;
  gsap.to(window, { duration: 1, scrollTo: "#results" });
  if (
    results.respuestaP1 != null &&
    results.respuestaP2 != null &&
    results.respuestaP3 != null
  ) {
    if (document.getElementById("labeldeAdvertencia")) {
      document.getElementById("labeldeAdvertencia").remove();
    }
    if (document.getElementById("conjuntoProductosDiario")) {
      document.getElementById("conjuntoProductosDiario").remove();
      document.getElementById("conjuntoProductosSemanal").remove();
      document.getElementById("labelSemanal").remove();
      document.getElementById("labelDiario").remove();

      console.log("existe");
    }

    let labelDiario = document.createElement("h2");
    let textLabelDiario = document.createTextNode("Rutina diaria");
    labelDiario.setAttribute("id", "labelDiario");
    labelDiario.appendChild(textLabelDiario);
    diarioContainer.appendChild(labelDiario);

    let labelSemanal = document.createElement("h2");
    let textLabelSemanal = document.createTextNode("Rutina 1 vez por semana");
    labelSemanal.setAttribute("id", "labelSemanal");
    labelSemanal.appendChild(textLabelSemanal);
    semanalContainer.appendChild(labelSemanal);

    let diario = document.createElement("div");
    diario.setAttribute("class", "conjuntoProductos");
    diario.setAttribute("id", "conjuntoProductosDiario");
    diarioContainer.appendChild(diario);

    let semanal = document.createElement("div");
    semanal.setAttribute("class", "conjuntoProductos");
    semanal.setAttribute("id", "conjuntoProductosSemanal");
    semanalContainer.appendChild(semanal);

    let productoDiario1 = document.createElement("div");
    productoDiario1.setAttribute("class", "product");
    diario.appendChild(productoDiario1);
    let linkProductodiario1 = document.createElement("a");
    productoDiario1.appendChild(linkProductodiario1);
    let imagenProducto1 = document.createElement("img");
    linkProductodiario1.appendChild(imagenProducto1);
    let labelProducto1 = document.createElement("h3");
    linkProductodiario1.appendChild(labelProducto1);

    let productoDiario2 = document.createElement("div");
    productoDiario2.setAttribute("class", "product");
    diario.appendChild(productoDiario2);
    let linkProductodiario2 = document.createElement("a");
    productoDiario2.appendChild(linkProductodiario2);
    let imagenProducto2 = document.createElement("img");
    linkProductodiario2.appendChild(imagenProducto2);
    let labelProducto2 = document.createElement("h3");
    linkProductodiario2.appendChild(labelProducto2);

    let productoDiario3 = document.createElement("div");
    productoDiario3.setAttribute("class", "product");
    diario.appendChild(productoDiario3);
    let linkProductodiario3 = document.createElement("a");
    productoDiario3.appendChild(linkProductodiario3);
    let imagenProducto3 = document.createElement("img");
    linkProductodiario3.appendChild(imagenProducto3);
    let labelProducto3 = document.createElement("h3");
    linkProductodiario3.appendChild(labelProducto3);

    let productoDiario4 = document.createElement("div");
    productoDiario4.setAttribute("class", "product");
    diario.appendChild(productoDiario4);
    let linkProductodiario4 = document.createElement("a");
    productoDiario4.appendChild(linkProductodiario4);
    let imagenProducto4 = document.createElement("img");
    linkProductodiario4.appendChild(imagenProducto4);
    let labelProducto4 = document.createElement("h3");
    linkProductodiario4.appendChild(labelProducto4);

    let productoDiario5 = document.createElement("div");
    productoDiario5.setAttribute("class", "product");
    diario.appendChild(productoDiario5);
    let linkProductodiario5 = document.createElement("a");
    productoDiario5.appendChild(linkProductodiario5);
    let imagenProducto5 = document.createElement("img");
    linkProductodiario5.appendChild(imagenProducto5);
    let labelProducto5 = document.createElement("h3");
    linkProductodiario5.appendChild(labelProducto5);

    let productoDiario6 = document.createElement("div");
    productoDiario6.setAttribute("class", "product");
    semanal.appendChild(productoDiario6);
    let linkProductodiario6 = document.createElement("a");
    productoDiario6.appendChild(linkProductodiario6);
    let imagenProducto6 = document.createElement("img");
    linkProductodiario6.appendChild(imagenProducto6);
    let labelProducto6 = document.createElement("h3");
    linkProductodiario6.appendChild(labelProducto6);

    let productoDiario7 = document.createElement("div");
    productoDiario7.setAttribute("class", "product");
    semanal.appendChild(productoDiario7);
    let linkProductodiario7 = document.createElement("a");
    productoDiario7.appendChild(linkProductodiario7);
    let imagenProducto7 = document.createElement("img");
    linkProductodiario7.appendChild(imagenProducto7);
    let labelProducto7 = document.createElement("h3");
    linkProductodiario7.appendChild(labelProducto7);

    let productoDiario8 = document.createElement("div");
    productoDiario8.setAttribute("class", "product");
    semanal.appendChild(productoDiario8);
    let linkProductodiario8 = document.createElement("a");
    productoDiario8.appendChild(linkProductodiario8);
    let imagenProducto8 = document.createElement("img");
    linkProductodiario8.appendChild(imagenProducto8);
    let labelProducto8 = document.createElement("h3");
    linkProductodiario8.appendChild(labelProducto8);

    let productoDiario9 = document.createElement("div");
    productoDiario9.setAttribute("class", "product");
    semanal.appendChild(productoDiario9);
    let linkProductodiario9 = document.createElement("a");
    productoDiario9.appendChild(linkProductodiario9);
    let imagenProducto9 = document.createElement("img");
    linkProductodiario9.appendChild(imagenProducto9);
    let labelProducto9 = document.createElement("h3");
    linkProductodiario9.appendChild(labelProducto9);

    let productoDiario10 = document.createElement("div");
    productoDiario10.setAttribute("class", "product");
    semanal.appendChild(productoDiario10);
    let linkProductodiario10 = document.createElement("a");
    productoDiario10.appendChild(linkProductodiario10);
    let imagenProducto10 = document.createElement("img");
    linkProductodiario10.appendChild(imagenProducto10);
    let labelProducto10 = document.createElement("h3");
    linkProductodiario10.appendChild(labelProducto10);

    const acomodar = (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => {
      imagenProducto1.src = p1[0];
      linkProductodiario1.setAttribute("href", p1[2]);
      labelProducto1.innerHTML = p1[1];
      imagenProducto2.src = p2[0];
      linkProductodiario2.setAttribute("href", p2[2]);
      labelProducto2.innerHTML = p2[1];
      imagenProducto3.src = p3[0];
      linkProductodiario3.setAttribute("href", p3[2]);
      labelProducto3.innerHTML = p3[1];
      imagenProducto4.src = p4[0];
      linkProductodiario4.setAttribute("href", p4[2]);
      labelProducto4.innerHTML = p4[1];
      productoDiario5.remove();
      imagenProducto6.src = p6[0];
      linkProductodiario6.setAttribute("href", p6[2]);
      labelProducto6.innerHTML = p6[1];
      imagenProducto7.src = p7[0];
      linkProductodiario7.setAttribute("href", p7[2]);
      labelProducto7.innerHTML = p7[1];
      imagenProducto8.src = p8[0];
      linkProductodiario8.setAttribute("href", p8[2]);
      labelProducto8.innerHTML = p8[1];
      if (p9) {
        imagenProducto9.src = p9[0];
        linkProductodiario9.setAttribute("href", p9[2]);
        labelProducto9.innerHTML = p9[1];
      } else {
        productoDiario9.remove();
      }
      productoDiario10.remove();
    };

    switch (resultado) {
      case "000":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "001":
        acomodar(p21, p22, p23, p72, null, p97, p94, p98, p911, null);
        break;
      case "002":
        acomodar(p21, p22, p23, p73, null, p91, p95, p98, p912, null);
        break;
      case "003":
        acomodar(p21, p22, p23, p71, null, p98, p92, p912, null, null);
        break;
      case "010":
        acomodar(p21, p22, p23, p72, null, p97, p96, p92, p911, null);
        break;
      case "011":
        acomodar(p21, p22, p23, p73, null, p97, p94, p98, p911, null);
        break;
      case "012":
        acomodar(p21, p22, p23, p71, null, p91, p95, p98, p912, null);
        break;
      case "013":
        acomodar(p21, p22, p23, p72, null, p98, p92, p912, null, null);
        break;
      case "020":
        acomodar(p31, p32, p33, p72, null, p97, p96, p92, p911, null);
        break;
      case "021":
        acomodar(p31, p32, p33, p73, null, p97, p94, p98, p911, null);
        break;
      case "022":
        acomodar(p31, p32, p33, p71, null, p91, p95, p98, p912, null);
        break;
      case "023":
        acomodar(p31, p32, p33, p72, null, p98, p92, p912, null, null);
        break;
      case "030":
        acomodar(p121, p122, p123, p72, null, p97, p96, p92, p911, null);
        break;
      case "031":
        acomodar(p121, p122, p123, p73, null, p97, p94, p98, p911, null);
        break;
      case "032":
        acomodar(p121, p122, p123, p71, null, p91, p95, p98, p912, null);
        break;
      case "033":
        acomodar(p121, p122, p123, p72, null, p98, p92, p912, null, null);
        break;
      case "100":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "101":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "102":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "103":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "110":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "111":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "112":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "113":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "120":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "121":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "122":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "123":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "130":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;
      case "131":
        acomodar(p21, p22, p23, p71, null, p97, p96, p92, p911, null);
        break;

      default:
        imagenProducto1.src = apivita_radiant_light;
        imagenProducto2.src = apivita_radiant_eyetube;
        imagenProducto3.src = apivita_radiant_serum;
        imagenProducto4.src = apivita_limpiadores_milk;
        productoDiario5.remove();
        imagenProducto6.src = apivita_ni_apricot;
        imagenProducto7.src = apivita_ni_aloe;
        imagenProducto8.src = apivita_ni_ginkgo;
        productoDiario9.remove();
        productoDiario10.remove();
        break;
    }
  } else {
    let labelDiario = document.createElement("h2");
    let textLabelDiario = document.createTextNode(
      "Necesitamos que contestes todas las preguntas para generarte una rutina"
    );
    labelDiario.setAttribute("id", "labeldeAdvertencia");
    labelDiario.appendChild(textLabelDiario);
    diarioContainer.appendChild(labelDiario);
  }
};
