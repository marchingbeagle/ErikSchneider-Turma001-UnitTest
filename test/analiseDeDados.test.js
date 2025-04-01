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
});
