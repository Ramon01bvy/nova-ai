# E-mailverzending

## Huidige werking: uitsluitend e-mailconcepten

De eigenaar heeft gekozen om voorlopig alleen e-mailconcepten te gebruiken. Contact-, demo-, interesse- en nieuwsbriefaanvragen controleren de invoer en openen rechtstreeks een `mailto:`-concept in de e-mailapp van de gebruiker. De gebruiker moet het bericht daar zelf verzenden; de website meldt geen automatische verzending of inschrijving. Een ingestelde e-mailapp is vereist. De formulieren roepen de Resend-serverroute niet aan.

De bestaande serverroute blijft beschikbaar voor een latere aansluiting. De onderstaande Resend-instellingen en afleveringstests zijn uitgesteld en niet nodig voor de huidige conceptmodus. Er zijn geen nieuwe npm-pakketten nodig.

## Ontvanger en afzender

De eigenaar heeft `marcodonatobv@protonmail.com` bevestigd als ontvangstadres. E-mailconcepten gebruiken dit adres. Het oorspronkelijke `hallo@nova.ai` blijft in de referentieteksten staan, maar wordt niet gebruikt als ontvanger van de formulieren.

Het Protonmail-adres kan berichten ontvangen, maar is geen geschikte Resend-afzender: het gedeelde domein `protonmail.com` kan niet door de eigenaar voor Resend worden geverifieerd. Gebruik een afzender op een eigen domein en verifieer de door Resend opgegeven DNS-records. Voor beperkte ontwikkeltests kan Resend `onboarding@resend.dev` toestaan, uitsluitend naar het e-mailadres van het Resend-account; dit is geen productieafzender.

## Veilige serverinstellingen

Stel via de omgevingsinstellingen van de hosting de volgende servervariabelen in:

- `RESEND_API_KEY`: geheime Resend API-sleutel, nooit delen in chat of broncode.
- `CONTACT_FROM_EMAIL`: afzender op het geverifieerde eigen domein.
- `CONTACT_TO_EMAIL`: `marcodonatobv@protonmail.com`.

Deze variabelen mogen geen `NEXT_PUBLIC_`-prefix krijgen. Pas ze toe op iedere omgeving waar het formulier gebruikt wordt en laad de serveromgeving opnieuw volgens de hostinginstellingen. Zonder configuratie retourneert de route een duidelijke fout en blijven de gegevens beschikbaar voor een e-mailconcept. Dat concept moet de gebruiker zelf verzenden vanuit de eigen e-mailapp.

## Verificatie na configuratie

1. Dien één contactaanvraag met een herkenbaar testonderwerp in via de website.
2. Controleer de status in Resend en de ontvangen e-mail, inclusief spammap, in de bevestigde inbox.
3. Controleer dat antwoorden naar het e-mailadres van de aanvrager gaan.
4. Herhaal dit voor een demoaanvraag, interesseaanvraag en nieuwsbriefaanvraag.
5. Controleer ongeldige invoer en de foutmelding wanneer configuratie ontbreekt.

Een succesvolle API-reactie bevestigt acceptatie door de e-maildienst, niet gegarandeerde aflevering. Nieuwsbriefaanvragen worden doorgestuurd; er wordt niet automatisch een mailinglijst-abonnement aangemaakt. Accounts, betalingen en AI-workflows vallen buiten deze marketingwebsite.

Echte verzending en inboxaflevering zijn nog niet getest: de servervariabelen zijn nog niet ingesteld en een eigen geverifieerde afzender ontbreekt.
