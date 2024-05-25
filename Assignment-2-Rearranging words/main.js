/*Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).*/
function rearrangeArray(scrambledArray) {
    // Convert non-strings (booleans, numbers) to strings
    var stringArray = scrambledArray.map(function (item) { return String(item); });
    var filteredArray = stringArray.filter(function (item) { return item !== ""; });
    var rearrangedArray = [
        filteredArray[7], filteredArray[4], filteredArray[5], filteredArray[0], "of", filteredArray[6],
    ];
    return rearrangedArray;
}
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var result = rearrangeArray(scrambledArray);
console.log(result.join(" "));
