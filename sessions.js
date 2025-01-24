let BossBattle = false
var Quais = []
let parallaxCalc = true
const passou = new Audio('sounds/passed.mp3')
let BossSnd
let bgSnd = document.getElementById('musica')
let BttnSnd = document.getElementById('default')
var Nmb01
var Nmb02
var operacao = ''
var NmbAtual = 23
var NmbComp = 55
var Cash = 0 
var Lvl = 1
var display = document.getElementById('calcDpl')
const background = document.querySelector('.parallax-background')

//Variaveis de quantidades de botoes
var energy = 1
var BotVar = 0
var BotVar1 = 0
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
var BotChrg = 4
var BotRoll = 0
var BotAppend = 0
var BotAppend01 = 0
var BotNear = 0
var BotConv = 0
var BotRev = 0
var BotSqr = 0
var BotInc = 0

window.onload = function BeginGame(){
    bgSnd.loop = true
    bgSnd.muted = true
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
            if (Bot00 >= energy) {
                if (display.innerText !== "") {
                    if (NmbAtual == 0) {
                        Bot00 = Bot00-energy
                        console.log(nmb)
                        console.log('Voce tem mais ', Bot00, 'usos')
                        display.innerText = display.innerText + nmb
                        AttTurns()
                    }
                }
            }
            break;
        case 1:
            if (Bot01 >= energy) {
                if (NmbAtual == 0) {
                    Bot01=Bot01-energy
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot01, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                }
            }
            break;
        case 2:
            if (Bot02 >=energy) {
                if (NmbAtual == 0) {
                    Bot02=Bot02-energy
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot02, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 3:
            if (Bot03 >=energy) {
                if (NmbAtual == 0) {
                    Bot03=Bot03-energy
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot03, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 4:
            if (Bot04 >=energy) {
                if (NmbAtual == 0) {
                    Bot04=Bot04-energy
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot04, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 5:
            if (Bot05 >=energy) {
                if (NmbAtual == 0) {
                    Bot05 = Bot05-energy
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot05, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                }
            }
            break;
        case 6:
            if (Bot06 >= energy) {
                if (NmbAtual == 0) {
                    Bot06 = Bot06-energy
                    console.log(nmb)
                    console.log('Voce tem mais ', Bot06, 'usos')
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                    }
            break;
        case 7:
            if (Bot07 >= energy) {
                if (NmbAtual == 0) {
                    Bot07 = Bot07-energy
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 8:
            if (Bot08 >= energy) {
                if (NmbAtual == 0) {
                    Bot08 = Bot08-energy
                    display.innerText = display.innerText + nmb
                    AttTurns()
                    }
                }
            break;
        case 9:
        if (Bot09 >= energy) {
            if (NmbAtual == 0) {
                Bot09 = Bot09-energy
                display.innerText = display.innerText + nmb
                AttTurns()
                }
            }
        break;
    }
}

function square() {
    BttnSnd.currentTime = 0
    ClickSnd()
    if (BotSqr >= energy) {
        BotSqr = BotSqr - energy
        document.getElementById('sqr').textContent = BotInc

        NmbAtual = NmbAtual * NmbAtual
        document.getElementById('text-cur').innerText = NmbAtual
        display.innerText = NmbAtual
    }
}
function increment() {
    BttnSnd.currentTime = 0
    ClickSnd()
    if (BotInc >= energy) {
        BotInc = BotInc - energy
        document.getElementById('inc').textContent = BotInc

        NmbAtual++
        document.getElementById('text-cur').innerText = NmbAtual
        display.innerText = NmbAtual
    }
}
function Reverse() {
    BttnSnd.currentTime = 0
    ClickSnd()
    if (BotRev >= energy) {
        BotRev = BotRev - energy
        document.getElementById('rev').textContent = BotConv

        const required = NmbComp
        NmbComp = NmbAtual
        NmbAtual = required
        document.getElementById('needed').innerText = NmbComp
        document.getElementById('text-cur').innerText = NmbAtual
        display.innerText = NmbAtual
    }
}
function Convert(){
    BttnSnd.currentTime = 0
    ClickSnd()
    if (BotConv >= energy) {
        BotConv = BotConv-energy
        document.getElementById('conv').textContent = BotConv
        NmbAtual = 25
        display.innerText = NmbAtual
        document.getElementById('text-cur').innerText = NmbAtual
    }
}
function Near() {
    ClickSnd()
    if (BotNear >= energy) {
        console.log('near foi apertado')
        const NearNmb = NmbComp - NmbAtual
        if (NmbAtual > NmbComp){
            console.log('near diz que atual maior que comparativo')
            console.log('near diz que atual igual a ',NmbAtual)
        } else if (NearNmb <= 10) {
            NmbAtual = NmbComp
            display.innerText = NmbAtual
            document.getElementById('text-cur').innerText = NmbAtual
            BotNear = BotNear-energy
            document.getElementById('near').textContent = BotNear
        } else {
            NmbAtual = NmbAtual + 10
            display.innerText = NmbAtual
            document.getElementById('text-cur').innerText = NmbAtual
            BotNear = BotNear-energy
            document.getElementById('near').textContent = BotNear
        }
        if (BotNear == 0) {
            console.log('seus usos de Near acabaram')
        }
    }
}
function Append01() {
    ClickSnd()
    if (BotAppend01 >= energy) {
        BotAppend01 = BotAppend01-energy
        document.getElementById('append01').textContent = BotAppend01
        display.innerText = '1' + display.innerText
        NmbAtual = Number.parseInt(display.innerText)
        document.getElementById('text-cur').innerText = NmbAtual
    }
}
function Append() {
    ClickSnd()
    if (BotAppend >= energy) {
        BotAppend = BotAppend-energy
        document.getElementById('append').textContent = BotAppend
        display.innerText = display.innerText + '1'
        NmbAtual = Number.parseInt(display.innerText)
        document.getElementById('text-cur').innerText = NmbAtual
    }
}
function Roll() {
    ClickSnd()
    if (BotRoll >= energy) {
        BotRoll = BotRoll-energy
        document.getElementById('roll').textContent = BotRoll
        NmbComp = Math.floor(Math.random() * 100) + 1
        document.getElementById('needed').innerText = NmbComp
    }
}
function battery() {
if (BotChrg >= energy){
    document.getElementById("BotChrg").currentTime = 0
    document.getElementById("BotChrg").play()
    const digits = [Bot00, Bot01, Bot02, Bot03, Bot04, Bot05, Bot06, Bot07, Bot08, Bot09]
    const index = Math.floor(Math.random() * 9)
    digits[index]++
    document.getElementById(index).innerText = digits[index]
    switch (index) {
        case 0: Bot00 = digits[index]; break;
        case 1: Bot01 = digits[index]; break;
        case 2: Bot02 = digits[index]; break;
        case 3: Bot03 = digits[index]; break;
        case 4: Bot04 = digits[index]; break;
        case 5: Bot05 = digits[index]; break;
        case 6: Bot06 = digits[index]; break;
        case 7: Bot07 = digits[index]; break;
        case 8: Bot08 = digits[index]; break;
        case 9: Bot09 = digits[index]; break;
    }
    BotChrg = BotChrg - energy
    AttTurns()
}
}

function adicao() {
    ClickSnd()
    if (BotMais >= energy && operacao == '') {
        Nmb01 = Number.parseInt(display.innerText)
        operacao = "+"
        NmbAtual = 0
        display.innerText = ''
        BotMais = BotMais-energy
        AttTurns()
    }
}
function subtracao() {
    ClickSnd()
    if (BotMenos >= energy && operacao == '') {
        Nmb01 = Number.parseInt(display.innerText)
        operacao = "-"
        NmbAtual = 0
        display.innerText = ''
        BotMenos = BotMenos-energy
        AttTurns()
    }
}
function divisao() {
    ClickSnd()
    if (BotDivi >= energy && operacao == '') {
        Nmb01 = Number.parseInt(display.innerText)
        operacao = "/"
        NmbAtual = 0
        display.innerText = ''
        BotDivi = BotDivi-energy
        AttTurns()
    }
}
function multiplicacao() {
    ClickSnd()
    if (BotMulti >= energy && operacao == '') {
        Nmb01 = Number.parseInt(display.innerText)
        NmbAtual = 0
        operacao = "x"
        display.innerText = ''
        BotMulti = BotMulti-energy
        AttTurns()
    }
}

function send() {
    if (display.innerText == ''){
        return
    }
   switch (operacao) {
    case '':
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
        break;
    case "x":
        Nmb02 = Number.parseInt(display.innerText)
        NmbAtual = (Nmb01) * (Nmb02)
        break;
    case "/":
        Nmb02 = Number.parseInt(display.innerText)
        NmbAtual = Number.parseInt((Nmb01) / (Nmb02))
        break;
   
    default:
        break;
   }
   display.innerText = NmbAtual
   document.getElementById('text-cur').innerText = NmbAtual
   operacao = ''

   if (NmbAtual == NmbComp) {
    passou.volume = .4
    Cash = Cash + 23
    Lvl++
    if (Lvl == 21) {
        bgSnd.muted = true
        BttnSnd.src = "sounds/youwin.mp3"
        BttnSnd.play()
        setTimeout(() => {
            window.location.href = "LIB/olho.html"
            }, 5000)
        return
    }
    passou.play()
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

function Reroll() {
    ClickSnd()
    if (Cash >= 5) {
    Cash = Cash - 5
    document.getElementById('cash').innerText = `$${Cash}`
    const shuffled = sorting.sort(() => Math.random() - 0.5)
    let selected = shuffled.slice(0, 3)
    document.getElementById('showcase01').innerHTML = selected.join('')
    selected = shuffled.slice(4, 7)
    document.getElementById('showcase02').innerHTML = selected.join('')
    }
}

 async function OpenShop() {
    if (BossBattle == true) {
        BossBattle = false
        bgSnd.src = "sounds/MainBG_edite.mp3"
        if (bgSnd.muted == false) {
            bgSnd.play()
        }
        if (document.getElementById('error').style.display == 'block') {
            document.getElementById('error').style.display = 'none'
        }
        if (energy == 2) {
            energy--
        }
        anime({
            targets: '#bossDesc',
            translateY: 0,
            duration: 200,
            easing: 'easeInOutQuad'
        })
        await delay(300)
        anime({
                targets: '#bossLeg',
                scale: 0,
                duration: 200,
                easing: 'easeInOutQuad'
            })
            await delay(400)
        anime({
            targets: '#bossImg',
            scale: 0,
            borderRadius: ['0%', '50%'],
            duration: 200,
            easing: 'easeInOutQuad'
        })
        await delay(400)
    }
    anime({
        targets: '.Calculator',
        translateX: 1100,
        translateY: 300,
        scale: 0.8,
        duration: 500,
        easing: 'easeInOutQuad'
      })
    parallaxCalc = false
    document.getElementById('cash').innerText = `$${Cash}`
    document.getElementById('shop').style.display = 'block'
    const shuffled = sorting.sort(() => Math.random() - 0.5)
    let selected = shuffled.slice(0, 3)
    document.getElementById('showcase01').innerHTML = selected.join('')
    selected = shuffled.slice(4, 7)
    document.getElementById('showcase02').innerHTML = selected.join('')
    anime({
        targets: '.obj',
        translateX: -880,
        duration: 500,
        easing: 'easeInOutQuad'
        })
    anime({
        targets: '#shop',
        translateX: 880,
        duration: 500,
        easing: 'easeInOutQuad'
        })
    anime({
        targets: '#money',
        translateX: -710,
        translateY: -300,
        scale: 0.9,
        duration: 500,
        easing: 'easeInOutQuad'
        })
    document.getElementById('congrats').innerText = "RESTAR"
    await delay(20)
    document.getElementById('congrats').innerText = "RESTA"
    await delay(20)
    document.getElementById('congrats').innerText = "REST"
    await delay(20)
    document.getElementById('congrats').innerText = "RES"
    await delay(20)
    document.getElementById('congrats').innerText = "RE"
    await delay(20)
    document.getElementById('congrats').innerText = "R"
    await delay(20)
    document.getElementById('congrats').innerText = ""
    await delay(20)
    document.getElementById('congrats').innerText = "C"
    await delay(20)
    document.getElementById('congrats').innerText = "CO"
    await delay(20)
    document.getElementById('congrats').innerText = "CON"
    await delay(20)
    document.getElementById('congrats').innerText = "CONG"
    await delay(20)
    document.getElementById('congrats').innerText = "CONGR"
    await delay(20)
    document.getElementById('congrats').innerText = "CONGRA"
    await delay(20)
    document.getElementById('congrats').innerText = "CONGRAT"
    await delay(20)
    document.getElementById('congrats').innerText = "CONGRATS"
    await delay(20)
    document.getElementById('congrats').style.cursor = "default"

    if (Quais[0] == 'BotMais') {
        BotMais = BotVar
        Bot02 = BotVar1
        Quais = []
    }
    if (Quais[0] == 'BotMulti') {
        BotMulti = BotVar
        Bot03 = BotVar1
        Quais = []
    }

    
}


async function Continue() {
    ClickSnd()
    anime({
        targets: '.obj',
        translateX: 0,
        duration: 800,
        easing: 'easeInOutQuad'
      })
    anime({
        targets: '.Calculator',
        translateX: 0,
        translateY: 0,
        scale: 1,
        duration: 800,
        easing: 'easeInOutQuad'
      })
    anime({
        targets: '#money',
        translateX: 0,
        translateY: 0,
        scale: 0.7,
        duration: 500,
        easing: 'easeInOutQuad'
      })
    anime({
        targets: '#shop',
        translateX: 0,
        duration: 800,
        easing: 'easeInOutQuad'
      })
    parallaxCalc = true
    document.getElementsByClassName('obj')[0].style.display = 'flex'
    document.getElementById('text-cur').innerText = NmbAtual
    document.getElementById('needed').innerText = NmbComp
    document.getElementById('rounds').innerText = `${Lvl}/20`
    if (Lvl == 5 || Lvl == 10 || Lvl == 15 || Lvl == 20) {
        BossBattle = true
        const boss = Math.floor(Math.random() * 5) + 1
        SetBoss(boss) 
    }
    display.innerText = NmbAtual
    document.getElementById('congrats').innerText = "CONGRAT"
    await delay(50)
    document.getElementById('congrats').innerText = "CONGRA"
    await delay(50)
    document.getElementById('congrats').innerText = "CONGR"
    await delay(50)
    document.getElementById('congrats').innerText = "CONG"
    await delay(50)
    document.getElementById('congrats').innerText = "CON"
    await delay(50)
    document.getElementById('congrats').innerText = "CO"
    await delay(50)
    document.getElementById('congrats').innerText = "C"
    await delay(50)
    document.getElementById('congrats').innerText = ""
    await delay(50)
    document.getElementById('congrats').innerText = "R"
    await delay(50)
    document.getElementById('congrats').innerText = "RE"
    await delay(50)
    document.getElementById('congrats').innerText = "RES"
    await delay(50)
    document.getElementById('congrats').innerText = "REST"
    await delay(50)
    document.getElementById('congrats').innerText = "RESTA"
    await delay(50)
    document.getElementById('congrats').innerText = "RESTAR"
    await delay(50)
    document.getElementById('congrats').innerText = "RESTART"
    await delay(50)
}


function AttTurns() {
    document.getElementById("power").textContent = BotChrg
    document.getElementById("-").textContent = BotMenos
    document.getElementById("/").textContent = BotDivi
    document.getElementById("0").textContent = Bot00
    document.getElementById("1").textContent = Bot01
    document.getElementById("4").textContent = Bot04
    document.getElementById("5").textContent = Bot05
    document.getElementById("6").textContent = Bot06
    document.getElementById("7").textContent = Bot07
    document.getElementById("8").textContent = Bot08
    document.getElementById("9").textContent = Bot09
    document.getElementById('cash').innerText = `$${Cash}`
    if (Quais[0] == 'BotMais') {
    } else {
        document.getElementById("+").textContent = BotMais
        document.getElementById("2").textContent = Bot02
    }
    if (Quais[0] == 'BotMulti') {
    } else {
        document.getElementById("x").textContent = BotMulti
        document.getElementById("3").textContent = Bot03
    }
}
// Adiciona o evento de movimento do mouse
document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 3 - 5
    const y = (event.clientY / window.innerHeight) * 3 - 5
    const x1 = (event.clientX / window.innerWidth) * 10 - 65
    const y1 = (event.clientY / window.innerHeight) * 8 - 4
    const x2 = (event.clientX / window.innerWidth) * 2 - 0
    const y2 = (event.clientY / window.innerHeight) * 2 - 3
    // Aplica a transformação para criar o efeito parallax
    background.style.transform = `translate(${x}%, ${y}%) scale(1.05)`
    if (parallaxCalc == true) {
        document.getElementsByClassName('Calculator')[0].style.transform = `translate(${x1}%, ${y1}%) scale(1)`
        document.getElementsByClassName('obj')[0].style.transform = `translate(${x2}%, ${y2}%) scale(.8)`
    }
});


function restart() {
    if (parallaxCalc == true) {
        location.reload()
    }
}


function ClickSnd() {
    BttnSnd.currentTime = 0
    BttnSnd.play()
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function AttDisp(value) {
    display.innerText = value
}

function LegOn(screen, button) {
    document.getElementById('leg').src = screen
    document.getElementById(button).addEventListener('mouseleave', function () {
        document.getElementById('leg').src = ''
    })
}