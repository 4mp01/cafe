
import { 
    div1, div2, div3, div4, div5,div6, div7,
    img1, img2, img3, img4, img5, img6,
    h1, h1_1, h1_2, h1_3, h1_4,
    p1, p2, p3, p4, p5 
} from '../../package/hPackage.js'
import members from '../../../data/members.json' assert { type:'json' }
import about from '../../../data/about.json' assert { type:'json' }
    
    div1.id='div1'

        div2.id='logo-container'
            img6.id='logo'
            img6.src='../../public/img/logo/logo.png'
        div2.append(img6)

        div3.id='member'
            h1.innerHTML=members.shift().NAME1
            p1.innerHTML=about.shift().ABOUT1
            img1.src='https://images5.alphacoders.com/865/thumb-1920-865201.jpg'
        div3.append(img1, h1, p1)
            //
        div4.className='member'
            h1_1.innerHTML=members.shift().NAME2
            p2.innerHTML=about.shift().ABOUT2
            img2.src='https://images5.alphacoders.com/865/thumb-1920-865201.jpg'
        div4.append(img2, h1_1, p2)
            //
        div5.className='member'
            h1_2.innerHTML=members.shift().NAME3
            p3.innerHTML=about.shift().ABOUT3
            img3.src=''
        div5.append(img3, h1_2, p3)
            //
        div6.className='member'
            h1_3.innerHTML=members.shift().NAME4
            p4.innerHTML=about.shift().ABOUT4
            img4.src=''
        div6.append(img4, h1_3, p4)
            //
        div7.className='member'
            h1_4.innerHTML=members.shift().NAME5
            p5.innerHTML=about.shift().ABOUT5
            img5.src=''
        div7.append(img5, h1_4, p5)
    div1.append(div2, div3, div4, div5, div6, div7)

document.body.append(div1);

img6.addEventListener('click', () => {
    location.href='/'
})