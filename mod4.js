//Actual code
let names = ["Yaakov","John","Jane","Jeson","paul","Frank","Larry","Paula","Laura","Jim"];
console.log(names);
for ( let  i = 0; i<names.length; i++){
	if (names[i].startsWith("J")){
		console.log("Goodbye " + names[i]);
    }
	else{
		console.log("Hello "+ names[i]);
	}
}
