const CUPONS = [
  { codigo: 'BEMVINDO10', percentual: 10, validoAte: '2030-12-31' },
  { codigo: 'BLACK25', percentual: 25, validoAte: '2026-11-30' },
  { codigo: 'VOLTASAS10', percentual: 10, validoAte: '2026-02-28' },
];

export function buscarCupom(codigo) {
  return CUPONS.find((cupom) => cupom.codigo === codigo);
}

function estaValido(cupom, hoje) {
  return new Date(cupom.validoAte) >= hoje;
}

export function aplicarDesconto(subtotal, codigo, hoje = new Date()) {
  const cupom = buscarCupom(codigo);

  if (!cupom || !estaValido(cupom, hoje)) {
    return subtotal;
  }

  return subtotal - subtotal * (cupom.percentual / 100);
}
