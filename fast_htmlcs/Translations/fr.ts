_global.translation["fr"] = {
  auditor_success_criterion: "Critère de réussite",
  auditor_suggested_techniques: "Techniques suggérées",
  //1_1_1.js
  "1_1_1_H30.2":
    "L'élément Img est le seul contenu du lien, mais il manque le texte alt. Le texte alternatif devrait décrire le but du lien.",
  "1_1_1_H67.1":
    "L'élément Img avec du texte alt vide doit avoir un attribut de titre absent ou vide.",
  "1_1_1_H67.2":
    "L'élément Img est marqué de sorte qu'il est ignoré par la technologie d'assistance.",
  "1_1_1_H37":
    "Élément Img auquel il manque un attribut alt. Utilisez l'attribut alt pour spécifier une alternative de texte court.",
  "1_1_1_G94.Image":
    "Assurez-vous que le texte alt de l'élément img sert aux mêmes fins et présente les mêmes informations que l'image.",
  "1_1_1_H36":
    "Le bouton de soumission d'image n'a pas de texte alternatif. Spécifiez une alternative de texte qui décrit la fonction du bouton, en utilisant l'attribut alt.",
  "1_1_1_G94.Button":
    "Assurez-vous que le texte alt du bouton de soumission d'image identifie le but du bouton.",
  "1_1_1_H24":
    "Élément de zone dans une carte-image sans attribut alt. Chaque élément de zone doit avoir une alternative textuelle qui décrit la fonction de la zone de la carte image.",
  "1_1_1_H24.2":
    "Assurez-vous que l'alternative textuelle de l'élément de zone sert le même but que la partie de l'image de la carte-image à laquelle il fait référence.",
  "1_1_1_G73,G74":
    "Si cette image ne peut être entièrement décrite dans un texte court, assurez-vous qu'un texte long est également disponible, comme dans le corps du texte ou par le biais d'un lien.",
  "1_1_1_H2.EG5":
    "L'élément Img à l'intérieur d'un lien ne doit pas utiliser de texte alt qui duplique le contenu textuel du lien.",
  "1_1_1_H2.EG4":
    "L'élément Img à l'intérieur d'un lien a du texte alt vide ou manquant lorsqu'un lien à côté contient du texte de lien. Pensez à combiner les liens.",
  "1_1_1_H2.EG3":
    "L'élément Img à l'intérieur d'un lien ne doit pas utiliser de texte alt qui duplique le contenu d'un lien texte à côté.",
  "1_1_1_H53,ARIA6":
    "Les éléments d'objet doivent contenir une alternative de texte après l'épuisement de toutes les autres alternatives.",
  "1_1_1_G94,G92.Object,ARIA6":
    "Vérifiez que des textes courts (et, le cas échéant, les longs) sont disponibles pour les contenus non textuels qui servent le même but et présentent la même information.",
  "1_1_1_H35.3":
    "Les éléments de l'applet doivent contenir une alternative textuelle dans le corps de l'élément, pour les navigateurs qui ne supportent pas l'élément applet.",
  "1_1_1_H35.2":
    "Les éléments de l'applet doivent contenir un attribut alt, afin de fournir une alternative textuelle aux navigateurs supportant l'élément mais incapables de charger l'applet.",
  "1_1_1_G94,G92.Applet":
    "Vérifiez que des textes courts (et, le cas échéant, les longs) sont disponibles pour les contenus non textuels qui servent le même but et présentent la même information.",

  //1_2_1.js
  "1_2_1_G158":
    "Si cet objet incorporé ne contient que de l'audio préenregistré et n'est pas fourni comme alternative pour le contenu textuel, vérifiez qu'une version texte alternative est disponible.",
  "1_2_1_G159,G166":
    "Si cet objet incorporé ne contient que de la vidéo préenregistrée et n'est pas fourni comme alternative au contenu textuel, vérifiez qu'une version texte alternative est disponible, ou qu'une piste audio est fournie qui présente des informations équivalentes.",

  //1_2_1.js
  "1_2_2_G87,G93":
    "Si cet objet incorporé contient un support synchronisé préenregistré et n'est pas fourni comme alternative pour le contenu textuel, vérifiez que les légendes sont fournies pour le contenu audio.",

  //1_2_3.js
  "1_2_3_G69,G78,G173,G8":
    "Si cet objet incorporé contient un support synchronisé préenregistré et n'est pas fourni comme alternative au contenu textuel, vérifiez qu'une description audio de sa vidéo et/ou une version textuelle alternative du contenu est fournie.",

  //1_2_4.js
  "1_2_4_G9,G87,G93":
    "Si cet objet incorporé contient des médias synchronisés, vérifiez que les légendes sont fournies pour le contenu audio en direct.",

  //1_2_5.js
  "1_2_5_G78,G173,G8":
    "Si cet objet incorporé contient un support synchronisé préenregistré, vérifiez qu'une description audio est fournie pour son contenu vidéo.",

  //1_2_6.js
  "1_2_6_G54,G81":
    "Si cet objet incorporé contient un support synchronisé préenregistré, vérifiez qu'une interprétation en langage des signes est fournie pour l'audio.",

  //1_2_7.js
  "1_2_7_G8":
    "Si cet objet incorporé contient des médias synchronisés, et si les pauses dans l'audio de premier plan ne suffisent pas pour permettre aux descriptions audio de transmettre le sens de la vidéo préenregistrée, vérifiez qu'une description audio étendue est fournie, soit par le biais d'un script ou d'une autre version.",

  //1_2_8.js
  "1_2_8_G69,G159":
    "Si cet objet incorporé contient un média synchronisé pré-enregistré ou un contenu vidéo uniquement, vérifiez qu'une version texte alternative du contenu est fournie.",

  //1_2_9.js
  "1_2_9_G150,G151,G157":
    "Si cet objet incorporé contient du contenu audio en direct, vérifiez qu'une version texte alternative du contenu est fournie.",

  //1_3_1.js
  "1_3_1_F92,ARIA4":
    'Le rôle de cet élément est "présentation" mais contient des éléments enfants avec une signification sémantique.',
  "1_3_1_H44.NonExistent":
    "L'attribut \"for\" de cette étiquette contient un identifiant qui n'existe pas dans le document.",
  "1_3_1_H44.NonExistentFragment":
    "L'attribut \"for\" de cette étiquette contient un ID qui n'existe pas dans le fragment de document.",
  "1_3_1_H44.NotFormControl":
    "L'attribut \"for\" de cette étiquette contient un ID pour un élément qui n'est pas un contrôle de formulaire. Assurez-vous d'avoir saisi l'ID correct pour l'élément prévu.",
  "1_3_1_H65":
    'Ce contrôle de formulaire a un attribut "title" qui est vide ou ne contient que des espaces. Il sera ignoré à des fins de test d\'étiquetage.',
  "1_3_1_ARIA6":
    'Ce contrôle de formulaire possède un attribut "aria-label" qui est vide ou ne contient que des espaces. Il sera ignoré à des fins de test d\'étiquetage.',
  //{{{id}} sera remplacé par l'ID de l'élément :
  "1_3_1_ARIA16,ARIA9":
    "Ce contrôle de formulaire contient un attribut aria-labelledby, mais il inclut un ID \"{{id}}\" qui n'existe pas sur un élément. L'attribut aria-labelledby sera ignoré à des fins de test d'étiquetage.",

  "1_3_1_F68.Hidden":
    "Ce champ de formulaire caché est étiqueté d'une manière ou d'une autre. Il ne devrait pas être nécessaire d'étiqueter un champ de formulaire caché.",
  "1_3_1_F68.HiddenAttr":
    "Ce champ de formulaire est destiné à être masqué (à l'aide de l'attribut \"caché\"), mais il est également étiqueté d'une manière ou d'une autre. Il ne devrait pas être nécessaire d'étiqueter un champ de formulaire caché.",
  "1_3_1_F68":
    'Ce champ du formulaire doit être étiqueté d\'une manière ou d\'une autre. Utilisez l\'élément d\'étiquette (avec un attribut "for" ou enroulé autour du champ du formulaire), ou les attributs "title", "aria-label" ou "aria-labelledby" selon le cas.',

  "1_3_1_H49.":
    "Le balisage de présentation utilisé est devenu obsolète dans HTML5.",
  "1_3_1_H49.AlignAttr": "Aligner les attributs.",
  "1_3_1_H49.Semantic":
    "Le balisage sémantique doit être utilisé pour marquer un texte accentué ou un texte spécial afin qu'il puisse être déterminé par programmation.",
  "1_3_1_H49.AlignAttr.Semantic":
    "Le balisage sémantique doit être utilisé pour marquer un texte accentué ou un texte spécial afin qu'il puisse être déterminé par programmation.",

  "1_3_1_H42":
    "Une balise d'en-tête doit être utilisée si ce contenu est destiné à servir d'en-tête.",

  "1_3_1_H63.3":
    "La cellule de table a un attribut de portée invalide. Les valeurs valides sont ligne, col, groupe de lignes, groupe de lignes ou groupe de colonnes.",
  "1_3_1_H63.2":
    "Les attributs Scope sur les éléments td qui servent de titres pour d'autres éléments sont obsolètes dans HTML5. Utilisez un th élément à la place.",
  "1_3_1_H43.ScopeAmbiguous":
    "Les attributs de portée sur ces éléments sont ambigus dans un tableau à niveaux multiples d'en-têtes. Utilisez plutôt l'attribut headers sur les éléments td.",
  "1_3_1_H43.IncorrectAttr":
    'L\'attribut d\'en-tête incorrect sur cet élément td. Attendue "{{expected}}" mais trouvée "{{actual}}".',
  "1_3_1_H43.IncorrectAttrNotice":
    "Check that headers attribute on td element is correct.",

  "1_3_1_H43.HeadersRequired":
    "La relation entre les éléments td et leurs éléments associés n'est pas définie. Comme cette table a plusieurs niveaux de ces éléments, vous devez utiliser l'attribut headers sur les éléments td.",
  "1_3_1_H43.MissingHeaderIds":
    "Tous les éléments de cette table ne contiennent pas un attribut id. Ces cellules devraient contenir des ids de sorte qu'elles puissent être référencées par des éléments td attributs d'en-têtes.",
  "1_3_1_H43.MissingHeadersAttrs":
    "Tous les éléments td de cette table ne contiennent pas un attribut d'en-tête. Chaque attribut d'en-tête devrait énumérer les ids de tous les éléments associés à cette cellule.",
  "1_3_1_H43,H63":
    "La relation entre les éléments td et leurs éléments associés n'est pas définie. Utilisez soit l'attribut scope sur ces éléments, soit l'attribut headers sur les éléments td.",
  "1_3_1_H63.1":
    "Tous les éléments de ce tableau n'ont pas tous un attribut de portée. Ces cellules doivent contenir un attribut scope pour identifier leur association avec les éléments td.",

  "1_3_1_H73.3.LayoutTable":
    "Ce tableau semble être utilisé pour la mise en page, mais contient un attribut résumé. Les tableaux de présentation ne doivent pas contenir d'attributs sommaires ou, s'ils sont fournis, doivent être vides.",
  "1_3_1_H39,H73.4":
    "Si ce tableau est un tableau de données et qu'un attribut résumé et un élément de légende sont présents, le résumé ne doit pas dupliquer la légende.",
  "1_3_1_H73.3.Check":
    "Si ce tableau est un tableau de données, vérifiez que l'attribut summary décrit l'organisation du tableau ou explique comment utiliser le tableau.",
  "1_3_1_H73.3.NoSummary":
    "Si ce tableau est un tableau de données, envisagez d'utiliser l'attribut résumé de l'élément de tableau pour donner une vue d'ensemble de ce tableau.",
  "1_3_1_H39.3.LayoutTable":
    "Ce tableau semble être utilisé pour la mise en page, mais contient un élément de légende. Les tables de présentation ne doivent pas contenir de légendes.",
  "1_3_1_H39.3.Check":
    "Si ce tableau est un tableau de données, vérifiez que l'élément de légende décrit correctement ce tableau.",
  "1_3_1_H39.3.NoCaption":
    "Si ce tableau est un tableau de données, envisagez d'utiliser un élément de légende de l'élément de tableau pour identifier ce tableau.",

  "1_3_1_H71.NoLegend":
    "Fieldset ne contient pas d'élément de légende. Tous les champs doivent contenir un élément de légende décrivant la description du groupe de champs.",
  "1_3_1_H85.2":
    "Si cette liste de sélection contient des groupes d'options connexes, ils doivent être regroupés avec le groupe optgroup.",

  "1_3_1_H71.SameName":
    "Si ces boutons radio ou cases à cocher nécessitent une description plus détaillée au niveau du groupe, ils doivent être contenus dans un élément de l'ensemble des champs.",

  "1_3_1_H48.1":
    "Ce contenu semble simuler une liste non ordonnée à l'aide de texte brut. Si c'est le cas, marquer ce contenu avec un élément ul ajouterait une information de structure appropriée au document.",
  "1_3_1_H48.2":
    "Ce contenu semble simuler une liste ordonnée à l'aide de texte brut. Si c'est le cas, marquer ce contenu avec un élément ol ajouterait des informations de structure appropriées au document.",

  "1_3_1_G141_a":
    "La structure d'en-tête n'est pas imbriquée logiquement. Cet élément h{{{headingNum}} semble être l'en-tête du document primaire, donc devrait être un élément h1.",
  "1_3_1_G141_b":
    "La structure d'en-tête n'est pas imbriquée logiquement. Cet élément h{{{headingNum}} devrait être un h{properHeadingNum}} pour être correctement imbriqué.",

  "1_3_1_H42.2":
    "Étiquette d'en-tête trouvée sans contenu. Le texte qui n'est pas destiné à servir d'en-tête ne doit pas être marqué avec des balises d'en-tête.",
  "1_3_1_H48":
    "Si cet élément contient une section de navigation, il est recommandé de le marquer comme une liste.",

  "1_3_1_LayoutTable":
    "Ce tableau semble être un tableau de présentation. S'il s'agit plutôt d'un tableau de données, assurez-vous que les cellules d'en-tête sont identifiées à l'aide de ces éléments.",
  "1_3_1_DataTable":
    "Ce tableau semble être un tableau de données. S'il s'agit plutôt d'un tableau de présentation, assurez-vous qu'il n'y a pas d'éléments, ni de résumé ou de légende\".",

  //1_3_2.js
  "1_3_2_G57":
    "Vérifiez que le contenu est ordonné dans un ordre significatif lorsqu'il est linéarisé, par exemple lorsque les feuilles de style sont désactivées.",

  //1_3_3.js
  "1_3_3_G96":
    "Lorsque des instructions sont fournies pour comprendre le contenu, ne vous fiez pas uniquement aux caractéristiques sensorielles (telles que la forme, la taille ou l'emplacement) pour décrire les objets.",

  //1_3_4.js
  "1_3_4.RestrictView":
    "Vérifiez que le contenu ne limite pas son affichage et son fonctionnement à une seule orientation d'affichage, telle que portrait ou paysage, à moins qu'une orientation d'affichage spécifique ne soit essentielle.",

  //1_3_5.js
  "1_3_5_H98.FaultyValue":
    "Cet élément contient une valeur potentiellement erronée dans son attribut d'autocomplétion : {{valuesStr}}. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.InvalidAutocomplete_Text":
    "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Text. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.InvalidAutocomplete_Multiline":
    "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Multiline. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.InvalidAutocomplete_Password":
    "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Password. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.InvalidAutocomplete_Url":
    "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Url. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.InvalidAutocomplete_Telephone":
    "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Telephone. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.InvalidAutocomplete_Numeric":
    "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Numeric. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.InvalidAutocomplete_Month":
    "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Month. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.InvalidAutocomplete_Date":
    "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Date. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
  "1_3_5_H98.Purpose":
    "Vérifiez que le champ de saisie répond à un objectif identifié dans la section Objectifs de saisie des composants de l'interface utilisateur ; et que le contenu est mis en œuvre à l'aide de technologies permettant d'identifier la signification attendue des données saisies dans le formulaire.",
  "1_3_5_H98.MissingAutocomplete":
    "Cet élément n'a pas d'attribut d'autocomplétion. Si ce champ recueille des informations sur l'utilisateur, envisagez d'en ajouter un pour respecter ce critère de réussite.",

  //1_3_6.js
  "1_3_6_ARIA11.Check":
    "Vérifiez que l'objectif des composants de l'interface utilisateur, des icônes et des régions peut être déterminé par programme.",

  //1_4_1.js
  "1_4_1_G14,G18":
    "Vérifier que toute information véhiculée par la couleur seule est également disponible sous forme de texte ou d'autres repères visuels.",

  //1_4_2.js
  "1_4_2_F23":
    "Si cet élément contient de l'audio qui joue automatiquement pendant plus de 3 secondes, vérifiez qu'il est possible de mettre en pause, d'arrêter ou de couper le son.",

  //1_4_3_F24.js
  "1_4_3_F24.BGColour":
    "Vérifiez que cet élément a une couleur d'avant-plan héritée pour compléter la couleur ou l'image d'arrière-plan en ligne correspondante.",
  "1_4_3_F24.FGColour":
    "Vérifiez que cet élément a une couleur ou une image d'arrière-plan héritée pour compléter la couleur d'avant-plan correspondante.",

  //1_4_3.js
  "1_4_3_G18_or_G145.Abs":
    "Cet élément est absolument positionné et la couleur de fond ne peut pas être déterminée. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'arrière-plan est d'au moins {{nécessaire}}:1.",
  "1_4_3_G18_or_G145.BgImage":
    "Le texte de cet élément est placé sur une image de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'image est d'au moins {{nécessaire}}:1.",
  "1_4_3_G18_or_G145.BgGradient":
    "Le texte de cet élément est placé sur une pente de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'pente est d'au moins {{nécessaire}}:1.",

  "1_4_3_G18_or_G145.Alpha":
    "Le texte ou l'arrière-plan de cet élément contient de la transparence. Assurez-vous que le rapport de contraste entre le texte et l'arrière-plan est d'au moins {{nécessaire}}:1.",
  "1_4_3_G18_or_G145.Fail":
    "Cet élément a un contraste insuffisant à ce niveau de conformité. On s'attendait à un rapport de contraste d'au moins {{required}}:1, mais le texte dans cet élément a un rapport de contraste de {{value}}:1.",
  "1_4_3_G18_or_G145.Fail.Recomendation": "Recommandation : ",
  "1_4_3_G18_or_G145.Fail.Recomendation.Text":
    "changement Couleur du texte à {{value}}",
  "1_4_3_G18_or_G145.Fail.Recomendation.Background":
    "changement Fond à {{value}}",

  //1_4_4.js
  "1_4_4_G142":
    "Vérifiez que le texte peut être redimensionné sans technologie d'assistance jusqu'à 200 pour cent sans perte de contenu ou de fonctionnalité.",

  //1_4_5.js
  "1_4_5_G140,C22,C30.AALevel":
    "Si les technologies utilisées permettent d'obtenir une présentation visuelle, vérifiez que le texte est utilisé pour transmettre des informations plutôt que des images de texte, sauf lorsque l'image du texte est essentielle à l'information véhiculée, ou peut être visuellement adaptée aux besoins de l'utilisateur.",

  //1_4_6.js
  "1_4_6_G18_or_G17.Abs":
    "Cet élément est absolument positionné et la couleur de fond ne peut pas être déterminée. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'arrière-plan est d'au moins {{nécessaire}}:1.",
  "1_4_6_G18_or_G17.BgImage":
    "Le texte de cet élément est placé sur une image de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'image est d'au moins {{nécessaire}}:1.",
  "1_4_6_G18_or_G145.BgGradient":
    "Le texte de cet élément est placé sur une pente de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'pente est d'au moins {{nécessaire}}:1.",
  "1_4_6_G18_or_G17.Fail":
    "Cet élément a un contraste insuffisant à ce niveau de conformité. On s'attendait à un rapport de contraste d'au moins {{required}}:1, mais le texte dans cet élément a un rapport de contraste de {{value}}:1.",
  "1_4_6_G18_or_G17.Fail.Recomendation": "Recommandation : ",
  "1_4_6_G18_or_G17.Fail.Recomendation.Text":
    "changement Couleur du texte à {{value}}",
  "1_4_6_G18_or_G17.Fail.Recomendation.Background":
    "changement Fond à {{value}}",

  //1_4_7.js
  "1_4_7_G56":
    "Pour le contenu audio préenregistré de cet élément qui est principalement de la parole (comme la narration), tout bruit de fond devrait être muet, ou être au moins 20 dB (ou environ 4 fois plus silencieux que le discours).",

  //1_4_8.js
  "1_4_8_G148,G156,G175":
    "Vérifiez qu'il existe un mécanisme permettant à l'utilisateur de sélectionner les couleurs d'avant-plan et d'arrière-plan pour les blocs de texte, soit par l'intermédiaire de la page Web ou du navigateur.",
  "1_4_8_H87,C20":
    "Vérifiez qu'il existe un mécanisme permettant de réduire la largeur d'un bloc de texte à un maximum de 80 caractères (ou 40 en caractères chinois, japonais ou coréen).",
  "1_4_8_C19,G172,G169":
    "Vérifiez que les blocs de texte ne sont pas entièrement justifiés - c'est-à-dire à gauche et à droite - ou qu'il existe un mécanisme pour supprimer toute justification.",
  "1_4_8_G188,C21":
    "Vérifiez que l'interligne dans les blocs de texte est d'au moins 150% dans les paragraphes et que l'interligne est d'au moins 1,5 fois l'interligne ou qu'il existe un mécanisme pour y parvenir.",
  "1_4_8_H87,G146,C26":
    "Vérifiez que le texte peut être redimensionné sans technologie d'assistance jusqu'à 200 pour cent sans que l'utilisateur ait besoin de faire défiler horizontalement sur une fenêtre plein écran.",

  //1_4_9.js
  "1_4_9_G140,C22,C30.NoException":
    "Vérifier que les images de texte ne sont utilisées qu'à des fins de décoration pure ou lorsqu'une présentation particulière du texte est essentielle à l'information véhiculée.",

  //1_4_10.js
  "1_4_10_C32,C31,C33,C38,SCR34,G206.Check":
    "Vérifier que le contenu peut être présenté sans perte d'information ou de fonctionnalité, et sans qu'il soit nécessaire de le faire défiler en deux dimensions :  \
        Contenu à défilement vertical d'une largeur équivalente à 320 pixels CSS; \
        Contenu à défilement horizontal d'une hauteur équivalente à 256 pixels CSS;  \
        A l'exception des parties du contenu qui nécessitent une mise en page en deux dimensions pour l'utilisation ou la signification.",
  "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed":
    'Cet élément a une "position: fixed". Cela peut nécessiter un défilement en deux dimensions, ce qui est considéré comme un échec de ce critère de réussite.',
  "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling":
    "Le texte préformaté peut nécessiter un défilement en deux dimensions, ce qui est considéré comme un échec de ce critère de réussite.",
  "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom":
    "Interférer avec la capacité d'un agent utilisateur à zoomer peut être un échec de ce critère de réussite.",

  //1_4_11.js
  "1_4_11_G195,G207,G18,G145,G174,F78.Check":
    "Vérifiez que la présentation visuelle des éléments suivants présente un rapport de contraste d'au moins 3:1 par rapport à la (aux) couleur(s) adjacente(s) : \
        Composants de l'interface utilisateur : Informations visuelles nécessaires pour identifier les composants et les états de l'interface utilisateur, sauf pour les composants inactifs ou lorsque l'apparence du composant est déterminée par l'agent utilisateur et non modifiée par l'auteur; \
        Objets graphiques : Parties de graphiques nécessaires pour comprendre le contenu, sauf lorsqu'une présentation particulière des graphiques est essentielle à l'information véhiculée. \
    ",

  //1_4_12.js
  "1_4_12_C36,C35.Check":
    "Vérifiez qu'aucune perte de contenu ou de fonctionnalité ne se produit en définissant tous les éléments suivants et en ne modifiant aucune autre propriété de style: \
     \
     Hauteur de ligne (interligne) à au moins 1,5 fois la taille de la police; \
     Espacement des paragraphes suivants à au moins 2 fois la taille de la police; \
     Espacement des lettres (suivi) d'au moins 0,12 fois la taille de la police; \
     Espacement des mots d'au moins 0,16 fois la taille de la police.",

  //1_4_13.js
  "1_4_13_F95.Check":
    "Vérifiez que lorsque la réception puis la suppression du survol du pointeur ou de la mise au point du clavier déclenche l'affichage puis le masquage de contenu supplémentaire, les points suivants sont vrais : \
        A supprimer : Un mécanisme est disponible pour rejeter le contenu supplémentaire sans déplacer le pointeur ou le focus du clavier, sauf si le contenu supplémentaire communique une erreur de saisie ou ne masque pas ou ne remplace pas un autre contenu; \
        Survolable : Si le survol du pointeur peut déclencher le contenu supplémentaire, alors le pointeur peut être déplacé sur le contenu supplémentaire sans que le contenu supplémentaire ne disparaisse; \
        Persistant : Le contenu supplémentaire reste visible jusqu'à ce que le déclencheur de survol ou de mise au point soit supprimé, que l'utilisateur le rejette ou que ses informations ne soient plus valables \
    ",

  //2_1_1.js
  "2_1_1_G90":
    "S'assurer que la fonctionnalité fournie par un gestionnaire d'événements pour cet élément est disponible par l'intermédiaire du clavier.",
  "2_1_1_SCR20.DblClick":
    "Assurez-vous que la fonctionnalité fournie en double-cliquant sur cet élément est disponible par l'intermédiaire du clavier.",
  "2_1_1_SCR20.MouseOver":
    "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement focus.",
  "2_1_1_SCR20.MouseOut":
    "Assurez-vous que la fonctionnalité fournie par la souris hors de cet élément est disponible par le clavier ; par exemple, en utilisant l'événement flou.",
  "2_1_1_SCR20.MouseMove":
    "Assurez-vous que la fonctionnalité fournie en déplaçant la souris sur cet élément est disponible par l'intermédiaire du clavier.",
  "2_1_1_SCR20.MouseDown":
    "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement keydown.",
  "2_1_1_SCR20.MouseUp":
    "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement keyup.",

  //2_1_2.js
  "2_1_2_F10":
    "Vérifiez que cette applet ou plugin permet d'éloigner le focus de lui-même lors de l'utilisation du clavier.",

  //2_1_4.js
  "2_1_4.Check":
    "Vérifiez que si un raccourci clavier est implémenté dans un contenu utilisant uniquement des lettres (y compris les majuscules et les minuscules), de la ponctuation, des chiffres ou des symboles, alors au moins l'un des points suivants est vrai :  \
        Désactiver : Un mécanisme est disponible pour désactiver le raccourci : \
        Remap : Un mécanisme est disponible pour redéfinir le raccourci afin d'utiliser un ou plusieurs caractères de clavier non imprimables (par exemple Ctrl, Alt, etc.); \
        Actif uniquement pour la mise au point : Le raccourci clavier pour un composant de l'interface utilisateur n'est actif que lorsque ce composant a le focus. \
    ",

  //2_2_1.js
  "2_2_1_F40.2":
    "Meta refresh tag utilisé pour rediriger vers une autre page, avec une limite de temps qui n'est pas nulle. Les utilisateurs ne peuvent pas contrôler cette limite de temps.",
  "2_2_1_F41.2":
    "Meta refresh tag utilisé pour rafraîchir la page courante. Les utilisateurs ne peuvent pas contrôler la limite de temps pour ce rafraîchissement.",

  //2_2_2.js
  "2_2_2_SCR33,SCR22,G187,G152,G186,G191":
    "Si une partie du contenu bouge, défile ou clignote pendant plus de 5 secondes, ou se met à jour automatiquement, vérifiez qu'il existe un mécanisme permettant de mettre en pause, d'arrêter ou de cacher le contenu.",
  "2_2_2_F4":
    "S'assurer qu'il existe un mécanisme permettant d'arrêter cet élément clignotant en moins de cinq secondes.",
  "2_2_2_F47":
    "Les éléments clignotants ne peuvent pas satisfaire à l'exigence selon laquelle les informations clignotantes peuvent être arrêtées en moins de cinq secondes.",

  //2_2_3.js
  "2_2_3_G5":
    "Vérifier que le chronométrage n'est pas une partie essentielle de l'événement ou de l'activité présentée par le contenu, à l'exception des médias synchronisés non interactifs et des événements en temps réel.",

  //2_2_4.js
  "2_2_4_SCR14":
    "Vérifier que toutes les interruptions (y compris les mises à jour du contenu) peuvent être reportées ou supprimées par l'utilisateur, à l'exception des interruptions impliquant une situation d'urgence.",

  //2_2_5.js
  "2_2_5_G105,G181":
    "Si cette page Web fait partie d'un ensemble de pages Web avec une limite de temps d'inactivité, vérifiez qu'un utilisateur authentifié peut poursuivre l'activité sans perte de données après la ré-authentification.",

  //2_2_6.js
  "2_2_6.Check":
    "Vérifiez que les utilisateurs sont avertis de la durée de toute inactivité de l'utilisateur qui pourrait entraîner une perte de données, à moins que les données ne soient conservées pendant plus de 20 heures lorsque l'utilisateur n'entreprend aucune action.",

  //2_3_1.js
  "2_3_1_G19,G176":
    "Vérifier qu'aucun composant du contenu ne clignote plus de trois fois au cours d'une période d'une seconde ou que la taille de la zone de clignotement est suffisamment petite.",

  //2_3_2.js
  "2_3_2_G19":
    "Vérifiez qu'aucun composant du contenu ne clignote plus de trois fois au cours d'une période d'une seconde.",

  //2_3_3.js
  "2_3_3.Check":
    "Vérifiez que l'animation de mouvement déclenchée par l'interaction peut être désactivée, à moins que l'animation ne soit essentielle à la fonctionnalité ou à l'information véhiculée.",

  //2_4_1.js
  "2_4_1_H64.1":
    "L'élément Iframe nécessite un attribut de titre non vide qui identifie la trame.",
  "2_4_1_H64.2":
    "Vérifiez que l'attribut title de cet élément contient du texte qui identifie le cadre.",
  "2_4_1_G1,G123,G124,H69":
    "Veiller à ce que tous les éléments de navigation communs puissent être contournés ; par exemple, en utilisant des liens de saut, des éléments d'en-tête ou des rôles de repère ARIA.",
  "2_4_1_G1,G123,G124.NoSuchID":
    'Ce lien pointe vers une ancre nommée "{{id}}" dans le document, mais aucune ancre n\'existe avec ce nom.',
  "2_4_1_G1,G123,G124.NoSuchIDFragment":
    'Ce lien pointe vers une ancre nommée "{{id}}" dans le document, mais aucune ancre n\'existe avec ce nom dans le fragment testé.',

  //2_4_2.js
  "2_4_2_H25.1.NoHeadEl":
    "Il n'y a pas de section d'en-tête dans laquelle placer un élément de titre descriptif.",
  "2_4_2_H25.1.NoTitleEl":
    "Un titre devrait être fourni pour le document, en utilisant un élément de titre non vide dans la section d'en-tête.",
  "2_4_2_H25.1.EmptyTitle":
    "L'élément de titre de la section d'en-tête ne doit pas être vide.",
  "2_4_2_H25.2": "Vérifier que l'élément de titre décrit le document.",

  //2_4_3.js
  "2_4_3_H4.2":
    "Si tabindex est utilisé, vérifiez que l'ordre des onglets spécifié par les attributs de tabindex suit les relations dans le contenu.",

  //2_4_4.js
  "2_4_4_H77,H78,H79,H80,H81,H33":
    "Vérifiez que le texte du lien combiné avec le contexte du lien déterminé par le programme, ou son attribut de titre, identifie le but du lien.",
  "2_4_4_H77,H78,H79,H80,H81":
    "Vérifiez que le texte du lien combiné avec le contexte du lien déterminé par le programme identifie le but du lien.",

  //2_4_5.js
  "2_4_5_G125,G64,G63,G161,G126,G185":
    "Si cette page Web ne fait pas partie d'un processus linéaire, vérifiez qu'il existe plus d'une façon de localiser cette page Web dans un ensemble de pages Web.",

  //2_4_6.js
  "2_4_6_G130,G131":
    "Vérifiez que les en-têtes et les étiquettes décrivent le sujet ou le but.",

  //2_4_7.js
  "2_4_7_G149,G165,G195,C15,SCR31":
    "Vérifiez qu'il existe au moins un mode de fonctionnement dans lequel l'indicateur de mise au point du clavier peut être placé visuellement sur les commandes de l'interface utilisateur.",

  //2_4_8.js
  "2_4_8_H59.1":
    "Les éléments de lien ne peuvent être situés que dans la section d'en-tête du document.",
  "2_4_8_H59.2a":
    "Il manque à l'élément Link un attribut rel non vide identifiant le type de lien.",
  "2_4_8_H59.2b":
    "L'élément Link manque un attribut href non vide pointant vers la ressource liée.",

  //2_4_9.js
  "2_4_9_H30": "Vérifiez que le texte du lien décrit l'objet du lien.",

  //2_5_1.js
  "2_5_1.Check":
    "Vérifiez que toutes les fonctionnalités qui utilisent des gestes multipoints ou basés sur le chemin peuvent être utilisées avec un seul pointeur sans geste basé sur le chemin, sauf si un geste multipoint ou basé sur le chemin est essentiel.",

  //2_5_2.js
  "2_5_2.SinglePointer_Check":
    "Vérifiez que pour les fonctionnalités qui peuvent être exploitées à l'aide d'un seul pointeur, au moins une des conditions suivantes est remplie : \
        No Down-Event : Le down-event du pointeur n'est pas utilisé pour exécuter une partie de la fonction; \
        Abandon ou Annulation : L'achèvement de la fonction se fait sur l'événement haut, et un mécanisme est disponible pour annuler la fonction avant l'achèvement ou pour annuler la fonction après l'achèvement; \
        Inversion haut : Le up-event inverse tout résultat du down-event précédent; \
        Essentiel : Il est essentiel de terminer la fonction lors de l'événement descendant.",
  "2_5_2.Mousedown_Check":
    "Cet élément a un écouteur d'événement \"mousedown\". Vérifiez que pour les fonctionnalités qui peuvent être exploitées à l'aide d'un seul pointeur, au moins une des conditions suivantes est remplie : \
        No Down-Event : Le down-event du pointeur n'est pas utilisé pour exécuter une partie de la fonction; \
        Abandon ou Annulation : L'achèvement de la fonction se fait sur l'événement haut, et un mécanisme est disponible pour annuler la fonction avant l'achèvement ou pour annuler la fonction après l'achèvement; \
        Inversion haut : Le up-event inverse tout résultat du down-event précédent; \
        Essentiel : Il est essentiel de terminer la fonction lors de l'événement descendant.",
  "2_5_2.Touchstart_Check":
    "Cet élément a un écouteur de l'événement Touchstart.  Vérifiez que pour les fonctionnalités qui peuvent être exploitées à l'aide d'un seul pointeur, au moins une des conditions suivantes est remplie :     \
        No Down-Event : Le down-event du pointeur n'est pas utilisé pour exécuter une partie de la fonction; \
        Abandon ou Annulation : L'achèvement de la fonction se fait sur l'événement haut, et un mécanisme est disponible pour annuler la fonction avant l'achèvement ou pour annuler la fonction après l'achèvement; \
        Inversion haut : Le up-event inverse tout résultat du down-event précédent; \
        Essentiel : Il est essentiel de terminer la fonction lors de l'événement descendant.",

  //2_5_3.js
  "2_5_3_F96.Check":
    "Vérifiez que pour les composants de l'interface utilisateur dont les étiquettes comportent du texte ou des images de texte, le nom contient le texte qui est présenté visuellement.",
  "2_5_3_F96.AccessibleName":
    "Le nom accessible de cet élément ne contient pas le texte visible de l'étiquette. Vérifiez que pour les composants de l'interface utilisateur dont les étiquettes comportent du texte ou des images de texte, le nom contient le texte qui est présenté visuellement.",

  //2_5_4.js
  "2_5_4.Check":
    "Vérifiez que les fonctionnalités qui peuvent être commandées par le mouvement de l'appareil ou de l'utilisateur peuvent également être commandées par les composants de l'interface utilisateur et que la réponse au mouvement peut être désactivée pour éviter tout actionnement accidentel, sauf dans les cas suivants     \
        Interface supportée : Le mouvement est utilisé pour faire fonctionner la fonctionnalité par le biais d'une interface accessible et prise en charge; \
        Essentiel : Le mouvement est essentiel pour la fonction et le faire invaliderait l'activité. \
    ",
  "2_5_4.Devicemotion":
    "Cet élément a un auditeur d'événement de devicemotion. Vérifiez que les fonctionnalités qui peuvent être commandées par le mouvement de l'appareil ou de l'utilisateur peuvent également être commandées par les composants de l'interface utilisateur et que la réponse au mouvement peut être désactivée pour éviter tout actionnement accidentel, sauf dans les cas suivants \
        Interface supportée : Le mouvement est utilisé pour faire fonctionner la fonctionnalité par le biais d'une interface accessible et prise en charge; \
        Essentiel : Le mouvement est essentiel pour la fonction et le faire invaliderait l'activité. \
    ",

  //2_5_5.js
  "2_5_5.Check":
    "Vérifiez que la taille de la cible pour les entrées de pointeur est au moins de 44 par 44 pixels CSS, sauf si : \
        Equivalent : La cible est disponible par un lien ou un contrôle équivalent sur la même page qui est au moins de 44 par 44 pixels CSS; \
        Inline : La cible se trouve dans une phrase ou un bloc de texte; \
        Contrôle de l'agent utilisateur : La taille de la cible est déterminée par l'agent utilisateur et n'est pas modifiée par l'auteur; \
        Essentiel : Une présentation particulière de la cible est essentielle à l'information véhiculée",

  //2_5_6.js
  "2_5_6.Check":
    "Vérifier que le contenu ne restreint pas l'utilisation des modalités de saisie disponibles sur une plate-forme, sauf si la restriction est essentielle, nécessaire pour assurer la sécurité du contenu ou requise pour respecter les paramètres de l'utilisateur.",

  //3_1_1.js
  "3_1_1_H57.2":
    "L'élément html doit avoir un attribut lang ou xml:lang qui décrit la langue du document.",
  "3_1_1_H57.3.Lang":
    "La langue spécifiée dans l'attribut lang de l'élément de document ne semble pas être bien formée.",
  "3_1_1_H57.3.XmlLang":
    "La langue spécifiée dans l'attribut xml:lang de l'élément document ne semble pas être bien formée.",

  //3_1_2.js
  "3_1_2_H58":
    "Assurez-vous que tout changement de langue est marqué à l'aide de l'attribut lang et/ou xml:lang sur un élément, selon le cas.",
  "3_1_2_H58.1.Lang":
    "La langue spécifiée dans l'attribut lang de cet élément ne semble pas être bien formée.",
  "3_1_2_H58.1.XmlLang":
    "Le langage spécifié dans l'attribut xml:lang de cet élément ne semble pas être bien formé.",

  //3_1_3.js
  "3_1_3_H40,H54,H60,G62,G70":
    "Vérifier qu'il existe un mécanisme permettant d'identifier des définitions spécifiques de mots ou de phrases utilisés d'une manière inhabituelle ou restreinte, y compris les expressions idiomatiques et le jargon.",

  //3_1_4.js
  "3_1_4_G102,G55,G62,H28,G97":
    "Vérifier qu'il existe un mécanisme permettant d'identifier la forme élargie ou la signification des abréviations.",

  //3_1_5.js
  "3_1_5_G86,G103,G79,G153,G160":
    "Lorsque le contenu exige une capacité de lecture plus avancée que le niveau de l'enseignement secondaire inférieur, un contenu supplémentaire ou une version alternative devrait être fourni.",

  //3_1_6.js
  "3_1_6_H62.1.HTML5":
    "Ruby element does not contain an rt element containing prononciation information for its body text.",
  "3_1_6_H62.1.XHTML11":
    "Ruby element does not contain an rt element containing prononciation information for the text inside the rb element.",
  "3_1_6_H62.2":
    "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.",

  //3_2_1.js
  "3_2_1_G107":
    "Vérifier qu'il n'y a pas de changement de contexte lorsque ce champ de saisie reçoit le focus.",

  //3_2_2.js
  "3_2_2_H32.2":
    'Ce formulaire ne contient pas de bouton de soumission, ce qui crée des problèmes pour ceux qui ne peuvent pas soumettre le formulaire à l\'aide du clavier. Les boutons Submit sont des éléments INPUT avec l\'attribut de type "submit" ou "image", ou des éléments BUTTON avec le type "submit" ou omis/invalid.',

  //3_2_3.js
  "3_2_3_G61":
    "Vérifiez que les mécanismes de navigation qui sont répétés sur plusieurs pages Web se produisent dans le même ordre relatif chaque fois qu'ils sont répétés, à moins qu'un changement ne soit initié par l'utilisateur.",

  //3_2_4.js
  "3_2_4_G197":
    "Vérifier que les composants qui ont la même fonctionnalité dans cette page Web sont identifiés de manière cohérente dans l'ensemble des pages Web auxquelles ils appartiennent.",

  //3_2_5.js
  "3_2_5_H83.3":
    "Vérifiez que le texte du lien de ce lien contient des informations indiquant que le lien s'ouvrira dans une nouvelle fenêtre.",

  //3_3_1.js
  "3_3_1_G83,G84,G85":
    "Si une erreur de saisie est automatiquement détectée dans ce formulaire, vérifiez que le ou les éléments erronés sont identifiés et que l'erreur ou les erreurs sont décrites à l'utilisateur sous forme de texte.",

  //3_3_2.js
  "3_3_2_G131,G89,G184,H90":
    "Vérifier que les étiquettes descriptives ou les instructions (y compris pour les champs obligatoires) sont fournies pour l'entrée de l'utilisateur dans ce formulaire.",

  //3_3_3.js
  "3_3_3_G177":
    "Vérifier que ce formulaire fournit les corrections suggérées en cas d'erreurs dans les entrées des utilisateurs, à moins que cela ne compromette la sécurité ou l'objectif du contenu.",

  //3_3_4.js
  "3_3_4_G98,G99,G155,G164,G168.LegalForms":
    "Si ce formulaire lie un utilisateur à un engagement financier ou juridique, modifie/supprime des données contrôlables par l'utilisateur, ou soumet des réponses de test, assurez-vous que les soumissions sont réversibles, vérifiées pour les erreurs de saisie et/ou confirmées par l'utilisateur.",

  //3_3_5.js
  "3_3_5_G71,G184,G193":
    "Vérifiez que l'aide contextuelle est disponible pour ce formulaire, au niveau de la page Web et/ou du contrôle.",

  //3_3_6.js
  "3_3_6_G98,G99,G155,G164,G168.AllForms":
    "Vérifier que les soumissions à ce formulaire sont soit réversibles, soit vérifiées pour les erreurs de saisie, et/ou confirmées par l'utilisateur.",

  //4_1_2.js
  "4_1_2_H91.A.Empty":
    "L'élément d'ancrage trouvé avec un ID mais sans href ou texte de lien. Envisager de déplacer son ID vers un élément parent ou un élément voisin.",
  "4_1_2_H91.A.EmptyWithName":
    "L'élément d'ancrage trouvé avec un attribut de nom mais sans href ou texte de lien. Envisagez de déplacer l'attribut de nom pour qu'il devienne l'ID d'un parent ou d'un élément voisin.",
  "4_1_2_H91.A.EmptyNoId":
    "Élément d'ancrage trouvé sans contenu de lien et sans nom et/ou attribut ID.",
  "4_1_2_H91.A.NoHref":
    "Les éléments d'ancrage ne doivent pas être utilisés pour définir des cibles de liens en page. Si vous n'utilisez pas l'ID à d'autres fins (comme le CSS ou le script), envisagez de le déplacer vers un élément parent",
  "4_1_2_H91.A.Placeholder":
    "L'élément d'ancrage trouvé avec le contenu du lien, mais aucun attribut href, ID ou nom n'a été fourni.",
  "4_1_2_H91.A.NoContent":
    "L'élément d'ancrage trouvé avec un attribut href valide, mais aucun contenu de lien n'a été fourni.",

  "4_1_2_input_element": "élément d'entrée",
  "4_1_2_element_content": "contenu de l'élément",
  "4_1_2_element": "élément",
  "4_1_2_msg_pattern":
    "Ce {{msgNodeType}} n'a pas de nom disponible pour une API d'accessibilité. Les noms valides le sont : {{builtAttrs}}.",
  "4_1_2_msg_pattern_role_of_button":
    "Ce l'élément a un rôle de \"bouton\" mais n'a pas de nom disponible pour une API d'accessibilité. Les noms valides le sont : {{builtAttrs}}.",
  "4_1_2_msg_pattern2":
    "Cette {{{msgNodeType}} n'a pas de valeur disponible pour une API d'accessibilité.",
  "4_1_2_msg_add_one": "Ajouter un en ajoutant du contenu à l'élément.",
  "4_1_2_msg_pattern3":
    "Cette {{msgNodeType}} n'a pas d'option initialement sélectionnée. Selon votre version HTML, la valeur exposée à une API d'accessibilité peut être indéfinie.",
  "4_1_2_value_exposed_using_attribute":
    "Une valeur est exposée à l'aide de l'attribut {{requiredValue}}.",
  "4_1_2_value_exposed_using_element":
    "Une valeur est exposée à l'aide de l'élément {{requiredValue}}.",

  //4_1_3.js
  "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check":
    "Vérifier que les messages de statut peuvent être déterminés par programme grâce à des rôles ou des propriétés tels qu'ils peuvent être présentés à l'utilisateur par des technologies d'assistance sans recevoir de mise au point.",
};
