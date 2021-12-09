maps = [
    [
        '. . . . . . . . . . .'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        'c . . . . . . . . . t'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        '. . . . . . . . . . .'.split(' ')
    ],
    [
        '. . . . . t . . . t .'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        'c . . . . t . . . . t'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        '. . . . . t . . t . .'.split(' ')
    ],
    [
        '. . . . . p . . . t .'.split(' '),
        '. . w . . . . . w . .'.split(' '),
        'c . w w w w . . w . t'.split(' '),
        '. . w . . . . . w . .'.split(' '),
        '. . . . . p . . t . .'.split(' ')
    ],
    [
        'w . . . . . . . w . t'.split(' '),
        'w . w w w w w . w . w'.split(' '),
        'w . . . . . w . w . w'.split(' '),
        'w w w w w . w . w . w'.split(' '),
        'c . . . . . w . t . w'.split(' ')
    ],
    [
        '. . . . . t . . . . .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        '. w . w p w p w . w .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        'c . . . . . . . . . .'.split(' ')
    ],
    [
        'p . . . . . . . . . p'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        '. . . . p t p . . . .'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        'p . . . . c . . . . p'.split(' ')
    ],
    [
        '. w . . . w . . . w .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        't p . w . p . w p . c'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        '. w . . . w . . . w .'.split(' ')
    ],
    [
        's . . . . p . . . . .'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        '. . . . i t . . . . .'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        '. . . c . . . . . . .'.split(' ')
    ],
    [
        '. p . . . t . . . p .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        '. w . w i w i w . w .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        'c . . . . s . . . . .'.split(' ')
    ],
    [
        't w . p . w . i . w .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        '. . i w i s . w . s c'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        'p w . i . w . . . w .'.split(' ')
    ],
    [
        '. . . . . t . . . . .'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        'f . . . . . . . . . f'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        '. . . . . c . . . . e'.split(' ')
    ],
    [
        '. . . e . . . . . . .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        '. w . w i w f w . w t'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        'c . . s . . . . . . .'.split(' ')
    ],
    [
        'f . . . . . . . . . f'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        'p . . i . t . i . . p'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        's . . . . c e . . . s'.split(' ')
    ],
    [
        '. . . . . . . . . . .'.split(' '),
        'w w w w w w w w w w w'.split(' '),
        'c . . . . k . . . v t'.split(' '),
        'w w w w w w w w w w w'.split(' '),
        '. . . . . . . . . . .'.split(' ')
    ],
    [
        't w w w w w w w w w w'.split(' '),
        '. . . v . . . . . . w'.split(' '),
        'w w w p w w w w w . w'.split(' '),
        'w w w . w w w w w v w'.split(' '),
        'c . . . . k . . . . w'.split(' ')
    ],
    [
        't w . . . . . . . . c'.split(' '),
        'v w . . . . . . . . .'.split(' '),
        '. . . . . k . . . . .'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        '. . . . . . . g . . .'.split(' ')
    ],
    [
        't w . . . . . . . . c'.split(' '),
        'v w . g . . . . . . .'.split(' '),
        '. . . . . k . . . . .'.split(' '),
        '. g . . . . . . . . .'.split(' '),
        '. . . . . . . . . . .'.split(' ')
    ],
    [
        'k . . . . . . . . . .'.split(' '),
        '. . . . p w g . . . .'.split(' '),
        '. . . . w t v . . . .'.split(' '),
        '. . . . g w p . . . .'.split(' '),
        '. . . . . . . . . . c'.split(' ')
    ],
    [
        'k . . p . . i . . . f'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        'v w . w w w w . . . .'.split(' '),
        't w g v s e w c . . .'.split(' ')
    ],
    [
        'p p p p p p p p p p p'.split(' '),
        'v . . . . . . . . . w'.split(' '),
        't v . . . k . . f e c'.split(' '),
        'v . . . . . . . . . w'.split(' '),
        'p p p p p p p p p p p'.split(' ')
    ],
    [
        'p . p . p . p . p . p'.split(' '),
        'v . . . . . . . . . .'.split(' '),
        't v . . . k . . . . c'.split(' '),
        'v . . . . . . . . . .'.split(' '),
        'p . p . p . p . p . p'.split(' ')
    ],
    [
        'k . . . . p . . . . i'.split(' '),
        'v . . . . w . . . . .'.split(' '),
        't v . . v t w . . . c'.split(' '),
        'v . . . . w . . . . w'.split(' '),
        'g . . . . g . . . w s'.split(' ')
    ],
    [
        '. . . . w p v . . k .'.split(' '),
        '. . . . w p w . . . .'.split(' '),
        '. . . . w p w . . - .'.split(' '),
        '. . . . w p w . . . .'.split(' '),
        '. . . . w t w . . c .'.split(' ')
    ],
    [
        'p v g . . . . . w w w'.split(' '),
        '. w . . . w . . . . c'.split(' '),
        '. w . . . k w . . . -'.split(' '),
        '. w . . . w . . . . .'.split(' '),
        't w g . . . . . w w w'.split(' ')
    ],
    [
        'g . . . . . . . p . .'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        't . . . p . p . - . c'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        'g . . . . . . . p . .'.split(' ')
    ],
    [
        'g . . . . . . . . . g'.split(' '),
        'v . . . . . . . . g -'.split(' '),
        't v . . k . . g - . c'.split(' '),
        'v . . . . . . . . . -'.split(' '),
        'g . . . . . . . - - g'.split(' ')
    ],
    [
        '. . . . . g . . . . .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        '- w p w p w p w p w t'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        'c . . . . g . . . . .'.split(' ')
    ],
    [
        'p . . . . . . . . . p'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        'k . . . g t g . . . -'.split(' '),
        '. w w . w v w . w w .'.split(' '),
        '. . . . . c . . . . .'.split(' ')
    ],
    [
        't w . . . w . . . w k'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        '. p . v . p . v p . c'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        'g w . . . w . . . w -'.split(' ')
    ],
    [
        's . . . . p . . . . p'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        '. . . . g t i . . . .'.split(' '),
        '. w w . w w w . w w .'.split(' '),
        '. . . c . . . . g . -'.split(' ')
    ],
    [
        '. g w . p v p . w g .'.split(' '),
        '. w w . w w w g w w .'.split(' '),
        '. . . . v t v . k - c'.split(' '),
        '. w w . w w w g w w .'.split(' '),
        '. g w . . v . . w g .'.split(' ')
    ],
    [
        '. g w . w t w . w p e'.split(' '),
        '. w w - w p w g w w .'.split(' '),
        'v v v v w v w v v v v'.split(' '),
        'p . . . p f . f p . k'.split(' '),
        '. . p . . . p . . . c'.split(' ')
    ],
    [
        'w . . . . . . . w . t'.split(' '),
        'w . w w w w w . w . w'.split(' '),
        'w . . . d . w . w . w'.split(' '),
        'w w w w w . w . w . w'.split(' '),
        'c . . . . . w . . . w'.split(' ')
    ],
    [
        'w w w w w w w w w w w'.split(' '),
        'w c d . p . . . . . w'.split(' '),
        'w . . . . . p . . . w'.split(' '),
        'w . p . . . . . . t w'.split(' '),
        'w w w w w w w w w w w'.split(' ')
    ],
    [
        '. . . . . . . . . . .'.split(' '),
        'w w w w w w w w w w w'.split(' '),
        'w g c k d . . . v t w'.split(' '),
        'w w w w w w w w w w w'.split(' '),
        '. . . . . . . . . . .'.split(' ')
    ],
    [
        'c d . . . . . . - . e'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        'p . p . p . p . p . p'.split(' '),
        'g . . . . . . . . . .'.split(' '),
        't g . . . . . . . . f'.split(' ')
    ],
    [
        'c . . . . d . . . . .'.split(' '),
        'w w w w w w w w w w .'.split(' '),
        '. . . . . e . . . . .'.split(' '),
        '. w w w w w w w w w w'.split(' '),
        '. . . . . f . . . . t'.split(' ')
    ],
    [
        'c . . . . d . . . . d'.split(' '),
        'w w w w w w w w w w .'.split(' '),
        '. . . . . e . . . . .'.split(' '),
        '. w w w w w w w w w w'.split(' '),
        '. . . . . . f . . . t'.split(' ')
    ],
    [
        'w ~ . . . . . ~ w . t'.split(' '),
        'w . w w w w w . w . w'.split(' '),
        'w . . . ~ . w . w ~ w'.split(' '),
        'w w w w w . w . w . w'.split(' '),
        'c . . . . . w ~ . . w'.split(' ')
    ],
    [
        'w ~ . ~ . ~ . d w . t'.split(' '),
        'w . w w w w w d w d w'.split(' '),
        'w ~ . ~ . d w d w d w'.split(' '),
        'w w w w w . w . w d w'.split(' '),
        'c d . d . d w ~ ~ ~ w'.split(' ')
    ],
    [
        '. . . ~ . t . ~ . . .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        '. w . w p w p w . w .'.split(' '),
        '. w . w . w . w . w .'.split(' '),
        'c . . ~ . p . ~ . . .'.split(' ')
    ],
    [
        'w i w . w . w . w g w'.split(' '),
        '. . . . . ~ . . ~ . v'.split(' '),
        'c w s w k w d w d w t'.split(' '),
        '. . . . . ~ . . ~ . v'.split(' '),
        'w . w . w . w . w g w'.split(' ')
    ],
    [
        't = t = t = t = t = t'.split(' '),
        '= = = = = = = = = = ='.split(' '),
        't = = = = c = = = = t'.split(' '),
        '= = = = = = = = = = ='.split(' '),
        't = t = t = t = t = t'.split(' ')
    ],
    [
        't . . . . . . . . . .'.split(' '),
        'w w w = w w = w w w w'.split(' '),
        '. . . . . c . . . . .'.split(' '),
        'w = w w w w w w = w w'.split(' '),
        '. . . . . . . . . . t'.split(' ')
    ],
    [
        '. . w . w . = . = . .'.split(' '),
        '. . w . = . = . w . .'.split(' '),
        'c . = . w . = . = . t'.split(' '),
        '. . w . w . w . w . .'.split(' '),
        '. . = . = . w . = . .'.split(' ')
    ],
    [
        'g = . . v t v . . = g'.split(' '),
        'g = . . v v v . . = g'.split(' '),
        'g = . . . . . . . = g'.split(' '),
        'g = . . . . . . . = g'.split(' '),
        'g = . k w c w k . = g'.split(' ')
    ],
    [
        '. . e . . i . . ~ v t'.split(' '),
        '. . . . . w . . . . ='.split(' '),
        'c . d . . = . . . . .'.split(' '),
        '. . . . . w . k . w ='.split(' '),
        '. . s . . f . . . . g'.split(' ')
    ],
    [
        '. . . . . = . . . . .'.split(' '),
        '. . . . . w . . . . .'.split(' '),
        'c . x . . = . . . . t'.split(' '),
        '. . . . . = . p . . .'.split(' '),
        '. . . . . w . . . . .'.split(' ')
    ],
    [
        'x w w = = = = w = = ='.split(' '),
        '. w w = w w = = = w ='.split(' '),
        'c w w = w w w w w w ='.split(' '),
        '. w = = w t = = = w ='.split(' '),
        '. = = w w w w w = = ='.split(' ')
    ],
    [
        'x v k . = g g g . w t'.split(' '),
        'v v . . = = = = . w .'.split(' '),
        '. . . . . . . . . = .'.split(' '),
        '. . p . = = = = . w .'.split(' '),
        'c . . . = g g g . v .'.split(' ')
    ],
    [
        'i = g w i = g w . v t'.split(' '),
        '= = w w = = w w = w w'.split(' '),
        '. . . . . . . . . . .'.split(' '),
        '. . . . w = w w . . .'.split(' '),
        'k . f . w s e w . x c'.split(' ')
    ],
    [
        'p v . .p. . . . w w w'.split(' '),
        't w g . . w ~ . . d c'.split(' '),
        'g w . p = k v ~ . d -'.split(' '),
        'k w g . . w ~ . . . .'.split(' '),
        'p = . . . p . p w w w'.split(' ')
    ],
    []
]

descs = [
    "Covid-19 has hit again with the 380th wave. However you are out of toilet paper!  ",
    "Covid-19 Wave # 381 | Christmas Update! 🎄",
    "Covid-19 Wave # 382 | Christmas Update! 🎄",
    "Covid-19 Wave # 383 | Christmas Update! 🎄",
    "Covid-19 Wave # 384 | Christmas Update! 🎄",
    "Covid-19 Wave # 385 | Christmas Update! 🎄",
    "Covid-19 Wave # 386 | Christmas Update! 🎄",
    "Covid-19 Wave # 387 | Christmas Update! 🎄",
    "Covid-19 Wave # 388 | Christmas Update! 🎄",
    "Covid-19 Wave # 389 | Christmas Update! 🎄",
    "Covid-19 Wave # 390 | Christmas Update! 🎄",
    "Covid-19 Wave # 391 | Christmas Update! 🎄",
    "Covid-19 Wave # 392 | Christmas Update! 🎄",
    "Covid-19 Wave # 393 | Christmas Update! 🎄",
    "Covid-19 Wave # 394 | Christmas Update! 🎄",
    "Covid-19 Wave # 395 | Christmas Update! 🎄",
    "Covid-19 Wave # 396 | Christmas Update! 🎄",
    "Covid-19 Wave # 397 | Christmas Update! 🎄",
    "Covid-19 Wave # 398 | Christmas Update! 🎄",
    "Covid-19 Wave # 399 | Christmas Update! 🎄",
    "Covid-19 Wave # 400 | Christmas Update! 🎄",
    "Covid-19 Wave # 401 | Christmas Update! 🎄",
    "Covid-19 Wave # 402 | Christmas Update! 🎄",
    "Covid-19 Wave # 403 | Christmas Update! 🎄",
    "Covid-19 Wave # 404 | Christmas Update! 🎄",
    "Covid-19 Wave # 405 | Christmas Update! 🎄",
    "Covid-19 Wave # 406 | Christmas Update! 🎄",
    "Covid-19 Wave # 407 | Christmas Update! 🎄",
    "Covid-19 Wave # 408 | Christmas Update! 🎄",
    "Covid-19 Wave # 409 | Christmas Update! 🎄",
    "Covid-19 Wave # 410 | Christmas Update! 🎄",
    "Covid-19 Wave # 411 | Christmas Update! 🎄",
    "Covid-19 Wave # 412 | Christmas Update! 🎄",
    "Covid-19 Wave # 413 | Christmas Update! 🎄",
    "Covid-19 Wave # 414 | Christmas Update! 🎄",
    "Race 2.0",
    "The janitor hasn't been on duty THE FLOOR IS ...",
    "Covid-19 Wave #415",
    "Covid-19 Wave #416",
    "Covid-19 Wave #417",
    "Covid-19 Wave #418",
    "Covid-19 Wave #419",
    "Covid-19 Wave #420",
    "Covid-19 Wave #421",
    "Covid-19 Wave #422",
    "Covid-19 Wave #423",
    "Covid-19 Wave #424",
    "Covid-19 Wave #425",
    "Covid-19 Wave #426",
    "Covid-19 Wave #427",
    "Covid-19 Wave #428",
    "Another remake of a hard level. Some people will never find it, but still succeed.",
    `You've completed the game of Covid Store <br>
  I hope you think 'twas a lot of fun <br>
  You're now a world-class professional shopper <br>
  On a dangerous quest for some toilet paper <br>
  You remained social-distanced and washed your hands with soap <br>
  Such a grueling task, I'm surprised you could cope! <br>
  Many infected people left little covid trails <br>
  You survived by washing your hands and nails <br>
  Arsonists gave you a gift of fire <br>
  And yet, my friend, you did not tire! <br>
  And when they locked it up in a vault <br>
  Desperately trying to get you to halt <br>
  You angered the owner as you discovered the key <br>
  'We must stop this and hire some guards', said he <br>
  You used your keen mind and your intellect <br>
  Though 'twas in a way your mother wouldn't accept <br>
  You found out that the store, in stock, had a gun <br>
  And you remained nice, tried to only kill one <br>
  You looked at the aisles, and then you did think <br>
  To make me move faster, I'll grab an energy drink! <br>
  You did your best to avoid the slippery floor <br>
  In order to escape fast through the door <br>
  You explored and found a secret passageway <br>
  Forgotten long ago, when the builder passed away <br>
  You used nearby resources, an x-ray goggle <br>
  'How does he know?!' You made the guards boggle <br>
  I hope the game became an obsession <br>
  And for playing to the end, you have my appreciation <br>

  &copy; Leaor | President Obama Bin Laden#9563 2021`
]

let currmap = []
let currlev = 0
let speed = .5
let pspeed = 1000
let direction = '';
let tpleft = 0;
let tpgrab = 0;
let hasstarted = false
let hasgun = false
let haskey = false
let hasgog = false
let cmoveint = function(){}
let pmoveint = function(){}
let imoveint = function(){}
let fmoveint = function(){}
let gmoveint = function(){}

function updatetable(ls){
    var tr = 5
    var td = 11;
    var table = "<table cellspacing='0'>";
    for(i = 0; i < tr; i++) {
        table += "<tr>";
        for(j = 0; j < td; j++) {
            if (ls[i][j]==='c'){
                table += "<td class='cart'>🛒</td>";
            }else if(ls[i][j]==='p'){
                table += "<td class='person'>🎅</td>";
            }else if(ls[i][j]==='w'){
                table += "<td class='wall'>🧱</td>";
            }else if(ls[i][j]==='t'){
                table += "<td class='toiletpaper'>🧻</td>"
            }else if(ls[i][j]==='.'){
                table += "<td class='empty'>&nbsp;</td>"
            }else if(ls[i][j]=='*'){
                table += "<td class='collision'>💥</td>"
            }else if(ls[i][j]=='i'){
                table += "<td class='infector'>🤢</td>"
            }else if(ls[i][j]=='#'){
                table += "<td class='sick'>🦠</td>"
            }else if(ls[i][j]=='s'){
                table += "<td class='sanitizer'>🧼</td>"
            }else if(ls[i][j]=='f'){
                table += "<td class='fire'>🔥</td>"
            }else if(ls[i][j]=='e'){
                table += "<td class='fireextinguisher'>🧯</td>"
            }else if(ls[i][j]=='k'){
                table += "<td class='key'>🔑</td>"
            }else if(ls[i][j]=='v'){
                table += "<td class='vault'>🚪</td>"
            }else if(ls[i][j]=='g'){
                table += "<td class='vault'>👮</td>"
            }else if(ls[i][j]=='-'){
                table += "<td class='gun'>🔫</td>"
            }else if(ls[i][j]=='d'){
                table += "<td class='drink'>🥤</td>"
            }else if(ls[i][j]=='~'){
                table += "<td class='water'>️⚠️</td>"
            }else if(ls[i][j]=='='){
                if(!hasgog){
                    table += "<td class='secretpassageway'>🧱</td>"
                }else{
                    table += "<td class='secretpassageway'>🔲</td>"
                }
            }else if(ls[i][j]=='x'){
                table += "<td class='xraygoggles'>🥽</td>"
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("table").innerHTML = table;
    if((!(countpaper()))&&(!(tpgrab==tpleft))) {
        gameover()
    }else if(!countpaper()){
        nextlevel()
    }
}

function nextlevel() {
    currlev++
    if(!(currlev==maps.length)){
        clearInterval(cmoveint)
        clearInterval(pmoveint)
        clearInterval(imoveint)
        clearInterval(fmoveint)
        clearInterval(gmoveint)
        hasstarted = false;
        direction = '';
        hasgun = false;
        haskey = false;
        hasgog = false;
        pspeed = 1000;
        loadmap(currlev)
    }else{
        overlay('Complete!', 'You are a professional shopper now!')
    }
}

function gameover() {
    clearInterval(cmoveint)
    clearInterval(pmoveint)
    clearInterval(imoveint)
    clearInterval(fmoveint)
    clearInterval(gmoveint)
    hasstarted = false;
    direction = '';
    hasgun = false;
    haskey = false;
    hasgog = false;
    pspeed = 1000;
    loadmap(currlev)
}

function removeoverlay(){
    document.getElementById("table").style.backgroundColor = '#22222211'
    updatetable(currmap)
}

function overlay(header, text){
    document.getElementById("table").style.backgroundColor = '#222222CC'
    var tag1 = document.createElement("h1");
    var cont1 = document.createTextNode(header);
    tag1.appendChild(cont1);

    var tag2 = document.createElement("p");
    var cont2 = document.createTextNode(text);
    tag2.appendChild(cont2);

    var element = document.getElementById("table");
    element.appendChild(tag1);
    element.appendChild(tag2);
}

function updatedesc(lvl){
    document.getElementById("instructions").innerHTML = descs[lvl];
}

function loadmap(level){
    updatedesc(level)
    if(!(level==maps.length-1)){
        m = maps[level]
        currmap = JSON.parse(JSON.stringify(m))
        updatetable(m)
        direction = '';
        tpleft = countpaper()
        tpgrab = 0
        hasgun = false;
        haskey = false;
        hasgog = false;
        pspeed = 1000;
        overlay('Level ' + (level+1).toString(), 'Press Any Key To Start')
    }else{
        console.log('complete')
        document.getElementById("table").innerHTML = '<h1 id="comp">Complete!</div>';
    }
}

function ldmp(level){
    m = maps[level]
    currmap = JSON.parse(JSON.stringify(m))
}

function getplayercoords() {
    for(i = 0; i < 5; i++) {
        if(currmap[i].indexOf('c')>-1){
            return [i, currmap[i].indexOf('c')]
        }
    }
}

function getinfectcoords() {
    coords = []
    for(i = 0; i < 5; i++) {
        for(j=0; j < 11; j++) {
            if(currmap[i][j]=='i'){
                coords.push([i, j])
            }
        }
    }
    return coords
}

function getguardcoords() {
    coords = []
    for(i = 0; i < 5; i++) {
        for(j=0; j < 11; j++) {
            if(currmap[i][j]=='g'){
                coords.push([i, j])
            }
        }
    }
    return coords
}

function getfirecoords() {
    coords = []
    for(i = 0; i < 5; i++) {
        for(j=0; j < 11; j++) {
            if(currmap[i][j]=='f'){
                coords.push([i, j])
            }
        }
    }
    return coords
}

function hassantizer(){
    for(i = 0; i < 5; i++) {
        if(currmap[i].indexOf('s')>-1){
            return false
        }
    }
    return true
}

function hasexting(){
    for(i = 0; i < 5; i++) {
        if(currmap[i].indexOf('e')>-1){
            return false
        }
    }
    return true
}

function countpaper() {
    c = 0
    for(i = 0; i < 5; i++) {
        for(j=0; j < 11; j++) {
            if(currmap[i][j]=='t'){
                c++
            }
        }
    }
    return c
}

function moveplayer() {
    c = getplayercoords()
    if(!c) {
        gameover()
        return
    }
    n =  JSON.parse(JSON.stringify(c))
    d = direction
    if(d=='w') { if(c[0]-1<0){ return } else { n[0]-- } }
    if(d=='s') { if(c[0]+1>4){ return } else { n[0]++ } }
    if(d=='a') { if(c[1]-1<0){ return } else { n[1]-- } }
    if(d=='d') { if(c[1]+1>10){ return } else { n[1]++ } }
    currmap[c[0]][c[1]] = '.'
    if(currmap[n[0]][n[1]]=='p'){
        if(!hasgun){
            currmap[n[0]][n[1]] = '!'
            gameover()
            return
        }
    }else if(currmap[n[0]][n[1]]=='w'){
        currmap[n[0]][n[1]] = '*'
        gameover()
        return
    }else if((currmap[n[0]][n[1]]=='f')&&(!hasexting())){
        currmap[n[0]][n[1]] = 'f'
        gameover()
        return
    }else if((currmap[n[0]][n[1]]=='i')&&(!hassantizer())){
        currmap[n[0]][n[1]] = '!'
        gameover()
        return
    }else if((currmap[n[0]][n[1]]=='#')&&(!hassantizer())){
        currmap[n[0]][n[1]] = '!'
        gameover()
        return
    }else if((currmap[n[0]][n[1]]=='v')&&(!haskey)){
        currmap[n[0]][n[1]] = '!'
        gameover()
        return
    }else if((currmap[n[0]][n[1]]=='g')){
        currmap[n[0]][n[1]] = '!'
        gameover()
        return
    }else if((currmap[n[0]][n[1]]=='-')){
        hasgun = true
    }else if((currmap[n[0]][n[1]]=='k')){
        haskey = true
    }else if((currmap[n[0]][n[1]]=='t')){
        tpgrab++
    }else if((currmap[n[0]][n[1]]=='d')){
        pspeed = pspeed/1.45;
        clearInterval(cmoveint)
        cmoveint = setInterval(moveplayer, pspeed*speed)
    }else if((currmap[n[0]][n[1]]=='~')){
        pspeed = pspeed*1.25;
        clearInterval(cmoveint)
        cmoveint = setInterval(moveplayer, pspeed*speed)
    }else if((currmap[n[0]][n[1]]=='x')){
        hasgog = true
    }
    currmap[n[0]][n[1]] = 'c'
    updatetable(currmap)
}

function getpeoplecoords() {
    coords = []
    for(i = 0; i < 5; i++) {
        for(j=0; j < 11; j++) {
            if(currmap[i][j]=='p'){
                coords.push([i, j])
            }
        }
    }
    return coords
}

function movepeople() {
    c = getpeoplecoords()
    c.forEach(function(i){
        n = JSON.parse(JSON.stringify(i))
        hasmoved = false
        while(!hasmoved){
            d = Math.ceil(Math.random()*4)
            if(d==1) {
                if(!(i[0]-1<0)) {
                    n[0]--
                    if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f'))&&(!((currmap[n[0]][n[1]]=='c')&&hasgun))&&(!(currmap[n[0]][n[1]]=='~'))&&(!(currmap[n[0]][n[1]]=='='))){
                        currmap[i[0]][i[1]] = '.'
                        currmap[n[0]][n[1]] = 'p'
                        hasmoved = true;
                    }
                    n[0]++
                }
            }
            if(d==2) {
                if(!(i[0]+1>4)) {
                    n[0]++
                    if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f'))&&(!((currmap[n[0]][n[1]]=='c')&&hasgun))&&(!(currmap[n[0]][n[1]]=='~'))&&(!(currmap[n[0]][n[1]]=='='))){
                        currmap[i[0]][i[1]] = '.'
                        currmap[n[0]][n[1]] = 'p'
                        hasmoved = true;
                    }
                    n[0]--
                }
            }
            if(d==3) {
                if(!(i[1]-1<0)) {
                    n[1]--
                    if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f'))&&(!((currmap[n[0]][n[1]]=='c')&&hasgun))&&(!(currmap[n[0]][n[1]]=='~'))&&(!(currmap[n[0]][n[1]]=='='))){
                        currmap[i[0]][i[1]] = '.'
                        currmap[n[0]][n[1]] = 'p'
                        hasmoved = true;
                    }
                    n[1]++
                }
            }
            if(d==4) {
                if(!(i[1]+1>10)) {
                    n[1]++
                    if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f'))&&(!((currmap[n[0]][n[1]]=='c')&&hasgun))&&(!(currmap[n[0]][n[1]]=='~'))&&(!(currmap[n[0]][n[1]]=='='))){
                        currmap[i[0]][i[1]] = '.'
                        currmap[n[0]][n[1]] = 'p'
                        hasmoved = true;
                    }
                    n[1]--
                }
            }
            hasmoved = true;
        }
    });
    updatetable(currmap)
}

function moveguard() {
    if(haskey||hasgun) {
        c = getguardcoords()
        c.forEach(function(i){
            n = JSON.parse(JSON.stringify(i))
            hasmoved = false
            while(!hasmoved){
                d = Math.ceil(Math.random()*4)
                if(!(n[0]-1<0)) {
                    if(currmap[n[0]-1][n[1]]=='c'){
                        d = 1
                    }
                }
                if(!(n[0]+1>4)) {
                    if(currmap[n[0]+1][n[1]]=='c'){
                        d = 2
                    }
                }
                if(!(n[1]-1<0)) {
                    if(currmap[n[0]][n[1]-1]=='c'){
                        d = 3
                    }
                }
                if(!(n[1]+1>10)) {
                    if(currmap[n[0]][n[1]+1]=='c'){
                        d = 4
                    }
                }
                if(d==1) {
                    if(!(i[0]-1<0)) {
                        n[0]--
                        if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='~'))){
                            currmap[i[0]][i[1]] = '.'
                            currmap[n[0]][n[1]] = 'g'
                            hasmoved = true;
                        }
                        n[0]++
                    }
                }
                if(d==2) {
                    if(!(i[0]+1>4)) {
                        n[0]++
                        if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='~'))){
                            currmap[i[0]][i[1]] = '.'
                            currmap[n[0]][n[1]] = 'g'
                            hasmoved = true;
                        }
                        n[0]--
                    }
                }
                if(d==3) {
                    if(!(i[1]-1<0)) {
                        n[1]--
                        if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='~'))){
                            currmap[i[0]][i[1]] = '.'
                            currmap[n[0]][n[1]] = 'g'
                            hasmoved = true;
                        }
                        n[1]++
                    }
                }
                if(d==4) {
                    if(!(i[1]+1>10)) {
                        n[1]++
                        if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='~'))){
                            currmap[i[0]][i[1]] = '.'
                            currmap[n[0]][n[1]] = 'g'
                            hasmoved = true;
                        }
                        n[1]--
                    }
                }
                hasmoved = true;
            }
        });
        updatetable(currmap)
    }
}

function moveinfector(){
    c = getinfectcoords()
    c.forEach(function(i){
        n = JSON.parse(JSON.stringify(i))
        hasmoved = false
        while(!hasmoved){
            d = Math.ceil(Math.random()*4)
            if(d==1) {
                if(!(i[0]-1<0)) {
                    n[0]--
                    if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='c'&&hassantizer()))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f'))&&(!(currmap[n[0]][n[1]]=='~'))&&(!(currmap[n[0]][n[1]]=='='))){
                        currmap[i[0]][i[1]] = '#'
                        currmap[n[0]][n[1]] = 'i'
                        hasmoved = true;
                    }
                    n[0]++
                }
            }
            if(d==2) {
                if(!(i[0]+1>4)) {
                    n[0]++
                    if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='c'&&hassantizer()))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f'))&&(!(currmap[n[0]][n[1]]=='~'))&&(!(currmap[n[0]][n[1]]=='='))){
                        currmap[i[0]][i[1]] = '#'
                        currmap[n[0]][n[1]] = 'i'
                        hasmoved = true;
                    }
                    n[0]--
                }
            }
            if(d==3) {
                if(!(i[1]-1<0)) {
                    n[1]--
                    if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='c'&&hassantizer()))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f'))&&(!(currmap[n[0]][n[1]]=='~'))&&(!(currmap[n[0]][n[1]]=='='))){
                        currmap[i[0]][i[1]] = '#'
                        currmap[n[0]][n[1]] = 'i'
                        hasmoved = true;
                    }
                    n[1]++
                }
            }
            if(d==4) {
                if(!(i[1]+1>10)) {
                    n[1]++
                    if((!(currmap[n[0]][n[1]]=='p'))&&(!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='t'))&&(!(currmap[n[0]][n[1]]=='i'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='s'))&&(!(currmap[n[0]][n[1]]=='c'&&hassantizer()))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f'))&&(!(currmap[n[0]][n[1]]=='~'))&&(!(currmap[n[0]][n[1]]=='='))){
                        currmap[i[0]][i[1]] = '#'
                        currmap[n[0]][n[1]] = 'i'
                        hasmoved = true;
                    }
                    n[1]--
                }
            }
            hasmoved = true;
        }
    });
    updatetable(currmap)
}

function movefire(){
    c = getfirecoords()
    c.forEach(function(i){
        n = JSON.parse(JSON.stringify(i))
        hasmoved = false
        while(!hasmoved){
            d = Math.ceil(Math.random()*4)
            if(d==1) {
                if(!(i[0]-1<0)) {
                    n[0]--
                    if((!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='c'&&hasexting()))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f')&&(!(currmap[n[0]][n[1]]=='s')))&&(!(currmap[n[0]][n[1]]=='='))){
                        if(currmap[n[0]][n[1]]=='t'){
                            currmap[n[0]][n[1]] = 'f'
                        }
                        currmap[n[0]][n[1]] = 'f'
                        hasmoved = true;
                    }
                    n[0]++
                }
            }
            if(d==2) {
                if(!(i[0]+1>4)) {
                    n[0]++
                    if((!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='c'&&hasexting()))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f')&&(!(currmap[n[0]][n[1]]=='s')))&&(!(currmap[n[0]][n[1]]=='='))){
                        if(currmap[n[0]][n[1]]=='t'){
                            currmap[n[0]][n[1]] = 'f'
                        }
                        currmap[n[0]][n[1]] = 'f'
                        hasmoved = true;
                    }
                    n[0]--
                }
            }
            if(d==3) {
                if(!(i[1]-1<0)) {
                    n[1]--
                    if((!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='c'&&hasexting()))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f')&&(!(currmap[n[0]][n[1]]=='s')))&&(!(currmap[n[0]][n[1]]=='='))){
                        if(currmap[n[0]][n[1]]=='t'){
                            currmap[n[0]][n[1]] = 'f'
                        }
                        currmap[n[0]][n[1]] = 'f'
                        hasmoved = true;
                    }
                    n[1]++
                }
            }
            if(d==4) {
                if(!(i[1]+1>10)) {
                    n[1]++
                    if((!(currmap[n[0]][n[1]]=='w'))&&(!(currmap[n[0]][n[1]]=='e'))&&(!(currmap[n[0]][n[1]]=='c'&&hasexting()))&&(!(currmap[n[0]][n[1]]=='v'))&&(!(currmap[n[0]][n[1]]=='k'))&&(!(currmap[n[0]][n[1]]=='g'))&&(!(currmap[n[0]][n[1]]=='f')&&(!(currmap[n[0]][n[1]]=='s')))&&(!(currmap[n[0]][n[1]]=='='))){
                        if(currmap[n[0]][n[1]]=='t'){
                            currmap[n[0]][n[1]] = 'f'
                        }
                        currmap[n[0]][n[1]] = 'f'
                        hasmoved = true;
                    }
                    n[1]--
                }
            }
            hasmoved = true;
        }
    });
    updatetable(currmap)
}

function changedir(dir){
    direction = dir
}

function getdirection(e){
    if(!hasstarted) {
        removeoverlay()
        dir = ''
        cmoveint = setInterval(moveplayer, pspeed*speed)
        pmoveint = setInterval(movepeople, 900*speed)
        imoveint = setInterval(moveinfector, 1100*speed)
        fmoveint = setInterval(movefire, 1400*speed)
        gmoveint = setInterval(moveguard, 500*speed)
        hasstarted = true;
    }
    if(e.keyCode==87||e.keyCode==38){
        d = 'w'
    }else if(e.keyCode==83||e.keyCode==40){
        d = 's'
    }else if(e.keyCode==65||e.keyCode==37){
        d = 'a'
    }else if(e.keyCode==68||e.keyCode==39){
        d = 'd'
    }else {
        return false
    }
    changedir(d)
}

document.addEventListener("keydown", getdirection)

window.onload = (function(){
    loadmap(currlev)
})




