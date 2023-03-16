var newsArray;
data = 
`


"The Not-Tendo Team"
N/A
==
-----
N/A
==
"Director"
N/A
==
Moony
https://twitter.com/moony_balloony
0
"Musicians"
N/A
==
-----
N/A
==
ProjectPlayer015
https://twitter.com/ProjectPlayer15
1
Bide
https://twitter.com/bidewastaken
1
Chara
https://twitter.com/MEOWSYNTH3D
1
Kylealta
https://twitter.com/KylealtaVevo
1
EggTillius
https://twitter.com/EggTillius
1
JuicePress
https://youtube.com/@juicepress1905
1
KOBAIKID
https://www.youtube.com/@KOBAIKID/
1
theMuggoler
https://twitter.com/mugg0smunted
1
madeline578
https://twitter.com/The_Pickle578
1
IndieFlower
https://twitter.com/IndieFlower3
1
"Artists"
N/A
==
-----
N/A
==
IndieFlower
https://twitter.com/IndieFlower3
2
care
https://youtu.be/CZNRJGDiXYU
2
cleebus
https://twitter.com/shitheadcleeb
2
cometflamer
https://twitter.com/cometflamer
2
IBN
https://twitter.com/IBNVintage
2
madeline578
https://twitter.com/The_Pickle578
2
PK/Dawn
https://twitter.com/PK_591
2
Rogan Bowman
https://twitter.com/rogan_bowman
2
Silver Stubbier
https://twitter.com/SilverStuberYT
2
Cryler
https://twitter.com/Cryler08
2
Ducky
https://twitter.com/Litosta_R
2
FryyBryy
https://twitter.com/FryyBryy
2
Flooqubr
https://twitter.com/flooqubr
2
"Animators"
N/A
==
-----
N/A
==
IBN
https://twitter.com/IBNVintage
7
madeline578
https://twitter.com/The_Pickle578
7
cleebus
https://twitter.com/shitheadcleeb
7
Flooqubr
https://twitter.com/flooqubr
7
"VA"
N/A
==
-----
N/A
==
Illuztriouz
https://twitter.com/RealIlluztriouz
3
Moony
https://twitter.com/moony_balloony
3
madeline578
https://twitter.com/The_Pickle578
3
cleebus
https://twitter.com/shitheadcleeb
3
"Charters"
N/A
==
-----
N/A
==
madeline578
https://twitter.com/The_Pickle578
4
Liberation
https://twitter.com/LibLiberationn
4
IndieFlower
https://twitter.com/IndieFlower3
4
"Coders"
N/A
==
-----
N/A
==
ProjectPlayer015
https://twitter.com/ProjectPlayer15
5
Valerieblue
https://twitter.com/VeeBlueSama
5
TEEJIO
https://twitter.com/TEEJIO1
5
Widen
https://www.youtube.com/channel/UCKHIiVb1iYstdYNDILk36Yg
5
ZoZo
https://www.twitter.com/ZoZoTheTako
5
"Playtesters"
N/A
==
-----
N/A
==
Tactical Cupcakes
https://www.youtube.com/@Tacticalcupcakes
6
Ivis
https://twitter.com/Ivis_theborb
6
Mado
https://twitter.com/lily_hoshikawa
6
Lolzeny
https://twitter.com/zenyreal
6
Foxfizzle 
https://twitter.com/foxfizzIe
6
J
https://twitter.com/jmoriboy
6
Spells
https://twitter.com/SadSkeleton95
6
Togie
https://twitter.com/TogieTogedemaru
6
Loogis
https://twitter.com/loogified
6
----
----
----`;
data = data.split('\n');


//window.alert(data);

var colors =  [ '#FFF700',' #e187ff', '#87d3ff', '#ff009d', '#1f26ff', '#80ff8c', '#ff4040', '#748df2' ];
var colorsStr =  [ '0',' 1', '2', '3', '4', '5', '6', '7', '' ];
var newsHtml = '';
for (i = 0; i < data.length; i += 3){
    if (data[i].includes('"')|| data[i].includes('--')){
    newsHtml += '<h1 style = "color:rgb(231, 100, 0);">'+ data[i]+'</h1>'
    }
    else{
        //window.alert(data[i+2]);
    newsHtml += '<a  href = " '+ data[ i + 1] + '"><h2 style = "color:rgb(231, 231, 231);">'+ data[i]+'</h2></a>'
    }
}


document.getElementById('news').innerHTML = newsHtml;