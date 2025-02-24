# Finansia

O **Finansia** é um aplicativo de finanças pessoais desenvolvido para facilitar o controle financeiro individual. Ele permite que usuários acompanhem saldos, despesas mensais e gastos de crédito em um único local. O projeto foi desenvolvido como parte das atividades da disciplina de Desenvolvimento de Projetos para Dispositivos Móveis.

## Sobre o App

O Finansia visa ajudar os usuários a gerenciar suas finanças de forma prática, oferecendo uma interface amigável para registrar e visualizar suas movimentações financeiras. Entre as funcionalidades planejadas, destacam-se:

### Funcionalidades Básicas

- [x] Cadastro e login de usuários com autenticação segura
- [x] Exibição de saldo atual
- [x] Registro de despesas mensais (ex.: contas fixas como água e luz)
- [x] Registro de gastos de crédito (ex.: compras esporádicas como delivery)
- [x] Visualização e edição de transações

### Funcionalidades Adicionais (futuras)

- [x] Análises de gasto por categoria

## Protótipos de Tela

Os protótipos das telas foram desenvolvidos no Figma, com fluxos de navegação e interações configuradas para melhor demonstração do funcionamento do app. [Clique aqui para visualizar os protótipos no Figma](https://www.figma.com/design/aUYQ6gTfruG362dDpeWoAp/FINANSIA?node-id=0-1&node-type=canvas&t=pwDuc94UxbT0paih-0).

## Modelagem do Banco

A modelagem do banco de dados foi realizada para organizar os dados de usuários, saldo e gastos. Abaixo está um diagrama entidade-relacionamento, que ilustra as tabelas e relações:

[Diagrama do Banco de Dados](https://app.diagrams.net/#HMaanux%2FFinansia%2Fmain%2FFInansia#%7B%22pageId%22%3A%223djKlx9JutFwW-Czxqdm%22%7D)

### Estrutura das Tabelas

1. **Tabela `Usuario`**: Armazena informações do usuário (id, primeiroNome, ultimoNome, apelido, senha).
2. **Tabela `Gastos_Mensais`**: Contém registros de despesas mensais fixas (id, usuario_id, nome, valor, data_hora_ganho).
3. **Tabela `Gastos_Credito`**: Contém registros de gastos de crédito esporádicos (id, usuario_id, nome, valor, data_hora_ganho).
4. **Tabela `Ganhos_Mensais`**: Contém registros de ganhos (id, usuario_id, nome, valor, data_hora_ganho).

## Planejamento de Sprints

### Sprint 1 (até Checkpoint 2)

**Objetivo**: Implementar roteamento e esqueleto de telas

- [x] Criar estrutura inicial das telas e rotas de navegação
- [x] Configurar telas estilizadas e navegação entre elas com dados simulados

### Sprint 2 (até Checkpoint 3)

**Objetivo**: Integração de funcionalidades e banco de dados

- [x] Implementar banco de dados local e integração para funcionalidades básicas
- [x] Habilitar login, cadastro, e gerenciamento de saldo e gastos

### Sprint 3 (até Checkpoint 4)

**Objetivo**: Finalização do app e entrega do APK

- [x] Testar e ajustar funcionalidades básicas
- [x] Implementar e testar funcionalidades adicionais selecionadas

## Ambiente de Desenvolvimento e Ferramentas

Para o desenvolvimento do Finansia, foram utilizadas as seguintes tecnologias:

- **Front-End**: [React Native](https://reactnative.dev/)
- **Back-End**: [React Native](https://reactnative.dev/)
- **Banco de Dados**: [Supabase](https://supabase.com/)
- **Ferramentas de Design**: [Figma](https://figma.com) para prototipagem das telas

## Executando o Projeto em Ambiente de Desenvolvimento

1. Clone o repositório:

   ```bash
   git clone https:[https://github.com/Maanux/Finansia.git](https://github.com/Maanux/Finansia.git)
   ```

2. Instale as dependências do projeto:

   ```bash
   cd finansia
   yarn
   yarn add typescript@5.3.3 --dev

   ```
