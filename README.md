# Socialindkøb.dk

Første statiske prototype til en åben indkøbsportal uden login og uden indkøbskurv.

## Filer

- `index.html` indeholder forsiden, kategorierne og formularen.
- `om-os.html` indeholder Om os-siden.
- `kontakt.html` indeholder kontaktsiden.
- `privatliv.html` indeholder privatlivs- og cookiepolitikken.
- `styles.css` indeholder layout og visuelt design.
- `script.js` opretter kategorierne og bygger mailflowet.
- `assets/social-indkob-logo-clean.png` er logoet i headeren.

## Mailopsætning

I `script.js` skal partnernes pladsholdere skiftes:

```js
partnerEmail: "partner-el@example.dk";
```

Lige nu bruger siden `mailto:`, så brugerens mailprogram åbner med en færdig besked til dig og partneren.

Hvis mails skal sendes automatisk fra hjemmesiden uden at åbne brugerens mailprogram, skal siden kobles på en formularservice eller en lille backend, for eksempel Netlify Forms, Formspree, Resend eller en serverfunktion hos webhotellet.

## Privatliv og cookies

Siden har en synlig privatlivs- og cookiepolitik samt et obligatorisk samtykkefelt i formularen.

Den nuværende version bruger ikke statistik-, marketing- eller trackingcookies. Hvis der senere tilføjes Google Analytics, Meta Pixel, annonceværktøjer, chatwidgets eller lignende, skal der tilføjes en egentlig cookie-samtykkeløsning, før de tages i brug.

Når virksomhedsoplysningerne er endeligt klar, bør privatlivspolitikken suppleres med juridisk virksomhedsnavn, CVR-nummer og adresse.
