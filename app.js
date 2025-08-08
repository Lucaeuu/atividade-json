const fs = require('fs');

// 1. Ler produtos
function listarProdutos() {
  const dados = fs.readFileSync('produtos.json', 'utf8');
  const produtos = JSON.parse(dados);
  console.log(produtos);
}

// 2. Adicionar produto
function adicionarProduto(novoProduto) {
  const dados = fs.readFileSync('produtos.json', 'utf8');
  const produtos = JSON.parse(dados);
  produtos.push(novoProduto);
  fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));
  console.log('Produto adicionado!');
}

// 3. Atualizar produto
function atualizarPreco(id, novoPreco) {
  const dados = fs.readFileSync('produtos.json', 'utf8');
  const produtos = JSON.parse(dados);
  const produto = produtos.find(p => p.id === id);
  if (produto) {
    produto.preco = novoPreco;
    fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));
    console.log('Preço atualizado!');
  } else {
    console.log('Produto não encontrado.');
  }
}

// 4. Excluir produto
function excluirProduto(id) {
  const dados = fs.readFileSync('produtos.json', 'utf8');
  let produtos = JSON.parse(dados);
  produtos = produtos.filter(p => p.id !== id);
  fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));
  console.log('Produto excluído!');
}

// Exemplo de chamadas (os alunos podem comentar e testar uma por uma)
listarProdutos();
// adicionarProduto({ id: 5, nome: 'Webcam', preco: 200.00 });
// atualizarPreco(3, 170.00);
// excluirProduto(2);
