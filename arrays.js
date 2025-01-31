var CalcRange01 = false
var CalcRange02 = false
var sorting = [
    '<div id="Buy00" class="BuyButtons" onclick="buy(0)"><img src="buttons/0.png" alt="" class="buttons" style="margin: 0px;">$6</div>', 
    '<div id="Buy01" class="BuyButtons" onclick="buy(1)"><img src="buttons/1.png" alt="" class="buttons" style="margin: 0px;">$8</div>', 
    '<div id="Buy02" class="BuyButtons" onclick="buy(2)"><img src="buttons/2.png" alt="" class="buttons" style="margin: 0px;">$5</div>', 
    '<div id="Buy03" class="BuyButtons" onclick="buy(3)"><img src="buttons/3.png" alt="" class="buttons" style="margin: 0px;">$5</div>',
    '<div id="Buy04" class="BuyButtons" onclick="buy(4)"><img src="buttons/4.png" alt="" class="buttons" style="margin: 0px;">$5</div>', 
    '<div id="Buy05" class="BuyButtons" onclick="buy(5)"><img src="buttons/5.png" alt="" class="buttons" style="margin: 0px;">$5</div>', 
    '<div id="Buy06" class="BuyButtons" onclick="buy(6)"><img src="buttons/6.png" alt="" class="buttons" style="margin: 0px;">$5</div>',
    '<div id="Buy07" class="BuyButtons" onclick="buy(7)"><img src="buttons/7.png" alt="" class="buttons" style="margin: 0px;">$5</div>', 
    '<div id="Buy08" class="BuyButtons" onclick="buy(8)"><img src="buttons/8.png" alt="" class="buttons" style="margin: 0px;">$5</div>', 
    '<div id="Buy09" class="BuyButtons" onclick="buy(9)"><img src="buttons/9.png" alt="" class="buttons" style="margin: 0px;">$5</div>',
    '<div id="BuyMais" class="BuyButtons" onclick="buy(10)" onmouseenter="LegOn(`legs/LegMais.png`, `BuyMais`)"><img src="buttons/+.png" alt="" class="buttons" style="margin: 0px;">$7</div>',
    '<div id="BuyMenos" class="BuyButtons" onclick="buy(11)" onmouseenter="LegOn(`legs/LegMenos.png`, `BuyMenos`)"><img src="buttons/-.png" alt="" class="buttons" style="margin: 0px;">$7</div>',
    '<div id="BuyMulti" class="BuyButtons" onclick="buy(12)" onmouseenter="LegOn(`legs/LegMulti.png`, `BuyMulti`)"><img src="buttons/x.png" alt="" class="buttons" style="margin: 0px;">$6</div>',
    '<div id="BuyDivi" class="BuyButtons" onclick="buy(13)" onmouseenter="LegOn(`legs/LegDivi.png`, `BuyDivi`)"><img src="buttons/divide.png" alt="" class="buttons" style="margin: 0px;">$6</div>',
    '<div id="BuyAppend" class="BuyButtons" onclick="buy(15)" onmouseenter="LegOn(`legs/Leg1.png`, `BuyAppend`)"><img src="buttons/append.png" alt="" class="buttons" style="margin: 0px;">$4</div>',
    '<div id="BuyNear" class="BuyButtons" onclick="buy(16)" onmouseenter="LegOn(`legs/LegN.png`, `BuyNear`)"><img src="buttons/near.png" alt="" class="buttons" style="margin: 0px;">$9</div>',
    '<div id="BuyConv" class="BuyButtons" onclick="buy(17)" onmouseenter="LegOn(`legs/LegC.png`, `BuyConv`)"><img src="buttons/convert.png" alt="" class="buttons" style="margin: 0px;">$5</div>',
    '<div id="BuyAppend01" class="BuyButtons" onclick="buy(18)" onmouseenter="LegOn(`legs/LegA.png`, `BuyAppend01`)"><img src="buttons/append01.png" alt="" class="buttons" style="margin: 0px;">$3</div>',
    '<div id="BuyRev" class="BuyButtons" onclick="buy(19)" onmouseenter="LegOn(`legs/LegSwap.png`, `BuyRev`)" ><img src="buttons/rev.png" alt="" class="buttons" style="margin: 0px;">$8</div>',
    '<div id="BuySquare" class="BuyButtons" onclick="buy(20)" onmouseenter="LegOn(`legs/LegS.png`, `BuySquare`)" ><img src="buttons/square.png" alt="" class="buttons" style="margin: 0px;">$5</div>',
    '<div id="BuyIncre" class="BuyButtons" onclick="buy(21)" onmouseenter="LegOn(`legs/LegI.png`, `BuyIncre`)" ><img src="buttons/Incre.png" alt="" class="buttons" style="margin: 0px;">$5</div>',
]


function buy(BtnNmb) {
    ClickSnd()
    switch (BtnNmb) {
        case 21:
            if (Cash >= 5) {
                Cash = Cash - 5
                if (document.getElementById('inc')) {
                    BotInc++
                    document.getElementById('inc').textContent = BotRev
                    document.getElementById('BuyIncre').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    document.getElementById('BuyIncre').style.visibility = 'hidden'
                    BotInc++
                    if (CalcRange01 == true) {
                        if (CalcRange02 == false) {
                            CalcRange02 = true
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons07').innerHTML = '<div id="Incre" class="column" onclick="increment()" onmouseenter="LegOn(`legs/LegI.png`, `Incre`)"><img src="buttons/Incre.png" alt="" class="buttons"><div id="inc" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            document.getElementById('NewButtons07').innerHTML = '<div id="Incre" class="column" onclick="increment()" onmouseenter="LegOn(`legs/LegI.png`, `Incre`)"><img src="buttons/Incre.png" alt="" class="buttons"><div id="inc" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange02 == true) {
                        document.getElementById('NewButtons07').innerHTML = '<div id="Incre" class="column" onclick="increment()" onmouseenter="LegOn(`legs/LegI.png`, `Incre`)"><img src="buttons/Incre.png" alt="" class="buttons"><div id="inc" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange02 == false) {
                        CalcRange02 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('NewButtons07').innerHTML = '<div id="Incre" class="column" onclick="increment()" onmouseenter="LegOn(`legs/LegI.png`, `Incre`)"><img src="buttons/Incre.png" alt="" class="buttons"><div id="inc" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                } 
            }
            break;
        case 20:
            if (Cash >= 8) {
                Cash = Cash - 5
                if (document.getElementById('sqr')) {
                    BotSqr++
                    document.getElementById('sqr').textContent = BotRev
                    document.getElementById('BuySquare').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    document.getElementById('BuySquare').style.visibility = 'hidden'
                    BotSqr++

                    if (CalcRange02 == true){
                        if (CalcRange01 == false) {
                            CalcRange01 = true
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons02').innerHTML = '<div id="Square" class="column" onclick="square()" onmouseenter="LegOn(`legs/LegS.png`, `Square`)""><img src="buttons/square.png" alt="" class="buttons"><div id="sqr" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            document.getElementById('NewButtons02').innerHTML = '<div id="Square" class="column" onclick="square()" onmouseenter="LegOn(`legs/LegS.png`, `Square`)"><img src="buttons/square.png" alt="" class="buttons"><div id="sqr" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange01 == true) {
                        document.getElementById('NewButtons02').innerHTML = '<div id="Square" class="column" onclick="square()" onmouseenter="LegOn(`legs/LegS.png`, `Square`)"><img src="buttons/square.png" alt="" class="buttons"><div id="sqr" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange01 == false) {
                        CalcRange01 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('NewButtons02').innerHTML = '<div id="Square" class="column" onclick="square()" onmouseenter="LegOn(`legs/LegS.png`, `Square`)"><img src="buttons/square.png" alt="" class="buttons"><div id="sqr" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                } 
            }
            break;
        case 19:
            if (Cash >= 8) {
                Cash = Cash - 8
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
                            document.getElementById('NewButtons04').innerHTML = '<div id="Rev" class="column" onclick="Reverse()" onmouseenter="LegOn(`legs/LegSwap.png`, `Rev`)"><img src="buttons/rev.png" alt="" class="buttons"><div id="rev" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            document.getElementById('NewButtons04').innerHTML = '<div id="Rev" class="column" onclick="Reverse()" onmouseenter="LegOn(`legs/LegSwap.png`, `Rev`)"><img src="buttons/rev.png" alt="" class="buttons"><div id="rev" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange01 == true) {
                        document.getElementById('NewButtons04').innerHTML = '<div id="Rev" class="column" onclick="Reverse()" onmouseenter="LegOn(`legs/LegSwap.png`, `Rev`)"><img src="buttons/rev.png" alt="" class="buttons"><div id="rev" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange01 == false) {
                        CalcRange01 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('NewButtons04').innerHTML = '<div id="Rev" class="column" onclick="Reverse()" onmouseenter="LegOn(`legs/LegSwap.png`, `Rev`)"><img src="buttons/rev.png" alt="" class="buttons"><div id="rev" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                } 
            }
            break;
        case 18:
            if (Cash >= 3) {
                Cash = Cash - 3
                if (document.getElementById('append01')) {
                    BotAppend01++
                    document.getElementById('append01').textContent = BotAppend
                    document.getElementById('BuyAppend01').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    BotAppend01++
                        document.getElementById('BuyAppend01').style.visibility = 'hidden'
                    if (CalcRange01 == true) {
                        if (CalcRange02 == false) {
                            CalcRange02 = true
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons05').innerHTML = '<div id="Append01" class="column" onclick="Append01()" onmouseenter="LegOn(`legs/LegA.png`, `Append01`)"><img src="buttons/append01.png" alt="" class="buttons"><div id="append01" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            document.getElementById('NewButtons05').innerHTML = '<div id="Append01" class="column" onclick="Append01()" onmouseenter="LegOn(`legs/LegA.png`, `Append01`)"><img src="buttons/append01.png" alt="" class="buttons"><div id="append01" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange02 == true) {
                        document.getElementById('NewButtons05').innerHTML = '<div id="Append01" class="column" onclick="Append01()" onmouseenter="LegOn(`legs/LegA.png`, `Append01`)"><img src="buttons/append01.png" alt="" class="buttons"><div id="append01" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange02 == false) {
                        CalcRange02 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('NewButtons05').innerHTML = '<div id="Append01" class="column" onclick="Append01()" onmouseenter="LegOn(`legs/LegA.png`, `Append01`)"><img src="buttons/append01.png" alt="" class="buttons"><div id="append01" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                }
            }
            break;
        case 17:
            if (Cash >= 5) {
                Cash = Cash - 5
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
                            document.getElementById('NewButtons03').innerHTML = '<div id="Conv" class="column" onclick="Convert()" onmouseenter="LegOn(`legs/LegC.png`, `Conv`)"><img src="buttons/convert.png" alt="" class="buttons"><div id="conv" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotConv++
                            document.getElementById('BuyConv').style.visibility = 'hidden'
                            document.getElementById('NewButtons03').innerHTML = '<div id="Conv" class="column" onclick="Convert()" onmouseenter="LegOn(`legs/LegC.png`, `Conv`)"><img src="buttons/convert.png" alt="" class="buttons"><div id="conv" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange01 == true) {
                        BotConv++
                        document.getElementById('BuyConv').style.visibility = 'hidden'
                        document.getElementById('NewButtons03').innerHTML = '<div id="Conv" class="column" onclick="Convert()" onmouseenter="LegOn(`legs/LegC.png`, `Conv`)"><img src="buttons/convert.png" alt="" class="buttons"><div id="conv" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange01 == false) {
                        BotConv++
                        CalcRange01 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyConv').style.visibility = 'hidden'
                        document.getElementById('NewButtons03').innerHTML = '<div id="Conv" class="column" onclick="Convert()" onmouseenter="LegOn(`legs/LegC.png`, `Conv`)"><img src="buttons/convert.png" alt="" class="buttons"><div id="conv" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                } 
            }
            break;
        case 16:
            if (Cash >= 9) {
                Cash = Cash - 9
                if (document.getElementById('near')) {
                    BotNear++
                    document.getElementById('near').textContent = BotNear
                    document.getElementById('BuyNear').style.visibility = 'hidden'
                    AttTurns()
                } else {
                    if (CalcRange01 == true) {
                        if (CalcRange02 == false) {
                            CalcRange02 = true
                            BotNear++
                            document.getElementById('BuyNear').style.visibility = 'hidden'
                            document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator3.png)'
                            document.getElementById("ChangeBG").style.width = "970px"
                            document.getElementById("AllButtons").style.marginRight = '20px'
                            document.getElementById('NewButtons08').innerHTML = '<div id="Near" class="column" onclick="Near()" onmouseenter="LegOn(`legs/LegN.png`, `Near`)"><img src="buttons/near.png" alt="" class="buttons"><div id="near" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotNear++
                            document.getElementById('BuyNear').style.visibility = 'hidden'
                            document.getElementById('NewButtons08').innerHTML = '<div id="Near" class="column" onclick="Near()" onmouseenter="LegOn(`legs/LegN.png`, `Near`)"><img src="buttons/near.png" alt="" class="buttons"><div id="near" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange02 == true) {
                        BotNear++
                        document.getElementById('near').textContent = BotNear
                        document.getElementById('BuyNear').style.visibility = 'hidden'
                        document.getElementById('NewButtons08').innerHTML = '<div id="Near" class="column" onclick="Append()" onmouseenter="LegOn(`legs/LegN.png`, `Near`)"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange02 == false) {
                        BotNear++
                        CalcRange02 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyNear').style.visibility = 'hidden'
                        document.getElementById('NewButtons08').innerHTML = '<div id="Near" class="column" onclick="Near()" onmouseenter="LegOn(`legs/LegN.png`, `Near`)"><img src="buttons/near.png" alt="" class="buttons"><div id="near" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                }
            }
            break;
        case 15:
            if (Cash >= 4) {
                Cash = Cash - 4
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
                            document.getElementById('NewButtons06').innerHTML = '<div id="Append" class="column" onclick="Append()" onmouseenter="LegOn(`legs/Leg1.png`, `Append`)"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotAppend++
                            document.getElementById('BuyAppend').style.visibility = 'hidden'
                            document.getElementById('NewButtons06').innerHTML = '<div id="Append" class="column" onclick="Append()" onmouseenter="LegOn(`legs/Leg1.png`, `Append`)"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange02 == true) {
                        BotAppend++
                        document.getElementById('BuyAppend').style.visibility = 'hidden'
                        document.getElementById('NewButtons06').innerHTML = '<div id="Append" class="column" onclick="Append()" onmouseenter="LegOn(`legs/Leg1.png`, `Append`)"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange02 == false) {
                        BotAppend++
                        CalcRange02 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyAppend').style.visibility = 'hidden'
                        document.getElementById('NewButtons06').innerHTML = '<div id="Append" class="column" onclick="Append()" onmouseenter="LegOn(`legs/Leg1.png`, `Append`)"><img src="buttons/append.png" alt="" class="buttons"><div id="append" class ="vezes">1</div></div>'
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
                            document.getElementById('NewButtons01').innerHTML = '<div id="rroll" class="column" onclick="Roll()" onmouseenter="LegOn(`legs/LegR.png`, `rroll`)"><img src="buttons/roll.png" alt="" class="buttons"><div id="roll" class ="vezes">1</div></div>'
                            AttTurns()
                        } else {
                            BotRoll++
                            document.getElementById('BuyRoll').style.visibility = 'hidden'
                            document.getElementById('NewButtons01').innerHTML = '<div id="rroll" class="column" onclick="Roll()" onmouseenter="LegOn(`legs/LegR.png`, `rroll`)"><img src="buttons/roll.png" alt="" class="buttons"><div id="roll" class ="vezes">1</div></div>'
                            AttTurns()
                        }
                    } else if (CalcRange01 == true) {
                        BotRoll++
                        document.getElementById('BuyRoll').style.visibility = 'hidden'
                        document.getElementById('NewButtons01').innerHTML = '<div id="rroll" class="column" onclick="Roll()" onmouseenter="LegOn(`legs/LegR.png`, `rroll`)"><img src="buttons/roll.png" alt="" class="buttons"><div id="roll" class ="vezes">1</div></div>'
                        AttTurns()
                    } else if (CalcRange01 == false) {
                        BotRoll++
                        CalcRange01 = true
                        document.getElementById("ChangeBG").style.backgroundImage = 'url(buttons/Calculator2.png)'
                        document.getElementById("ChangeBG").style.width = "820px"
                        document.getElementById('BuyRoll').style.visibility = 'hidden'
                        document.getElementById('NewButtons01').innerHTML = '<div id="rroll" class="column" onclick="Roll()" onmouseenter="LegOn(`legs/LegR.png`, `rroll`)"><img src="buttons/roll.png" alt="" class="buttons"><div id="roll" class ="vezes">1</div></div>'
                        AttTurns()
                    }
                } 
            }
            break;
        case 10:
            if (Cash >= 7) {
            Cash = Cash - 7
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
            if (Cash >= 6) {
            Cash = Cash - 6
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


async function SetBoss(rand) {
    bgSnd.src = "sounds/boss.mp3"
    if (bgSnd.muted == false) {
        bgSnd.play()
    }
    switch (rand) {
        case 4:
            anime({
                    targets: '#bossImg',
                    scale: 1,
                    borderRadius: ['50%', '0%'],
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                await delay(500)
            anime({
                    targets: '#bossLeg',
                    scale: 1,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                document.getElementById('bossDesc').innerText = "You can't use multiply neither 3"
                await delay(300)
            anime({
                    targets: '#bossDesc',
                    translateY: 170,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                BotVar = BotMulti
                BotVar1 = Bot03
                Quais = ['BotMulti']
                BotMulti = 0
                Bot03 = 0
                break;
        case 5:
            energy = 2
            anime({
                    targets: '#bossImg',
                    scale: 1,
                    borderRadius: ['50%', '0%'],
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                await delay(500)
            anime({
                    targets: '#bossLeg',
                    scale: 1,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                document.getElementById('bossDesc').innerText = "Every click takes 2 energy"
                await delay(300)
            anime({
                    targets: '#bossDesc',
                    translateY: 170,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
            break;
        case 3:
            document.getElementById('error').style.display = 'block'
            anime({
                    targets: '#bossImg',
                    scale: 1,
                    borderRadius: ['50%', '0%'],
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                await delay(500)
            anime({
                    targets: '#bossLeg',
                    scale: 1,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                document.getElementById('bossDesc').innerText = "The calculator screen is broken"
                await delay(300)
            anime({
                    targets: '#bossDesc',
                    translateY: 170,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
            break;
        case 2:
            anime({
                    targets: '#bossImg',
                    scale: 1,
                    borderRadius: ['50%', '0%'],
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                await delay(500)
            anime({
                    targets: '#bossLeg',
                    scale: 1,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                document.getElementById('bossDesc').innerText = "You can't use sum neither 2"
                await delay(300)
            anime({
                    targets: '#bossDesc',
                    translateY: 170,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                BotVar = BotMais
                BotVar1 = Bot02
                Quais = ['BotMais']
                BotMais = 0
                Bot02 = 0
            break;
        case 1:
            NmbComp = Math.floor(Math.random() * 500) + 250
            document.getElementById('needed').innerText = NmbComp
            anime({
                    targets: '#bossImg',
                    scale: 1,
                    borderRadius: ['50%', '0%'],
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                await delay(500)
            anime({
                    targets: '#bossLeg',
                    scale: 1,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                document.getElementById('bossDesc').innerText = 'You need to calculate a large number'
                await delay(300)
            anime({
                    targets: '#bossDesc',
                    translateY: 170,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
            break;
    
        default:
            break;
    }
}