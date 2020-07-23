/* Write a Program to convert an array of objects to an object
	based on a given key */


	const convert = (array,key) => {
		// Write your code here
		if(!Array.isArray(array)){
			return null;
		}
		const res=(array,key)=>
		array.reduce((obj,item)=>{
			obj[item[key]]=item
			return obj
		},{});
		return res(array,key)
	};



/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
