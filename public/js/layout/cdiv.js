
import {
    div1, div2, div3, h1_2,
    h1, h1_1,
    img1, img2, img3 
} from '../package/cPackage.js'

export default async function cdiv() {
    div1.id="cdiv1"
        h1.id="h1left"
        h1.innerHTML="Browse Menu"
        img1.id="imgleft"
        img1.src="https://images5.alphacoders.com/865/thumb-1920-865201.jpg"
    div1.append(img1,h1)
        //
    div2.id="cdiv2"
        h1_1.id="h1right"
        h1_1.innerHTML="Comments/Feedbacks"
        img2.id="imgright"
        img2.src="https://images8.alphacoders.com/776/thumb-1920-776474.jpg"
    div2.append(img2,h1_1)
        //
    div3.id="cdiv3"
        h1_2.id="lasth1"
        h1_2.innerHTML="About"
        img3.id="lastimg"
        img3.src="https://images8.alphacoders.com/379/thumb-1920-379377.png"
    div3.append(img3,h1_2)
document.body.append(div1,div2,div3);
}

img1.onclick=async function(){ document.location.href="/menu"  }
img2.onclick=async function(){ document.location.href="/rating" }
img3.onclick=async function(){ document.location.href="/about" }