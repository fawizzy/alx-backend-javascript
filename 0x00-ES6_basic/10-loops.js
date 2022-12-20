export default function appendToEachArrayValue(array, appendString) {
    let arr = []
    for (const idx of array) {
      let value = array[idx];
      arr[idx] = appendString + value;
    }
  
    return arr;
  }