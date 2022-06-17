
import { 
    div1, div2, div3, div4, div5,div6, 
    img1, img2, img3, img4, img5,
    h1, h1_1, h1_2, h1_3, h1_4,
    p1, p2, p3, p4, p5 
} from "../../package/hPackage.js"
import members from "../../../data/members.json" assert { type:"json" }
import about from "../../../data/about.json" assert { type:"json" }

    div1.id="div1"
        div2.id="div2"
            h1.innerHTML=members.shift().NAME1
            p1.innerHTML=about.shift().ABOUT1
            img1.src=''
        div2.append(img1, h1, p1)
            //
        div3.id="div3"
            h1_1.innerHTML=members.shift().NAME2
            p2.innerHTML=about.shift().ABOUT2
            img2.src=''
        div3.append(img2, h1_1, p2)
            //
        div4.id="div4"
            h1_2.innerHTML=members.shift().NAME3
            p3.innerHTML=about.shift().ABOUT3
            img3.src=''
        div4.append(img3, h1_2, p3)
            //
        div5.id="div5"
            h1_3.innerHTML=members.shift().NAME4
            p4.innerHTML=about.shift().ABOUT4
            img4.src=''
        div5.append(img4, h1_3, p4)
            //
        div6.id="div6"
            h1_4.innerHTML=members.shift().NAME5
            p5.innerHTML=about.shift().ABOUT5
            img5.src=''
        div6.append(img5, h1_4, p5)
    div1.append(div2, div3, div4, div5, div6)

document.body.append(div1);