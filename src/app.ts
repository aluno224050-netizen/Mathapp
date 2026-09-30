import * as readline from 'readline';
import { add, sub, mul, div, area, perimetro } from './modules/math';

// Configuração da interface de leitura do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função utilitária para fazer perguntas no terminal usando Promises
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
    console.log("5. Area retangulo");
    console.log("6. Perimetro retangulo");
    console.log("7. Sair");
    
    const opcao = await question("Escolha uma opção (1-5): ");

    if (opcao === "7") {
      console.log("A sair da aplicação... Até breve!");
      continuar = false;
      rl.close();
      break;
    }

    if (!["1", "2", "3", "4", "5", "6"].includes(opcao)) {
      console.log("Opção inválida! Tente novamente.");
      continue;
    }

    // Pede os dois operandos ao utilizador
    const num1Input = await question("Introduza o primeiro número inteiro: ");
    const num2Input = await question("Introduza o segundo número inteiro: ");

    const num1 = parseInt(num1Input, 10);
    const num2 = parseInt(num2Input, 10);

    // Valida se os valores introduzidos são números válidos
    if (isNaN(num1) || !Number.isInteger(num1) || isNaN(num2) || !Number.isInteger(num2)) {
      console.log("Erro: Por favor, introduza apenas números inteiros válidos.");
      continue;
    }

    // Executa a operação escolhida
    try {
      let resultado: number;

      switch (opcao) {
        case "1":
          resultado = add(num1, num2);
          console.log(`\n> Resultado: ${num1} + ${num2} = ${resultado}`);
          break;
        case "2":
          resultado = sub(num1, num2);
          console.log(`\n> Resultado: ${num1} - ${num2} = ${resultado}`);
          break;
        case "3":
          resultado = mul(num1, num2);
          console.log(`\n> Resultado: ${num1} * ${num2} = ${resultado}`);
          break;
        case "4":
          resultado = div(num1, num2);
          console.log(`\n> Resultado: ${num1} / ${num2} = ${resultado}`);
          break;
        case "5":
          resultado = area(num1, num2);
          console.log(`\n> Area: ${resultado}`);
          break;
        case "6":
          resultado = perimetro(num1, num2);
          console.log(`\n> Perimetro: ${resultado}`);
          break;
      }
    } catch (error: any) {
      // Captura a exceção de divisão por zero lançada pelo módulo math.ts
      console.log(`\nErro ao executar a operação: ${error.message}`);
    }
  }
}

// Inicia a aplicação
menu();
