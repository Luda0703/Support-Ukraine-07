
import { iconRender } from './iconRender';


const listIcon = document.querySelector('.list-icon');

function rendarListIcon (logo) {
     iconRender = logo.map(logo => { const 
        {title, url, img} = logo;
     return `<h3 class="">${title}</h3>
        <a class="">${url}</a>
        <img class="" src="${img}">
        `
});
    listIcon.insertAdjacentHTML('beforeend', iconRender.join(''));
}
rendarListIcon()