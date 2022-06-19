
import { 
    div1, div2, div3, div4, div5, div6, div7, div8, div9, div10,
    div11, div12, div13, div14, div15, div16, div17, div18, div19, div20, div21,
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    hr1, hr2,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    h1, h1_1, h1_2, h1_3, h1_4, h1_5, h1_6, h1_7, h1_8, h1_9, h1_10,
    h1_11, h1_12, h1_13, h1_14, h1_15, h1_16, h1_17, h1_18, h1_19, h1_20
} from '../../package/cPackage.js'
import drink from '../../../data/drinks/drinks.json' assert { type:'json' }
import imgD from '../../../data/drinks/img.json' assert { type:'json' }

export default function drinkC() {
    
    div6.className='drink-container'
        h1_1.className='txt'
        h1_1.innerHTML='DRINKS:'
        
        div7.className='drinks'
            img3.className='drinks'
            img3.src=imgD.shift().img1
            h1_4.innerHTML=drink.shift().drink1
        div7.append(img3, h1_4)

        div8.className='drinks'
            img4.className='drinks'
            img4.src=imgD.shift().img2
            h1_5.innerHTML=drink.shift().drink2
        div8.append(img4, h1_5)

        div16.className='drinks'
            img14.className='drinks'
            img14.src=imgD.shift().img3
            h1_14.innerHTML=drink.shift().drink3
        div16.append(img14, h1_14)

        div17.className='drinks'
            img16.className='drinks'
            img16.src=imgD.shift().img4
            h1_16.innerHTML=drink.shift().drink4
        div17.append(img16, h1_16)

        div18.className='drinks'
            img17.className='drinks'
            img17.src=imgD.shift().img5
            h1_17.innerHTML=drink.shift().drink5
        div18.append(img17, h1_17)

        div19.className='drinks'
            img18.className='drinks'
            img18.src=imgD.shift().img6
            h1_18.innerHTML=drink.shift().drink6
        div19.append(img18, h1_18)

        div20.className='drinks'
            img19.className='drinks'
            img19.src=imgD.shift().img7
            h1_19.innerHTML=drink.shift().drink7
        div20.append(img19, h1_19)

        div21.className='drinks'
            img20.className='drinks'
            img20.src=imgD.shift().img8
            h1_20.innerHTML=drink.shift().drink8
        div21.append(img20, h1_20)

    div6.append(h1_1, div7, div8, div16, div17, div18, div19, div20, div21)
document.body.append(div6)
}