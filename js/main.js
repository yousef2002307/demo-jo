let i2 =0;
let deep = 1;
let deepestarr = [];
function deepest(arr){
  /*testing section*/
  if(i2 == 0) {var mainarr = arr};
  i2++;
  
if(i2 == 29){
  return i;
}
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element)
  if(!Array.isArray(element)) continue;
  deep++;
  if(arr == mainarr){
    deepestarr.push(deep)
    deep = 1;
  }
 
  
  console.log("deep",deep)
  deepest(element);


}

}

debugger;
console.log(deepest([1 ,[2,[4,[5]]],[12,[3]]]))