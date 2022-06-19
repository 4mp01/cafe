
import { 
    div1, div2, div3, div4, div5, div6, div7, div8, div9, div10,
    div11, div12, div13, div14, div15, div16, div17, div18, div19, div20, div21,
    div22, div23, div24, div25, div26, div27,
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    hr1, hr2,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27,
    h1, h1_1, h1_2, h1_3, h1_4, h1_5, h1_6, h1_7, h1_8, h1_9, h1_10,
    h1_11, h1_12, h1_13, h1_14, h1_15, h1_16, h1_17, h1_18, h1_19, h1_20,
    h1_21, h1_22, h1_23, h1_24, h1_25, h1_26, h1_27
} from '../../package/cPackage.js'
import pastry from '../../../data/pastries/pastry.json' assert { type:'json' }
import drink from '../../../data/drinks/drinks.json' assert { type:'json' }
import imgP from '../../../data/pastries/img.json' assert { type:'json' }
import imgD from '../../../data/drinks/img.json' assert { type:'json' }

    div1.id='menu-container'
        
        div2.id='logo-container'
            img5.id='logo'
            img5.src='../../public/img/logo/logo.png'
        div2.append(img5)
        
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
                h1_10.innerHTML=pastry.shift().pastry7
            div13.append(img10, h1_10)
        
            div14.className='pastry'
                img12.className='pastry'
                img12.src=imgP.shift().img8
                h1_12.innerHTML=pastry.shift().pastry8
            div14.append(img12, h1_12)
            
            div15.className='pastry'
                img13.className='pastry'
                img13.src=imgP.shift().img9
                h1_13.innerHTML=pastry.shift().pastry9
            div15.append(img13, h1_13)
        
        div3.append(h1, div4, div5, div9, div10, div11, div12, div13, div14, div15)

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

            
            div22.className='drinks'
                img21.className='drinks'
                img21.src=imgD.shift().img9
                h1_21.innerHTML=drink.shift().drink9
            div22.append(img21, h1_21)

            div23.className='drinks'
                img22.className='drinks'
                img22.src=imgD.shift().img10
                h1_22.innerHTML=drink.shift().drink10
            div23.append(img22, h1_22)

            div24.className='drinks'
                img24.className='drinks'
                img24.src=imgD.shift().img11
                h1_24.innerHTML=drink.shift().drink11
            div24.append(img24, h1_24)

            div25.className='drinks'
                img25.className='drinks'
                img25.src=imgD.shift().img12
                h1_25.innerHTML=drink.shift().drink12
            div25.append(img25, h1_25)

            div26.className='drinks'
                img26.className='drinks'
                img26.src=imgD.shift().img13
                h1_26.innerHTML=drink.shift().drink13
            div26.append(img26, h1_26)

            div27.className='drinks'
                img27.className='drinks'
                img27.src=imgD.shift().img14
                h1_27.innerHTML=drink.shift().drink14
            div27.append(img27, h1_27)
        
        div6.append(h1_1, div7, div8, div16, div17, div18, div19, div20, div21, div22, div23, div24, div25, div26)
    div1.append(div2, hr1, div3, hr2, div6)

document.body.append(div1)

img5.addEventListener('click', () => {
    location.href='/'
})