nots1=new Array("M","B","T","Qa","Qt","Sx","Sp","Oc","No");
nots2=new Array("","U","D","T","Qa","Qt","Sx","Sp","O","N");
nots3=new Array("Dc","Vg","Tg","Qd","Qi","Se","St","Oe","Ne","Ce");
function sP(nuum){
	if(nuum<10){
		nuum*=1000;
		nuum=Math.floor(nuum);
		nuum/=1000;
	}
	else if(nuum<100){
		nuum*=100;
		nuum=Math.floor(nuum);
		nuum/=100;
	}
	else if(nuum<1000){
		nuum*=10;
		nuum=Math.floor(nuum);
		nuum/=10;
	}
	return nuum;
}
function nt(num){
	if(num<100000)return num;
	else{
		if(num<1000000)return sP(num/1000)+"K";
		else{
			var power=Math.floor(Math.log(num)*Math.LOG10E/3)-1;
			var r=power%10,q=Math.floor(power/10);
			if(q==0)return sP(num/Math.pow(1000,power+1))+nots1[r-1];
			else return sP(num/Math.pow(1000,power+1))+nots2[r]+nots3[q-1];
		}
	}
}
