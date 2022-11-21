const inn = document.querySelector('#INN')
const btn = document.querySelector('button')

const TrueInn= /^[0-1]\d{13}$/ig

btn.addEventListener('click',()=>{
    if(TrueInn.test(inn.value)){
        alert('Good job')
    }else{
        alert('error')
    }
})

// 2

const bigBox = document.querySelector('.bigBox')
const smallBox = document.querySelector('.smallBox')
//style
const bigBoxStyle=()=>{
    bigBox.style.height= '500px'
    bigBox.style.width= '500px'
    bigBox.style.border = '1px solid '
    bigBox.style.background= 'red'
    bigBox.style.position = 'relative'
}
bigBoxStyle()
const smallBoxStyle=()=>{
    smallBox.style.height= '50px'
    smallBox.style.width= '50px'
    smallBox.style.border = '1px solid '
    smallBox.style.background= 'blue'
    smallBox.style.position = 'absolute'
    smallBox.style.top = '0'
    smallBox.style.left = '0'
}
smallBoxStyle()

let PosTop = 0
let Posleft = 0

function MoveBox(){
    if(PosTop===0 && Posleft<450){
        Posleft+=10
        smallBox.style.left = `${Posleft}px`
        setTimeout(MoveBox,10)
    }else if(Posleft===450 && PosTop<450){
        PosTop=PosTop+10
        smallBox.style.top = `${PosTop}px`
        setTimeout(MoveBox,10)
    }else if(PosTop===450 && Posleft>0 ){
        Posleft-=10
        smallBox.style.left = `${Posleft}px`
        setTimeout(MoveBox,10)
    }else if(Posleft===0 && PosTop>0){
        PosTop-=10
        smallBox.style.top = `${PosTop}px`
        setTimeout(MoveBox,10)
    }
}

bigBox.addEventListener('click',()=>{
    MoveBox()
    smallBox.addEventListener('click',()=>{
        bigBox.removeEventListener('click')
    })
})