    import '../css/main.css';
    import { manish } from './other';

    let button = document.querySelector('#btn');
    let p = document.querySelector('#myText');
    let show = true;
    manish();
    button.addEventListener('click',()=>{
        show = !show;
        
        if(!show){
            console.log('hidden');
            p.className="";
            p.className = "hide"
        }else{
            console.log('hidden');
            p.className="";
            p.className= "show";
        }
    })