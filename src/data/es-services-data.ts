export interface ServiceSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
}

export interface EsServiceData {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  sections: ServiceSection[];
  cta: string;
}

export const esServicesData: EsServiceData[] = [
  {
    slug: 'asilo',
    title: 'Asilo',
    subtitle: 'Proceso y Requisitos de Asilo',
    metaDescription: 'La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo. Representamos a personas que solicitan asilo en Los Ángeles.',
    intro: 'La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo. Representamos a personas que solicitan asilo por persecución por raza, religión, nacionalidad, opinión política o membresía en un grupo social particular.',
    sections: [
      {
        heading: 'Proceso Afirmativo',
        paragraphs: [
          'Un extranjero debe estar físicamente presente en los Estados Unidos para obtener asilo a través del proceso afirmativo.',
          'Un extranjero debe solicitar asilo dentro de un año de su última fecha de llegada a los Estados Unidos.',
          'Un extranjero también puede solicitar asilo afirmativo presentando el Formulario I-589, Solicitud de Asilo y Suspensión de Expulsión, al USCIS.',
        ],
      },
      {
        heading: 'Proceso Defensivo',
        paragraphs: [
          'Las solicitudes defensivas de asilo ocurren cuando los extranjeros solicitan asilo como defensa contra la expulsión de los Estados Unidos.',
          'Los jueces de inmigración escucharán casos de asilo defensivo en procedimientos contradictorios. Un juez escuchará los argumentos tanto del extranjero como del gobierno de EE.UU.',
        ],
      },
      {
        heading: 'Personas No Elegibles para el Asilo',
        bullets: [
          'No siguió la fecha límite de presentación de un año para el Formulario I-589',
          'Si un juez de inmigración o la Junta de Apelaciones de Inmigración negaron su solicitud de asilo anterior',
          'Puede ser trasladado a un tercer país seguro en virtud de un acuerdo entre los EE.UU. y otros países',
        ],
      },
    ],
    cta: '¿Necesita ayuda para solicitar asilo en el área de Los Ángeles? La Oficina Legal de Todd Becraft entiende las formas más efectivas de manejar estos casos. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta.',
  },
  {
    slug: 'cancelacion-de-eliminacion',
    title: 'Cancelación de Eliminación',
    subtitle: 'Una Defensa Poderosa contra la Deportación',
    metaDescription: 'La cancelación de deportación es una defensa poderosa para personas en procedimientos de remoción. Abogados de inmigración en Los Ángeles.',
    intro: 'La cancelación de deportación es una defensa poderosa para personas en procedimientos de remoción que pueden demostrar residencia a largo plazo en los EE.UU. y vínculos familiares fuertes.',
    sections: [
      {
        heading: 'Elegibilidad para Cancelación de Deportación',
        paragraphs: [
          'Una persona puede ser elegible para que se cancele su remoción bajo la sección 240A(b) de la INA si puede establecer ante un juez de inmigración que cumple con ciertos requisitos.',
        ],
        bullets: [
          'Ha mantenido presencia física continua en los EE.UU. durante diez años o más',
          'Ha sido una persona de buen carácter moral durante ese período',
          'No ha sido condenado por ciertos delitos',
          'Su remoción causaría dificultades excepcionales a su cónyuge, padre o hijo ciudadano de EE.UU. o LPR',
        ],
      },
      {
        heading: 'Satisfacer el Requisito de Residencia de 10 Años',
        paragraphs: [
          'Los recibos de alquiler, resúmenes de tarjetas de crédito y talones de pago pueden ser formas de evidencia para probar residencia continua.',
          'Es importante que las personas entiendan que salir del país por más de 90 días o sumar más de 180 días puede afectar negativamente el cálculo de 10 años.',
        ],
      },
      {
        heading: 'Requisito de Dificultad Excepcional',
        paragraphs: [
          'Este requisito puede ser uno de los más difíciles de cumplir porque una persona necesita presentar motivos que vayan más allá de la simple tristeza de un familiar.',
          'Cuando existe preocupación de que la atención médica no esté disponible en el país de origen, eso a menudo es suficiente para satisfacer esta carga.',
        ],
      },
    ],
    cta: 'Puede llamar al (213) 388-1821 o contáctenos en línea para concertar una consulta con nuestro abogado de cancelación de deportación en Los Ángeles.',
  },
  {
    slug: 'ciudadania-y-naturalizacion',
    title: 'Ciudadanía y Naturalización',
    subtitle: 'El Proceso de Naturalización Explicado',
    metaDescription: 'Guiamos a nuestros clientes a través de cada paso del proceso de naturalización. Abogados de ciudadanía e inmigración en Los Ángeles.',
    intro: 'Guiamos a nuestros clientes a través de cada paso del proceso de naturalización, desde determinar la elegibilidad hasta prepararse para la entrevista y el examen de ciudadanía.',
    sections: [
      {
        heading: 'Requisitos de Naturalización',
        paragraphs: [
          'La naturalización es el proceso mediante el cual se otorga la ciudadanía estadounidense a un residente permanente legal después de cumplir con los requisitos establecidos en la Ley de Inmigración y Nacionalidad.',
        ],
        bullets: [
          'Tener al menos 18 años de edad al presentar la solicitud',
          'Ser residente permanente legal (titular de tarjeta verde) durante al menos 5 años (3 años si está casado con ciudadano/a)',
          'Haber vivido en los EE.UU. continuamente',
          'Ser una persona de buen carácter moral',
          'Ser capaz de leer, escribir y hablar inglés básico',
          'Demostrar conocimiento de la historia y gobierno de EE.UU.',
          'Estar dispuesto a prestar el Juramento de Lealtad',
        ],
      },
      {
        heading: 'El Proceso de Naturalización',
        paragraphs: [
          'Cuando alguien envía su solicitud, es posible que deba someterse a la recopilación de datos biométricos. USCIS programa una cita y le informa la hora, el lugar y la fecha.',
          'La naturalización también implica una entrevista con un oficial de inmigración de USCIS donde debe demostrar conocimiento del idioma inglés y del civismo.',
          'También habrá un examen de historia y gobierno de los Estados Unidos.',
        ],
      },
    ],
    cta: 'Nuestra firma ha estado ayudando a inmigrantes por más de una década. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de ciudadanía y naturalización en Los Ángeles.',
  },
  {
    slug: 'daca',
    title: 'DACA',
    subtitle: 'Acción Diferida para los Llegados en la Infancia',
    metaDescription: 'Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes y renovaciones. Abogados de DACA en Los Ángeles.',
    intro: 'Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes iniciales y renovaciones. Monitoreamos los cambios en el programa para asegurarnos de que nuestros clientes estén preparados.',
    sections: [
      {
        heading: 'Requisitos de DACA',
        paragraphs: [
          'Las solicitudes de DACA solo se pueden otorgar cuando USCIS determina que una persona cumple con los siguientes criterios mínimos:',
        ],
        bullets: [
          'Tenían menos de 31 años el 15 de junio de 2012',
          'Llegó a los Estados Unidos antes de cumplir los 16 años de edad',
          'Ha vivido en los Estados Unidos continuamente desde el 15 de junio de 2007',
          'Estaba presente en los EE.UU. el 15 de junio de 2012 y en el momento de hacer la solicitud',
          'No tiene una condena por delito grave, delito menor significativo o tres o más delitos menores',
          'No representa una amenaza para la seguridad nacional o pública',
          'Tiene al menos 15 años de edad al momento de solicitar',
        ],
      },
      {
        heading: 'Proceso de Solicitud de DACA',
        paragraphs: [
          'Aunque DACA se ha vuelto más complicado para nuevas personas en el programa, todavía ofrece beneficios considerables para personas elegibles.',
          'Nuestros servicios incluyen solicitudes iniciales de DACA, renovaciones oportunas para prevenir brechas en la autorización de trabajo, solicitudes de advance parole, y abordar complicaciones con el estatus DACA.',
        ],
      },
    ],
    cta: 'Nuestra firma entiende lo aterrador que puede ser este proceso. Puede llamar al (213) 388-1821 o contáctenos en línea para recibir una consulta con nuestro abogado de DACA en Los Ángeles.',
  },
  {
    slug: 'deportacion-y-remocion',
    title: 'Deportación y Remoción',
    subtitle: 'Defensa Agresiva contra la Deportación',
    metaDescription: 'Nuestros abogados son defensores experimentados que luchan agresivamente para mantener a las familias unidas. Defensa contra deportación en Los Ángeles.',
    intro: 'Nuestros abogados son defensores experimentados en sala de audiencias que luchan agresivamente para mantener a las familias unidas. Exploramos cada posible forma de alivio.',
    sections: [
      {
        heading: 'Audiencias de Deportación',
        paragraphs: [
          'El Título 8 del Código de EE.UU. § 1229a es la ley federal relacionada con los procedimientos de deportación. Pocas perspectivas pueden ser más aterradoras que enfrentarse a la deportación.',
          'Un caso de deportación terminará con la deportación de la persona a su país de origen o con la elegibilidad para continuar viviendo y trabajando en los EE.UU.',
          'Cuando una persona recibe un Aviso de comparecencia en la corte de inmigración, el Departamento de Seguridad Nacional ha comenzado el proceso para deportarlo de los EE.UU.',
        ],
      },
      {
        heading: 'Formas de Defensa',
        bullets: [
          'Asilo y suspensión de remoción',
          'Protección de la Convención contra la Tortura (CAT)',
          'Cancelación de remoción',
          'Ajuste de estatus',
          'Salida voluntaria',
          'Discreción del fiscal',
          'Apelaciones ante la Junta de Apelaciones de Inmigración (BIA)',
          'Apelaciones ante el Tribunal del 9no Circuito',
        ],
      },
    ],
    cta: 'Nuestra firma entiende que cada cliente que servimos es único. Dé el primer paso cuando llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de deportación y remoción en Los Ángeles.',
  },
  {
    slug: 'tarjeta-verde-ajuste-de-estatus',
    title: 'Tarjeta Verde / Ajuste de Estatus',
    subtitle: 'Su Camino hacia la Residencia Permanente',
    metaDescription: 'Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes. Abogados de tarjeta verde y ajuste de estatus en Los Ángeles.',
    intro: 'Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes por relaciones familiares, empleo u otras categorías.',
    sections: [
      {
        heading: 'Cómo Solicitar una Tarjeta Verde',
        paragraphs: [
          'El Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) señala que el ajuste de estatus se refiere a un proceso que una persona puede usar para solicitar la residencia permanente legal sin tener que regresar a su país de origen.',
          'La mayoría de las personas que solicitan tarjetas de residencia deben completar al menos dos formularios: una petición de inmigrante y una solicitud de tarjeta de residencia.',
        ],
      },
      {
        heading: 'Categorías de Elegibilidad',
        bullets: [
          'Basada en relaciones familiares (cónyuge, padre, hijo de ciudadano de EE.UU. o LPR)',
          'Basada en empleo (trabajadores con habilidades especiales, trabajadores profesionales, otros trabajadores)',
          'Lotería de visa de diversidad',
          'Categorías humanitarias (asilo, refugiado, VAWA)',
          'Visa U después de tres años',
        ],
      },
    ],
    cta: 'Nuestra firma se tomará el tiempo para explicarle cada acción que ocurre en su caso. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de tarjeta verde en Los Ángeles.',
  },
  {
    slug: 'visa-de-prometido-k-1',
    title: 'Visa de Prometido K-1',
    subtitle: 'Requisitos y Proceso de la Visa K-1',
    metaDescription: 'La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar a los Estados Unidos y casarse dentro de 90 días. Abogados en Los Ángeles.',
    intro: 'La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar a los Estados Unidos y casarse dentro de los 90 días de llegada.',
    sections: [
      {
        heading: 'Proceso de Visa K-1',
        paragraphs: [
          'Ciudadanos de los Estados Unidos que deseen traer a su prometido/a extranjero/a al país para casarse deben presentar el Formulario I-129F, Petición para Prometido/a Extranjero/a.',
          'Si el/la prometido/a se casa dentro de los 90 días posteriores a la admisión como no inmigrante K-1, puede solicitar el estatus de residente permanente legal.',
        ],
      },
      {
        heading: 'Requisitos de Elegibilidad',
        bullets: [
          'El peticionario debe ser ciudadano de los EE.UU.',
          'Ambas partes deben ser legalmente libres para casarse',
          'Las partes se han conocido en persona en los dos años anteriores a la solicitud (con excepciones)',
          'El ciudadano de EE.UU. debe cumplir con los requisitos de ingresos',
        ],
      },
    ],
    cta: 'Nuestra firma ha ayudado a muchas personas en todo California a obtener las visas K-1 que necesitaban para casarse. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de visa K-1 en Los Ángeles.',
  },
  {
    slug: 'estado-de-proteccion-temporal-tps',
    title: 'Estado de Protección Temporal (TPS)',
    subtitle: 'Lo Que Necesita Saber sobre el TPS',
    metaDescription: 'Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones y documentos de autorización de trabajo. Abogados de TPS en Los Ángeles.',
    intro: 'Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones oportunas y documentos de autorización de trabajo.',
    sections: [
      {
        heading: '¿Quién Califica para TPS?',
        paragraphs: [
          'El Estado de Protección Temporal (TPS) es una forma de ayuda humanitaria para ciudadanos extranjeros dentro de los EE.UU. cuyo país de origen está designado por el Secretario de Seguridad Nacional.',
        ],
        bullets: [
          'Es ciudadano del país designado para TPS',
          'Ha residido continuamente en los EE.UU. desde la fecha especificada para el país',
          'Ha estado presente físicamente en los EE.UU. continuamente desde la fecha designada',
          'No ha sido condenado por dos o más delitos menores o un delito grave',
        ],
      },
      {
        heading: 'Países con TPS',
        paragraphs: [
          'Los países con nacionales bajo TPS incluyen Somalia, Honduras, Nicaragua, Camerún, El Salvador, Haití, Siria, Sudán, Nepal, Sudán del Sur, Yemen, Venezuela, Myanmar, Ucrania y Afganistán.',
        ],
      },
    ],
    cta: 'Nuestra firma trabaja muy de cerca con cada cliente. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de TPS en Los Ángeles.',
  },
  {
    slug: 'i-601a-exenciones-provisionales',
    title: 'I-601A Exenciones Provisionales',
    subtitle: 'El Proceso de Exención Provisional I-601A',
    metaDescription: 'La exención provisional I-601A permite a ciertos parientes inmediatos solicitar una exención antes de su entrevista consular. Abogados en Los Ángeles.',
    intro: 'La exención provisional I-601A permite a ciertos parientes inmediatos de ciudadanos de EE.UU. solicitar una exención antes de salir de los EE.UU. para su entrevista consular.',
    sections: [
      {
        heading: '¿Qué es el Formulario I-601A?',
        paragraphs: [
          'El Formulario I-601A, Solicitud de Exención Provisional de Presencia Ilegal, es diferente del Formulario I-601. Mientras que el I-601 es para extranjeros inadmisibles en los EE.UU., el I-601A es específicamente para personas que solo necesitan una exención por presencia ilegal.',
          'Si bien el Formulario I-601A puede renunciar a la presencia ilegal, no renuncia a otros motivos de inadmisibilidad.',
        ],
      },
      {
        heading: 'Requisitos para el I-601A',
        bullets: [
          'Ser pariente inmediato de un ciudadano de los EE.UU. (cónyuge, hijo, padre)',
          'Tener una petición de inmigrante aprobada (Formulario I-130)',
          'Tener un caso pendiente con el Centro Nacional de Visas',
          'Demostrar que la denegación causaría dificultades extremas al cónyuge o padre ciudadano de EE.UU.',
        ],
      },
    ],
    cta: 'Nuestra firma ha manejado muchos de estos casos, así que sabemos cómo abordar cualquier problema que pueda surgir. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de exenciones I-601A en Los Ángeles.',
  },
  {
    slug: 'visa-u',
    title: 'Visa U',
    subtitle: 'Beneficios de Inmigración para Víctimas de Delitos',
    metaDescription: 'La Visa U proporciona beneficios de inmigración a víctimas de delitos que han cooperado con las autoridades. Abogados de Visa U en Los Ángeles.',
    intro: 'La Visa U proporciona beneficios de inmigración a víctimas de delitos que han cooperado con las autoridades. También ayudamos con el ajuste de estatus a residencia permanente después de tres años.',
    sections: [
      {
        heading: '¿Qué es la Visa U?',
        paragraphs: [
          'El estatus de no inmigrante U (la Visa U) es un programa de alivio de inmigración que busca hacer más seguro para las víctimas de ciertos delitos denunciar sus casos a la policía.',
          'El Congreso aprobó la Ley de Protección de Víctimas de la Trata y la Violencia (VTVPA) en 2000 y creó dos categorías de visas de no inmigrante: la Visa U para víctimas de ciertos delitos y la Visa T para víctimas de trata de personas.',
        ],
      },
      {
        heading: 'Elegibilidad para la Visa U',
        bullets: [
          'Ha sufrido abuso físico o mental sustancial como resultado de haber sido víctima de actividad delictiva calificada',
          'Tiene información sobre la actividad delictiva calificada',
          'Ha sido útil, es útil o probablemente será útil para funcionarios del orden público en la investigación o enjuiciamiento de la actividad delictiva',
          'La actividad delictiva violó las leyes de los EE.UU. o ocurrió en los EE.UU.',
        ],
      },
      {
        heading: 'Actividades Delictivas Calificadas',
        bullets: [
          'Violencia doméstica',
          'Agresión sexual',
          'Abuso sexual de un menor',
          'Prostitución',
          'Esclavitud',
          'Tráfico de personas',
          'Acoso',
          'Secuestro',
          'Extorsión',
          'Testigo falso',
          'Obstrucción de la justicia',
          'Y otros delitos graves',
        ],
      },
    ],
    cta: 'Nuestra firma sabrá cómo ayudarle a superar cualquier complicación y lograr el resultado más favorable posible para su caso. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de Visa U en Los Ángeles.',
  },
];

export function getEsServiceBySlug(slug: string): EsServiceData | undefined {
  return esServicesData.find(s => s.slug === slug);
}

// Maps Spanish service slugs to their English equivalents (for hreflang)
export const estoEnServiceSlug: Record<string, string> = {
  'asilo': 'asylum',
  'cancelacion-de-eliminacion': 'cancellation-of-removal',
  'ciudadania-y-naturalizacion': 'citizenship-and-naturalization',
  'daca': 'daca',
  'deportacion-y-remocion': 'deportation-and-removal',
  'tarjeta-verde-ajuste-de-estatus': 'green-card-adjustment-of-status',
  'i-601a-exenciones-provisionales': 'i-601a-provisional-waivers',
  'visa-de-prometido-k-1': 'k-1-fiance-visa',
  'estado-de-proteccion-temporal-tps': 'temporary-protected-status-tps',
  'visa-u': 'u-visa',
};
