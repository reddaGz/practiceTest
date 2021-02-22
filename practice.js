
let prompt=require('prompt-sync')();
let m =prompt(`enter number 1:`);
let n=prompt("enter number 2:")
let u=n+m;
console.log(u);
for(let i=0;i<5;i++){
    let k='';
    for(let j=i;j<5;j++){
        k+='*'
    }
    console.log(k)
}
console.log("======================")
for(let i=1;i<5;i++){
    let k='';
    for(let j=i;j<5;j++){
        k+=i;
    }
    console.log(k)
}
console.log("======================")
for(let i=1;i<5;i++){
    let k='';
    for(let j=1;j<=i;j++){
        k+=i;
    }
    console.log(k)
}
console.log("======================")
for(let i=1;i<5;i++){
    let k='';
    for(let j=1;j<=i;j++){
        k+=j;
    }
    console.log(k)
}
console.log("======================")
for(let i=5;i>0;i--){
    let k='';
    for(let j=i;j>=1;j--){
        k+=i;
    }
    console.log(k)

}
console.log("=================")
for(let i=0;i<6;i++){
    console.log(i*10)
}
console.log("=================")
for(let i=0;i<6;i++){
    console.log(i*5)
}


