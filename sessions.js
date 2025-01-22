let BossSnd
let bgSnd = document.getElementById('musica')
let BttnSnd = document.getElementById('default')
var Nmb01
var Nmb02
var operacao
var NmbAtual = 23
var NmbComp = 55
var Cash = 0 
var Lvl = 1
var display = document.getElementById('calcDpl')
const background = document.querySelector('.parallax-background')

//Variaveis de quantidades de botoes
var Bot00 = 2
var Bot01 = 2
var Bot02 = 2
var Bot03 = 2
var Bot04 = 2
var Bot05 = 2
var Bot06 = 2
var Bot07 = 2
var Bot08 = 2
var Bot09 = 2
var BotMais = 2
var BotMenos = 2
var BotMulti = 2
var BotDivi = 2
var BotChrg = 2
var BotRoll = 0
var BotAppend = 0
var BotAppend01 = 0
var BotNear = 0
var BotConv = 0
var BotRev = 0

window.onload = function BeginGame(){
    bgSnd.loop = true
    display.innerText = NmbAtual
    document.getElementById('shop').style.display = 'none'
    document.getElementById('needed').innerText = NmbComp
    document.getElementById('text-cur').innerText = NmbAtual
    AttTurns()
}

function digito(nmb) {
    /*if (NmbAtual == 0) {
        console.log(nmb)
        display.innerText = display.innerText + nmb
    }*/
    BttnSnd.currentTime = 0
    BttnSnd.play()
    switch (nmb) {
        case 0:
            if (Bot00 > 0) {
                if (display.innerText !== "") {
                    if (NmbAtual == 0) {
                        Bot00--
                        console.log(nmb)
                        console.log('Voce tem mais ', Bot00, 'usos')
                        display.innerText = display.innerText + nmb
                        AttTurns()
                    }
                }
            }
            break;
        case 1:
            if (Bot01 > 0) {
                if (NmbAtual == 0) {
                    Bot01--
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot01, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                }
            }
            break;
        case 2:
            if (Bot02 > 0) {
                if (NmbAtual == 0) {
                    Bot02--
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot02, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 3:
            if (Bot03 > 0) {
                if (NmbAtual == 0) {
                    Bot03--
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot03, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 4:
            if (Bot04 > 0) {
                if (NmbAtual == 0) {
                    Bot04--
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot04, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 5:
            if (Bot05 > 0) {
                if (NmbAtual == 0) {
                    Bot05--
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot05, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                }
            }
            break;
        case 6:
            if (Bot06 > 0) {
                if (NmbAtual == 0) {
                    Bot06--
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot06, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                    }
            break;
        case 7:
            if (Bot07 > 0) {
                if (NmbAtual == 0) {
                    Bot07--
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot07, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 8:
            if (Bot08 > 0) {
                if (NmbAtual == 0) {
                    Bot08--
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot08, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 9:
        if (Bot09 > 0) {
            if (NmbAtual == 0) {
                Bot09--
                console.log(nmb)
                console.log('Voce tem mais ', Bot09, 'usos')
                display.innerText = display.innerText + nmb
                AttTurns()
                }
            }
        break;
    }
}

function Reverse() {
    BttnSnd.currentTime = 0
    ClickSnd()
    if (BotRev > 0) {
        BotRev--
        document.getElementById('rev').textContent = BotConv

        let dezena = Math.floor(NmbComp / 10)
        let unidade = NmbComp % 10
        console.log('sua unidade eh ', unidade, 'e sua dezena eh ', dezena)
        NmbComp = `${unidade}${dezena}`
        NmbComp = Number.parseInt(NmbComp)
        document.getElementById('needed').innerText = NmbComp

    }
}
function Convert(){
    BttnSnd.currentTime = 0
    ClickSnd()
    if (BotConv > 0) {
        BotConv--
        document.getElementById('conv').textContent = BotConv
        NmbAtual = 25
        display.innerText = NmbAtual
        document.getElementById('text-cur').innerText = NmbAtual
    }
}
function Near() {
    ClickSnd()
    if (BotNear > 0) {
        console.log('near foi apertado')
        const NearNmb = NmbComp - NmbAtual
        if (NmbAtual > NmbComp){
            console.log('near diz que atual maior que comparativo')
            console.log('near diz que atual igual a ',NmbAtual)
        } else if (NearNmb <= 10) {
            NmbAtual = NmbComp
            display.innerText = NmbAtual
            document.getElementById('text-cur').innerText = NmbAtual
            BotNear--
            document.getElementById('near').textContent = BotNear
        } else {
            NmbAtual = NmbAtual + 10
            display.innerText = NmbAtual
            document.getElementById('text-cur').innerText = NmbAtual
            BotNear--
            document.getElementById('near').textContent = BotNear
        }
        if (BotNear == 0) {
            console.log('seus usos de Near acabaram')
        }
    }
}
function Append01() {
    ClickSnd()
    if (BotAppend01 > 0) {
        BotAppend01--
        document.getElementById('append01').textContent = BotAppend
        display.innerText = display.innerText + '1'
        NmbAtual = Number.parseInt(display.innerText)
        document.getElementById('text-cur').innerText = NmbAtual
    }
}
function Append() {
    ClickSnd()
    if (BotAppend > 0) {
        BotAppend--
        document.getElementById('append').textContent = BotAppend
        display.innerText = display.innerText + '4'
        NmbAtual = Number.parseInt(display.innerText)
        document.getElementById('text-cur').innerText = NmbAtual
    }
}
function Roll() {
    ClickSnd()
    if (BotRoll > 0) {
        BotRoll--
        document.getElementById('roll').textContent = BotRoll
        NmbComp = Math.floor(Math.random() * 100) + 1
        document.getElementById('needed').innerText = NmbComp
    }
}
function adicao() {
    ClickSnd()
    if (BotMais > 0) {
        Nmb01 = Number.parseInt(display.innerText)
        operacao = "+"
        NmbAtual = 0
        display.innerText = ''
        BotMais--
        AttTurns()
    }
}
function subtracao() {
    ClickSnd()
    if (BotMenos > 0) {
        Nmb01 = Number.parseInt(display.innerText)
        operacao = "-"
        NmbAtual = 0
        display.innerText = ''
        BotMenos--
        AttTurns()
    }
}
function divisao() {
    ClickSnd()
    if (BotDivi > 0) {
        Nmb01 = Number.parseInt(display.innerText)
        operacao = "/"
        NmbAtual = 0
        display.innerText = ''
        BotDivi--
        AttTurns()
    }
}
function multiplicacao() {
    ClickSnd()
    if (BotMulti > 0) {
        Nmb01 = Number.parseInt(display.innerText)
        NmbAtual = 0
        operacao = "x"
        display.innerText = ''
        BotMulti--
        AttTurns()
    }
}

function send() {
   switch (operacao) {
    case "":
        NmbAtual = Number.parseInt(display.innerText)
        break;
    case "+":
        Nmb02 = Number.parseInt(display.innerText)
        NmbAtual = (Nmb01) + (Nmb02)
        display.innerText = NmbAtual
        break;
    case "-":
        Nmb02 = Number.parseInt(display.innerText)
        NmbAtual = (Nmb01) - (Nmb02)
        display.innerText = NmbAtual
        break;
    case "x":
        Nmb02 = Number.parseInt(display.innerText)
        NmbAtual = (Nmb01) * (Nmb02)
        display.innerText = NmbAtual
        break;
    case "/":
        Nmb02 = Number.parseInt(display.innerText)
        NmbAtual = Number.parseInt((Nmb01) / (Nmb02))
        display.innerText = NmbAtual
        break;
   
    default:
        break;
   }

   document.getElementById('text-cur').innerText = NmbAtual
   operacao = ""

   if (NmbAtual == NmbComp) {
    const passou = new Audio('sounds/passed.mp3')
    passou.play()
    Cash = Cash + 23
    Lvl++
    NmbComp = Math.floor(Math.random() * 100) + 1
    NmbAtual = Math.floor(Math.random() * 100) + 1
    OpenShop()
    console.log('Voce passou um nivel, voce esta agora no nivel ', Lvl)
    console.log('Agora tente chegar em ', NmbComp)
    display.innerText = ''
    return
   }
   ClickSnd()
}

function OpenShop() {
    document.getElementById('cash').innerText = `$${Cash}`
    document.getElementsByClassName('obj')[0].style.display = 'none'
    document.getElementById('shop').style.display = 'block'
    const shuffled = sorting.sort(() => Math.random() - 0.5)
    let selected = shuffled.slice(0, 3)
    document.getElementById('showcase01').innerHTML = selected.join('')
    selected = shuffled.slice(4, 7)
    document.getElementById('showcase02').innerHTML = selected.join('')
}


function Continue() {
    ClickSnd()
    document.getElementById('shop').style.display = 'none'
    document.getElementsByClassName('obj')[0].style.display = 'flex'
    document.getElementById('text-cur').innerText = NmbAtual
    document.getElementById('needed').innerText = NmbComp
    document.getElementById('rounds').innerText = `${Lvl}/20`
    if (Lvl == 5) {
        NmbComp = Math.floor(Math.random() * 1000) + 1
        document.getElementById('needed').innerText = NmbComp
    }
    display.innerText = NmbAtual
}


function AttTurns() {
    document.getElementById("power").textContent = BotChrg
    document.getElementById("+").textContent = BotMais
    document.getElementById("-").textContent = BotMenos
    document.getElementById("x").textContent = BotMulti
    document.getElementById("/").textContent = BotDivi
    document.getElementById("0").textContent = Bot00
    document.getElementById("1").textContent = Bot01
    document.getElementById("2").textContent = Bot02
    document.getElementById("3").textContent = Bot03
    document.getElementById("4").textContent = Bot04
    document.getElementById("5").textContent = Bot05
    document.getElementById("6").textContent = Bot06
    document.getElementById("7").textContent = Bot07
    document.getElementById("8").textContent = Bot08
    document.getElementById("9").textContent = Bot09
    document.getElementById('cash').innerText = `$${Cash}`
}
// Adiciona o evento de movimento do mouse
document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 3 - 5
    const y = (event.clientY / window.innerHeight) * 3 - 5
    const x1 = (event.clientX / window.innerWidth) * 4 - 70
    const y1 = (event.clientY / window.innerHeight) * 4 - 10
    const x2 = (event.clientX / window.innerWidth) * 2 - 0
    const y2 = (event.clientY / window.innerHeight) * 2 - 3
    // Aplica a transformação para criar o efeito parallax
    background.style.transform = `translate(${x}%, ${y}%) scale(1.05)`
    document.getElementsByClassName('Calculator')[0].style.transform = `translate(${x1}%, ${y1}%) scale(1)`
    document.getElementsByClassName('obj')[0].style.transform = `translate(${x2}%, ${y2}%) scale(.8)`
});

function ClickSnd() {
    BttnSnd.currentTime = 0
    BttnSnd.play()
}