var rNCount=85,interactable=10;
var timeleft=8000;
rN=new Array(
	"This is the first Newsticker!",
	"Palescreen is a song written by WyvernP and sang by Madol!",
	"Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan",
	"cbrt(74088)",
	"This game was created on Oct 29 2023!",
	"Congratulations! You got 0.00000 free Paperclips!",
	"NEWS:HELP!",
	"Warning! Right Angle Arc",
	"Code by lazer",
	"Anti-qwubbles... Interesting.",
	"qwqbbles",
	"A Newsticker. How Original.",
	"Layer Omega",
	"Special thanks to WYXkk for discouraging me!",
	"Special thanks to Fallen_Cat for inspiring me to make such a game!",
	"Special thanks to gityx.com for introducing me to idle games!",
	"First, a machine to compute with",
	"Second, a realm to rely on",
	"Third, a ladder to go beyond",
	"Fourth, a chaos to communicate to",
	"Last, a bar to stay behind",
	"Why are cyclotomic polynomials all integer polynomials?", 
	"Oo0.o0.oO",
	"lazercutter",
	"Doesn't it annoy you when people don't finish their",
	"Matter matter doesn't matter",
	"Massive Ranks is currently on sale! Cost is 6x expensive per level.",
	"Where is the 6th stage?",
	"are you happy when everything is synergized",
	"| - | - | - | - | - | - | - | - |",
	"NEWS:HELP!",
	"Dev Haste x2. Next version will come out much sooner.",
	"noisserped",
	"I swear on the darkest night I'll end it all, and... Sorry, I forgot what's next.",
	"How do you know you are a human?",
	"aeito vs. eiota vs. ieoat vs. oaite vs. toeai",
	"This is a mews nessage!",
	"Antimatter Dimensions + Matter Dimensions = Dimensions",
	"Now playing: Pentiment - Nothing But Requiem with Museo",
	"Now playing: Pigstep - C418",
	"Now playing: Opia - rN",
	"Now playing: +ERABY+E CONNEC+10N - Camellia",
	"Now playing: Aegleseeker - Silentroom/Frums",
	"Now playing: Can You Friend Me On Bassbook? lol - Camellia & Nanahira",
	"Not just a newsticker game.",
	"There was once a paperclip here, but now there's not.",
	"You may want to spend your paperclips on something.",
	"Seriously, isn't this another reference of Antimatter Dimensions?",
	"Paperclips is VERY VERY useful in this game.",
	"DM me in Discord if you see this message.",
	"You see, more paperclips = more unlocks.",
	"#news-tickers-suggestions is out of news!",
	"I'm burning my mind to insanity to come up with all those news.",
	"Paperclip is the main resource of the game!",
	"WHAT DO I NEED ALL THOSE USELESS PAPERCLIPS FOR???",
	"The idea of this game comes from a conversation in galaxy.click.",
	"\"This is definitely boring.\" --- new players who had just played Antimatter Dimensions",
	"Does this game really have such a controversy?",
	"Help! I've just opened an idle game, and now it displayes nothing else but newstickers!",
	"Now playing: DESTRUCTION 3,2,1 - Normal1zer vs. Broken Nerdz",
	"Clicking this gives 3x more clicks! Take your chance!",
	"Reading this news gives a CRIT 10x more reads!",
	"0''''1''''2''''3''''3.5''''4''''4.4''''4.7''''5 This is a ruler but SOFTCAPPED",
	"Playing click games for a long time can pose a risk of tenosynovitis. Pay attention to rest.",
	"DABCABCD ABCADBAA BABCABCD BAAADBAB",
	"Click here to make nothing happen.",
	"Click here to click here.",
	"You feel like making paperclips. But no one wants to buy your paperclips.",
	"The 69th news. Interesting number.",
	"Clicks and Reads are important resources. Spend them wisely.",
	"Pass = No Pass",
	"Sorry, we are using A* to find the nearest news ticker. Please wait for 8000 ms...",
	"Game under construction, all mechanics must wear hardcaps.",
	"Do you know that this newsticker is much faster than that in other games?",
	"Delay: 8000ms. Connection: Bad.",
	"2250 newstickers until the update",
	"Just now a newsticker passed by, but you advanced 8 seconds in time, so you didn't see it.",
	"Click this news | According to a survey, most people only read news starting with \"Click\".",
	"If you click on this news, your clicked news has a 50% chance of doubling and 50% to reset to 0.",
	"Click on this news to skip it immediately.",
	"In recent days, an idle game with only newstickers was rejected by galaxy.",
	"Now playing: Ether Strike - Akira Complex",
	"Update log: V20240211 - Added 60 newstickers and basic functions.",
	"2 - 2 - 2... ok... 6 - 6 - 24' - 32' - HOLD ON!... - 3 5 2 4 4 fff 3 ... NICE!!!",
	"You have got past the great Wall, but don't let that wall in your heart stop you. Get over it."
);
var totalNewsRead=0,totalNewsClicked=0;
var paperclip=0,currentCapTier=0;
var interacted=new Array(0,0,0,0,0,0,0,0,0,0);
setInterval(function(){
	var currentCap=Math.floor(25*(currentCapTier+1)*(currentCapTier+2)+0.1);
	if(timeleft<=0){
		rnd=Math.floor(Math.random() * Math.min(rNCount,currentCap));
		if(rnd>=45&&rnd<=54&&(!interacted[rnd-45]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to get 1 free paperclip!"+"</div>";
		else document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+rN[rnd]+"</div>";
		timeleft+=8000;
		var increment=1;
		if(rnd==61)increment*=10;
		totalNewsRead+=increment;
		totalNewsRead=Math.floor(totalNewsRead+0.1);
		document.getElementById("s1").innerHTML="You have read a total of "+totalNewsRead+" news.";
		Save();
	}
	timeleft-=50;
},50);
function executeNews(num){
	var increment=1;
	if(num==60)increment*=3;
	totalNewsClicked+=increment;
	totalNewsClicked=Math.floor(totalNewsClicked+0.1);
	document.getElementById("s2").innerHTML="You have clicked on a total of "+totalNewsClicked+" news.";
	if(45<=num&&num<=54){
		if(!interacted[num-45]){
			paperclip++;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		}
		interacted[num-45]=1;
	}
	if(num==78)totalNewsClicker*=Math.floor(Math.random()*2)*2;
	if(num==79)timeleft=0;
	currentCapTier=Math.floor(paperclip/5+0.1);
	document.getElementById("s3").innerHTML="You have "+paperclip+" paperclips. You need another "+(5+5*currentCapTier-paperclip)+" to unlock more news. Current News size: "+Math.min(rNCount,Math.floor(25*(currentCapTier+1)*(currentCapTier+2)+0.1));
	Save();
}
