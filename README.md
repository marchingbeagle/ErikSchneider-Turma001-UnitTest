# Avaliação de Automação de Testes

Este projeto contém testes unitários para a classe `AnaliseDeDados`, que realiza diversas operações estatísticas e matemáticas em conjuntos de dados. Abaixo está um resumo dos testes realizados:

## Testes de Inicialização

- **Construtor**: Verifica se a classe inicializa corretamente com ou sem dados.

## Testes de Manipulação de Dados

- **adicionarDados**: Adiciona novos valores ao conjunto de dados.
- **limparDados**: Remove todos os dados do conjunto.

## Testes Estatísticos

- **ordenarDados**: Retorna os dados em ordem crescente.
- **calcularMedia**: Calcula a média aritmética.
- **calcularMediana**: Calcula a mediana para conjuntos com quantidade ímpar e par de elementos.
- **calcularModa**: Identifica os valores que mais aparecem no conjunto.
- **calcularVariancia**: Calcula a variância estatística.
- **calcularDesvioPadrao**: Calcula o desvio padrão (raiz quadrada da variância).
- **calcularCoeficienteVariacao**: Calcula o coeficiente de variação (desvio padrão relativo à média).

## Testes de Valores Extremos

- **encontrarMinimo**: Retorna o menor valor do conjunto.
- **encontrarMaximo**: Retorna o maior valor do conjunto.
- **calcularAmplitude**: Calcula a diferença entre o valor máximo e mínimo.
- **removerOutliers**: Remove valores estatisticamente discrepantes.

## Testes de Normalização e Percentis

- **normalizarDados**: Mapeia os valores para o intervalo [0,1].
- **calcularPercentil**: Calcula percentis específicos (ex.: 25%, 50%).

## Testes de Operações Matemáticas

- **calcularSoma**: Calcula o somatório de todos os elementos.
- **calcularProduto**: Calcula a multiplicação de todos os valores.

## Testes de Correlação

- **calcularCorrelacao**: Calcula a correlação entre dois conjuntos de dados. Retorna `null` para conjuntos de tamanhos diferentes.

Os testes foram implementados utilizando o framework Jest e cobrem uma ampla gama de cenários para garantir a confiabilidade e precisão das operações realizadas pela classe `AnaliseDeDados`.
