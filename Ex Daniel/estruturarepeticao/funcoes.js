function exer0(){
    let cont = 1
    let preco = 0
    let soma = 0

    while (cont <=10){
        let prod = Number(prompt(`Valor do produto: ${cont}`))
        soma += prod
        cont++
    }
    let media = (soma/10)
    alert(`A média dos produtos é ${soma/10}`)

}

function exer3(){
    let cont = 1 
    let idade 
    let f1 = 0 ; let f2 = 0 ; let f3 = 0 ; let f4 = 0 ; let f5 = 0

    while (cont <=8 ){
        idade=Number(prompt(`Adicione a Idade: ${cont}`))
        if (idade <=15){
            f1++
        }
        else if (idade <= 30){
            f2++
        }
        else if (idade <= 45){
            f3++
        }
        else if (idade <= 60){
            f4++
        }
        else {
            f5++
        }

        cont++

        alert(`Quantidade de pessoas por Faixa etaria: Até 15: ${f1} , De 16 a 30: ${f2} , De 31 a 45: ${f3} , De 46 a 60: ${f4} ,De 60 pra mais: ${f5}`)
        alert(`Porcentagem de pessoas  com até 15: ${f1/0.25}%, Porcentagem de pessoas com até 60: ${f5/0.25}%`)
    }
}