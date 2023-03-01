type mapStringsCallback = (item: string) => string

function mapStrings(array: string[], callbackfn: mapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++){
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
