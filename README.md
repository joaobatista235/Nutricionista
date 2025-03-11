# Aparecida Nutrição 🥗

Este projeto é uma aplicação web desenvolvida para gerenciar pacientes em uma clínica de nutrição. Ele permite adicionar, filtrar, validar e remover pacientes, além de calcular o IMC (Índice de Massa Corporal) de cada um. O projeto foi desenvolvido utilizando **HTML**, **CSS** e **JavaScript**.

---

## Índice 📚

- [Visão Geral](#visão-geral-)
- [Funcionalidades](#funcionalidades-)
- [Tecnologias Utilizadas](#tecnologias-utilizadas-)
- [Como Executar](#como-executar-)
- [Estrutura do Projeto](#estrutura-do-projeto-)
- [Exemplos de Uso](#exemplos-de-uso-)
- [Contribuição](#contribuição-)
- [Licença](#licença-)

---

## Visão Geral 🌟

O **Aparecida Nutrição** é uma aplicação web que permite aos nutricionistas gerenciar seus pacientes de forma eficiente. Ele oferece funcionalidades como:

- Adicionar novos pacientes.
- Filtrar pacientes por nome.
- Validar dados de pacientes (peso, altura, gordura corporal).
- Calcular o IMC de cada paciente.
- Remover pacientes com um duplo clique.

---

## Funcionalidades ✨

### 1. **Adicionar Pacientes**
- Permite adicionar novos pacientes com informações como nome, peso, altura e porcentagem de gordura corporal.
- Valida os dados inseridos antes de adicionar o paciente à tabela.

### 2. **Filtrar Pacientes**
- Filtra os pacientes na tabela com base no nome digitado.

### 3. **Calcular IMC**
- Calcula o IMC (Índice de Massa Corporal) de cada paciente automaticamente.
- Valida se o peso e a altura são válidos antes de calcular o IMC.

### 4. **Remover Pacientes**
- Remove pacientes da tabela com um duplo clique.

### 5. **Buscar Pacientes via API**
- Busca pacientes de uma API externa e os adiciona à tabela.

---

## Tecnologias Utilizadas 🛠️

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização da página.
- **JavaScript**: Lógica de interação e validação.
- **API Externa**: Para buscar pacientes de uma fonte externa.

---

## Como Executar 🚀

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/joaobatista235/Nutricionista.git
   cd Nutricionista
   ```

2. **Abra o arquivo `index.html`**:
   - Basta abrir o arquivo `index.html` no seu navegador.

3. **Interaja com a aplicação**:
   - Adicione novos pacientes, filtre, calcule o IMC e remova pacientes conforme necessário.

---

## Estrutura do Projeto 🗂️

```
Nutricionista/
├── css/
│   ├── reset.css          # Reset de estilos
│   └── index.css          # Estilos principais
├── js/
│   ├── index.js           # Lógica principal
│   ├── form.js            # Validação e adição de pacientes
│   ├── filtra.js          # Filtro de pacientes
│   ├── buscar-pacientes.js # Busca de pacientes via API
│   └── remover-paciente.js # Remoção de pacientes
├── favicon.ico            # Ícone da aplicação
└── index.html             # Página principal
```

---

## Exemplos de Uso 📝

### Adicionar um Novo Paciente
1. Preencha o formulário com os dados do paciente:
   - Nome: João
   - Peso: 80 kg
   - Altura: 1.75 m
   - Gordura Corporal: 20%
2. Clique em **Adicionar**.
3. O paciente será adicionado à tabela e o IMC será calculado automaticamente.

### Filtrar Pacientes
1. Digite o nome de um paciente no campo **Filtro**.
2. A tabela será atualizada para mostrar apenas os pacientes que correspondem ao nome digitado.

### Remover um Paciente
1. Dê um duplo clique em um paciente na tabela.
2. O paciente será removido automaticamente.

### Buscar Pacientes via API
1. Clique no botão **Buscar Paciente**.
2. Pacientes serão buscados de uma API externa e adicionados à tabela.

---

## Licença 📜

Este projeto está licenciado sob a **MIT License** - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [João Batista](https://github.com/joaobatista235).
