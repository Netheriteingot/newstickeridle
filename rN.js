var rNCount=123,interactable=17;
var timeleft=8000;
rN=new Array(
	"This is the first Newsticker!",
	"Palescreen is a song written by WyvernP and sang by Madol!",
	"Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan",
	"cbrt(74088)",
	"This game was created on Feb 11 2024!",
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
	"2 - 2 - 2... ok... 6 - 6 - 24' - 32' - HOLD ON!... - 4 5 2 4 4 fff 3 ... NICE!!!",
	"You have got past the great Wall, but don't let that wall in your heart stop you. Get over it.",
	"This is a coarse game. --- yhvr",
	"Newsticker Idle has added another prestige layer: Storage! Reset your LocalStorage to acquire Storage space.",
	"Clicking on this news gives +1 extra read news! Works with privileges.",
	"Reading this news gives a wapping +50 clicks! Works with privileges.",
	"There might be upgrades you can buy somewhere.",
	"There might be/might have been a privilege here.",
	"Reading is harder to acquire than counting. Wise decision.",
	"Knowledge is power.",
	"Click Click",
	"Mouse is overpowered.",
	"dClick.onclick *= 2",
	"Now this game should finally be a normal idle game.",
	"Update log: V20240212a - Added 40 more newstickers, 6 Upgrades and a lot more content!",
	"Coming soon in 8 seconds...",
	"Do you know that the loading news is there just to prevent you from cheating?",
	"Update log: V20240412b - Added the first News Dimension.",
	"ND1 should finally work properly.",
	"Do you know that there is a length limit on newstickers?",
	"Click on this news to click on this news!",
	"Now playing: Dance with Silence - Camellia",
	"Now playing: Cryout - Ju_E",
	"Now playing: Destr0yer - Sakuzyo",
	"Now playing: Cyaegha - USAO",
	"Now playing: 777 - Rough$ketch",
	"Now playing: Aleph-0 - LeaF",
	"I have a crazy idea: 1st 1st News Dimensions Dimensions! It produces 1st News Dimensions!",
	"You might have to grind for hours just to see this one news.",
	"Click on this news to remove $1 from a random person's credit card.",
	"The 114th news. Interesting number.",
	"Click this to disassemble the newsticker for a paperclip.",
	"Don't click on everything you see.",
	"Think twice before clicking. There might be some debuffs here.",
	"Thanks for Matter Dimensions' cooperation! We have put 5 of its newstickers in the game.",
	"Thanks for Fallen_Cat's cooperation! We have put 2 of its newstickers in the game.",
	"There shouldn't be a single typo in the game. I never make tpyos.",
	"8 seconds left. And Counting...",
	"8 seconds from hell",
	"Our discord is at https://discord.gg/P2m29fv8bC. Join it!"
);
var totalNewsRead=0,totalNewsClicked=0;
var paperclip=0,currentCapTier=0;
var ND1=0;
var interacted=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
function icrr(num){
	var incr=num;
	if(interacted[10])incr*=2;
	if(interacted[11])incr*=2;
	if(interacted[12])incr*=2;
	totalNewsRead+=incr;
	totalNewsRead=Math.floor(totalNewsRead+0.1);
}
function icrc(num){
	var incr=num;
	if(interacted[13])incr*=2;
	if(interacted[14])incr*=2;
	if(interacted[15])incr*=2;
	totalNewsClicked+=incr;
	totalNewsClicked=Math.floor(totalNewsClicked+0.1);
}
function BuyND1(){
	if((totalNewsClicked>=2400*Math.floor(Math.pow(3,ND1)))&&(totalNewsRead>=800*Math.floor(Math.pow(3,ND1)))){
		totalNewsClicked-=2400*Math.floor(Math.pow(3,ND1));
		totalNewsRead-=800*Math.floor(Math.pow(3,ND1));
		ND1++;
	}
	document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"BuyND1()\"\>"+"Click here to buy 1st News Dimensions. Amount: "+ND1+" Prod.: +"+Math.floor(Math.pow(2,ND1-1))+"R/s +"+3*Math.floor(Math.pow(2,ND1-1))+"C/s. Cost: "+800*Math.floor(Math.pow(3,ND1))+"R "+2400*Math.floor(Math.pow(3,ND1))+"C."+"</div>";
}
setInterval(function(){
	totalNewsClicked+=3*Math.floor(Math.pow(2,ND1-1));
	totalNewsRead+=Math.floor(Math.pow(2,ND1-1));
	document.getElementById("s1").innerHTML="You have read a total of "+totalNewsRead+" news.";
	document.getElementById("s2").innerHTML="You have clicked on a total of "+totalNewsClicked+" news.";
},1000);
function Dim(){
	timeleft=1e+14;
	document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"BuyND1()\"\>"+"Click here to buy 1st News Dimensions. Amount: "+ND1+" Prod.: +"+Math.floor(Math.pow(2,ND1-1))+"R/s +"+3*Math.floor(Math.pow(2,ND1-1))+"C/s. Cost: "+800*Math.floor(Math.pow(3,ND1))+"R "+2400*Math.floor(Math.pow(3,ND1))+"C."+"</div>";
}
function Ex(){
	timeleft=8000;
	document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\"\>"+"Newsticker Idle is loading... (This will take 8 seconds.)"+"</div>";
}
setInterval(function(){
	var currentCap=Math.floor((50+50*currentCapTier)+0.1);
	if(timeleft<=0){
		rnd=Math.floor(Math.random() * Math.min(rNCount,currentCap));
		if(rnd>=45&&rnd<=52&&(!interacted[rnd-45]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to get 1 free paperclip!"+"</div>";
		else if(rnd==53&&(!interacted[rnd-45]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to buy 1 paperclip for 10000 read news!"+"</div>";
		else if(rnd==54&&(!interacted[rnd-45]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to buy 1 paperclip for 30000 clicks!"+"</div>";
		else if(rnd==90&&(!interacted[rnd-80]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x reads by reading for 100 reads only!"+"</div>";
		else if(rnd==91&&(!interacted[rnd-80])&&(interacted[rnd-81]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x reads by reading for 200 reads only!"+"</div>";
		else if(rnd==92&&(!interacted[rnd-80])&&(interacted[rnd-81]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x reads by reading for 400 reads only!"+"</div>";
		else if(rnd==93&&(!interacted[rnd-80]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x clicks by clicking for 300 clicks only!"+"</div>";
		else if(rnd==94&&(!interacted[rnd-80])&&(interacted[rnd-81]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x clicks by clicking for 600 clicks only!"+"</div>";
		else if(rnd==95&&(!interacted[rnd-80])&&(interacted[rnd-81]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x clicks by clicking for 1200 clicks only!"+"</div>";
		else if(rnd==99&&(!interacted[16])&&(interacted[12])&&(interacted[15]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to Unlock the first News Dimension!"+"</div>";
		else document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+rN[rnd]+"</div>";
		timeleft+=8000;
		var increment=1;
		if(rnd==61)increment*=10;
		icrr(increment);
		increment=1;
		if(rnd==88)icrc(50);
		document.getElementById("s1").innerHTML="You have read a total of "+totalNewsRead+" news.";
		Save();
	}
	timeleft-=50;
},50);
function executeNews(num){
	var increment=1;
	if(num==60)increment*=3;
	icrc(increment);
	increment=1;
	if(num==87)icrr(1);
	if(45<=num&&num<=52){
		if(!interacted[num-45]){
			paperclip++;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		}
		interacted[num-45]=1;
	}
	if(num==53&&(!interacted[num-45])){
		if(totalNewsRead>=10000){
			totalNewsRead-=10000;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			paperclip++;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==54&&(!interacted[num-45])){
		if(totalNewsClicked>=30000){
			totalNewsClicked-=30000;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			paperclip++;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==90&&(!interacted[num-80])){
		if(totalNewsRead>=100){
			totalNewsRead-=100;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==91&&(!interacted[num-80])&&(interacted[num-81])){
		if(totalNewsRead>=200){
			totalNewsRead-=200;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==92&&(!interacted[num-80])&&(interacted[num-81])){
		if(totalNewsRead>=400){
			totalNewsRead-=400;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==93&&(!interacted[num-80])){
		if(totalNewsClicked>=300){
			totalNewsClicked-=300;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==94&&(!interacted[num-80])&&(interacted[num-81])){
		if(totalNewsClicked>=600){
			totalNewsClicked-=600;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==95&&(!interacted[num-80])&&(interacted[num-81])){
		if(totalNewsClicked>=1200){
			totalNewsClicked-=1200;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==114)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"We won't let you do that, otherwise you will be stuck."+"</div>";
	if(rnd==99&&(!interacted[16])&&(interacted[12])&&(interacted[15]))interacted[16]=1;
	if(num==78)totalNewsClicked*=Math.floor(Math.random()*2)*2;
	if(num==79)timeleft=0;
	currentCapTier=Math.floor(paperclip/5+0.1);
	if(interacted[16]>0)document.getElementById("s").innerHTML="<text onclick=Dim()>Dimensions</text> | <text onclick=Ex()>Exit</text>";
	document.getElementById("s1").innerHTML="You have read a total of "+totalNewsRead+" news.";
	document.getElementById("s2").innerHTML="You have clicked on a total of "+totalNewsClicked+" news.";
	document.getElementById("s3").innerHTML="You have "+paperclip+" paperclips. You need another "+(5+5*currentCapTier-paperclip)+" to unlock more news. Current News size: "+Math.min(rNCount,Math.floor((50+50*currentCapTier)+0.1));
	Save();
}
