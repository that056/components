import {head,style,fonts,host} from './fonts.js'
console.log(head)
function generateLetters(){
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
        }
function getRandomString(n){
        let result =''
        for(let i=0;i<n;i++){
            result += generateLetters()
        }
        return result
}
class CustomButton extends HTMLElement {
    constructor() {
        super();
        // Attach Shadow DOM
        this.dom_shadow = this.attachShadow({ mode: 'open' }); // Store reference to the shadow DOM
    }
   
    connectedCallback() {
        const r_num =getRandomString(12)
        const host = document
        let style = host.querySelector('style')
        if (!style){
            style =  document.createElement('style')     
        }
       
        const parent =host.querySelector('btn-').parentNode
        const btn = document.createElement('button');
        btn.setAttribute('id',`${r_num}`)
        setTimeout(() => {
            const text = this.textContent.trim() || 'My Button'; 
            btn.textContent = text; 
        }, 0);
        
        const c = this.getAttribute('color') || 'White'
        const bg = this.getAttribute('background-color') || 'Blue'
        const p = this.getAttribute('padding') || '9'
        const cls = this.getAttribute('class');
        const hover = this.getAttribute('hover'); 
        const r = this.getAttribute('b-r')|| '2'
        const fs = this.getAttribute('fs')|| '15'
        const w = this.getAttribute('w')|| 'auto'
        const h = this.getAttribute('h')|| 'auto'
        
        if (cls) {
            btn.classList.add(cls);
            this.classList.remove(cls)
                style.textContent += `
                .btn-primary {
                 font-family:"Roboto", sans-serif;
                 background-color: Blue;
                 color:white;
                 text-align: center;
                 font-size:15px;
                 padding: 10px;
                 border-radius: 2px;
                 border:none;
                 }
                 .btn-primary:hover{
                 background-color:white;
                 color:Blue
 
                 }
             `
             this.dom_shadow.appendChild(btn);
            parent.appendChild(this.dom_shadow)
            parent.removeChild(this)
      
        } else {
           if (hover){
                btn.classList.add('h');
                style.textContent += `
                .btn#${r_num} {
                    font-family:"Roboto", sans-serif;
                    background-color: ${bg};
                    color:${c};
                    text-align: center;
                    font-size:${fs}px;
                    width:${w}px;
                    height:${h}px;
                    padding: ${p};
                    border-radius: ${r}px;
                    border:none;
                    }
                .btn.h#${r_num}:hover{
                    background-color:${c};
                    color:${bg}
                    }
    
                `
           }
           else{
                style.textContent += `
                .btn#${r_num}{
                    font-family:"Roboto", sans-serif;
                    background-color: ${bg};
                    color:${c};
                    text-align: center;
                    width:${w}px;
                    height:${h}px;
                    font-size:${fs}px;
                    border-radius: ${r}px;
                    padding: ${p};
                    border-radius: ${r}px;
                    border:none;
        }`
             }
             
            btn.classList.add('btn') 
            head.appendChild(style)
           
            this.dom_shadow.appendChild(btn);
            parent.appendChild(this.dom_shadow)
            parent.removeChild(this)
        }
       
      
        
    }
}
class CustomBtnGroup extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
    }
    generateLetters() {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
            
        }
        getRandomString(n){
            let result =''
            for(let i=0;i<n;i++){
                result += this.generateLetters()
            }
            return result
    
        }
    connectedCallback(){
        const r_num =this.getRandomString(12)
        let style = host.querySelector('style')
        if (style){
            
        }
        else{
            style =  document.createElement('style')
        }
        
        const parent =host.querySelector('btn-group').parentNode
        
        const btn_object={
            'background-color':'',
            'color':''
        }
        const container = document.createElement('span')
        container.setAttribute('id',`${r_num}`)
        container.style.paddingTop='20px'
        const btn1 = document.createElement('button')
        const btn2 = document.createElement('button')
        const colors =this.getAttribute('colors').split('.')
        const texts =this.getAttribute('text').split(',')
        const p = this.getAttribute('padding') || '15'
        const fs = this.getAttribute('fs') || '17'
        const h = this.getAttribute('h') || 'auto'
        const w= this.getAttribute('w') || 'auto'
        colors.forEach((colorset,idx)=>{
            if (idx ==0 ){
                btn_object["background-color"] = colorset.slice(1,-1).split(',')[0]
                btn_object["color"] = colorset.slice(1,-1).split(',')[1]
                style.textContent +=`
                span#${r_num} .btn1{
                color: ${btn_object.color};
                background-color : ${btn_object["background-color"]};
                padding : ${p}px;
                border:none;
                border-radius:2px 0px 0px 2px;
                font-family:"Roboto", sans-serif;
                font-size:${fs}px;
                width : ${w}px;
                height: ${h}px;
    
                }
                span#${r_num} .btn1:hover{
                transition:all .5s;
                background-color: ${btn_object.color};
                color : ${btn_object["background-color"]};
                }
                
                `
                btn1.classList.add('btn1')
                btn1.textContent = texts[0]
            }
           
            else if (idx == 1){
                btn_object["background-color"] = colorset.slice(1,-1).split(',')[0]
                btn_object["color"] = colorset.slice(1,-1).split(',')[1]
            style.textContent +=`
            span#${r_num} .btn2{
            color: ${btn_object.color};
            background-color : ${btn_object["background-color"]};
            padding : ${p}px;
            border:none;
            border-radius:0px 2px 2px 0px;
            font-family:"Roboto", sans-serif;
            font-size:${fs}px;
            width : ${w}px;
            height: ${h}px;

            }
            span#${r_num} .btn2:hover{
            transition:all .5s;
            background-color: ${btn_object.color};
            color : ${btn_object["background-color"]};
            }
            
            `   
                btn2.textContent = texts[1]
                btn2.classList.add('btn2')
            }
        })


        container.appendChild(btn1)
        container.appendChild(btn2)
       
        this.shadow.appendChild(container)
        parent.appendChild(this.shadow)
        parent.removeChild(this)
       

        
    }
}
class customForm extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        let inr 
        const parent =host.querySelector('form-').parentNode
        const frm =document.createElement('form')
        const fields = this.getAttribute('fields').split(',')
        const btn_txt = this.getAttribute('btn-text')
        let style = head.querySelector('style')
        if (!style){
            style = document.createElement('style')
        }
        style.textContent+=`
        input {
            margin: 8;
            border: 2;
            padding: 10;
            width: 200;
        }
        input[type='text']::placeholder , #f{
            font-family:monospace;
            color: grey;
            font-size: 15px;
        }
        #f{
            position: absolute;
            top: 0;
            left: 15;
        }
        .input-field{
            position: relative;
        }
        
        `
        fields.forEach(f =>{
            if (f.toLowerCase() == 'password'){
                const span = document.createElement('span')
                span.classList.add('input-field')
                const input = document.createElement('input')
                input.setAttribute('type','password')
                input.setAttribute('id','fn')
                input.setAttribute('name',`${f}`)
                const label = document.createElement('label')
                label.setAttribute('id','f')
                label.textContent = 'Password'
                span.appendChild(input)
                span.appendChild(label)
                frm.appendChild(span)
            }
            else if (f.toLowerCase() == 'email'){
                const span = document.createElement('span')
                span.classList.add('input-field')
                const input = document.createElement('input')
                input.setAttribute('type','email')
                input.setAttribute('id','fn')
                input.setAttribute('name',`${f}`)
                const label = document.createElement('label')
                label.setAttribute('id','f')
                label.textContent = 'email'
                span.appendChild(input)
                span.appendChild(label)
                frm.appendChild(span)
            }
            else{
                const span = document.createElement('span')
                span.classList.add('input-field')
                const input = document.createElement('input')
                input.setAttribute('type','text')
                input.setAttribute('id','fn')
                input.setAttribute('name',`${f}`)
                const label = document.createElement('label')
                label.setAttribute('id','f')
                label.textContent = `${f}`
                span.appendChild(input)
                span.appendChild(label)
                frm.appendChild(span)
            }

        })
        
        const btn = document.createElement('btn-')
        btn.textContent = `${btn_txt}`
        btn.classList.add('btn-primary')
        frm.appendChild(btn)
        
        
        head.appendChild(style)
       
        this.shadow.appendChild(frm)
        parent.appendChild(this.shadow)
        parent.removeChild(this)
        
      
       this.addInputListeners();
        
    }
    addInputListeners() {
        const fn = document.querySelectorAll('#fn')
        fn.forEach(f=>{
            const fn_label = f.closest('.input-field').childNodes[1]
            
            f.addEventListener('input',()=>{
                if (f.textContent.length<1){
                    fn_label.style.transition='all .5s'
                    fn_label.style.top='30px'
    
                }
                
            })
            f.addEventListener('blur', () => {
                if (f.value.length < 1) {
                    fn_label.style.transition = 'all .5s';
                    fn_label.style.top = '0px';
                }
            });
        })
           
    }
}
class CustomHero extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
        
    }
    connectedCallback(){
        let innerText = ''
        setTimeout(()=>{
            innerText = this.innerHTML
            console.log(innerText)
            
        },0)
        
        const parent = host.querySelector('hero-').parentNode
        const image = this.getAttribute('image')
        const w = this.getAttribute('w') || '1280'
        const h = this.getAttribute('h') || '550'
        const title_text = this.getAttribute('Title') || ''
        const title = document.createElement('h1')
        title.textContent = title_text
        const ts = this.getAttribute('title-size') || '30'
        const f = this.getAttribute('title-font') || 'Roboto'
        const c = this.getAttribute('title-color') || 'white'
        const ls = this.getAttribute('l-s') || '1'
        
        
        const title_layout = this.getAttribute('t-layout') || 'center'
        const hero_div = document.createElement('div')
        const texts = this.getAttribute('texts').split('/')
        const texts_prop = this.getAttribute('text-prop').split('.')

        style.textContent+=`
        .hero{
        width:${w.includes('%') ? `${w}` : `${w}px`};
        height:${h.includes('%') ? `${h}` : `${h}px`};
        background-image:  url(${image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        }
        .Title{
        font-family:${fonts[f]};
        color:${c};
        font-size:${ts}px;
        padding-top:7%;
        text-align: ${title_layout};
        letter-spacing:${ls}
        }
        `

        title.classList.add('Title')
        hero_div.classList.add('hero')
        hero_div.appendChild(title)
        const texts_length = texts.length
        
        for(let i =0;i<texts_length;i++){
            const r_num =getRandomString(12)
            const p = document.createElement('p')
            p.setAttribute('id',r_num)
            p.textContent = texts[i]
            hero_div.appendChild(p)
            let jsonStr = texts_prop[i].replace(/([a-zA-Z0-9_-]+)(:)/g, '"$1"$2') // Quote keys
                 .replace(/:([a-zA-Z]+)/g, ':"$1"'); 

            const Json_object = JSON.parse(jsonStr)
            console.log(Json_object)

            style.textContent+=`
            p#${r_num}{
            text-align: ${Json_object.layout};
            font-family:${fonts[Json_object.font]};
            font-size:${Json_object["font-size"]};
            letter-spacing:${Json_object.ls};
            color:${Json_object.color};
            padding:10px;
            }
            `
        }




       
        
        parent.appendChild(hero_div)
        parent.removeChild(this)

      
       
        
        
    }

}
customElements.define('form-', customForm);
customElements.define('btn-group', CustomBtnGroup);
customElements.define('btn-', CustomButton);
customElements.define('hero-', CustomHero);