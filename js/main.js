


// 1. prompt da kiritilgan songacha bo'lgan juft va toq sonlar yig'indisini toping va ular o'rtasidagi farqni ham console ga chiqaring 



//     let son = prompt("iltimos sonni kiriting")
//     let juft = 0
//     let toq = 0
//     let total = 0
// for( let i = 0; i <= son; i++){
//     if(i % 2 == 0){
//         juft = juft + i
//     }else if(i % 2 !== 0){
//         toq = toq + i
//     }
// }

// console.log("juft sonlar yig'indisi " + juft)
// console.log("toq sonlar yig'indisi " + toq)

// if(juft > toq){
//     total = juft - toq
// }else{
//     total = toq - juft
// }

// console.log("sonlar orasidagi farq " +  total)






// 2. shunday function yarating ki argument sifatida berilgan songacha bo'lgan sonlarning yig'indisi qaytarsin (return qilsin)




// function barg(a) {
//     let sum = 0;
//     for(let i = 0; i <= a; i++){
//         sum = sum + i
//     }
//     return sum;
// }

// console.log(barg(7));





// 3. array ni ichidagi sonlar yig'indisini topib beradigan algorithm yarating array sonlardan tashkil topsin



// let numberSum = [1, 2, 3, 1, 2, 8];
// let sum = 0
// for(let i = 0; i < numberSum.length; i++){
//     sum = sum + numberSum[i]
// }

// console.log(sum)




// 4. array ichidagi juft sonlar yig'indisini topadigan algorithm yarating



// let numberSum = [1, 2, 3, 1, 2, 8];
// let sum = 0
// for(let i = 0; i < numberSum.length; i++){
//     if(numberSum[i] % 2 == 0){
//         sum = sum + numberSum[i]
//     }
// }

// console.log(sum)




// 5. shunday function yaratinki agument sifatida berilgan son array ichida bor yoki yo'qligini aniqlab bersin
   


// function isNumberInArray(number, array) {
//     return array.includes(number);
// }

// let numbers = [10, 20, 30, 40, 50];
// let searchNumber = 50;

// if (isNumberInArray(searchNumber, numbers)) {
//     console.log(`${searchNumber} array ichida mavjud.`);
// } else {
//     console.log(`${searchNumber} array ichida mavjud emas.`);
// }





// 6. shunday function yaratinki agument sifatida berilgan son array ichida bor bo'lsa array dan olib tashlab agar bo'lmasa array ning oxiridan qo'shib qo'ysin




// function updateArray(number, array) {
//     let index = array.indexOf(number); 

//     if (index !== -1){
//         array.splice(index, 1);
//     }else{
//         array.push(number);
//     }

//     return array;
// }


// let numbers = [10, 20, 30, 40, 50];
// let searchNumber = 90;

// console.log(updateArray(searchNumber, numbers)); 
// searchNumber = 60;
// console.log(updateArray(searchNumber, numbers)); 




// 7. array ichidagi birinchi va oxirgi sonlar o'rtasidagi farqni toping farq har doim musbat son chiqishi kerak


// let numberSum = [10, 2, 3, 1, 2, 8];

// let first = numberSum[0]
// let second = numberSum[numberSum.length -1]
// if(first > second){
//     farq = first - second
// }else{
//     farq = second - first
// }


// console.log(farq)







// qo'shimcha masalalar






// qo'shimcha masala 1


// let sum = 0
// let son = prompt("iltimos sonni kiriting")
// for(let i = 0; i <= son; i++){
//     sum = sum + i
// }

// console.log(sum)




// qo'shimcha masala 2

// let sum = 0
// let son = prompt("iltimos sonni kiriting")
// for(let i = 0; i <= son; i++){
//     if(i % 2 == 0){
//         sum = sum + i
//     }
// }

// console.log(sum)



// qo'shimcha masala 3

// let sum = 0
// let son = prompt("iltimos sonni kiriting")
// for(let i = 0; i <= son; i++){
//     if(i % 2 !== 0){
//         sum = sum + i
//     }
// }

// console.log(sum)


// qo'shimcha masala 4  1 dan 10 gacha bo'lgan juft sonlarni konsolga chiqaring whileda

// let i = 1;
// while (i <= 10) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// qo'shimcha masala 5 1 dan 10 gacha bo'lgan sonlarning yig'indisini hisoblang.

// sum = 0
// let i = 1;
// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }

// console.log(sum)
