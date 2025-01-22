var CalcRange01 = false
var CalcRange02 = false
var sorting = [
    '<div id="Buy00" class="BuyButtons" onclick="buy(0)"><img src="buttons/0.png" alt="" class="buttons" style="margin: 0px;">$6</div>',
    '<div id="Buy01" class="BuyButtons" onclick="buy(1)"><img src="buttons/1.png" alt="" class="buttons" style="margin: 0px;">$8</div>', 
    '<div id="Buy02" class="BuyButtons" onclick="buy(2)"><img src="buttons/2.png" alt="" class="buttons" style="margin: 0px;">$6</div>', 
    '<div id="Buy03" class="BuyButtons" onclick="buy(3)"><img src="buttons/3.png" alt="" class="buttons" style="margin: 0px;">$6</div>',
    '<div id="Buy04" class="BuyButtons" onclick="buy(4)"><img src="buttons/4.png" alt="" class="buttons" style="margin: 0px;">$6</div>', 
    '<div id="Buy05" class="BuyButtons" onclick="buy(5)"><img src="buttons/5.png" alt="" class="buttons" style="margin: 0px;">$6</div>', 
    '<div id="Buy06" class="BuyButtons" onclick="buy(6)"><img src="buttons/6.png" alt="" class="buttons" style="margin: 0px;">$6</div>',
    '<div id="Buy07" class="BuyButtons" onclick="buy(7)"><img src="buttons/7.png" alt="" class="buttons" style="margin: 0px;">$6</div>', 
    '<div id="Buy08" class="BuyButtons" onclick="buy(8)"><img src="buttons/8.png" alt="" class="buttons" style="margin: 0px;">$6</div>', 
    '<div id="Buy09" class="BuyButtons" onclick="buy(9)"><img src="buttons/9.png" alt="" class="buttons" style="margin: 0px;">$6</div>',
    '<div id="BuyMais" class="BuyButtons" onclick="buy(10)"><img src="buttons/+.png" alt="" class="buttons" style="margin: 0px;">$8</div>', 
    '<div id="BuyMenos" class="BuyButtons" onclick="buy(11)"><img src="buttons/-.png" alt="" class="buttons" style="margin: 0px;">$7</div>', 
    '<div id="BuyMulti" class="BuyButtons" onclick="buy(12)"><img src="buttons/x.png" alt="" class="buttons" style="margin: 0px;">$6</div>', 
    '<div id="BuyDivi" class="BuyButtons" onclick="buy(13)"><img src="buttons/divide.png" alt="" class="buttons" style="margin: 0px;">$8</div>', 
    '<div id="BuyRoll" class="BuyButtons" onclick="buy(14)"><img src="buttons/roll.png" alt="" class="buttons" style="margin: 0px;">$7</div>',
    '<div id="BuyAppend" class="BuyButtons" onclick="buy(15)"><img src="buttons/append.png" alt="" class="buttons" style="margin: 0px;">$7</div>',
    '<div id="BuyNear" class="BuyButtons" onclick="buy(16)"><img src="buttons/near.png" alt="" class="buttons" style="margin: 0px;">$9</div>',
    '<div id="BuyConv" class="BuyButtons" onclick="buy(17)"><img src="buttons/convert.png" alt="" class="buttons" style="margin: 0px;">$8</div>',
    '<div id="BuyAppend01" class="BuyButtons" onclick="buy(18)"><img src="buttons/append01.png" alt="" class="buttons" style="margin: 0px;">$7</div>',
    '<div id="BuyRev" class="BuyButtons" onclick="buy(19)"><img src="buttons/rev.png" alt="" class="buttons" style="margin: 0px;">$7</div>',
]


function buy(BtnNmb) {
    ClickSnd()
    switch (BtnNmb) {
        case 19:
            if (Cash >= 7) {
                Cash = Cash - 7
                if (document.getElementById('rev')) {
                    BotRev++
                    document.getElementById('rev').textContent = BotRev
                    document.getElementById('BuyRev').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    document.getElementById('BuyRev').style.visibility = 'hidden'
                    BotRev++

                    if (CalcRange02 == true){
                        if (CalcRange01 == false) {
                            CalcRange01 = true
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons04').innerHTML = '<div class="column" onclick="Reverse()"><img src="buttons/rev.png" alt="" class="buttons"><div id="rev" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            document.getElementById('NewButtons04').innerHTML = '<div class="column" onclick="Reverse()"><img src="buttons/rev.png" alt="" class="buttons"><div id="rev" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange01 == true) {
                        document.getElementById('NewButtons04').innerHTML = '<div class="column" onclick="Reverse()"><img src="buttons/rev.png" alt="" class="buttons"><div id="rev" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange01 == false) {
                        CalcRange01 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('NewButtons04').innerHTML = '<div class="column" onclick="Reverse()"><img src="buttons/rev.png" alt="" class="buttons"><div id="rev" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                } 
            }
            break;
        case 18:
            if (Cash >= 7) {
                Cash = Cash - 7
                if (document.getElementById('append01')) {
                    BotAppend01++
                    document.getElementById('append01').textContent = BotAppend
                    document.getElementById('BuyAppend01').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    if (CalcRange01 == true) {
                        if (CalcRange02 == false) {
                            CalcRange02 = true
                            BotAppend01++
                            document.getElementById('BuyAppend01').style.visibility = 'hidden'
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons05').innerHTML = '<div class="column" onclick="Append01()"><img src="buttons/append01.png" alt="" class="buttons"><div id="append01" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotAppend01++
                            document.getElementById('BuyAppend01').style.visibility = 'hidden'
                            document.getElementById('NewButtons05').innerHTML = '<div class="column" onclick="Append01()"><img src="buttons/append01.png" alt="" class="buttons"><div id="append01" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange02 == true) {
                        BotAppend01++
                        document.getElementById('BuyAppend01').style.visibility = 'hidden'
                        document.getElementById('NewButtons05').innerHTML = '<div class="column" onclick="Append01()"><img src="buttons/append01.png" alt="" class="buttons"><div id="append01" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange02 == false) {
                        BotAppend01++
                        CalcRange02 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyAppend01').style.visibility = 'hidden'
                        document.getElementById('NewButtons05').innerHTML = '<div class="column" onclick="Append01()"><img src="buttons/append01.png" alt="" class="buttons"><div id="append01" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                }
            }
            break;
        case 17:
            if (Cash >= 9) {
                Cash = Cash - 9
                if (document.getElementById('conv')) {
                    BotConv++
                    document.getElementById('conv').textContent = BotConv
                    document.getElementById('BuyConv').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    if (CalcRange02 == true){
                        if (CalcRange01 == false) {
                            BotConv++
                            CalcRange01 = true
                            document.getElementById('BuyConv').style.visibility = 'hidden'
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons03').innerHTML = '<div class="column" onclick="Convert()"><img src="buttons/convert.png" alt="" class="buttons"><div id="conv" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotConv++
                            document.getElementById('BuyConv').style.visibility = 'hidden'
                            document.getElementById('NewButtons03').innerHTML = '<div class="column" onclick="Convert()"><img src="buttons/convert.png" alt="" class="buttons"><div id="conv" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange01 == true) {
                        BotConv++
                        document.getElementById('BuyConv').style.visibility = 'hidden'
                        document.getElementById('NewButtons03').innerHTML = '<div class="column" onclick="Convert()"><img src="buttons/convert.png" alt="" class="buttons"><div id="conv" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange01 == false) {
                        BotConv++
                        CalcRange01 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyConv').style.visibility = 'hidden'
                        document.getElementById('NewButtons03').innerHTML = '<div class="column" onclick="Convert()"><img src="buttons/convert.png" alt="" class="buttons"><div id="conv" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                } 
            }
            break;
        case 16:
            if (Cash >= 8) {
                Cash = Cash - 8
                if (document.getElementById('near')) {
                    BotNear++
                    document.getElementById('near').textContent = BotNear
                    document.getElementById('BuyNear').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    if (CalcRange01 == true) {
                        if (CalcRange02 == false) {
                            CalcRange02 = true
                            BotAppend++
                            document.getElementById('BuyNear').style.visibility = 'hidden'
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons08').innerHTML = '<div class="column" onclick="Near()"><img src="buttons/near.png" alt="" class="buttons"><div id="near" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotNear++
                            document.getElementById('BuyNear').style.visibility = 'hidden'
                            document.getElementById('NewButtons08').innerHTML = '<div class="column" onclick="Near()"><img src="buttons/near.png" alt="" class="buttons"><div id="near" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange02 == true) {
                        BotNear++
                        document.getElementById('near').textContent = BotNear
                        document.getElementById('BuyNear').style.visibility = 'hidden'
                        document.getElementById('NewButtons08').innerHTML = '<div class="column" onclick="Append()"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange02 == false) {
                        BotNear++
                        CalcRange02 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyNear').style.visibility = 'hidden'
                        document.getElementById('NewButtons08').innerHTML = '<div class="column" onclick="Near()"><img src="buttons/near.png" alt="" class="buttons"><div id="near" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                }
            }
            break;
        case 15:
            if (Cash >= 7) {
                Cash = Cash - 7
                if (document.getElementById('append')) {
                    BotAppend++
                    document.getElementById('append').textContent = BotAppend
                    document.getElementById('BuyAppend').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    if (CalcRange01 == true) {
                        if (CalcRange02 == false) {
                            CalcRange02 = true
                            BotAppend++
                            document.getElementById('BuyAppend').style.visibility = 'hidden'
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons06').innerHTML = '<div class="column" onclick="Append()"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotAppend++
                            document.getElementById('BuyAppend').style.visibility = 'hidden'
                            document.getElementById('NewButtons06').innerHTML = '<div class="column" onclick="Append()"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange02 == true) {
                        BotAppend++
                        document.getElementById('BuyAppend').style.visibility = 'hidden'
                        document.getElementById('NewButtons06').innerHTML = '<div class="column" onclick="Append()"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange02 == false) {
                        BotAppend++
                        CalcRange02 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyAppend').style.visibility = 'hidden'
                        document.getElementById('NewButtons06').innerHTML = '<div class="column" onclick="Append()"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                }
            }
            break;
        case 14:
            if (Cash >= 7) {
                Cash = Cash - 7
                if (document.getElementById('roll')) {
                    BotRoll++
                    document.getElementById('roll').textContent = BotRoll
                    document.getElementById('BuyRoll').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    if (CalcRange02 == true){
                        if (CalcRange01 == false) {
                            BotRoll++
                            CalcRange01 = true
                            document.getElementById('BuyRoll').style.visibility = 'hidden'
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons01').innerHTML = '<div class="column" onclick="Roll()"><img src="buttons/roll.png" alt="" class="buttons"><div id="roll" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotRoll++
                            document.getElementById('BuyRoll').style.visibility = 'hidden'
                            document.getElementById('NewButtons01').innerHTML = '<div class="column" onclick="Roll()"><img src="buttons/roll.png" alt="" class="buttons"><div id="roll" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange01 == true) {
                        BotRoll++
                        document.getElementById('BuyRoll').style.visibility = 'hidden'
                        document.getElementById('NewButtons01').innerHTML = '<div class="column" onclick="Roll()"><img src="buttons/roll.png" alt="" class="buttons"><div id="roll" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange01 == false) {
                        BotRoll++
                        CalcRange01 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyRoll').style.visibility = 'hidden'
                        document.getElementById('NewButtons01').innerHTML = '<div class="column" onclick="Roll()"><img src="buttons/roll.png" alt="" class="buttons"><div id="roll" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                } 
            }
            break;
        case 10:
            if (Cash >= 8) {
            Cash = Cash - 8
            document.getElementById('BuyMais').style.visibility = 'hidden'
            BotMais++
            AttTurns()
            }
            break;
        case 11:
            if (Cash >= 7) {
            Cash = Cash - 7
            document.getElementById('BuyMenos').style.visibility = 'hidden'
            BotMenos++
            AttTurns()
            }
            break;
        case 12:
            if (Cash >= 6) {
            Cash = Cash - 6
            document.getElementById('BuyMulti').style.visibility = 'hidden'
            BotMulti++
            AttTurns()
            }
            break;
        case 13:
            if (Cash >= 8) {
            Cash = Cash - 8
            document.getElementById('BuyDivi').style.visibility = 'hidden'
            BotDivi++
            AttTurns()
            }
            break;
        case 0:
            if (Cash >= 6) {
            Cash = Cash - 6
            document.getElementById('Buy00').style.visibility = 'hidden'
            Bot00++
            AttTurns()
            }
            break;
        case 1:
            if (Cash >= 8) {
            Cash = Cash - 8
            document.getElementById('Buy01').style.visibility = 'hidden'
            Bot01++
            AttTurns()
            }
            break;
        case 2:
            if (Cash >= 5) {
            Cash = Cash - 5
            document.getElementById('Buy02').style.visibility = 'hidden'
            Bot02++
            AttTurns()
            }
            break;
        case 3:
            if (Cash >= 5) {
            Cash = Cash - 5
            document.getElementById('Buy03').style.visibility = 'hidden'
            Bot03++
            AttTurns()
            }
            break;
        case 4:
            if (Cash >= 5) {
            Cash = Cash - 5
            document.getElementById('Buy04').style.visibility = 'hidden'
            Bot04++
            AttTurns()
            }
            break;
        case 5:
            if (Cash >= 5) {
            Cash = Cash - 5
            document.getElementById('Buy05').style.visibility = 'hidden'
            Bot05++
            AttTurns()
            }
            break;
        case 6:
            if (Cash >= 5) {
            Cash = Cash - 5
            document.getElementById('Buy06').style.visibility = 'hidden'
            Bot06++
            AttTurns()
            }
            break;
        case 7:
            if (Cash >= 5) {
            Cash = Cash - 5
            document.getElementById('Buy07').style.visibility = 'hidden'
            Bot07++
            AttTurns()
            }
            break;
        case 8:
            if (Cash >= 5) {
            Cash = Cash - 5
            document.getElementById('Buy08').style.visibility = 'hidden'
            Bot08++
            AttTurns()
            }
            break;
        case 9:
            if (Cash >= 5) {
            Cash = Cash - 5
            document.getElementById('Buy09').style.visibility = 'hidden'
            Bot09++
            AttTurns()
            }
        break;
    }
}

function hoverShop(witch) {
    const bttn = document.getElementById(witch)
    bttn.style.scale = "1.03"
    bttn.addEventListener('mouseleave', function hoverShopOut() {
        bttn.style.scale = "1"
    })
}