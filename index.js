if (process.argv.length < 6) {
    console.log("Seja bem vindo a Loja CodeFuture")
    console.log("Por favor caro usuatio /n, insira os valores de N, S, K, preço e quantidade para cada produto.");
    process.exit(1);
}

const N = parseInt(process.argv[2]);
const S = parseInt(process.argv[3]);
const K = parseInt(process.argv[4]);

const precos = new Map();
const quantidades = new Map();

for (let i = 5; i < process.argv.length; i += 2) {
    precos.set(i, parseInt(process.argv[i]));
    quantidades.set(i, parseInt(process.argv[i + 1]));
}

let precoTotal = 0;
for (let i = 5; i < process.argv.length; i += 2) {
    precoTotal += precos.get(i) * quantidades.get(i);
}

const taxaEnvio = precoTotal >= S ? 0 : K;
const valorTotal = precoTotal + taxaEnvio;

console.log(valorTotal);
