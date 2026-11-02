# E-mailverzending

De NovaAI-contact-, demo-, interesse- en nieuwsbriefaanvragen gebruiken een serverroute met Resend. Er zijn geen nieuwe npm-pakketten nodig.

Stel via de omgevingsinstellingen van de hosting de volgende servervariabelen in:
- `RESEND_API_KEY`: geheime Resend API-sleutel.
- `CONTACT_FROM_EMAIL`: afzender op een geverifieerd domein.
- `CONTACT_TO_EMAIL`: bevestigd ontvangstadres van de eigenaar.

Deze variabelen mogen geen `NEXT_PUBLIC_`-prefix krijgen. Zonder configuratie retourneert de route een duidelijke fout en blijven de gegevens beschikbaar voor een e-mailconcept. `hallo@nova.ai` is uitsluitend het adres uit het referentieontwerp; eigendom en bereikbaarheid zijn niet bevestigd.

Controleer na configuratie een contactaanvraag, demoaanvraag en nieuwsbriefaanvraag in de ontvangende inbox. Een succesvolle API-reactie bevestigt acceptatie door de e-maildienst, niet gegarandeerde aflevering. Nieuwsbriefaanvragen worden doorgestuurd; er wordt niet automatisch een mailinglijst-abonnement aangemaakt. Accounts, betalingen en AI-workflows vallen buiten deze marketingwebsite.
