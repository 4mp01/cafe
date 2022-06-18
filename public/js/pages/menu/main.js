
import { 
    div1, div2, div3, div4, div5, div6, div7, div8,
    img1, img2, img3, img4, img5,
    h1, h1_1, h1_2, h1_3, h1_4, h1_5
} from '../../package/cPackage.js'

    div1.id='menu-container'
        
        div2.id='logo-container'
            img5.id='logo'
            img5.src='https://grind-vibe-cafe.herokuapp.com/public/img/logo/logo.png'
        div2.append(img5)
        
        div3.className='pastry-container'
            h1.innerHTML='PASTRIES:'
            div4.className='pastry'
                img1.className='pastry'
                img1.src="https://images5.alphacoders.com/865/thumb-1920-865201.jpg"
                h1_2.innerHTML='food'
            div4.append(img1, h1_2)

            div5.className='pastry'
                img2.className='pastry'
                img2.src="https://images5.alphacoders.com/865/thumb-1920-865201.jpg"
                h1_3.innerHTML='food'
            div5.append(img2, h1_3)
        div3.append(h1, div4, div5)

        div6.className="drink-container"
            h1_1.innerHTML='DRINKS:'
            div7.className='drinks'
                img3.className='drinks'
                img3.src='https://images8.alphacoders.com/776/thumb-1920-776474.jpg'
                h1_4.innerHTML='drink'
            div7.append(img3, h1_4)

            div8.className='drinks'
                img4.className='drinks'
                img4.src='https://images8.alphacoders.com/776/thumb-1920-776474.jpg'
                h1_5.innerHTML='drink'
            div8.append(img4, h1_5)
        div6.append(h1_1, div7, div8)
    div1.append(div2, div3, div6)

document.body.append(div1)

img5.addEventListener('click', () => {
    location.href='/'
})