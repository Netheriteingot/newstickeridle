function Wipe(){
	localStorage.setItem('rigc',0);
	localStorage.setItem('bfc1',0);
	localStorage.setItem('bfc2',0);
	localStorage.setItem('bfc3',0);
	localStorage.setItem('cct',0);
	localStorage.setItem('nd1',0);
	Load();
}
function Save(){
	var tmp="";
	for(var i=0;i<interactable;i++)tmp+=interacted[i];
	localStorage.setItem('rigc',tmp);
	localStorage.setItem('bfc1',totalNewsRead);
	localStorage.setItem('bfc2',totalNewsClicked);
	localStorage.setItem('bfc3',paperclip);
	localStorage.setItem('cct',currentCapTier);
	localStorage.setItem('nd1',ND1);
}
function Load(){
	var tmp=localStorage.getItem('rigc');
	for(var i=0;i<tmp.length;i++)interacted[i]=Number(tmp[i]);
	totalNewsRead=Number(localStorage.getItem('bfc1'));
	totalNewsClicked=Number(localStorage.getItem('bfc2'));
	paperclip=Number(localStorage.getItem('bfc3'));
	currentCapTier=Number(localStorage.getItem('cct'));
	ND1=Number(localStorage.getItem('nd1'));
	if(interacted[16]>0)document.getElementById("s").innerHTML="<text onclick=Dim()>Dimensions</text> | <text onclick=Ex()>Exit</text>";
	document.getElementById("s1").innerHTML="You have read a total of "+totalNewsRead+" news.";
	document.getElementById("s2").innerHTML="You have clicked on a total of "+totalNewsClicked+" news.";
	document.getElementById("s3").innerHTML="You have "+paperclip+" paperclips. You need another "+(5+5*currentCapTier-paperclip)+" to unlock more news. Current News size: "+Math.min(rNCount,Math.floor((50+50*currentCapTier)+0.1));
}
setInterval(function(){Save()},5000);
