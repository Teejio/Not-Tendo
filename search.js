
 
var thing = window.sessionStorage.search;
var searches = 0;
console.log( window.sessionStorage.search);

 var home = `
 Welcome to Not-Tendo!
 Non Tendo is an blah blah blah blah blah blah blehhhhh
 `;
 var games = `
 Games
 MotherFunkin`;
 var news = `
 November 5th, 2022
Birth Of MotherFunkin
Moony Announced her new Mod called Motherfunkin' Not-Tendo's first major success. MotherFunkin went on out on become GameBanana's Top Played Today."
 `;
 var support = `
 "The Not-Tendo Team"
 "Director"
 Moony
 "Musicians"
 ProjectPlayer015
 Bide
 Chara
 Kylealta
 EggTillius
 JuicePress
 KOBAIKID
 theMuggoler
 madeline578
 IndieFlower
 "Artists"
 IndieFlower
 care
 cleebus
 cometflamer
 IBN
 madeline578
 PK/Dawn
 Rogan Bowman
 Silver Stubbier
 Cryler
 Ducky
 FryyBryy
 Flooqubr
 "Animators"
 IBN
 madeline578
 cleebus
 Flooqubr
 "VA"
 Illuztriouz
 Moony
 madeline578
 cleebus
 "Charters"
 madeline578
 Liberation
 IndieFlower
 "Coders"
 ProjectPlayer015
 Valerieblue
 TEEJIO
 Widen
 ZoZo
 "Playtesters"
 Tactical Cupcakes
 Ivis
 Mado
 Lolzeny
 Foxfizzle
 J
 Spells
 Togie
 Loogis
`;

console.log(home);
home = home.split('\n');
games = games.split('\n');

news = news.split('\n');
support = support.replace(' ','');
support= support.split('\n');
var html = '';

function checkForSearch(array, name, link){
    console.log(array);
    for( i in array ){
        array[i] = array[i].replace('"','');
        //console.log(thing + ' found!');
        if (array[i].toLowerCase().includes(thing.toLowerCase())){
            if (!html.includes('<h1>'+' In ' + name+':</h1>')){
            html += '<h1 style = "color: #AAAAAA;">'+' In ' + name+':</h1>';}
            html += '<a href= "' + link +'"><h2 style= "font-size: 20px;">'+ array[i] +'</h2></a>';
            searches += 1;
            console.log(thing + ' found!');
        }

    }
    
}

checkForSearch(home, 'Home Page', 'index.html');
checkForSearch(games, 'Games and Mods', 'mods.html');
checkForSearch(news, 'News', 'news.html');
checkForSearch(support, 'People', 'support.html');
var time = 'times';

if (searches ==    1){
    time = 'time'
}
document.getElementById('searchdata').innerHTML = '<h1>' + thing +' was found ' + searches+ '  ' + time + '</h1>'+html;
console.log(html);
