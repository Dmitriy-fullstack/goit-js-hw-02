const GetItemsString = funсtion(Array) 

    let number = 0;
    let result = "";

for (let i=0; i < Array.length; i += 1) {
    number = i + 1;
    result += `${number} - ${Array[i]}\n`;
}
    return result;

