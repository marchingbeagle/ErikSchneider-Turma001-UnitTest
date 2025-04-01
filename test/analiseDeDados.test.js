const AnaliseDeDados = require("../src/analiseDeDados");

describe("Testes da classe AnaliseDeDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  // Verifica se o construtor inicializa corretamente o array de dados
  test("constructor - deve inicializar com dados", () => {
    expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
  });

  // Verifica se o construtor inicializa com array vazio quando não são passados dados
  test("constructor - deve inicializar sem dados", () => {
    const analiseVazia = new AnaliseDeDados();
    expect(analiseVazia.dados).toEqual([]);
  });

  // Verifica se o método adicionarDados concatena novos valores ao array existente
  test("adicionarDados - deve adicionar novos dados", () => {
    analise.adicionarDados([6, 7]);
    expect(analise.dados).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  // Verifica se o método limparDados zera o array de dados
  test("limparDados - deve remover todos os dados", () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  // Verifica se o método ordenarDados retorna os valores em ordem crescente
  test("ordenarDados - deve retornar array ordenado", () => {
    analise = new AnaliseDeDados([5, 3, 1, 4, 2]);
    expect(analise.ordenarDados()).toEqual([1, 2, 3, 4, 5]);
  });

  // Verifica se o método calcularMedia retorna a média aritmética correta
  test("calcularMedia - deve calcular média corretamente", () => {
    expect(analise.calcularMedia()).toBe(3);
  });

  // Verifica o cálculo da mediana para array com quantidade ímpar de elementos
  test("calcularMediana - deve calcular mediana para array ímpar", () => {
    expect(analise.calcularMediana()).toBe(3);
  });

  // Verifica o cálculo da mediana para array com quantidade par de elementos
  test("calcularMediana - deve calcular mediana para array par", () => {
    analise = new AnaliseDeDados([1, 2, 3, 4]);
    expect(analise.calcularMediana()).toBe(2.5);
  });

  // Verifica se o método calcularModa identifica o valor que mais aparece no conjunto
  test("calcularModa - deve encontrar a moda", () => {
    analise = new AnaliseDeDados([1, 2, 2, 3, 4]);
    expect(analise.calcularModa()).toEqual([2]);
  });

  // Verifica se o método calcularVariancia retorna a variância estatística correta
  test("calcularVariancia - deve calcular variância", () => {
    expect(analise.calcularVariancia()).toBe(2);
  });

  // Verifica se o desvio padrão é calculado corretamente (raiz quadrada da variância)
  test("calcularDesvioPadrao - deve calcular desvio padrão", () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(1.4142, 4);
  });

  // Verifica se o método encontrarMinimo retorna o menor valor do conjunto
  test("encontrarMinimo - deve encontrar valor mínimo", () => {
    expect(analise.encontrarMinimo()).toBe(1);
  });

  // Verifica se o método encontrarMaximo retorna o maior valor do conjunto
  test("encontrarMaximo - deve encontrar valor máximo", () => {
    expect(analise.encontrarMaximo()).toBe(5);
  });

  // Verifica se o método normalizarDados mapeia os valores para o intervalo [0,1]
  test("normalizarDados - deve normalizar os dados", () => {
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });

  // Verifica o cálculo do percentil 50 (que corresponde à mediana)
  test("calcularPercentil - deve calcular o percentil 50", () => {
    expect(analise.calcularPercentil(50)).toBe(3);
  });

  // Verifica o cálculo do percentil 25 (primeiro quartil)
  test("calcularPercentil - deve calcular o percentil 25", () => {
    expect(analise.calcularPercentil(25)).toBe(2);
  });

  // Verifica se o método calcularSoma retorna o somatório de todos os elementos
  test("calcularSoma - deve calcular a soma dos valores", () => {
    expect(analise.calcularSoma()).toBe(15);
  });

  // Verifica se o método calcularProduto retorna a multiplicação de todos os valores
  test("calcularProduto - deve calcular o produto dos valores", () => {
    expect(analise.calcularProduto()).toBe(120);
  });

  // Verifica se o método calcularAmplitude retorna a diferença entre o valor máximo e mínimo
  test("calcularAmplitude - deve calcular a amplitude", () => {
    expect(analise.calcularAmplitude()).toBe(4);
  });

  // Verifica o cálculo do coeficiente de variação (desvio padrão relativo à média)
  test("calcularCoeficienteVariacao - deve calcular o coeficiente de variação", () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.1405, 4);
  });

  // Verifica se o método removerOutliers elimina valores estatisticamente discrepantes
  test("removerOutliers - deve remover valores discrepantes", () => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5, 20]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
  });

  // Verifica se o cálculo de correlação funciona para conjuntos correlacionados positivamente
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
