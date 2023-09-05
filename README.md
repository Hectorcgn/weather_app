Hier ein Vorschlag für eine README.md Datei für eine Wetter-App in vanilla JavaScript mit SCSS/CSS für das Styling:

# Wetter-App

Dies ist eine einfache Wetter-App, geschrieben in vanilla JavaScript. Für das Styling kommt SCSS/CSS zum Einsatz.

## Funktionen

- Anzeige der aktuellen Temperatur, Wetterbeschreibung und Ort
- Umschalten zwischen Celsius und Fahrenheit
- Suchen nach anderen Orten

## Technologien

- Vanilla JavaScript
- SCSS für Styling
- CSS für Styling
- OpenWeatherMap API für Wetterdaten
- LocalStorage zur Speicherung der letzten Suche

## Setup

1. Repository clonen
2. Abhängigkeiten installieren mit `npm install` 
3. API Key bei OpenWeatherMap anfordern
4. API Key in `.env` Datei einfügen 
5. Mit `npm start` die App starten

## Verwendung

Beim ersten Laden zeigt die App das Wetter für den aktuellen Standort basierend auf der IP Adresse an. Über die Suchleiste kann nach einem anderen Ort gesucht werden.

Die Temperatur kann durch Klicken auf das °C/°F Symbol zwischen Celsius und Fahrenheit umgeschaltet werden.

## Entwicklung

Folgende Entwicklungstools werden verwendet:

- Webpack für Bundling
- Babel für ES6+ Unterstützung
- ESLint für Code linting
- SCSS compiling

## TODO

- Wetter-Icons hinzufügen
- 5-Tage Wettervorhersage mit Temperatur, Beschreibung und Icon
- Grafische 5-Tage Vorhersage
- Offline Support
- PWA Support

## Credits

- [OpenWeatherMap ↗](https://openweathermap.org/) für die Wetterdaten
- [SCSS ↗](https://sass-lang.com/) für Styling
