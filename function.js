//problems related to function


// Write a function called isEven that takes a number as an argument and returns true if it is even and false if it is odd.

const isEven=(num)=>{
return (num%2==0) ? true : false ;
}

console.log(isEven(10));

// Write a function called findMax that takes an array of numbers as an argument and returns the maximum number in the array.

const findMax=(arr)=>{
    let temp=arr[0];
    for(let i of arr){
     if( i > temp){
        temp=i;
     }
    }
    return temp;
}

console.log(findMax([10,20,40,90,30]));


// Write a function called fact that takes an  number as an argument and returns the factorial of number using recurssion and write a one more problem prints the factorial

let fact=(n)=>{
    if(n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

console.log(fact(5));

let factPrint=(n)=>{
    let total=1;
    for(let i=1;i<=n;i++){
total*=i;
    }
console.log(total);
}

factPrint(5);