//Fazer Ex 1 e 2
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

function exer1(){
    let g1 = []
    let cont = 0
    while(cont < 4){
        g1.push(Number(prompt(`Digite o ${cont+1}º número do Grupo 1: `)))
        cont++
    }

    let g2 = []
    cont = 0
    while(cont < 4){
        g2.push(Number(prompt(`Digite o ${cont+1}º número do Grupo 2: `)))
        cont++
    }

    let g3 = []
    cont = 0
    while(cont < 4){
        g3.push(Number(prompt(`Digite o ${cont+1}º número do Grupo 3: `)))
        cont++
    }

    let g4 = []
    cont = 0
    while(cont < 4){
        g4.push(Number(prompt(`Digite o ${cont+1}º número do Grupo 4: `)))
        cont++
    }

    let g5 = []
    cont = 0
    while(cont < 4){
        g5.push(Number(prompt(`Digite o ${cont+1}º número do Grupo 5: `)))
        cont++
    }

    alert(`Grupo 1 - (${g1})\n Grupo 2 - (${g2})\n Grupo 3 - (${g3})\n Grupo 4 - (${g4})\n Grupo 5 - (${g5})\n`)

    alert(`Ordem crescente dos grupos:\n \n   Grupo 1 - (${g1.sort(function(a, b){return a - b})})\n   Grupo 2 - (${g2.sort(function(a, b){return a - b})})\n   Grupo 3 - (${g3.sort(function(a, b){return a - b})})\n   Grupo 4 - (${g4.sort(function(a, b){return a - b})})\n   Grupo 5 - (${g5.sort(function(a, b){return a - b})})\n`)

    alert(`Ordem decrescente dos grupos:\n \n   Grupo 1 - (${g1.reverse()})\n   Grupo 2 - (${g2.reverse()})\n   Grupo 3 - (${g3.reverse()})\n   Grupo 4 - (${g4.reverse()})\n   Grupo 5 - (${g5.reverse()})\n`)
}

function exer2(){
    let x = 0
    let preco = 5
    let qntd, lucro, preju
    while(preco>0.5){
        preco = (5-(x*0.5)).toFixed(2)
        qntd = 120+(26*x)
        lucro = preco*qntd-200
        preju = (lucro>0)&&"lucro"||"prejuizo"
        alert(`Se forem vendidos ingressos a R$${preco} , serão vendidos ${qntd} ingressos totalizando R$${lucro.toFixed(2)} de ${preju}`)
        x++
    }
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
        alert(`Porcentagem de pessoas  com até 15: ${f1/0.125}%, Porcentagem de pessoas com até 60: ${f5/0.125}%`)
    }
}

function exer6(){
    let cont = 1
    let val
    let codi

    let v
    let p

    let t_v = 0
    let t_p = 0

    while (cont <= 15){
        val=Number(prompt(`Digite o valor do produto: ${cont}`))

        codi = prompt(`Coloque V para comprar a vista e P para a prazo`).toUpperCase()
        switch(codi){
            case 'V': t_v += val
                        break
            case 'P': t_p += val
                        break
            defalt: alert(`Forma de compra invalido`)
        }
        cont++
    }
    alert("Total a vista: R$${t_v.toFixed(2)}, Total a prazo: R$${t_p.toFixed(2)} ,Valor geral: R$${(t_v+t_p).toFixed(2)} ")
    alert(`Primeira parcela do total a prazo: ${(t_p/3).toFixed(2)}`)
}

function exer23(){
    let op, sal, n_sal, m
    do {
        op = Number(prompt(`Digite \n1. Novo Salario .\n2. Férias \n3. Décimo Terceiro \n4. Sair`))
        switch(op){
            case 1: sal=Number(prompt(`Digite o salário: `))
                    let n_sal
                    if (sal < 210){
                        n_sal = sal + (15*sal)/100
                    }
                    else if (sal <= 600){
                        n_sal =  sal + (10*sal)/100
                    }
                    else {
                        n_sal =  sal + (5*sal)/100  
                    }
                    alert(`O novo salário séra de R$${n_sal}`)
                    break

            case 2: sal=Number(prompt(`Digite o salário: `))
                    alert(`O valor das férias serão de R$${sal + sal / 3}`)
                    break

            case 3: sal = Number(prompt(`Digite o salário: `))
                    m = Number(prompt(`Digite quantos meses foram trabalhados: `))
                    alert(`O Décimo Terceiro séra de  R$${sal * m / 10}`)
                    break

            case 4: alert(`Encerrando o programa .... Pressione o Ok para confirmar`)
                break 

            default: alert(`Opção Invalidada`)    
        }
                  
    }while(op != 4)
}