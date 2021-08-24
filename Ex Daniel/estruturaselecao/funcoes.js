function exer1(){

    
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)
    
    let media = (n1 + n2 + n3 + n4) / 4

    if (media >=7) {
        document.getElementById("resultado").innerHTML = `A média das notas foi ${media}, então você foi aprovado`
    }
    else {
        document.getElementById("resultado").innerHTML =  `A média das notas foi ${media}, então você foi reprovado`
    }
    
}

function exer2(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let media = (n1 + n2) / 2

    let resultado
    if ((media >= 0) && (media <3)) {
        resultado = `Aluno reprovado com media ${media}`
    }
    else if ((media >=3 ) && (media < 7)) {
        resultado = `Aluno em exame com media ${media}` 
    }
    else if ((media >= 7) && (media <=10 )){
        resultado =  `Aluno aprovado com media ${media}`
    }
    else {
        resultado= `Notas invalidas `
    }

    document.getElementById("resultado").innerHTML = resultado
}

function exer3(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    if (n1 > n2){
        document.getElementById("resultado").innerHTML = `O menor número é o ${n2}`
    }
    else if (n1 < n2){
        document.getElementById("resultado").innerHTML = `O menor número é o ${n1}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Os números são iguais!`
    }
}

function exer4(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    if (n1 > n2 && n1 > n3) {
        document.getElementById("resultado").innerHTML = `O maior número é o ${n1}`
    }
    else if (n2 > n1 && n2 > n3) {
        document.getElementById("resultado").innerHTML = `O maior número é o ${n2}`
    }
    else if (n3 > n1 && n3 > n2) {
        document.getElementById("resultado").innerHTML = `O maior número é o ${n3}`

    }
    else if (n1 > n3 && n1 == n2) {
        document.getElementById("resultado").innerHTML = `O maior número é o ${n1}`
    }
    else if (n1 > n2 && n1 == n3) {
        document.getElementById("resultado").innerHTML = `O maior número é o ${n1}`
    }
    else if (n2 > n1 && n2 == n3) {
        document.getElementById("resultado").innerHTML = `O maior número é o ${n2}`
    }
    else if (n3 == n2 && n3 == n1 && n2 == n1) {
        document.getElementById("resultado").innerHTML = `Os números são iguais!`
    }
}

function exer5(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let op = Number(document.getElementById("op").value)

    if (op == 1) {
        document.getElementById("resultado").innerHTML = `Média entre os números digitados: ${(n1 + n2) /2}`

    }
    else if (op == 2) {
        if (n1 > n2) {
            document.getElementById("resultado").innerHTML = `Diferença do maior pelo menor: ${(n1 - n2)}`
        }
        else if(n1 < n2) {
            document.getElementById("resultado").innerHTML = `Diferença do maior pelo menor: ${(n2 - n1)}`
        }
    }
    else if (op == 3) {
        document.getElementById("resultado").innerHTML = `Produto entre os números digitados: ${(n1 * n2)}`

    }
    else if (op == 4) {
        if (n2 == 0){
            document.getElementById("resultado").innerHTML = `Impossível dividir por zero!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Divisão do primeiro pelo segundo: ${(n1 / n2)}`
        }
    }
    else {
        document.getElementById("resultado").innerHTML = `Erro - Operador inválido!`
    }
}

function exer6(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let op = String(document.getElementById("op").value)

    if (op == "a" || op == "A") {
        document.getElementById("resultado").innerHTML = `O primeiro número elevado pelo segundo: ${Math.pow(n1,n2)}`   
    }
    else if (op == "b" || op == "B") {
        document.getElementById("resultado").innerHTML = `Raíz quadrada de cada um dos números: ${Math.sqrt(n1)} e ${Math.sqrt(n2)}`
    }
    else if (op == "c" || op == "C") {
        document.getElementById("resultado").innerHTML = `Raíz cúbica de cada um dos números: ${Math.cbrt(n1)} e ${Math.cbrt(n2)}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Erro - Operador Inválido!`
    }
}

function exer7(){
    let sal = Number(document.getElementById("sal").value)

    if (sal < 500) {
        if (sal < 1) {
            document.getElementById("resultado").innerHTML = `Valor inválido!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Novo salário com mais 30%: ${sal + (sal * 0.3)}`
        }
    }
    else {
        document.getElementById("resultado").innerHTML = `Seu salário excede o valor de R$499,99; logo, não houve reajuste.`
    }
}

function exer8(){
    let sal = Number(document.getElementById("sal").value)

    if (sal <= 300) {
        if (sal < 1) {
            document.getElementById("resultado").innerHTML = `Valor inválido!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Novo salário com mais 35%: ${sal + (sal* 0.35)}`
        }
    }
    else {
        document.getElementById("resultado").innerHTML = `Novo salário com mais 15%: ${sal + (sal * 0.15)}`
    }
}

function exer9(){
    let saldo = Number(document.getElementById("saldo").value)

    if (saldo <= 200) {
        if (saldo < 0) {
            document.getElementById("resultado").innerHTML = `Valor Inválido!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Saldo Médio: ${saldo}; Valor do Crédito Especial (10%): ${saldo * 0.1}`
        }
    }
    else if (saldo > 200 && saldo <= 300) {
        document.getElementById("resultado").innerHTML = `Saldo Médio: ${saldo}; Valor do Crédito Especial (20%): ${saldo * 0.2}`
    }
    else if (saldo > 300 && saldo <= 400) {
        document.getElementById("resultado").innerHTML = `Saldo Médio: ${saldo}; Valor do Crédito Especial (25%): ${saldo * 0.25}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Saldo Médio: ${saldo}; Valor do Crédito Especial (30%): ${saldo * 0.3}`
    }
}

function exer10 (){
    let fab= Number(document.getElementById("fab").value)

    if (fab <= 12000) {
        if (fab < 1) {
            document.getElementById("resultado").innerHTML = `Valor Inválido!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Preço ao Consumidor: ${fab + (fab* 0.05)}`
        }
    }
    else if (fab > 12000 && fab <= 25000) {
        document.getElementById("resultado").innerHTML = `Preço ao Consumidor: ${fab + (fab * 0.1) + (fab * 0.15)}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Preço ao Consumidor: ${fab + (fab * 0.15) + (fab * 0.2)}`
    }
}
