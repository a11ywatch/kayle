/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const htmlcsRules = [
  {
    ruleId: "Audio",
    description:
      "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Img.EmptyAltInLink",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.NullAltWithTitle",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.Ignored",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Img.MissingAlt",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.GeneralAlt",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "InputImage.MissingAlt",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "InputImage.GeneralAlt",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Area.MissingAlt",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Area.GeneralAlt",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Object.MissingBody",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Object.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Applet.MissingBody",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.MissingAlt",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Video",
    description:
      "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Captions",
    description:
      "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Colour",
    description:
      "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.HiddenText",
    description:
      'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TableHeaders",
    description:
      "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MissingHeadersAttrs",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "IncompleteHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Flicker",
    description:
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "AltVersion",
    description:
      "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "EmptyAnchorNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "PlaceholderAnchor",
    description:
      "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "NoContentAnchor",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "PluginLink",
    description:
      "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Errors",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Labels",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "KeyboardNav",
    description:
      "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "SkipLinks",
    description:
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TimeLimit",
    description:
      "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MetaRedirect",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MetaRefresh",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H30.2",
    description:
      "El elemento Img es el único contenido del enlace, pero falta el texto alternativo (alt). El texto alternativo debe describir el propósito del enlace.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H67.1",
    description:
      "El elemento Img con el atributo alt vacío debe tener el atributo title ausente o vacío.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H67.2",
    description:
      "El elemento Img está marcado para que sea ignorado por la Tecnología de Asistencia.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H37",
    description:
      "El elemento Img falta de un atributo alt. Usa el atributo alt para especificar un texto alternativo corto.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94.Image",
    description:
      "Asegúrate de que el texto alternativo (alt) del elemento img sirva para el mismo propósito y presente la misma información que la imagen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H36",
    description:
      "El botón de envío de la imagen falta de atributo alt. Especifica un texto alternativo que describa la función del botón, usando el atributo alt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94.Button",
    description:
      "Asegúrate de que el texto alternativo (alt) del botón de envio de la imagen identifique el propósito del botón.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H24",
    description:
      "El elemento Area en un mapa de imágenes falta de un atributo alt. Cada elemento Area debe tener un texto alternativo que describa la función del área del mapa de imágenes.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H24.2",
    description:
      "Asegúrate de que el texto alternativo del elemento Area sirva para el mismo propósito que la parte de la imagen del mapa de imágenes a la que se refiere.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G73,G74",
    description:
      "Si esta imagen no puede ser completamente descrita en un texto alternativo corto, asegúrate de que también haya disponible un texto alternativo largo, como en el texto del cuerpo o a través de un enlace.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG5",
    description:
      "El elemento Img dentro de un enlace no debe usar un texto alternativo que duplique el contenido del texto del enlace.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG4",
    description:
      "El elemento Img dentro de un enlace tiene un texto alternativo vacío o faltante cuando un enlace junto a él contiene texto de enlace. Considera la posibilidad de combinar los enlaces.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG3",
    description:
      "El elemento Img dentro de un enlace no debe usar un texto alternativo que duplique el contenido de un enlace de texto junto a él.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG4",
    description:
      "El elemento Img dentro de un enlace tiene un texto alternativo vacío o faltante cuando un enlace junto a él contiene texto de enlace. Considera la posibilidad de combinar los enlaces.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG3",
    description:
      "El elemento Img dentro de un enlace no debe usar un texto alternativo que duplique el contenido de un enlace de texto junto a él.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H53,ARIA6",
    description:
      "Los elementos Object deben contener un texto alternativo después de que se agoten todas las demás alternativas.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94,G92.Object,ARIA6",
    description:
      "Verifica que haya disponibles textos alternativos cortos (y, si corresponde, largos) para contenido no textual que sirva para el mismo propósito y presente la misma información.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H35.3",
    description:
      "Los elementos Applet deben contener un texto alternativo en el cuerpo del elemento, para navegadores que no soportan el elemento Applet.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H35.2",
    description:
      "Los elementos Applet deben contener un atributo alt, para proporcionar un texto alternativo a los navegadores que soportan el elemento pero no pueden cargar el applet.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94,G92.Applet",
    description:
      "Verifica que haya disponibles textos alternativos cortos (y, si corresponde, largos) para contenido no textual que sirva para el mismo propósito y presente la misma información.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_1_G158",
    description:
      "Si este objeto embebido contiene solo audio pregrabado y no se proporciona como alternativa para el contenido de texto, verifica que haya disponible una versión de texto alternativa.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_1_G159,G166",
    description:
      "Si este objeto embebido contiene solo video pregrabado y no se proporciona como alternativa para el contenido de texto, verifica que haya disponible una versión de texto alternativa, o se proporcione una pista de audio que presente la misma información.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_2_G87,G93",
    description:
      "Si este objeto embebido contiene media sincronizada pregrabada y no se proporciona como alternativa para el contenido de texto, verifica que se proporcionen leyendas para el contenido de audio.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_3_G69,G78,G173,G8",
    description:
      "Si este objeto embebido contiene media sincronizada pregrabada y no se proporciona como alternativa para el contenido de texto, verifica que se proporcione una descripción de audio de su video y/o una versión de texto alternativa del contenido.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_4_G9,G87,G93",
    description:
      "Si este objeto embebido contiene media sincronizada, verifica que se proporcionen leyendas para el contenido de audio en vivo.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_5_G78,G173,G8",
    description:
      "Si este objeto embebido contiene media sincronizada pregrabada, verifica que se proporcione una descripción de audio para su contenido de video.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_6_G54,G81",
    description:
      "Si este objeto embebido contiene media sincronizada pregrabada, verifica que se proporcione una interpretación en lengua de señas para su audio.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_7_G8",
    description:
      "Si este objeto embebido contiene media sincronizada, y donde las pausas en el audio en primer plano no son suficientes para permitir que las descripciones de audio transmitan el sentido del video pregrabado, verifica que se proporcione una descripción de audio extendida, ya sea a través de la elaboración de guiones o una versión alternativa.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_8_G69,G159",
    description:
      "Si este objeto embebido contiene media sincronizada pregrabada o contenido solo de video, verifica que se proporcione una versión de texto alternativa del contenido.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_9_G150,G151,G157",
    description:
      "Si este objeto embebido contiene solo contenido de audio en vivo, verifica que se proporcione una versión de texto alternativa del contenido.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F92,ARIA4",
    description:
      'El rol de este elemento es "presentation", pero contiene elementos secundarios con significado semántico.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.code",
    description: "msg",
    helpUrl: [],
    ruleType: "level",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H44.NotFormControl",
    description:
      'El atributo "for" de esta etiqueta contiene una ID para un elemento que no es un control de formulario. Asegúrate de que hayas ingresado la ID correcta para el elemento previsto.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H65",
    description:
      'Este control de formulario tiene un atributo "title" que está vacío o contiene solo espacios. Se ignorará para fines de prueba de etiquetas.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_ARIA6",
    description:
      'Este control de formulario tiene un atributo "aria-label" que está vacío o contiene solo espacios. Se ignorará para fines de prueba de etiquetas.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68.Hidden",
    description:
      "Este campo de formulario oculto está etiquetado de alguna manera. No debe ser necesario etiquetar un campo de formulario oculto.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68.HiddenAttr",
    description:
      'Se pretende que este campo de formulario esté oculto (usando el atributo "hidden"), pero también está etiquetado de alguna manera. No debe ser necesario etiquetar un campo de formulario oculto.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68",
    description:
      'Este campo de formulario debería tener una etiqueta. Utiliza el elemento de etiqueta (ya sea con un atributo "for" o envuelto alrededor del campo de formulario), o los atributos "title", "aria-label" o "aria-labelledby" según corresponda.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.",
    description: "Marcado presentacional obsoleto utilizado en HTML5.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.Semantic",
    description:
      "Debería usarse marcado semántico para marcar el texto enfatizado o especial para que pueda ser determinado programáticamente.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.AlignAttr.Semantic",
    description:
      "Debería usarse marcado semántico para marcar el texto enfatizado o especial para que pueda ser determinado programáticamente.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H42",
    description:
      "Debería usarse marcado de encabezado si este contenido está destinado como encabezado.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.3",
    description:
      "La celda de la tabla tiene un atributo de ámbito inválido. Los valores válidos son fila (row), columna (col), grupo de filas (rowgroup) o grupo de columnas (colgroup).",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.2",
    description:
      "Los atributos de ámbito en los elementos td que actúan como encabezados para otros elementos son obsoletos en HTML5. Utiliza en su lugar un elemento th.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.ScopeAmbiguous",
    description:
      "Los atributos de ámbito en los elementos th son ambiguos en una tabla con múltiples niveles de encabezados. Utiliza el atributo headers en los elementos td en su lugar.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.IncorrectAttrNotice",
    description:
      "Verifica que el atributo headers en los elementos td sea correcto.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.HeadersRequired",
    description:
      "La relación entre los elementos td y sus elementos th asociados no está definida. Como esta tabla tiene múltiples niveles de elementos th, debes utilizar el atributo headers en los elementos td.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeaderIds",
    description:
      "No todos los elementos th en esta tabla contienen un atributo id. Estas celdas deben contener ids para que puedan ser referenciadas por los atributos headers de los elementos td.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeadersAttrs",
    description:
      "No todos los elementos td en esta tabla contienen un atributo headers. Cada atributo headers debe enumerar los ids de todos los elementos th asociados con esa celda.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43,H63",
    description:
      "La relación entre los elementos td y sus elementos th asociados no está definida. Utiliza either el atributo scope en los elementos th o el atributo headers en los elementos td.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeaderIds",
    description:
      "No todos los elementos th en esta tabla contienen un atributo id. Estas celdas deben contener ids para que puedan ser referenciadas por los atributos headers de los elementos td.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeadersAttrs",
    description:
      "No todos los elementos td en esta tabla contienen un atributo headers. Cada atributo headers debe enumerar los ids de todos los elementos th asociados con esa celda.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.1",
    description:
      "No todos los elementos th en esta tabla tienen un atributo de ámbito. Estas celdas deben contener un atributo de ámbito para identificar su asociación con los elementos td.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43,H63",
    description:
      "La relación entre los elementos td y sus elementos th asociados no está definida. Utiliza either el atributo scope en los elementos th o el atributo headers en los elementos td.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.LayoutTable",
    description:
      "Esta tabla parece ser utilizada para diseño, pero contiene un atributo summary. Las tablas de diseño no deben contener atributos summary, o, si se proporcionan, deben estar vacías.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39,H73.4",
    description:
      "Si esta tabla es una tabla de datos, y tanto un atributo summary como un elemento de subtítulo (caption) están presentes, el summary no debe duplicar el subtítulo.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.Check",
    description:
      "Si esta tabla es una tabla de datos, verifica que el atributo summary describa la organización de la tabla o explique cómo utilizarla.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.NoSummary",
    description:
      "Si esta tabla es una tabla de datos, considera utilizar el atributo summary del elemento table para dar una descripción general de esta tabla.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.LayoutTable",
    description:
      "Esta tabla parece ser utilizada para diseño, pero contiene un elemento de subtítulo (caption). Las tablas de diseño no deben contener subtítulos.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.Check",
    description:
      "Si esta tabla es una tabla de datos, verifica que el elemento de subtítulo (caption) describa correctamente esta tabla.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.NoCaption",
    description:
      "Si esta tabla es una tabla de datos, considera agregar un elemento de subtítulo (caption) al elemento table para identificar esta tabla.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H71.NoLegend",
    description:
      "El fieldset no contiene un elemento de leyenda (legend). Todos los fieldsets deben contener un elemento de leyenda que describa una descripción del grupo de campos.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H85.2",
    description:
      "Si esta lista de selección contiene grupos de opciones relacionadas, deberían agruparse con el elemento optgroup.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H71.SameName",
    description:
      "Si estos botones de radio o casillas de verificación requieren una descripción a nivel de grupo adicional, deberían estar contenidos dentro de un elemento fieldset.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48.1",
    description:
      "Este contenido parece estar simulando una lista desordenada usando texto plano. Si es así, marcar este contenido con un elemento ul agregaría información de estructura adecuada al documento.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48.2",
    description:
      "Este contenido parece estar simulando una lista ordenada usando texto plano. Si es así, marcar este contenido con un elemento ol agregaría información de estructura adecuada al documento.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_G141_a",
    description:
      "La estructura de encabezados no está anidada de forma lógica. Este elemento h{{headingNum}} parece ser el encabezado principal del documento, por lo que debería ser un elemento h1.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H42.2",
    description:
      "Se encontró una etiqueta de encabezado sin contenido. El texto que no está destinado a ser un encabezado no debe ser marcado con etiquetas de encabezado.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48",
    description:
      "Si este elemento contiene una sección de navegación, se recomienda que se marque como una lista.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_LayoutTable",
    description:
      "Esta tabla parece ser una tabla de diseño. Si en su lugar se supone que es una tabla de datos, asegúrate de que las celdas de encabezado se identifiquen utilizando elementos th.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_DataTable",
    description:
      "Esta tabla parece ser una tabla de datos. Si en su lugar se supone que es una tabla de diseño, asegúrate de no tener elementos th, y no hay summary o caption.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_2_G57",
    description:
      "Verifica que el contenido esté ordenado en una secuencia significativa cuando se lo lineariza, por ejemplo, cuando las hojas de estilo están desactivadas.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_3_G96",
    description:
      "Cuando se proporcionan instrucciones para comprender el contenido, no dependas únicamente de características sensoriales (como la forma, el tamaño o la ubicación) para describir objetos.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_4.RestrictView",
    description:
      "Verifica que el contenido no restrinja su vista y operación a una única orientación de pantalla, como retrato o paisaje, a menos que una orientación de pantalla específica sea esencial.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.FaultyValue",
    description:
      "Este elemento contiene un valor potencialmente inválido en su atributo autocomplete: {{valuesStr}}.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Text",
    description:
      "Valor de autocompletado inválido: {{x}}. El elemento no pertenece al grupo de control Text.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Multiline",
    description:
      "Valor de autocompletado inválido: {{x}}. El elemento no pertenece al grupo de control Multiline.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Password",
    description:
      "Valor de autocompletado inválido: {{x}}. El elemento no pertenece al grupo de control Password.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Url",
    description:
      "Valor de autocompletado inválido: {{x}}. El elemento no pertenece al grupo de control Url.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Telephone",
    description:
      "Valor de autocompletado inválido: {{x}}. El elemento no pertenece al grupo de control Telephone.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Numeric",
    description:
      "Valor de autocompletado inválido: {{x}}. El elemento no pertenece al grupo de control Numeric.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Month",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Month control group.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Date",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Date control group.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.Purpose",
    description:
      "Verifica que el campo de entrada sirva a un propósito identificado en la sección Input Purposes for User Interface Components, y que el contenido se implemente utilizando tecnologías con soporte para identificar el significado esperado de los datos de entrada del formulario.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete",
    description:
      "Este elemento no tiene un atributo de autocompletado. Si este campo recopila información sobre el usuario, considera agregar uno para cumplir con este Criterio de Éxito.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_6_ARIA11.Check",
    description:
      "Verifica que el propósito de los componentes de interfaz de usuario, iconos y regiones se pueda determinar programáticamente.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_1_G14,G18",
    description:
      "Verifica que cualquier información transmitida utilizando solo el color también esté disponible en texto o a través de otras pistas visuales.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "Verifica que el contenido se pueda presentar sin pérdida de información o funcionalidad, y sin requerir desplazamiento en dos dimensiones para:   Contenido de desplazamiento vertical en un ancho equivalente a 320 píxeles CSS;   Contenido de desplazamiento horizontal en una altura equivalente a 256 píxeles CSS;   Excepto para las partes del contenido que requieren diseño en dos dimensiones para su uso o significado.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      'Este elemento tiene "position: fixed". Esto puede requerir el desplazamiento en dos dimensiones, lo que se considera un fracaso de este Criterio de Éxito.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId:
      "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "El texto preformateado puede requerir desplazamiento en dos dimensiones, lo que se considera un fracaso de este Criterio de Éxito.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "Interferir con la capacidad de un agente de usuario para hacer zoom puede ser un fracaso de este Criterio de Éxito.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "Verifica que la presentación visual de lo siguiente tenga una relación de contraste de al menos 3:1 frente al color (o colores) adyacentes:   Componentes de la Interfaz de Usuario: información visual requerida para identificar componentes y estados de la interfaz de usuario, excepto en componentes inactivos o donde la apariencia del componente es determinada por el agente de usuario y no modificada por el autor;   Objetos Gráficos: partes de gráficos necesarias para entender el contenido, excepto cuando una presentación particular de los gráficos es esencial para la información transmitida.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_12_C36,C35.Check",
    description:
      "Verificar que no se produce ninguna pérdida de contenido o funcionalidad estableciendo todo lo siguiente y sin cambiar ninguna otra propiedad de estilo:   Espaciado entre líneas (interlineado) al menos 1,5 veces el tamaño de fuente;   Espaciado entre párrafos siguientes de al menos 2 veces el tamaño de fuente;   Espaciado entre letras (tracking) de al menos 0,12 veces el tamaño de fuente;   Espaciado entre palabras de al menos 0,16 veces el tamaño de fuente.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_13_F95.Check",
    description:
      "Verifica que donde al recibir y luego eliminar el puntero de desplazamiento o el enfoque del teclado se activa contenido adicional para que se vuelva visible y luego oculto, se cumpla lo siguiente:   Descartable: hay un mecanismo disponible para descartar el contenido adicional sin mover el puntero de desplazamiento o el enfoque del teclado, a menos que el contenido adicional comunique un error de entrada o no oscurezca ni reemplace otro contenido;   Se puede desplazar el cursor: si el puntero de desplazamiento puede activar el contenido adicional, entonces el puntero se puede mover sobre el contenido adicional sin que el contenido adicional desaparezca;   Persistente: el contenido adicional permanece visible hasta que se elimina el activador de enfoque o desplazamiento, el usuario lo descarta, o su información ya no es válida.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_2_F23",
    description:
      "Si este elemento contiene audio que se reproduce automáticamente durante más de 3 segundos, verifica que haya la posibilidad de pausar, detener o silenciar el audio.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G18_or_G145.BgGradient",
    description: "HTMLCS.getTranslation('1_4_3_G18_or_G145.BgGradient')",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G18_or_G145.Abs",
    description:
      "Este elemento está posicionado absolutamente y no se puede determinar el color de fondo. Asegúrate de que la relación de contraste entre el texto y todas las partes cubiertas del fondo sea al menos de {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G18_or_G145.BgImage",
    description:
      "El texto de este elemento se coloca sobre una imagen de fondo. Asegúrate de que la relación de contraste entre el texto y todas las partes cubiertas de la imagen sea al menos de {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G18_or_G145.Alpha",
    description:
      "El texto o el fondo de este elemento contienen transparencia. Asegúrate de que la relación de contraste entre el texto y el fondo sea de al menos de {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_F24.BGColour",
    description:
      "Verifica que este elemento tenga un color de primer plano heredado para complementar el color de fondo o la imagen en línea correspondiente.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_F24.FGColour",
    description:
      "Verifica que este elemento tenga un color de fondo o imagen heredado para complementar el color de primer plano en línea correspondiente.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_4_G142",
    description:
      "Verifica que el texto se puede redimensionar sin tecnología de asistencia hasta el 200 por ciento sin pérdida de contenido o funcionalidad.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_5_G140,C22,C30.AALevel",
    description:
      "Si las tecnologías utilizadas pueden lograr la presentación visual, verifica que se use el texto para transmitir información en lugar de imágenes de texto, excepto cuando la imagen de texto es esencial para la información transmitida o puede personalizarse visualmente para satisfacer las necesidades del usuario.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G18_or_G145.BgGradient",
    description: "HTMLCS.getTranslation('1_4_6_G18_or_G145.BgGradient')",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G18_or_G17.Abs",
    description:
      "Este elemento está posicionado absolutamente y no se puede determinar el color de fondo. Asegúrate de que la relación de contraste entre el texto y todas las partes cubiertas del fondo sea al menos de {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G18_or_G17.BgImage",
    description:
      "El texto de este elemento se coloca sobre una imagen de fondo. Asegúrate de que la relación de contraste entre el texto y todas las partes cubiertas de la imagen sea al menos de {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_7_G56",
    description:
      "Para contenido de audio pregrabado que sea principalmente habla (como narración) en este elemento, cualquier sonido de fondo debe ser silenciable o estar al menos 20 dB (o aproximadamente 4 veces) más silencioso que la habla.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_G148,G156,G175",
    description:
      "Verifica que esté disponible un mecanismo para que el usuario seleccione colores de primer plano y de fondo para bloques de texto, ya sea a través de la página web o del navegador.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_H87,C20",
    description:
      "Verifica que exista un mecanismo para reducir el ancho de un bloque de texto a no más de 80 caracteres (o 40 en escritura china, japonesa o coreana).",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_C19,G172,G169",
    description:
      "Verifica que los bloques de texto no estén totalmente justificados - es decir, a ambos bordes izquierdo y derecho - o que exista un mecanismo para eliminar la justificación completa.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_G188,C21",
    description:
      "Verifica que el espaciado entre líneas en bloques de texto sea al menos del 150% en párrafos, y que el espaciado entre párrafos sea al menos 1.5 veces el espaciado entre líneas, o que esté disponible un mecanismo para lograr esto.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_H87,G146,C26",
    description:
      "Verifica que se pueda cambiar el tamaño del texto sin tecnología de asistencia hasta el 200 por ciento sin requerir que el usuario haga scroll horizontal en una ventana de pantalla completa.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_9_G140,C22,C30.NoException",
    description:
      "Verifica que las imágenes de texto solo se utilicen para pura decoración o cuando una presentación particular del texto es esencial para la información transmitida.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_G90",
    description:
      "Asegúrate de que la funcionalidad proporcionada por un controlador de eventos para este elemento esté disponible a través del teclado.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.DblClick",
    description:
      "Asegúrate de que la funcionalidad proporcionada al hacer doble clic en este elemento esté disponible a través del teclado.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseOver",
    description:
      "Asegúrate de que la funcionalidad proporcionada por pasar el ratón por encima de este elemento esté disponible a través del teclado, por ejemplo, usando el evento de enfoque.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseOut",
    description:
      "Asegúrate de que la funcionalidad proporcionada al sacar el ratón de este elemento esté disponible a través del teclado, por ejemplo, usando el evento de desenfoque.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseMove",
    description:
      "Asegúrate de que la funcionalidad proporcionada al mover el ratón sobre este elemento esté disponible a través del teclado.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseDown",
    description:
      "Asegúrate de que la funcionalidad proporcionada al presionar el botón del ratón sobre este elemento esté disponible a través del teclado, por ejemplo, usando el evento de tecla presionada.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseUp",
    description:
      "Asegúrate de que la funcionalidad proporcionada al soltar el botón del ratón sobre este elemento esté disponible a través del teclado, por ejemplo, usando el evento de tecla liberada.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_2_F10",
    description:
      "Verifica que esta applet o complemento proporciona la capacidad de alejar el enfoque de sí mismo al usar el teclado.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_4.Check",
    description:
      "Verifica que, si se implementa un atajo de teclado en el contenido utilizando solamente letras (incluidas letras mayúsculas y minúsculas), puntuación, números, o caracteres de símbolo, entonces al menos una de las siguientes opciones es verdadera:     Desactivar: un mecanismo está disponible para desactivar el atajo;     Remapear: un mecanismo está disponible para remapear el atajo para usar uno o más caracteres del teclado no imprimibles (por ejemplo, Ctrl, Alt, etc.);     Activo sólo con enfoque: el atajo del teclado para un componente de la interfaz de usuario solo está activo cuando ese componente tiene el enfoque.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_1_F40.2",
    description:
      "Se utiliza la etiqueta de actualización automática meta para redireccionar a otra página, con un límite de tiempo distinto de cero. Los usuarios no pueden controlar este límite de tiempo.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_1_F41.2",
    description:
      "Se utiliza la etiqueta de actualización automática meta para actualizar la página actual. Los usuarios no pueden controlar el límite de tiempo para esta actualización.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "Si alguna parte del contenido se mueve, se desplaza o parpadea durante más de 5 segundos, o se actualiza automáticamente, verifica que hay un mecanismo disponible para pausar, detener u ocultar el contenido.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_F4",
    description:
      "Asegúrate de que hay disponible un mecanismo para detener este elemento parpadeante en menos de cinco segundos.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_F47",
    description:
      "Los elementos que parpadean no pueden cumplir con el requisito de que la información parpadeante pueda detenerse en menos de cinco segundos.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_3_G5",
    description:
      "Verifica que el tiempo no sea una parte esencial del evento o actividad presentada por el contenido, excepto para medios sincronizados no interactivos y eventos en tiempo real.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_4_SCR14",
    description:
      "Verifica que todas las interrupciones (incluidas las actualizaciones de contenido) se puedan posponer o suprimir por el usuario, excepto las interrupciones que involucren una emergencia.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_5_G105,G181",
    description:
      "Si esta página web forma parte de un conjunto de páginas web con un límite de tiempo de inactividad, verifica que un usuario autenticado pueda continuar la actividad sin pérdida de datos después de volver a autenticarse.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_6.Check",
    description:
      "Verifica que se advierta a los usuarios sobre la duración de cualquier inactividad del usuario que pueda causar pérdida de datos, a menos que los datos se conserven durante más de 20 horas cuando el usuario no realice ninguna acción.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_1_G19,G176",
    description:
      "Verifica que ningún componente del contenido parpadee más de tres veces en cualquier período de 1 segundo, o que el tamaño de cualquier área parpadeante sea suficientemente pequeño.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_2_G19",
    description:
      "Verifica que ningún componente del contenido parpadee más de tres veces en cualquier período de 1 segundo.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_3.Check",
    description:
      "Verifica que se pueda desactivar la animación de movimiento desencadenada por la interacción, a menos que la animación sea esencial para la funcionalidad o la información transmitida.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_H64.1",
    description:
      "El elemento Iframe requiere un atributo de título no vacío que identifique el marco.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_H64.2",
    description:
      "Verifica que el atributo de título de este elemento contiene texto que identifica el marco.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124,H69",
    description:
      "Asegúrate de que se puedan omitir cualquier elemento de navegación común; por ejemplo, mediante el uso de enlaces de omisión, elementos de encabezado o roles de punto de referencia ARIA.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124.NoSuchID",
    description:
      'Este enlace apunta a un ancla con nombre "{{id}}" dentro del documento, pero no existe una ancla con ese nombre.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      'Este enlace apunta a un ancla con nombre "{{id}}" dentro del documento, pero no existe una ancla con ese nombre en el fragmento probado.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.NoHeadEl",
    description:
      "No hay una sección head en la cual colocar un elemento de título descriptivo.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.NoTitleEl",
    description:
      "Se debe proporcionar un título para el documento, utilizando un elemento de título no vacío en la sección head.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.EmptyTitle",
    description: "El elemento de título en la sección head debe ser no vacío.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.2",
    description: "Verifica que el elemento de título describe el documento.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_3_H4.2",
    description:
      "Si se usa tabindex, verifica que el orden de tabulación especificado por los atributos tabindex siga las relaciones en el contenido.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "Verifica que el texto del enlace combinado con el contexto de enlace determinado programáticamente, o su atributo de título, identifique el propósito del enlace.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_4_H77,H78,H79,H80,H81",
    description:
      "Verifica que el texto del enlace combinado con el contexto de enlace determinado programáticamente identifique el propósito del enlace.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "Si esta página web no forma parte de un proceso lineal, verifica que haya más de una forma de ubicar esta página web dentro de un conjunto de páginas web.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_6_G130,G131",
    description:
      "Verifica que los encabezados y etiquetas describan el tema o propósito.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "Verifica que haya al menos un modo de operación en el que el indicador de enfoque del teclado pueda ser localizado visualmente en los controles de la interfaz de usuario.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.1",
    description:
      "Los elementos de enlace solo se pueden ubicar en la sección head del documento.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.2a",
    description:
      "El elemento de enlace no tiene un atributo rel no vacío que identifique el tipo de enlace.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.2b",
    description:
      "El elemento de enlace no tiene un atributo href no vacío que apunte al recurso al que se enlaza.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_9_H30",
    description:
      "Verifica que el texto del enlace describe el propósito del enlace.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_1.Check",
    description:
      "Verifica que toda la funcionalidad que utiliza gestos basados en puntos múltiples o en trazados de ruta para la operación pueda ser operada con un solo puntero sin un gesto basado en trazado de ruta, a menos que un gesto basado en puntos múltiples o en trazados de ruta sea esencial.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.SinglePointer_Check",
    description:
      "Verifica que para la funcionalidad que puede ser operada utilizando un solo puntero, al menos una de las siguientes opciones es verdadera:     Sin evento de pulsación: El evento de pulsación del puntero no se utiliza para ejecutar ninguna parte de la función;     Abortar o deshacer: La finalización de la función es en el evento de soltar, y hay un mecanismo disponible para abortar la función antes de la finalización o para deshacer la función después de la finalización;     Reversión de soltar: El evento de soltar revierte cualquier resultado del evento de pulsación anterior;     Esencial: Completar la función en el evento de pulsación es esencial.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.Mousedown_Check",
    description:
      "Este elemento tiene un escucha de evento mousedown. Verifica que, para la funcionalidad que puede ser operada utilizando un solo puntero, al menos una de las siguientes opciones es verdadera:     Sin evento de pulsación: El evento de pulsación del puntero no se utiliza para ejecutar ninguna parte de la función;     Abortar o deshacer: La finalización de la función es en el evento de soltar, y hay un mecanismo disponible para abortar la función antes de la finalización o para deshacer la función después de la finalización;     Reversión de soltar: El evento de soltar revierte cualquier resultado del evento de pulsación anterior;     Esencial: Completar la función en el evento de pulsación es esencial.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.Touchstart_Check",
    description:
      "Este elemento tiene un escucha de evento touchstart. Verifica que, para la funcionalidad que puede ser operada utilizando un solo puntero, al menos una de las siguientes opciones es verdadera:     Sin evento de pulsación: El evento de pulsación del puntero no se utiliza para ejecutar ninguna parte de la función;     Abortar o deshacer: La finalización de la función es en el evento de soltar, y hay un mecanismo disponible para abortar la función antes de la finalización o para deshacer la función después de la finalización;     Reversión de soltar: El evento de soltar revierte cualquier resultado del evento de pulsación anterior;     Esencial: Completar la función en el evento de pulsación es esencial.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_3_F96.Check",
    description:
      "Verifica que para los componentes de la interfaz de usuario con etiquetas que incluyen texto o imágenes de texto, el nombre contenga el texto que se presenta visualmente.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_3_F96.AccessibleName",
    description:
      "El nombre accesible de este elemento no contiene el texto de la etiqueta visible. Verifica que para los componentes de la interfaz de usuario con etiquetas que incluyen texto o imágenes de texto, el nombre contenga el texto que se presenta visualmente.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_4.Check",
    description:
      "Verifica que la funcionalidad que puede ser operada por el movimiento del dispositivo o del usuario también pueda ser operada por componentes de la interfaz de usuario, y que se pueda desactivar la respuesta al movimiento para prevenir activación accidental, excepto cuando:     Interfaz soportada: El movimiento se utiliza para operar la funcionalidad a través de una interfaz de accesibilidad soportada;     Esencial: El movimiento es esencial para la función y hacerlo invalidaría la actividad.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_4.Devicemotion",
    description:
      "Este elemento tiene un escucha de evento devicemotion. Verifica que la funcionalidad que puede ser operada por el movimiento del dispositivo o del usuario también pueda ser operada por componentes de la interfaz de usuario, y que se pueda desactivar la respuesta al movimiento para prevenir activación accidental, excepto cuando:     Interfaz soportada: El movimiento se utiliza para operar la funcionalidad a través de una interfaz de accesibilidad soportada;     Esencial: El movimiento es esencial para la función y hacerlo invalidaría la actividad.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_5.Check",
    description:
      "Verifica que el tamaño del objetivo para las entradas de puntero sea al menos 44 por 44 píxeles CSS, excepto cuando:     Equivalente: El objetivo está disponible a través de un enlace o control equivalente en la misma página que es al menos 44 por 44 píxeles CSS;     En línea: El objetivo está en una oración o bloque de texto;     Control de agente de usuario: El tamaño del objetivo está determinado por el agente de usuario y no es modificado por el autor;     Esencial: Una presentación particular del objetivo es esencial para la información que se está transmitiendo.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_6.Check",
    description:
      "Verifica que el contenido no restrinja el uso de las modalidades de entrada disponibles en una plataforma, excepto cuando la restricción sea esencial, necesaria para garantizar la seguridad del contenido o necesaria para respetar las configuraciones del usuario.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.2",
    description:
      "El elemento html debe tener un atributo lang o xml:lang que describa el idioma del documento.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.3.Lang",
    description:
      "El idioma especificado en el atributo lang del elemento del documento no parece estar bien formado.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.3.XmlLang",
    description:
      "El idioma especificado en el atributo xml:lang del elemento del documento no parece estar bien formado.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58",
    description:
      "Asegúrate de que cualquier cambio de idioma se marque utilizando el atributo lang y/o xml:lang en un elemento, según corresponda.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58.1.Lang",
    description:
      "El idioma especificado en el atributo lang de este elemento no parece estar bien formado.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58.1.XmlLang",
    description:
      "El idioma especificado en el atributo xml:lang de este elemento no parece estar bien formado.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_3_H40,H54,H60,G62,G70",
    description:
      "Verifica que haya un mecanismo disponible para identificar definiciones específicas de palabras o frases utilizadas de manera inusual o restringida, incluidos los giros idiomáticos y la jerga.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_4_G102,G55,G62,H28,G97",
    description:
      "Verifica que haya un mecanismo disponible para identificar la forma o el significado expandido de las abreviaturas.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_5_G86,G103,G79,G153,G160",
    description:
      "Cuando el contenido requiera habilidades de lectura más avanzadas que el nivel de educación secundaria inferior, se debe proporcionar contenido complementario o una versión alternativa.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.1.HTML5",
    description:
      "El elemento Ruby no contiene un elemento rt que contenga información de pronunciación para el texto del cuerpo.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.1.XHTML11",
    description:
      "El elemento Ruby no contiene un elemento rt que contenga información de pronunciación para el texto dentro del elemento rb.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.2",
    description:
      "El elemento Ruby no contiene elementos rp, que proporcionan puntuación adicional a los navegadores que no admiten texto ruby.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_1_G107",
    description:
      "Verifica que no haya un cambio de contexto cuando este campo de entrada recibe el enfoque.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_2_H32.2",
    description:
      'Este formulario no contiene un botón de envío, lo que crea problemas para aquellos que no pueden enviar el formulario usando el teclado. Los botones de envío son elementos INPUT con atributo de tipo "submit" o "image", o elementos BUTTON con tipo "submit" o omitido/inválido.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_3_G61",
    description:
      "Verifica que los mecanismos de navegación que se repiten en varias páginas web ocurran en el mismo orden relativo cada vez que se repiten, a menos que un cambio sea iniciado por el usuario.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_4_G197",
    description:
      "Verifica que los componentes que tienen la misma funcionalidad dentro de esta página web se identifiquen consistentemente en el conjunto de páginas web al que pertenece.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_5_H83.3",
    description:
      "Verifica que el texto del enlace de este enlace contenga información que indique que el enlace se abrirá en una nueva ventana.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_1_G83,G84,G85",
    description:
      "Si se detecta automáticamente un error de entrada en este formulario, verifica que los elementos en error estén identificados y que el error se describa al usuario en texto.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_2_G131,G89,G184,H90",
    description:
      "Verifica que se proporcionen etiquetas o instrucciones descriptivas (incluyendo para campos obligatorios) para la entrada del usuario en este formulario.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_3_G177",
    description:
      "Verifica que este formulario proporcione correcciones sugeridas para errores en la entrada del usuario, a menos que comprometa la seguridad o el propósito del contenido.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "Si este formulario vinculara a un usuario a un compromiso financiero o legal, modificara/eliminara datos controlados por el usuario o enviara respuestas de prueba, asegúrate de que las presentaciones sean reversibles, verifiquen errores de entrada y/o sean confirmadas por el usuario.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_5_G71,G184,G193",
    description:
      "Verifica que la ayuda contextual esté disponible para este formulario, a nivel de página web y/o control.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "Verifica que las presentaciones en este formulario sean reversibles, verifiquen errores de entrada y/o sean confirmadas por el usuario.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.Empty",
    description:
      "Se encontró un elemento de anclaje con un ID pero sin un href o texto de enlace. Considera mover su ID a un elemento padre o cercano.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.EmptyWithName",
    description:
      "Se encontró un elemento de anclaje con un atributo de nombre pero sin un href o texto de enlace. Considera mover el atributo de nombre para convertirlo en un ID de un elemento padre o cercano.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.EmptyNoId",
    description:
      "Se encontró un elemento de anclaje sin contenido de enlace y sin atributo de nombre e/o ID.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.NoHref",
    description:
      "Los elementos de anclaje no deben ser usados para definir objetivos de enlace dentro de la página. Si no se está usando el ID para otros propósitos (como CSS o scripting), considera moverlo a un elemento padre.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.Placeholder",
    description:
      "Se encontró un elemento de anclaje con contenido de enlace, pero no se ha proporcionado un href, ID o atributo de nombre.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.NoContent",
    description:
      "Se encontró un elemento de anclaje con un atributo href válido, pero no se ha proporcionado contenido de enlace.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId:
      "Principle4.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "Verifica que los mensajes de estado se puedan determinar de forma programática a través de roles o propiedades para que puedan presentarse al usuario mediante tecnologías de asistencia sin recibir el enfoque.",
    helpUrl: [],
    ruleType: "notice",
  },
];
