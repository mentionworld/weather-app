// function getShortData(numbers) {
//   //debugger;
//   for (let j = 0; j < numbers.length - 1; j++) {
//     let maximum = numbers[j];
//     let max_location = j;

//     for (let i = j; i < numbers.length; i++) {
//       if (numbers[i] > maximum) {
//         maximum = numbers[i];
//         max_location = i;
//       }
//     }

//     numbers[max_location] = numbers[j];
//     numbers[j] = maximum;
//     alert(numbers[max_location]);
//   }
//   return numbers;
// }

// console.log(getShortData([5, 8, 2, 9, 3, 10]));


// sorting data through calling function 

function sortdata(numbers,index)
{
  let max_num=numbers[index];
  let max_location=index;
  for(let i=index;i<numbers.length;i++){
    if(numbers[i]>max_num){
      max_num=numbers[i];
      max_location=i;
    }
  }
  return {max_number:max_num,max_index:max_location}
}


function getShortData(numbers) {
  //debugger;
  for (let i= 0; i < numbers.length - 1; i++) {
    let max=sortdata(numbers,i);
   let max_numbers=max['max_number'];
    let max_location=max['max_index'];
     
    numbers[max_location] = numbers[i];
    numbers[i] = max_numbers;
  }
  return numbers;
}

console.log(getShortData([5, 8, 2, 9, 3, 10]));
