
import { 
    div1, div2, div3, div4, div5, div6, div7,
    form1, input1, button1,
    img1, img2, img3, img4,
    h1, h1_1, h1_2, h1_3, h1_4, h1_5
} from '../../package/cPackage.js'

const socket = io()

    div1.className='content-container'
        div2.className='logo'
            img1.src='../../public/img/logo/logo.png'
        div2.append(img1)

        div3.className='message-container'

        div3.append()

        div4.className='input-container'
            
            form1.id='input-container'
                form1.action=''
                    input1.id='input'
                    input1.type='text'
                    input1.placeholder='type your comment here'
                
                    button1.innerText='Submit'
                form1.append(input1, button1)
        div4.append(form1)
    div1.append(div2, div3, div4)

document.body.append(div1)

img1.addEventListener('click', () => {
    location.href='/'
})

form1.addEventListener('submit', e => {
    if (input1.value != null) {
        socket.emit('chat-message', input1.value)
        input1.value=''
    } else { return alert('input something') }
    e.preventDefault()
})

socket.on('chat-message', msg => {
    const messageContainer = document.createElement('div');
    messageContainer.className='message'
    messageContainer.innerHTML = msg;
    div3.append(messageContainer)
});