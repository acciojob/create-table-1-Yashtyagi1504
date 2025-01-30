function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable");
	let row = table.insertRow();
	for(let i = 0;i<2;i++){
		let `cell ${i+1}` = row.insertCell(i);
		`cell ${i+1}`.innerHTML = `New Cell ${i+1}`
	}
}
