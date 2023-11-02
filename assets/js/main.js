function convert(){
	// alert("this is convert button");

	var x,y,z;
	x= document.getElementById('from'); //AMERICA
	y = document.getElementById('to'); //INDIA
	z = document.getElementById('amt'); //100 USD 
	var final = document.getElementById('pooja');
	var S = 'https://v6.exchangerate-api.com/v6/eab7e00d7c6c00617e242dee/latest/'+x.value;
	fetch(S).then(function(res){
		return res.json();
	}).then(function(data){
		// document.write(data,"<br>");
		// document.write(data['result'],"<br>");
		// document.write(data['conversion_rates'],"<br>");
		var cr = data['conversion_rates'];
		var cf = cr[to.value]; // 83 
		var fam = cf * amt.value; // 83*100
		
		final.innerHTML = fam;
		
	
	})
}
// x = 3;
// if x = 3 ;
//print ("hello world");
