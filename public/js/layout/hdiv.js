
import { div1, div2, div3 } from '../package/hPackage.js'
import { logo, img1 } from '../package/hPackage.js'
import { h1 } from '../package/hPackage.js'
import { button1, button2, button3 } from '../package/hPackage.js'

export default async function hdiv() {
    div1.id="hdiv1"
    //
    h1.id="Title"
    h1.innerHTML="WELCOME!"
    //
    button1.id="faq_button"
    button1.innerHTML="FAQ"
    button2.id="about_button"
    button2.innerHTML="About"
    button3.id="menu_button"
    button3.innerHTML="Browse menu"
    //
    logo.id="logo"
    logo.src="../public/img/logo/logo.png"
    //
    div1.append(logo);
document.body.append(div1);
}

/* logo.onclick=async function(){ document.location.href="" }
button1.onclick=async function(){ document.location.href="" }
button2.onclick=async function(){ document.location.href="" }
button3.onclick=async function(){ }
*/