# Indkøbspartneren.dk

Første statiske prototype til en åben indkøbsportal uden login og uden indkøbskurv.

## Filer

- `index.html` indeholder struktur, header, kategorier, formular og sektioner.
- `styles.css` indeholder layout og visuelt design.
- `script.js` opretter kategorierne og bygger mailflowet.
- `assets/logo.svg` er logoet i headeren.

## Mailopsætning

I `script.js` skal disse pladsholdere skiftes:

```js
const ownerEmail = "din-mail@example.dk";
partnerEmail: "partner-el@example.dk";
```

Lige nu bruger siden `mailto:`, så brugerens mailprogram åbner med en færdig besked til dig og partneren.

Hvis mails skal sendes automatisk fra hjemmesiden uden at åbne brugerens mailprogram, skal siden kobles på en formularservice eller en lille backend, for eksempel Netlify Forms, Formspree, Resend eller en serverfunktion hos webhotellet.
