# To-Do List
Vooral het installeren van de locale api was van een iets te hoog technisch gehalte. Maar met heel veel hulp van Samantha is het uiteindelijk toch helemaal goed gekomen.

## starten
vanuit de map local_api: npm start

### probleempjes
* Mijn pagina ververst regelmatig uit zichzelf, geen idee hoe dat komt. Graag zou ik dat wel willen weten.
* Als je al een taak gedaan hebt, dan vinkt ie dat aan in de lijst en is de taak zelf doorgestreept. Dit werkt goed.
* Bij de bonus gebruik ik PUT om de "done" te veranderen naar true of false, alleen dat doet ie maar 1 keer. Graag zou ik hiervan  ook willen weten hoe dat komt. Ik heb dit inmiddels weten te verhelpen, door mijn functie updateDoneTodo aan te passen. Ik controleer nu op de aanwezigheid van de classname "done" ipv de "done"-property in de database.
