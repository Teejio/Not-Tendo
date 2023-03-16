var newsArray;
data = [
        ["November 5th, 2022",
        "Birth Of MotherFunkin",
        "https://twitter.com/moony_balloony/status/1589070800627593216",
        "motherfunkinold.jpg",
        "Moony Announced her new Mod called Motherfunkin' Not-Tendo's first major success.\n MotherFunkin went on out on become GameBanana's Top Played Today."
        ],

    ];
newsArray = data;
var newsHtml = '';

for(i in data){
    newsData = data[i]
 newsHtml += '<h3>' + newsData[0] + '</h3>';
newsHtml += '<h2>' + newsData[1] + '</h2>';
newsHtml += '<a href = " '+ newsData[2] + '" ><img class = "clicky" src="images/news/' +newsData[3] +'" alt="Among us" width="500" height="700"></a> ';
newsHtml += '<p style = "white-space: pre-wrap;">' + newsData[4] + '</p>';

}
document.getElementById('news').innerHTML = newsHtml;