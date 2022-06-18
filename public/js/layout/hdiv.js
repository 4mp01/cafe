
import { 
    div1,
    logo,
    h1
} from '../package/hPackage.js'


export default async function hdiv() {
    div1.id="hdiv1"
    
    h1.id="Title"
    h1.innerHTML="WELCOME!"

    logo.id="logo"
    logo.src="../public/img/logo/logo.png"
    
    div1.append(logo);
document.body.append(div1);
}
