function exer1(){

    // recuperar os dados do usuario
    // Converter o texto para um número
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    //procesamento
    let resultado = n1 - n2
    //mostrar o resultado
    document.getElementById("resultado").innerHTML = `Resultado da Subtração: ${resultado}`

    
}

function exer2(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    let resultado = n1 * n2 * n3

    document.getElementById("resultado").innerHTML = `Resultado da Multiplicação: ${resultado}`

}

function exer3(){

    //entrada de dados
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    // estrutura de seleção
    if (n2 == 0){
        document.getElementById("resultado").innerHTML = "Impossivel dividir por zero"
    }
    else {
        let resultado = n1/n2
        document.getElementById("resultado").innerHTML = `Resultado da Divisão ${resultado}`
    }


}

function exer4(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let resultado = ((n1 * 2) + (n2 * 3)) / 5

    document.getElementById("resultado").innerHTML = `O resultado da media ponderada: ${resultado}`

}

function exer5(){

    
    let n1 = Number(document.getElementById("n1").value)

    let resultado = n1-(n1*0.1)

    document.getElementById("resultado").innerHTML = `O resultado do desconto: R$ ${resultado}`


}

function exer6(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let v = n2*0.04

    let resultado = n1 + v

    document.getElementById("resultado").innerHTML = `O valor da comissão é R$ ${v} e o salario final  R$ ${resultado}`

}

function exer7(){

    let p = Number(document.getElementById("p").value)

    let p_l = p - (p * 0.20)
    let p_p = p + (p * 0.15)

    document.getElementById("resultado").innerHTML = `Peso: ${p}`
    document.getElementById("resultado2").innerHTML = `Peso se engordar 15%: ${p_p}`
    document.getElementById("resultado3").innerHTML = `Peso se emagracer 20%: ${p_l}`

}

function exer8(){

    let p_q = Number(document.getElementById("p_q").value)

    let con = p_q * 1000

    document.getElementById("resultado").innerHTML = `Peso em gramas: ${con}`



}

function exer9(){

    let b_ma = Number(document.getElementById("b_ma").value)
    let b_me = Number(document.getElementById("b_me").value)
    let al = Number(document.getElementById("al").value)

    let trap = (b_ma) + (b_me) * (al/2)

    document.getElementById("resultado").innerHTML = `Area do Trapezio: ${trap}`

}

function exer10(){

    let l = Number(document.getElementById("l").value)

    let a = (l * l)

    document.getElementById("resultado").innerHTML = `Area do Quadrado: ${a}`


}

function exer15(){

    let sal = Number(document.getElementById("sal").value)
    let c1 = Number(document.getElementById("c1").value)
    let c2 = Number(document.getElementById("c2").value)

    let mult1 = c1 * 2 / 100
    let mult2 = c2 * 2 / 100

    let so =sal - (c1 - mult1) - (c2 - mult2) 

    document.getElementById("resultado").innerHTML = `Salario que sobrou: ${so}`

}

function exer20(){

    let ang = Number(document.getElementById("ang").value)
    let dis = Number(document.getElementById("dis").value)

    let hip = dis / Math.cos(ang)

    document.getElementById("resultado").innerHTML = `Medida da escada: ${hip}`

}