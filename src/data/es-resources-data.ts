export interface ResourceSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
}

export interface EsResourceData {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  sections: ResourceSection[];
  cta: string;
}

export const esResourcesData: EsResourceData[] = [
  {
    slug: 'la-guia-becraft-para-evitar-la-deportacion',
    title: 'La Guía Becraft para Evitar la Deportación',
    subtitle: '¿Cuáles Son Sus Derechos Legales Si Podría Ser Deportado?',
    metaDescription: 'Una guía completa que cubre el proceso de deportación, defensas legales, y todas las opciones disponibles para evitar ser deportado. De la Oficina Legal de Todd Becraft.',
    intro: 'La deportación, también conocida como expulsión, es un proceso grave en el que a un no ciudadano se le ordena abandonar el país debido a una violación de las leyes de inmigración. Esta guía le ayudará a entender sus derechos y opciones.',
    sections: [
      {
        heading: 'Comprender el Proceso de Deportación',
        paragraphs: [
          'Antes de analizar los recursos legales, es importante entender cómo funcionan los procedimientos de deportación. La deportación generalmente comienza con un arresto o un Aviso de Comparecencia (NTA) ante un juez de inmigración. La agencia de Inmigración y Control de Aduanas de EE.UU. (ICE) es responsable de hacer cumplir las órdenes de deportación.',
          'El proceso generalmente sigue estos pasos:',
        ],
        bullets: [
          'Emisión de un Aviso de Comparecencia (NTA): Este documento describe los motivos de los procedimientos de expulsión y especifica una fecha en el tribunal.',
          'Audiencia del Calendario Principal: Esta audiencia inicial permite al no ciudadano responder a los cargos y solicitar alivio.',
          'Audiencia Individual: Si se busca alivio, se programará una audiencia separada para presentar pruebas y argumentos legales.',
          'Decisión del Juez de Inmigración: El juez otorgará el alivio o emitirá una orden de deportación.',
          'Apelaciones: Si el juez ordena la deportación, la persona puede tener opciones para apelar la decisión.',
          'Expulsión o Suspensión de la Expulsión: Si se agotan todas las opciones legales, la persona puede ser deportada o se le puede otorgar una suspensión de la expulsión.',
        ],
      },
      {
        heading: 'Recursos Legales contra la Deportación',
        paragraphs: [
          'Existen varias defensas y recursos legales disponibles para las personas que enfrentan la deportación. Cada caso es único y buscar asesoramiento legal es crucial para determinar el mejor curso de acción.',
        ],
      },
      {
        heading: '1. Impugnar los Cargos',
        paragraphs: [
          'Uno de los primeros pasos para combatir la deportación es cuestionar la base legal para la expulsión. Las posibles defensas incluyen:',
        ],
        bullets: [
          'Defectos de procedimiento: Si el NTA contiene información incorrecta, o si el gobierno no sigue los procedimientos adecuados, el caso puede ser desestimado.',
          'Falta de evidencia: El gobierno debe probar que el individuo es expulsable. Si faltan pruebas suficientes, el caso puede ser desestimado.',
          'Arresto o detención ilegal: Si se violaron los derechos de una persona durante el proceso de arresto o detención, se podrían impugnar los procedimientos de expulsión.',
        ],
      },
      {
        heading: '2. Asilo y Protección contra Persecución',
        paragraphs: [
          'Las personas que temen persecución en su país de origen por raza, religión, nacionalidad, opinión política o membresía en un grupo social particular pueden solicitar asilo. Para ser elegible, el solicitante debe:',
        ],
        bullets: [
          'Presentar la solicitud dentro de un año de llegada a los EE.UU. (o mostrar circunstancias excepcionales para una presentación tardía).',
          'Demostrar un miedo creíble de persecución.',
          'Proporcionar evidencia que apoye la solicitud.',
        ],
      },
      {
        heading: '3. Cancelación de Remoción',
        paragraphs: [
          'La cancelación de la expulsión es una forma de alivio disponible para ciertas personas que han establecido vínculos sólidos con los EE.UU. Los criterios de elegibilidad varían según si el solicitante es un residente permanente legal (LPR) o un residente no permanente.',
        ],
        bullets: [
          'Para Residentes Permanentes Legales: Debe haber sido LPR durante al menos cinco años, haber residido continuamente en los EE.UU. durante al menos siete años, y no haber sido condenado por un delito grave agravado.',
          'Para No Residentes Permanentes: Debe haber estado físicamente presente en los EE.UU. durante al menos diez años, demostrar buen carácter moral y probar que la expulsión causaría dificultades excepcionales y extremadamente inusuales a un familiar ciudadano de EE.UU. o LPR que califique.',
        ],
      },
      {
        heading: '4. Ajuste de Estatus',
        paragraphs: [
          'Algunas personas que enfrentan la deportación pueden ser elegibles para ajustar su estatus al de residente permanente legal (titular de tarjeta verde). Esta opción puede estar disponible si:',
        ],
        bullets: [
          'El individuo tiene un familiar inmediato que es ciudadano de EE.UU. o residente permanente legal y puede peticionarlo.',
          'El individuo califica bajo ciertas categorías de empleo.',
          'El individuo califica bajo programas especiales como la Ley de Violencia contra la Mujer (VAWA) o el estatus de inmigrante juvenil especial (SIJS).',
        ],
      },
      {
        heading: '5. Salida Voluntaria',
        paragraphs: [
          'Si no hay otros recursos legales disponibles, una persona puede solicitar la salida voluntaria. Esto le permite salir de los EE.UU. en sus propios términos en lugar de ser expulsado por la fuerza, incluida la capacidad de volver a solicitar la entrada legal en el futuro sin las penalidades asociadas con la deportación.',
        ],
      },
    ],
    cta: 'La deportación es un asunto legal grave, pero existen numerosas opciones legales para las personas en riesgo de expulsión. Buscar asesoramiento legal inmediato es esencial. En la Oficina Legal de Todd Becraft, traemos años de experiencia ayudando a las personas a evitar la deportación. Llámenos hoy: (213) 388-1821.',
  },
  {
    slug: 'la-guia-de-becraft-sobre-como-convertirse-en-ciudadano-estadounidense',
    title: 'La Guía de Becraft sobre Cómo Convertirse en Ciudadano Estadounidense',
    subtitle: 'El Camino hacia la Ciudadanía Americana',
    metaDescription: 'Una guía completa sobre el proceso de naturalización: requisitos de elegibilidad, el proceso paso a paso, y la vida como ciudadano estadounidense.',
    intro: '¿Es usted un residente no ciudadano de los Estados Unidos que desea convertirse en ciudadano? Esta guía completa le explicará todo lo que necesita saber sobre el proceso de naturalización.',
    sections: [
      {
        heading: '1. Elegibilidad: ¿Está Listo para Solicitar?',
        paragraphs: [
          'Antes de poder solicitar la ciudadanía estadounidense, debe cumplir con varios requisitos que garanticen que se ha establecido en los Estados Unidos.',
        ],
      },
      {
        heading: 'A. Estatus de Residente Permanente Legal',
        paragraphs: [
          'El primer paso es tener el estatus de Residente Permanente Legal (LPR), también conocido como tener una tarjeta verde. La mayoría de los residentes permanentes legales obtuvieron su tarjeta verde a través de patrocinio familiar, empleo o al ser admitidos como refugiados o asilados.',
        ],
        bullets: [
          'Patrocinio familiar',
          'Inmigración basada en empleo',
          'Lotería de Visa de Diversidad',
          'Estatus de Asilo o Refugiado',
          'Categorías especiales de inmigrantes',
        ],
      },
      {
        heading: 'B. Residencia Continua',
        paragraphs: [
          'Una vez que tenga su tarjeta verde, deberá haber vivido en los Estados Unidos continuamente por un período determinado:',
        ],
        bullets: [
          'Se requieren cinco años de residencia continua para la mayoría de los solicitantes.',
          'Se requieren tres años de residencia continua si está casado con un ciudadano de EE.UU.',
        ],
      },
      {
        heading: 'C. Presencia Física',
        bullets: [
          'Debe haber estado físicamente presente en los EE.UU. durante al menos 30 meses de los últimos cinco años.',
          'Si solicita basándose en el matrimonio con un ciudadano de EE.UU., 18 meses de los últimos tres años.',
        ],
      },
      {
        heading: 'D. Buen Carácter Moral',
        paragraphs: [
          'Debe demostrar buen carácter moral, lo que significa que ha seguido las leyes, pagado sus impuestos y actuado de manera responsable. Ciertos comportamientos, como cometer delitos graves o no presentar declaraciones de impuestos, pueden descalificarlo.',
        ],
      },
      {
        heading: 'E. Conocimiento Básico del Inglés',
        paragraphs: [
          'Debe demostrar competencia básica en lectura, escritura y habla en inglés, que se evalúa durante su entrevista de ciudadanía. La prueba se enfoca en habilidades lingüísticas cotidianas y usa oraciones simples.',
        ],
      },
      {
        heading: 'F. Conocimiento de la Historia y el Civismo de EE.UU.',
        paragraphs: [
          'Deberá pasar una prueba de civismo que cubre la historia básica de EE.UU. y el gobierno. USCIS proporciona una lista de 100 preguntas posibles. Se le harán hasta 10 durante su entrevista y necesita responder al menos seis correctamente.',
        ],
      },
      {
        heading: '2. El Proceso de Naturalización: Paso a Paso',
      },
      {
        heading: 'A. Presentar el Formulario N-400',
        paragraphs: [
          'El primer paso es presentar el Formulario N-400, Solicitud de Naturalización. Este formulario solicita información sobre su historial personal. El formulario se puede presentar en línea o por correo.',
        ],
      },
      {
        heading: 'B. Cita de Biometría',
        paragraphs: [
          'USCIS le programará una cita de biometría donde se recopilan sus huellas dactilares, foto y firma para una verificación de antecedentes.',
        ],
      },
      {
        heading: 'C. La Entrevista y los Exámenes de Naturalización',
        paragraphs: [
          'Un oficial de USCIS revisará su solicitud y le hará preguntas para verificar la información. Durante la entrevista también tomará:',
        ],
        bullets: [
          'Prueba de inglés: Se le pedirá que lea y escriba oraciones simples en inglés, y responda algunas preguntas básicas habladas.',
          'Prueba de civismo: Se le harán hasta 10 preguntas sobre la historia y el gobierno estadounidense; necesita acertar seis para aprobar.',
        ],
      },
      {
        heading: 'D. El Juramento de Lealtad',
        paragraphs: [
          'El último paso es prestar el Juramento de Lealtad en su ceremonia de naturalización. Recitará el juramento junto con otros nuevos ciudadanos y recibirá su Certificado de Naturalización, su prueba oficial de ciudadanía estadounidense.',
        ],
      },
      {
        heading: '3. La Vida como Ciudadano Estadounidense',
        paragraphs: [
          'Una vez que haya completado el proceso de naturalización, disfrutará de todos los derechos y privilegios de la ciudadanía:',
        ],
        bullets: [
          'El derecho a votar en las elecciones federales, estatales y locales.',
          'Solicitar un pasaporte estadounidense para viajes internacionales más fáciles.',
          'Patrocinar a familiares para una tarjeta verde.',
          'Acceso a empleos federales y autorizaciones de seguridad.',
          'Plena participación en el servicio de jurado y la vida cívica.',
        ],
      },
      {
        heading: '4. Circunstancias Especiales y Excepciones',
        bullets: [
          'Servicio militar: Puede calificar para la naturalización expedita sin los requisitos habituales de residencia.',
          'Solicitantes mayores: Los solicitantes de 50 años o más que han vivido en los EE.UU. como titular de tarjeta verde durante 20 años o más pueden tomar el examen de civismo en su idioma nativo.',
          'Exenciones médicas: Los solicitantes con discapacidades físicas o mentales pueden calificar para una exención de los exámenes de inglés o civismo.',
        ],
      },
    ],
    cta: 'Convertirse en ciudadano de los EE.UU. significa convertirse en parte de una nación con una rica historia. La Oficina Legal de Todd Becraft está lista para ayudarle a navegar cada paso del camino. Llámenos hoy: (213) 388-1821.',
  },
];

export function getEsResourceBySlug(slug: string): EsResourceData | undefined {
  return esResourcesData.find(r => r.slug === slug);
}
