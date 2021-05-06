'use strict'
import CallApi from './js/findData.js'
import AddData from './js/AttachData.js'
const main = document.getElementById('main');
const form = document.getElementById('configuration');
const searchinput = document.getElementById('chatInput');
const link = 'https://idwapi-juvasquez88.vercel.app/js';

let data = {};
data = await CallApi();
console.log(data);

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    main.innerHTML = ''
    data.phrases.forEach(element => {
        const lowercasephrase = element.phrase.toLowerCase();
        if(lowercasephrase.includes(searchinput.value.toLowerCase())){
            const frase = AddData(element.phrase);
            main.appendChild(frase);
        }
    });
});
