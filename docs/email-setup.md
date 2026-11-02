# E-mailverzending

De NovaAI-contact-, demo-, interesse- en nieuwsbriefaanvragen gebruiken een serverroute met Resend. Er zijn geen nieuwe npm-pakketten nodig. De gekozen hosting is Vercel.

Stel in de Vercel-projectinstellingen onder Environment Variables de volgende servervariabelen in voor de gewenste omgevingen:
- `RESEND_API_KEY`: geheime Resend API-sleutel. Deel deze niet in de chat.
- `CONTACT_FROM_EMAIL`: afzender op een in Resend geverifieerd domein dat de eigenaar beheert.
- `CONTACT_TO_EMAIL`: `marcodonatobv@protonmail.com`, het bevestigde ontvangstadres.

Het ProtonMail-adres is geschikt als ontvanger, maar niet als Resend-afzender zolang het bijbehorende domein niet in Resend kan worden geverifieerd. Daarvoor is toegang tot de DNS-instellingen nodig. Gebruik een geverifieerd eigen domein voor de afzender.

Deze variabelen mogen geen `NEXT_PUBLIC_`-prefix krijgen. Deploy opnieuw nadat de variabelen zijn ingesteld. Zonder configuratie retourneert de route een duidelijke fout en blijven de gegevens beschikbaar voor een e-mailconcept naar het bevestigde ontvangstadres. De oorspronkelijke juridische voorbeeldteksten verwijzen nog naar `hallo@nova.ai`; deze teksten moeten vóór publicatie worden beoordeeld.

Controleer na configuratie een contactaanvraag, demoaanvraag en nieuwsbriefaanvraag in de ontvangende inbox. Een succesvolle API-reactie bevestigt acceptatie door de e-maildienst, niet gegarandeerde aflevering. Nieuwsbriefaanvragen worden doorgestuurd; er wordt niet automatisch een mailinglijst-abonnement aangemaakt. Accounts, betalingen en AI-workflows vallen buiten deze marketingwebsite.
