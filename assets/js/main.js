function convert(){
	// alert("this is convert button");

	var x,y,z;
	x= document.getElementById('from'); //AMERICA
	y = document.getElementById('to'); //INDIA
	z = document.getElementById('amt'); //100 USD 
	var currlogo = document.getElementById('currency');
	var op = document.getElementById('result');
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
		
		op.innerHTML = fam;
		currlogo.innerHTML = to.value;
		
	
	})
}
// x = 3;
// if x = 3 ;
// print ("hello world");

// function convert(){
//     var frm,to,amt;
//     frm= document.getElementById('from');
//     to = document.getElementById('to');
//     amt = document.getElementById('amt');
//     var curlogo = document.getElementById('symbol');
    
//     var z = 'https://v6.exchangerate-api.com/v6/eab7e00d7c6c00617e242dee/latest/'+frm.value;
//     fetch(z).then(function(res){
//         return res.json();
//     }).then(function(data){
//         // document.write(data,"<br>");            
//         // document.write(data['result'],"<br>");
//         // document.write(data['conversion_rates'],"<br>");
//         var cr = data['conversion_rates'];
//         var cf = cr[to.value];
//         var fam = cf * amt.value;
//         var currsymbol =to.value;
//         // document.write("The Conversion is : ", fam);
//         document.getElementById('result').innerHTML= fam;
//         curlogo.innerHTML = currsymbol;

    
    
// //     })
// // }
