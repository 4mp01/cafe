
import { 
    div1, div2, div3, div4, div5,div6, div7, div8,
    img1, img2, img3, img4, img5, img6, img7,
    h1, h1_1, h1_2, h1_3, h1_4, h1_5,
    p1, p2, p3, p4, p5, p6,
    hr1, hr2
} from '../../package/cPackage.js'
import members from '../../../data/about/members.json' assert { type:'json' }
import about from '../../../data/about/about.json' assert { type:'json' }
import img from '../../../data/about/pict.json' assert { type:'json' }

    div1.id='div1'

        div2.id='logo-container'
            img6.id='logo'
            img6.src='../../public/img/logo/logo.png'
        div2.append(img6)

        div3.className='member'
            h1.innerHTML=members.shift().NAME1
  //          p1.innerHTML=about.shift().ABOUT1
            img1.src=img.shift().JORAM
        div3.append(img1, h1, p1)

        div4.className='member'
            h1_1.innerHTML=members.shift().NAME2
 //           p2.innerHTML=about.shift().ABOUT2
            img2.src=img.shift().NIMROD
        div4.append(img2, h1_1, p2)

        div5.className='member'
            h1_2.innerHTML=members.shift().NAME3
  //          p3.innerHTML=about.shift().ABOUT3
            img3.src=img.shift().GIAN
        div5.append(img3, h1_2, p3)

        div6.className='member'
            h1_3.innerHTML=members.shift().NAME4
 //           p4.innerHTML=about.shift().ABOUT4
            img4.src=img.shift().MJG
        div6.append(img4, h1_3, p4)

        div7.className='member'
           h1_4.innerHTML=members.shift().NAME5
 //           p5.innerHTML=about.shift().ABOUT5
            img5.src=img.shift().YESHUA
        div7.append(img5, h1_4, p5)

        div8.className='member'
           h1_5.innerHTML=members.shift().NAME6
 //       p6.innerHTML=about.shift().ABOUT6
            img7.src=img.shift().AMP
        div8.append(img7, h1_5, p6)

    div1.append(div2, hr1, div3, div4, div5, div6, div7, div8)

document.body.append(div1);

img6.addEventListener('click', () => {
    location.href='/'
})