
import { 
    div1, div2, div3, div4, div5, div6, div7, div8, div9, div10,
    div11, div12, div13, div14, div15, div16, div17, div18, div19, div20, div21,
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    hr1, hr2,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    h1, h1_1, h1_2, h1_3, h1_4, h1_5, h1_6, h1_7, h1_8, h1_9, h1_10,
    h1_11, h1_12, h1_13, h1_14, h1_15, h1_16, h1_17, h1_18, h1_19, h1_20
} from '../../package/cPackage.js'
import pastry from '../../../data/pastries/pastry.json' assert { type:'json' }
import imgP from '../../../data/pastries/img.json' assert { type:'json' }

export default function pastryC() {

    div3.className='pastry-container'
        h1.className='txt'
        h1.innerHTML='PASTRIES:'
        
        div4.className='pastry'
            img1.className='pastry'
            img1.src=imgP.shift().img1
            h1_2.innerHTML=pastry.shift().pastry1
        div4.append(img1, h1_2)

        div5.className='pastry'
            img2.className='pastry'
            img2.src=imgP.shift().img2
            h1_3.innerHTML=pastry.shift().pastry2
        div5.append(img2, h1_3)

        div9.className='pastry'
            img6.className='pastry'
            img6.src=imgP.shift().img3
            h1_6.innerHTML=pastry.shift().pastry3
        div9.append(img6, h1_6)

        div10.className='pastry'
            img7.className='pastry'
            img7.src=imgP.shift().img4
            h1_7.innerHTML=pastry.shift().pastry4
        div10.append(img7, h1_7)

        div11.className='pastry'
            img8.className='pastry'
            img8.src=imgP.shift().img5
            h1_8.innerHTML=pastry.shift().pastry5
        div11.append(img8, h1_8)

        div12.className='pastry'
            img9.className='pastry'
            img9.src=imgP.shift().img6
            h1_9.innerHTML=pastry.shift().pastry6
        div12.append(img9, h1_9)

        div13.className='pastry'
            img10.className='pastry'
            img10.src=imgP.shift().img7
            h1_10.innerHTML=pastry.shift().pastry9
        div13.append(img10, h1_10)

        div14.className='pastry'
            img12.className='pastry'
            img12.src=imgP.shift().img8
            h1_12.innerHTML=pastry.shift().pastry8
        div14.append(img12, h1_12)
        
        div15.className='pastry'
            img13.className='pastry'
            img13.src=imgP.shift().img9
            h1_13.innerHTML=pastry.shift().pastry7
        div15.append(img13, h1_13)

    div3.append(h1, div4, div5, div9, div10, div11, div12, div13, div14, div15)

    document.body.append(div3)
}