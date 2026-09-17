import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcularSubtotal, calcularTotal } from '../src/carrinho.js';

const itens = [
  { nome: 'Caneca', preco: 39.9, quantidade: 2 },
  { nome: 'Camiseta', preco: 89.9, quantidade: 1 },
];

test('soma preço x quantidade de todos os itens', () => {
  assert.equal(calcularSubtotal(itens), 169.7);
});

test('carrinho vazio tem subtotal zero', () => {
  assert.equal(calcularSubtotal([]), 0);
});

test('sem cupom, o total é igual ao subtotal', () => {
  assert.equal(calcularTotal(itens), 169.7);
});

test('aplica o percentual de desconto de um cupom válido', () => {
  assert.equal(calcularTotal(itens, 'BEMVINDO10'), 152.73);
});

test('cupom inexistente não derruba o cálculo e devolve o subtotal', () => {
  assert.equal(calcularTotal(itens, 'PROMO50'), 169.7);
});

test('cupom vencido (VOLTASAS10, 28/02/2026) não aplica desconto', () => {
  assert.equal(calcularTotal(itens, 'VOLTASAS10'), 169.7);
});

test('a validade é avaliada na data informada, não no relógio da máquina', () => {
  const antesDeVencer = new Date('2026-01-10');
  assert.equal(calcularTotal(itens, 'VOLTASAS10', antesDeVencer), 152.73);
});
