//atv 3
let idade=60;
let preco=10;

if(idade>=60 && preco>=100){
    let precoFinal= preco-(preco*0,20);
    console.log("desconto aplicado ! novo preço: ", + precoFinal)
}
else{
    console.log("desconto nao aplicado")
}