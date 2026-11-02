# E-mailverzending

De NovaAI-contact-, demo-, interesse- en nieuwsbriefaanvragen gebruiken een serverroute met Resend. Er zijn geen nieuwe npm-pakketten nodig.

## Bevestigde gegevens

- Ontvangstadres: `marcodonatobv@protonmail.com`.
- E-mailconcepten openen met dit ontvangstadres.
- De eigenaar heeft aangegeven dat het Resend-account en een geverifieerd verzenddomein klaarstaan. De exacte afzender op dat domein moet nog worden bevestigd.
- `marcodonatobv@protonmail.com` kan als ontvanger dienen, maar niet als Resend-afzender: `protonmail.com` is niet het eigen geverifieerde verzenddomein van de eigenaar.

## Serverconfiguratie

Stel via de omgevingsinstellingen van de hosting de volgende servervariabelen in:

- `RESEND_API_KEY`: geheime Resend API-sleutel. Deel deze niet in de chat en sla hem niet op in Git.
- `CONTACT_FROM_EMAIL`: een afzender op het eigen, in Resend geverifieerde domein.
- `CONTACT_TO_EMAIL`: `marcodonatobv@protonmail.com`.

Deze variabelen mogen geen `NEXT_PUBLIC_`-prefix krijgen. De e-maildienst is nog niet geconfigureerd of op aflevering getest in deze app. Zonder configuratie retourneert de route een duidelijke fout en blijven de gegevens beschikbaar voor een e-mailconcept. Het e-mailconcept wordt pas door de gebruiker zelf verstuurd vanuit diens e-mailprogramma.

## Verificatie na configuratie

Controleer na configuratie een contactaanvraag, demoaanvraag, interesseaanvraag en nieuwsbriefaanvraag in de ontvangende inbox, inclusief spammap. Controleer dat beantwoorden naar het e-mailadres van de inzender gaat. Een succesvolle API-reactie bevestigt acceptatie door de e-maildienst, niet gegarandeerde aflevering. Controleer ook ongeldige formulierinvoer en een mislukte verzendpoging: er mag geen onterechte succesmelding verschijnen.

Nieuwsbriefaanvragen worden doorgestuurd; er wordt niet automatisch een mailinglijst-abonnement aangemaakt. Accounts, betalingen en AI-workflows vallen buiten deze marketingwebsite.
