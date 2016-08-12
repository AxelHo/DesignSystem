/* Her skrives kommentarer til UI-komponentene. */
var comments = {
"comments" : [
	{
		"el": ".a-options",
	 	"title" : "Avkrysningsbokser",
	 	"comment": "Brukes i tilfeller der brukeren kan velge flere verdier fra et lite sett med alternativer.<a class=\"asg-editcomment\" href=\"https://github.com/Altinn/DesignSystem/blob/master/source/_data/annotations.js\">Rediger kommentaren</a>"
	},
	{
		"el": ".a-switch-label",
	 	"title" : "Avkrysningsknapper",
	 	"comment": "Brukes i tilfeller der brukeren kan tildele rettigheter til andre personer."
	},
	{
		"el": "#a-radioButtons",
	 	"title" : "Radioknapper",
	 	"comment": "Brukes i tilfeller der brukeren kun kan velge en verdi blant flere tilgjengelige."
	},
	{
		"el": "input[type=email]",
	 	"title" : "Input-felt: Epost",
	 	"comment": "Brukes når epost skal fylles ut av brukeren. Feilmelding kommer etter utfyllingen er ferdig."
	},
	{
		"el": ".input-group.disabled input[type=email]",
	 	"title" : "Deaktivert input-felt",
	 	"comment": "I visse tilfeller kan inputfelt være deaktivert, f.eks dersom brukeren må fylle ut noe annet først for å aktivere feltet. I disse tilfellene brukes klassen 'disabled' for å deaktivere feltet med grå, stiplede linjer."
	},
	{
		"el": "#inputPersonalNumber",
	 	"title" : "Input-felt: Fødselsnummer",
	 	"comment": "Brukes når fødselsnummer skal fylles ut. Feimelding kommer umiddelbart dersom bruker forsøker å skrive noe annet en siffer."
	},
	{
		"el": "#inputText",
	 	"title" : "Input-felt: Tekst",
	 	"comment": "Tekstfelt brukes når vanlig tekst skal fylles inn, f.eks navn. Label settes foran input-område."
	},
	{
		"el": "#inputTel",
	 	"title" : "Input-felt: Telefonnummer",
	 	"comment": "Brukes når telefonnummer skal fylles inn. Feimelding kommer umiddelbart dersom bruker forsøker å skrive noe annet en siffer."
	},
	{
		"el": "#inputFind",
	 	"title" : "Input-felt: Finn ...",
	 	"comment": "Søk innenfor et område. Ikon til venstre beskriver hva man søker i. F.eks tjenester, datalister, etc."
	},
	{
		"el": "input[type=search]",
	 	"title" : "Search",
	 	"comment": "<p>Vi bruker <a href=\"http://dev.w3.org/html5/markup/input.search.html\">HTML5 search input type</a>, som gjør at mange mobile enheter kan <a href=\"http://diveintohtml5.info/forms.html\">velge riktig tastatur for formålet</a>. </p>"
	},
	{
		"el": "#dropdownMenu",
	 	"title" : "Nedtrekksmeny",
	 	"comment": "Brukes når brukeren skal velge et av flere alternativ. Denne varianten er stilsatt og vil se lik ut på alle enheter."
	},
	{
		"el": "#dropdownMenuDefault",
	 	"title" : "Standard nedtrekksmeny (selects)",
	 	"comment": "Brukes når brukeren skal velge et av flere alternativ. Denne varianten er standard, og vil se ulik ut basert på hvilket operativsystem brukeren benytter."
	},
	{
		"el": "#link",
	 	"title" : "Lenke i løpende tekst",
	 	"comment": "En vanlig lenke som benytter < a >...< /a > vil se slik ut. Denne skal brukes i løpende tekst."
	},
	{
		"el": ".a-link-helpfunction",
	 	"title" : "Hjelpelenke i løpende tekst",
	 	"comment": "Hjelpelenker skal alltid benytte dette ikonet foran teksten. Hele teksten trenger ikke være klikkbar."
	},
	{
		"el": "#linkStandalone",
	 	"title" : "Lenke som står alene",
	 	"comment": "Lenker som ikke står i løpende tekst, men er adskilte, skal se slik ut. Dersom lenken tar deg til en ny side skal pilen › benyttes i slutten av teksten. Dersom lenken åpner et modalvindu eller valg, skal det ikke være pil. "
	},
	{
		"el": "#buttonLinkStandalone",
	 	"title" : "Knapp stylet som lenke",
	 	"comment": "Samme utseende som #linkStandalone, bare at her er det 'button' som er stylet i stedet for < a > ."
	},
	{
		"el": "#linkStandaloneDanger",
	 	"title" : "Lenke som står alene og antyder fare",
	 	"comment": "Lenker som antyder fare skal ha rød linje under teksten."
	},
	{
		"el": "#buttonLinkStandaloneDanger",
	 	"title" : "Knapp som står alene og antyder fare",
	 	"comment": "Knapper som antyder fare skal ha rød linje under teksten."
	},
	{
		"el": "#buttonBorder",
	 	"title" : "Stor knapp",
	 	"comment": "Brukes for å fremheve en oppgave, f.eks lenk til viktig skjema, etc."
	},
	{
		"el": "#linkButtonBorder",
	 	"title" : "Lenke stylet som stor knapp",
		 	"comment": "Samme utseende og formål som #buttonBorder, bare at her er det <code>< a ></code> som er stylet i stedet for <code>< button ></code> ."
	},
	{
		"el": "#button",
	 	"title" : "Standard knapp",
	 	"comment": "Brukes for handlinger, f.eks 'Lagre', 'Send', osv. Siden knappen er kun 36px høy, er det avsatt et område over og under, slik at touch target er 48px. Det skal være minimum 12px mellomrom mellom hver knapp/lenke."
	},
	{
		"el": "#linkButton",
	 	"title" : "Lenke stylet som knapp",
		 	"comment": "Samme utseende og formål som #button, bare at her er det <code>< a ></code> som er stylet i stedet for <code>< button ></code> ."
	},
	{
		"el": "#buttonDisabled",
	 	"title" : "Deaktivert knapp",
	 	"comment": "Brukes i tilfeller der knappen ikke er aktiv. F.eks før brukeren har fylt ut nødvendig info, etc."
	},
	{
		"el": "#linkButtonDisabled",
	 	"title" : "Lenke stylet som en deaktivert knapp",
	 	"comment": "Samme utseende og formål som #buttonDisabled, bare at her er det <code>< a ></code> som er stylet i stedet for <code>< button ></code> ."
	},
	{
		"el": "#buttonSuccess",
		"title" : "Knapp som oppforder til å trykke",
		"comment": "Grønn knapp brukes for å motivere brukeren til å trykke, eller antyde suksess."
	},
	{
		"el": "#linkButtonSuccess",
		"title" : "Knapp som oppforder til å trykke",
		"comment": "Samme utseende og formål som #buttonSuccess, bare at her er det <code>< a ></code> som er stylet i stedet for <code>< button ></code>."
	},
	{
		"el": "#buttonDanger",
		"title" : "Knapp som oppforder brukeren til å tenke seg om før man trykker",
		"comment": "Rød knapp brukes for å advare brukeren mot handlingen. F.eks: Slette, avbryte, etc."
	},
	{
		"el": "#linkButtonDanger",
		"title" : "Knapp som oppforder brukeren til å tenke seg om før man trykker",
		"comment": "Samme utseende og formål som #buttonDanger, bare at her er det <code>< a ></code> som er stylet i stedet for <code>< button ></code>."
	},
	{
		"el": "#buttonAdd",
		"title" : "Knapp for å legge til",
		"comment": "Brukes i tilfeller der brukeren kan legge til noe, f.eks: en en person, en rettighet, etc."
	},
	{
		"el": "#linkButtonAdd",
		"title" : "Knapp for å legge til",
		"comment": "Samme utseende og formål som #buttonAdd, bare at her er det <code>< a ></code> som er stylet i stedet for <code>< button ></code>."
	},
	{
		"el": "#buttonDownload",
		"title" : "Knapp for å laste ned",
		"comment": "Brukes i tilfeller der brukeren kan laste ned noe."
	},
	{
		"el": "#linkButtonDownload",
		"title" : "Knapp for å laste ned",
		"comment": "Samme utseende og formål som #buttonDownload, bare at her er det <code>< a ></code> som er stylet i stedet for <code>< button ></code>."
	},
	{
		"el": "#buttonUpload",
		"title" : "Knapp for å laste opp",
		"comment": "Brukes i tilfeller der brukeren kan laste opp noe."
	},
	{
		"el": "#linkButtonUpload",
		"title" : "Knapp for å laste opp",
		"comment": "Samme utseende og formål som #buttonUpload, bare at her er det <code>< a ></code> som er stylet i stedet for <code>< button ></code>."
	},
	{
		"el": ".panel.a-collapse",
		"title" : "Knapp som kan ekspandere mer informasjon",
		"comment": "Brukes i tilfeller der det er ønskelig å gi brukeren oversikt over det som finnes, for deretter å dykke ned i temaer, (ved å ekspandere mer informasjon)."
	},
	{
		"el": ".a-collapseHeader",
		"title" : "Overskrift som kan ekspandere en liste",
		"comment": "Brukes i tilfeller der det er skal være mulig å ekspandere en liste."
	},
	{
		"el": ".a-boxAddBtn",
		"title" : "Stor knapp for å legge til",
		"comment": "Brukes i tilfeller der brukeren kan legge til noe, f.eks: en en person, virksomhet, etc."
	},
	{
		"el": ".a-boxBtn",
		"title" : "Stor knapp",
		"comment": "Stor knapp stylet som en boks med tittel, ikon og lenketekst/handling."
	},
	{
		"el": "#linkWithPopover",
	 	"title" : "Lenker som har popover",
	 	"comment": "Brukes når tips skal gis brukeren idet han trykker. Popover har tre fargevarianter. Gul er standard informasjon, grønn brukes for å bekrefte/oppfordre til handling, rød brukes for å advare."
	},
	{
		"el": "#linkWithTooltip",
	 	"title" : "Lenker som har tooltip",
	 	"comment": "Brukes når tips skal gis brukeren før han trykker (ved mouseover). Tooltip har tre fargevarianter. Gul er standard informasjon, grønn brukes for å bekrefte/oppfordre til handling, rød brukes for å advare."
	},
	{
		"el": ".a-itemList",
	 	"title" : "Liste",
	 	"comment": "Brukes for å liste ut enkel informasjon uten tilhørende handlinger, f.eks ulike rettigheter, roller, etc."
	},
	{
		"el": ".a-tableList",
	 	"title" : "Tabell-liste",
	 	"comment": "Brukes for å liste ut punkter som har tilhørende handlinger. Et punkt i listen kan være nylig lagt til, nylig fjernet, være mulig å legge til, fjerne eller redigere, eller ha andre tilhørende handlinger. "
	},
	{
		"el": ".a-table",
	 	"title" : "Vanlig tabell",
	 	"comment": "Brukes for vise en oversiktlig presentasjon av fakta som kan uttrykkes i tall eller tekst. NB: Dersom tabellen har mer enn 3-4 kolonner vil en horisontal scroll aktiveres inni tabellen."
	},
	{
		"el": ".a-logo",
	 	"title" : "Logo",
	 	"comment": "Logoen er en SVG-fil, som sikrer at den vil vise skarpt uansett skjermoppløsning og eventuell innzooming. En PNG fallback benyttes for nettleseres som ikke støtter SVG. Les mer på: <a href=\"http://bradfrostweb.com/blog/mobile/hi-res-optimization/\">Brad Frost sin blogg.</a></p>"
	},
	{
		"el" : "#loading",
	 	"title" : "Ikon for loading",
	 	"comment" : "Venter på design"
	},
	{
		"el": "#leadText",
	 	"title" : "Intro/Ingress",
	 	"comment": "Brukes som første avsnitt i artikler."
	},
	{
		"el": "#paragraph",
	 	"title" : "Avsnitt",
	 	"comment": "Vanlig avsnitt."
	},
	{
		"el": ".a-hrDotted",
	 	"title" : "Linjer",
	 	"comment": "Første variant er en enkel linje som kan benyttes som avbrekk i artikler. Andre linje er stylet med dotter, denne brukes for tydelig skille mellom innhold, f.eks i lister."
	},
	{
		"el": "#label",
	 	"title" : "Labels",
	 	"comment": "Brukes for å tiltrekke oppmerksomhet, belyse noe, fortelle at noe er nytt, fortelle antall, etc. F.eks antall uleste eposter. Todo: Lag regler for når de ulike bakgrunnsfargene skal benyttes..."
	},
	{
		"el": ".a-tel",
	 	"title" : "Telefonnummer til kundestøtte",
		 	"comment": "<p><a href=\"http://bradfrostweb.com/blog/mobile/a-tel-tale-sign/\">Mobiltelefoner kan utføre telefonoppringinger</a>. Telefonnummer skal derfor være klikkbare, for å spare brukeren for å måtte kopiere og lime inn nummeret. Hva skjer når desktop-brukere klikker på nummeret? Noen enheter (iPad'er ++) spør brukeren om de vil legge nummeret i kontaktlisten sin, andre åpner programmer som Skype, eller liknende.</p>"
	},
	{
		"el": ".a-personRole",
		"title" : "Personrolle",
		"comment": "Brukes som overskrift for å vise hvilken person man redigererer rettigheter til."
	},
	{
		"el": "#colnav",
		"title" : "Kolonnenavigasjon",
		"comment": "NB: Ikke påbegynt enda. Skal brukes som oversikt for skjemaer, med temainndeling. "
	},
	{
		"el": "#accordion",
		"title" : "Trekkspill",
		"comment": "Atomet 'collapse-panel' satt sammen til en trekkspillmeny, der kun et panel kan være åpnet samtidig. Fungerer bra for mange temaer som skal presenteres, ettersom visningen er vertikal."
	},
	{
		"el": "#tabs",
		"title" : "Faner",
		"comment": "Et enkelt innholdsområdet med flere paneler, hvert panel er forbundet med en overskrift i en liste. Kun et panel er synlig om gangen. Fungerer best for 2-4 overskrifter/paneler, ettersom visninge er horisontal, og dermed har begrenset plass på små skjermer. "
	},
	{
		"el": "#pagination",
		"title" : "Paginering",
		"comment": "Brukes for å dele opp innholdet i adskilte sider man kan navigere mellom. Aktiv side skal alltid være markert."
	},
	{
		"el": "#largeImage",
		"title" : "Stort bilde med bildetekst",
		"comment": "NB: Venter på design for bildetekst. NB2: Venter på avklaring rundt responsive bilder."
	},
	{
		"el": "#btnGroup",
		"title" : "Gruppe med knapper",
		"comment": "Når flere knapper skal vises ved siden av hverandre, kan de legges i klassen <code>a-btn-group</code>. Dette gjelder f.eks i tilfeller der brukeren har flere valg/handlingsmuligheter."
	},
	{
		"el": "#alert",
		"title" : "Varsel",
		"comment": "Brukes for å varsle brukeren om noe. Et varsel hører som regel sammen med en annen komponent. Varselene kan for eksempel høre sammen med input-felt, der brukeren får en feilmelding dersom utfyllt informasjon ikke er korrekt."
	},
	{
		"el": "#boxList",
		"title" : "Liste av store knapper",
		"comment": "Atomet 'box-button' satt sammen til en liste/gruppe av flere knapper. Brukes for utlisting av f.eks flere personroller som kan redigeres. "
	},
	{
		"el": "#modalExample",
		"title" : "Modalvindu",
		"comment": "Brukes i tilfeller der brukeren skal gjennom en prosess for å utføre endringer innefor et område. Modalvinduet kan bestå av flere steg. Når prosessen er fullført vises grønn bakgrunn i modalvinduet. Dersom prosessen mislykkes, vises rød bakgrunn i modalvinduet. Modalvinduet kan også brukes for å vise mer informasjon om et tema."
	},
	{
		"el": "header[role=banner]",
	 	"title" : "Global topp",
	 	"comment": "Den globale toppen på siden tar lite plass i høyden, for å holde fokus på innholdet på siden. Headeren tilpasser seg mindre skjermer, og gjemmer menyen under en meny-knapp. Headeren skal være synlig på alle sider på altinn.no."
	},
	{
		"el": "footer",
	 	"title" : "Footer",
	 	"comment": "Footeren inneholder ekstra navigasjonsmuligheter samt kontaktinformasjon. Den tilpasser seg skjermstørrelser. På de minste skjermene legges footer-menypunktene opp i toppmenyen. Footeren skal være synlig på alle sider på altinn.no."
	},
	{
		"el": "#articleBody",
		"title" : "Artikkel",
		"comment": "Sammensatt av tittel, ingress, pupliseringsinfo, og wysiwyg-editor."
	}
]
};
