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

function exer15(){
    let cts = 0
    let ctf= 0
    let ctn = 0
    let ctm = 0
    let ctmn = 0

 for (let x=1;x<=10;x++){
     sex = prompt('Informe o seu sexo (M-F)')
     resp= prompt('Informe sua resp (S-N)') 
     if (resp == "s") {
     cts = cts + 1
     }
     if (resp == "n") {
         ctn = ctn + 1
         }
     if (sex == "f" && resp=="n")  {
         ctf = ctf + 1
     }
     if (sex == "m"){
         ctm = ctm + 1
             if (resp=="n"){
                 ctmn = ctmn + 1
             }
     }
 }
 resul = ctmn * ctm / 1000
 
     alert('A quantidade de pessoas que responderam sim é ${cts}')
     alert('A quantidade de pessoas que responderam sim é ${ctn}')
     alert('A quantidade de mulheres que responderam não é ${ctf}')
     alert('A quantidade de mulheres que responderam não é ${resul}')
 
 }

function exer18() {
    let respostas = []
    let resposta
    while (true) {
        let resp = Number(prompt("Digite a idade:"))
        if (resp < 0) break
        resposta = [resp]

        while (true) {
            resp = prompt("Digite o sexo: (M/F)")
            if (resp.toUpperCase() != "M" && resp.toUpperCase() != "F") {
                alert("Digite 'M' para Masculino ou 'F' para Feminino.")
            } else break
        }
        resposta.push(resp.toUpperCase())

        resp = Number(prompt("Digite o salario:"))
        resposta.push(resp)
        respostas.push(resposta)
    }
    let sol
    let total = 0, qntd = 0, menor = Infinity, maior = -50, mlhrs = 0, busy = [0, 0, Infinity]
    for (x of respostas) {
        total += x[2]
        qntd++

        if (x[0] < menor) {
            menor = x[0]
        }
        if (x[0] > maior) {
            maior = x[0]
        }

        if (x[1] == "F" && x[2] <= 200) {
            mlhrs++
        }

        if (x[2] < busy[2]) {
            busy = x
        }
    }

    sol = `Media de salario: ${total / qntd}\nMaior idade = ${maior}\nMenor idade = ${menor}\nMulheres com salario menor a R$200 = ${mlhrs}\nPessoa com o menor salario = Idade:${busy[0]} Sexo:${busy[1]} Salario:${busy[2]} `

    alert(sol)
}

function exer21(){
    let op
    let qt1 = 0; let qt2 = 0; let qt3 = 0; let qt4 = 0; let qtnul = 0; let qtbra = 0

    do {
        op = Number(prompt(`Informe \n1. Candidato 1 \n2.  Candidato 2 \n3.  Candidato 3 \n4.  Candidato 4 \n5. Nulo \n6. Branco \n0. Sair`))
        switch(op){
            case 1: qt1++ 
                    break
            case 2: qt2++; break
            case 3: qt3++ 
                    break
            case 4: qt4++; break
            case 5: qtnul++; break
            case 6: qtbra++; break
            case 0: alert(`Encerrando as votaçõrs `); break
            default: alert(`Opção inválida, tente novamente`)     
        }
    }
    while (op != 0)
    let total = qt1 + qt2 + qt3 + qt4 + qtbra + qtnul
    alert(` Candidato 1: ${qt1}  Candidato 2: ${qt2}  Candidato 3: ${qt3}  Candidato 4: ${qt4} Branco: ${qtbra} Nulo: ${qtnul}`)
    alert(`% Branco: ${qtbra/total*100} % Nulo: ${qtnul/total*100}`)
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