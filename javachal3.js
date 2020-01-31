let x = 15;

if (x % 3 == 0 && x % 5 == 0){
    console.log(`fizz buzz`)
}
else if (x % 5 == 0){
    console.log(`buzz`)
}
else if (x % 3 == 0){
    console.log(`fizz`)
}
else{
    console.log(x)
}