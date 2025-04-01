const AnaliseDeDados = require("../src/analiseDeDados");

describe("Testes da classe AnaliseDeDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("constructor - deve inicializar com dados", () => {
    expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
  });

  test("constructor - deve inicializar sem dados", () => {
    const analiseVazia = new AnaliseDeDados();
    expect(analiseVazia.dados).toEqual([]);
  });

  test("adicionarDados - deve adicionar novos dados", () => {
    analise.adicionarDados([6, 7]);
    expect(analise.dados).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("limparDados - deve remover todos os dados", () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test("ordenarDados - deve retornar array ordenado", () => {
    analise = new AnaliseDeDados([5, 3, 1, 4, 2]);
    expect(analise.ordenarDados()).toEqual([1, 2, 3, 4, 5]);
  });

  test("calcularMedia - deve calcular média corretamente", () => {
    expect(analise.calcularMedia()).toBe(3);
  });

  test("calcularMediana - deve calcular mediana para array ímpar", () => {
    expect(analise.calcularMediana()).toBe(3);
  });

  test("calcularMediana - deve calcular mediana para array par", () => {
    analise = new AnaliseDeDados([1, 2, 3, 4]);
    expect(analise.calcularMediana()).toBe(2.5);
  });

  test("calcularModa - deve encontrar a moda", () => {
    analise = new AnaliseDeDados([1, 2, 2, 3, 4]);
    expect(analise.calcularModa()).toEqual([2]);
  });

  test("calcularVariancia - deve calcular variância", () => {
    expect(analise.calcularVariancia()).toBe(2);
  });

  test("calcularDesvioPadrao - deve calcular desvio padrão", () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(1.4142, 4);
  });

  test("encontrarMinimo - deve encontrar valor mínimo", () => {
    expect(analise.encontrarMinimo()).toBe(1);
  });

  test("encontrarMaximo - deve encontrar valor máximo", () => {
    expect(analise.encontrarMaximo()).toBe(5);
  });

  test("normalizarDados - deve normalizar os dados", () => {
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });

  test("calcularPercentil - deve calcular o percentil 50", () => {
    expect(analise.calcularPercentil(50)).toBe(3);
  });

  test("calcularPercentil - deve calcular o percentil 25", () => {
    expect(analise.calcularPercentil(25)).toBe(2);
  });

  test("calcularSoma - deve calcular a soma dos valores", () => {
    expect(analise.calcularSoma()).toBe(15);
  });

  test("calcularProduto - deve calcular o produto dos valores", () => {
    expect(analise.calcularProduto()).toBe(120);
  });

  test("calcularAmplitude - deve calcular a amplitude", () => {
    expect(analise.calcularAmplitude()).toBe(4);
  });

  test("calcularCoeficienteVariacao - deve calcular o coeficiente de variação", () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.1405, 4);
  });

  test("removerOutliers - deve remover valores discrepantes", () => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5, 20]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
  });

  test("calcularCorrelacao - deve calcular correlação entre conjuntos", () => {
    const outroConjunto = [2, 4, 6, 8, 10];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeCloseTo(1, 10);
  });

  // Verifica se o método retorna null quando os conjuntos têm tamanhos diferentes
  test("calcularCorrelacao - deve retornar null para conjuntos com tamanhos diferentes", () => {
    const outroConjunto = [1, 2, 3];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeNull();
  });
});
