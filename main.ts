function sorteadorNum(): number {
    return Math.floor(Math.random() * 100)
}

function sorteadorName(): string {
    const nomes: string[] = ["Lucas", "Sophia", "Miguel", "Isabella", "Gabriel", "Helena", "Arthur", "Valentina", "João", "Laura", "Eduardo", "Mariana", "Rafael", "Beatriz", "Matheus", "Alice", "Davi", "Julia", "Pedro", "Ana"];
    
    const sorteio = Math.floor(Math.random() * nomes.length);
    
    return nomes[sorteio];
}

function multiplicadora(): number {
    const num1 = sorteadorNum();
    const num2 = sorteadorNum();

    return num1 * num2;
    
}

function contabancaria(): string {
    const nome = sorteadorName()
    return nome + " tem de saldo de R$ " + `${multiplicadora()}`+ " na conta."
}

console.log(contabancaria())