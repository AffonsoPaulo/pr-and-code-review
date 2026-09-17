const CUPONS = [
  { codigo: 'BEMVINDO10', percentual: 10, validoAte: '2030-12-31' },
  { codigo: 'BLACK25', percentual: 25, validoAte: '2026-11-30' },
  { codigo: 'VOLTASAS10', percentual: 10, validoAte: '2026-02-28' },
];

export function buscarCupom(codigo) {
  return CUPONS.find((cupom) => cupom.codigo === codigo);
}

export function aplicarDesconto(subtotal, codigo) {
  const cupom = buscarCupom(codigo);

  if (cupom === undefined) {
    throw new CupomInvalidoError(codigo);
  }

  return subtotal - subtotal * (cupom.percentual / 100);
}

export class CupomInvalidoError extends Error {
  constructor(codigo) {
    super(`Cupom ${codigo} não existe ou está fora da validade`);
    this.name = 'CupomInvalidoError';
  }
}
