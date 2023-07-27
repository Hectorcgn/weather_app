"use strict";
/*
Wenn ich die Website als Besucher öffne, möchte ich das aktuelle Wetter eines von euch gewählten Standorts, zum Beispiel euer aktueller oder Heimatstandort, sehen können
*/
//imports
import {apikey} from"./api.js";
//inputs
const inputStadtfeld = document.querySelector('#stadt');
const inputlandfeld = document.querySelector('#land');
const checktbutton = document.querySelector('button');
//outputs
const outputfield = document.querySelector('.weatherinfobox');
let stadt = 'Köln'
let land = 'Deutschland'

const changelocation = () => {
    stadt = inputStadtfeld.value;
    land = inputlandfeld.value;
    if (land === ''&& stadt ===''){
        outputfield.innerHTML = `<h3>Bitte füll alle Felder aus</h3>`;
        return
    }
    console.log(stadt
        );
        console.log(land);
    fetchfunction();
    return
};
console.log(land);
console.log(stadt);

function fetchfunction() {
    //Arbeiten mit der Api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${stadt},${land}&appid=${apikey}&units=metric&lang=de`)
    .then(response => {
        //if abfrage für den fall das ein fehler auftritt
        if(response.ok === false) {
            throw new Error("etwas ist schief gelaufen");
        }
        return response.json();
    })
    .then(data =>{
        // datum festlegeln
        const datum = new Date()
        //optionen dürs darum festlegen
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
            timeZone: 'Europe/Berlin',
        };
        //datum fürs hrml zurecht machen
        const datumneu = datum.toLocaleString('de-DE', options);
        //uhrzeit fürs html aus dem Darum ziehen
        const uhrzeit = datum.toLocaleTimeString('de-DE', { hour: 'numeric', minute: 'numeric' });
        // uhrzeit für den Sonnenaufgang
        const unixZeitstempel1 = data.sys.sunrise;
        const date1 = new Date(unixZeitstempel1 * 1000); 
        const sonennaufgang = date1.toLocaleTimeString('de-DE', { hour: 'numeric', minute: 'numeric' });
        // uhrzeit für den Sonnenauntergang
        const unixZeitstempel2 = data.sys.sunset;
        const date2 = new Date(unixZeitstempel2 * 1000); 
        const sonennuntergang = date2.toLocaleTimeString('de-DE', { hour: 'numeric', minute: 'numeric' });
        //Html elemet
        const htmlinfos =`
        <h1>Wetter in:</h1>
        <h2>${data.name}, ${data.sys.country},</h2>
        <p>${data.weather[0].icon}, ${data.weather[0].main}, ${data.main.temp.toFixed(1)}°C</p>
        <p>${data.weather[0].description}</p>
        <p>${datumneu}</p>
        <div class="watherdetails">
        <div><P>altuelle uhrzeit:</P><p>${uhrzeit}</p></div>
        <div><p>gefühlt:</p><p>${data.main.feels_like.toFixed(1)}°C</p></div>
        <div><p>Max-Temp:</p><p>${data.main.temp_max.toFixed(1)}°C</p></div>
        <div><p>Min-Temp:</p><p>${data.main.temp_min.toFixed(1)}°C</p></div>
        <div><p>Luftfeuchtigkeit:</p><p>${data.main.humidity}%</p></div>
        <div><p>Sonnenaufgang:</p><p>${sonennaufgang}</p></div>
        <div><p>Sonnenuntergang:</p><P>${sonennuntergang}</p></div>
        </div>
        `
        outputfield.textContent='';
        outputfield.insertAdjacentHTML("afterBegin", htmlinfos);
        console.log(data);
        console.log(); 
    })
    .catch(error => console.log(error))
}
//Event listener
checktbutton.addEventListener("click",changelocation);
