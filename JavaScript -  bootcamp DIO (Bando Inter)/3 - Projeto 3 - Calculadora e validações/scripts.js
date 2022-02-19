window.onload=calc


function calc() {
    var  operação  = Number(prompt('Escolha a operação: \n 1 - adição \n 2 - subtração \n 3 - multiplicação \n 4 - divisão real \n 5 - potenciação'))
    
    //Função de validação do menu
    function oneToFive() {
        if (operação>0&&operação<6) {
            return true
        } else {
            return false
        }
    }

    if (!oneToFive()) {
        calc()
    } else {
        valores()
        function valores(){
            //Valores para cálculo
            let v1 = Number(prompt('Informe o número 1:'))
            let v2 = Number(prompt('Insira o número 2:'))

            if (!v1||!v2) {
                alert('Um valor inválido foi informado!')
                valores()
            }else {
                let resultado;

                //switch do menu (direciona para a função espécífica)
                switch (operação) {
                    case 1:
                        soma()
                        break
                    case 2:
                        subtração()
                        break
                    case 3: 
                        multiplicação()
                        break
                    case 4:
                        divisãoReal()
                        break
                    case 5:
                        potencia()        
                }
                andNow()

                function andNow() {
                    let sn = Number(prompt('Gostaria de fazer outro cálculo? \n 1 - sim \n 2 - não'))

                    function snValid() {
                        if (sn===1||sn===2) {
                            return true
                        } else {
                            return false
                        }
                    }

                    if (!sn||!snValid()) {
                        alert('Opção inválida!')
                        andNow()
                    }else {
                        switch (sn) {
                            case 1:
                                calc()
                                break
                            case 2:
                                alert('Muito obrigado!')
                        }
                    }                        
                }
                
                //Funções de cálculo
                function soma() {
                    resultado = v1+v2
                    alert(`A soma de ${v1} e ${v2} é ${resultado}`)
                }

                function subtração() {
                    resultado = v1-v2
                    alert(`A diferença entre ${v1} e ${v2} é ${resultado}.`)
                }

                function multiplicação() {
                    resultado = v1*v2
                    alert(`O produto de ${v1} x ${v2} é ${resultado}.`)
                }

                function divisãoReal() {
                    resultado = v1 / v2
                    alert(`O resultado de ${v1}/${v2} é ${resultado}.`)
                }

                function potencia() {
                    resultado = v1**v2
                    alert(`o resultado de ${v1} elevado à ${v2}ª potência é ${resultado}.`)
                }

            }
        }     
    }
}









//Função de validação dos números p/ cálculo
/*function numero() {
    if (!v10 {
        alert('')
    } else {
        return false
    }
}*/









