/*Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or 
create temporary arrays).*/



function rearrangeArray(scrambledArray: (string | boolean | number)[]) {
      
    // Convert non-strings (booleans, numbers) to strings
    const stringArray = scrambledArray.map(item => String(item));

    const filteredArray = stringArray.filter(item => item !== "");

    const rearrangedArray = [
        filteredArray[7], filteredArray[4], filteredArray[5], filteredArray[0],"of",filteredArray[6], 
    ];

    return rearrangedArray;
}

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
const result = rearrangeArray(scrambledArray);

console.log(result.join(" ")); 




