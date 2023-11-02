//alert("hello from js");

function convert(){
	//	alert("hello it's convert");
	//create object or refenc
	
		var frm,to,amount;
		
		frm=document.getElementById('from');
		to=document.getElementById('to');
		amount=document.getElementById('amt');
		res=document.getElementById('result');
		cu=document.getElementById('curr');
		
	/*document.write(frm+"<br>");
	document.write(to+"<br>");
	document.write(amount+"<br>");
	
	document.write("from :"+frm.value+"<br>");
	document.write("to :"+to.value+"<br>");
	document.write("amount :"+amount.value+"<br>");*/
	
	var url='https://v6.exchangerate-api.com/v6/a5a557e19f0c52c5f6e7cbb2/latest/'+frm.value;
	//document.write(url);
		fetch(url)
		.then(function(res){
			
	//document.write(Res/json ());
		return res.json();
	}).then(function(data){
		/*document.write(data+"<br>");
		document.write(data['result']+"<br>");
		document.write(data['base_code']+"<br>");*/
		var cr=data['conversion_rates'];
		//document.write(data['conversion_rates']+"<br>");
		cf=cr[to.value];
		
		var famt=cf*amount.value;
		//document.write("Final AMOUNT:"+famt);
		res.innerHTML=famt;
		cu.innerHTML=to.value;
		
	});
}