import { aplicarDesconto } from './cupom.js';

export function calcularSubtotal(itens) {
  return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

export function calcularTotal(itens, codigoCupom) {
  const subtotal = calcularSubtotal(itens);

  if (!codigoCupom) {
    return subtotal;
  }

  return aplicarDesconto(subtotal, codigoCupom);
}
