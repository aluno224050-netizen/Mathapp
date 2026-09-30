import * as readline from 'readline';
// 1. IMPORTANTE: Adicionadas as funções do círculo no import
import { add, sub, mul, div, area, perimetro, areac, perimetroc } from './modules/math';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

async function menu() {
  let continuar = true;

  while (continuar) {
    console.log("\n=== CALCULADORA ARITMÉTICA ===");
    console.log("1. Adição (+)");
    console.log("2. Subtração (-)");
    console.log("3. Multiplicação (*)");
    console.log("4. Divisão (/)");
    console.log("5. Área retângulo");
    console.log("6. Perímetro retângulo");
    console.log("7. Área Círculo");
    console.log("8. Perímetro Círculo");
    console.log("9. Sair");
    
    const opcaoInput = await question("Escolha uma opção (1-9): ");
    
    // Convertemos para número para evitar o erro do TypeScript no IF/SWITCH
    const opcao = parseInt(opcaoInput, 10);

    if (opcao === 9) {
      console.log("A sair da aplicação... Até breve!");
      continuar = false;
      rl.close();
      break;
    }

    // Validação da opção numérica
    if (isNaN(opcao) || opcao < 1 || opcao > 9) {
      console.log("Opção inválida! Tente novamente.");
      continue;
    }

    let num1Input = "";
    let num2Input = "";

    // LÓGICA DO CÍRCULO: Opções 7 e 8 apenas pedem o raio
    if (opcao === 7 || opcao === 8) {
      num1Input = await question("Introduza o raio do círculo: ");
    } else {
      num1Input = await question("Introduza o primeiro número: ");
      num2Input = await question("Introduza o segundo número: ");
    }

    const num1 = parseFloat(num1Input);
    // Se for círculo, definimos num2 como 0 apenas para passar na validação do isNaN
    const num2 = (opcao === 7 || opcao === 8) ? 0 : parseFloat(num2Input);

    // Valida se os valores introduzidos são números válidos
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Erro: Por favor, introduza números válidos.");
      continue;
    }

    // Validação extra de inteiros APENAS para as 4 operações básicas, se assim desejares
    if (opcao <= 4 && (!Number.isInteger(num1) || !Number.isInteger(num2))) {
      console.log("Erro: Para estas operações introduza apenas números inteiros.");
      continue;
    }

    try {
      let resultado: number;

      switch (opcao) {
        case 1:
          resultado = add(num1, num2);
          console.log(`\n> Resultado: ${num1} + ${num2} = ${resultado}`);
          break;
        case 2:
          resultado = sub(num1, num2);
          console.log(`\n> Resultado: ${num1} - ${num2} = ${resultado}`);
          break;
        case 3:
          resultado = mul(num1, num2);
          console.log(`\n> Resultado: ${num1} * ${num2} = ${resultado}`);
          break;
        case 4:
          resultado = div(num1, num2);
          console.log(`\n> Resultado: ${num1} / ${num2} = ${resultado}`);
          break;
        case 5:
          resultado = area(num1, num2);
          console.log(`\n> Área Retângulo: ${resultado}`);
          break;
        case 6:
          resultado = perimetro(num1, num2);
          console.log(`\n> Perímetro Retângulo: ${resultado}`);
          break;
        case 7:
          resultado = areac(num1); // num1 é o raio
          console.log(`\n> Área Círculo: ${resultado}`);
          break;
        case 8:
          resultado = perimetroc(num1); // num1 é o raio
          console.log(`\n> Perímetro Círculo: ${resultado}`);
          break;
      }
    } catch (error: any) {
      console.log(`\nErro ao executar a operação: ${error.message}`);
    }
  }
}

menu();
