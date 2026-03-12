//atv 3
let idade=61;
let preco=110;

if(idade>60 && preco>100){
    let precoFinal= preco-(preco*0,20);
    console.log("desconto aplicado ! novo preço: ", + precoFinal)
}
else{
    console.log("desconto nao aplicado")
}