# Loja Ágil — módulo de carrinho

Projeto de exemplo usado no material **"Pull Requests e Code Review no GitHub"**.

É um módulo pequeno, em JavaScript puro, que calcula o total de um carrinho de
compras aplicando cupons de desconto. O objetivo não é a regra de negócio em si:
o código existe para que haja um diff real para revisar.

## Como rodar

```bash
npm test
```

Os testes usam o runner nativo do Node (`node --test`), sem dependências externas.

## Estrutura

```
src/carrinho.js   cálculo do total do carrinho
src/cupom.js      validação e aplicação de cupons
test/             testes automatizados
```

## Como contribuir

1. Crie uma branch a partir da `main`.
2. Faça commits pequenos e descritivos.
3. Abra um Pull Request preenchendo o template.
4. Aguarde o CI e a revisão antes do merge.
