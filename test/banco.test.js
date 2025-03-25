const Banco = require("../src/banco");

describe("Testes da classe Banco", () => {
  let conta;

  beforeEach(() => {
    conta = new Banco("José", 1000);
  });

  test("depositar", () => {
    conta.depositar(100);
    expect(conta.obterSaldo()).toBe(1100);
  });

  test("sacar", () => {
    conta.sacar(100);
    expect(conta.obterSaldo()).toBe(900);
  });

  test("transferir", () => {
    const contaDestino = new Banco("Maria", 1000);
    conta.transferir(100, contaDestino);
    expect(conta.obterSaldo()).toBe(900);
    expect(contaDestino.obterSaldo()).toBe(1100);
  });

  test("obterSaldo", () => {
    expect(conta.obterSaldo()).toBe(1000);
  });

  test("obterHistorico", () => {
    conta.depositar(100);
    conta.transferir(100, new Banco("Maria", 1000));

    const historico = [
      { tipo: "Depósito", valor: 100 },
      { tipo: "Saque", valor: 100 },
      { tipo: "Transferência", valor: 100, destino: "Maria" },
    ];

    expect(conta.obterHistorico()).toStrictEqual(historico);
  });

  test("definirLimiteDeSaque", () => {
    conta.definirLimiteDeSaque(100);
    expect(conta.limiteDeSaque).toBe(100);
  });

  test("verificarLimiteDeSaque", () => {
    conta.definirLimiteDeSaque(100);
    expect(conta.verificarLimiteDeSaque(50)).toBeTruthy();
  });

  test("aplicarJuros", () => {
    conta.aplicarJuros(10);
    expect(conta.obterSaldo()).toBe(1100);
  });

  test("pagarConta", () => {
    conta.pagarConta(100, "Conta de luz");
    expect(conta.obterSaldo()).toBe(900);
  });

  test("obterTotalDepositado", () => {
    conta.depositar(100);
    conta.depositar(100);
    expect(conta.obterTotalDepositado()).toBe(200);
  });
});
