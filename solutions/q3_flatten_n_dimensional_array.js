/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array) => {
	// Write your code here
    let num=Infinity;
	return Array.isArray(array)? num>0 ?
	array.reduce((actual,val)=>actual.concat(Array.isArray(val)?
	flatten(val,num-1):val),[])
	:array.slice():null;
};


/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
