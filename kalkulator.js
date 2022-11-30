var input = require('readline-sync');
console.log('--------------------------------');
console.log( "Enter" + " + " + " - " + " * " + " or " + " / ");
const input2 = input.question("Silahkan pilih salah satu ");
console.log('--------------------------------');

if(input2 == "+"){
    const inputan1 = input.question("Enter Number ");
    const inputan2 = input.question("Enter Number ");
    
    var nilai1 = Number(inputan1)
    var nilai2 = Number(inputan2)

    const hasil = nilai1 + nilai2;

    console.log("Hasilnya adalah " + hasil);
};

if(input2 == "*"){
   const inputan1 = input.question("Enter Number");
   const inputan2 = input.question("Enter Number");

   var nilai1 = Number(inputan1)
   var nilai2 = Number(inputan2)

   const hasil = nilai * nilai2;
   
   console.log("Hasilnya adalah" + hasil);
};

 if(input2 == "/"){
    const inputan1 = input.question("Enter Number");
    const inputan2 = input.question("Enter Number");

    var nilai1 = Number(inputan1)
    var nilai2 = Number(inputan2)
  
    cons hasil = nilai1 / nilai2;


    console.log("Hasilnya adalah" + hasil); 
};
   
  
  
