Claro 🙂 Vou **traduzir e organizar** as informações de forma clara, **sem criar código ou solução pronta**, só deixando os requisitos bem definidos para você implementar sozinha.

---

## Objetivo do desafio (Lesson 32)

Você precisa **automatizar o processo de login** no site **Wet Driver University**, validando cenários de sucesso e falha.

---

## Passos gerais solicitados pelo instrutor

1. **Acessar o site**

   * Entrar na página inicial (homepage) da **Wet Driver University**.

2. **Interagir com o login**

   * Localizar e clicar no botão de **Login**.

3. **Validar cenários de login**

   ### Cenário 1 — Login válido

   * Usar **credenciais corretas**.
   * Confirmar que a aplicação retorna a **mensagem de sucesso esperada**.

   **Credenciais válidas:**

   * **Username:** `webdriver`
   * **Password:** `webdriver123`

   Resultado esperado:

   * Mensagem indicando que a validação foi bem-sucedida.

   ### Cenário 2 — Login inválido

   * Usar **credenciais inválidas** (exemplo: senha incorreta).
   * Confirmar que a aplicação retorna uma **mensagem de falha**.

   Resultado esperado:

   * Mensagem indicando falha na autenticação.

---

## Estrutura do projeto de testes

* Dentro da pasta **`e2e`**, você deve:

  * Criar um arquivo chamado **`log.feature`**
  * Esse arquivo será responsável por descrever os cenários de login.

---

## Boas práticas exigidas

* **Scenario Outline**

  * Usar *Scenario Outline* para organizar os cenários.
  * Isso facilita a inclusão de novos casos sem duplicar código.

* **DRY (Don’t Repeat Yourself)**

  * Evitar repetição de passos.
  * Reutilizar etapas sempre que possível.

---

## O que o instrutor espera de você

* Que você:

  * Entenda o fluxo de login
  * Separe bem **cenários de sucesso e falha**
  * Estruture o arquivo de feature de forma limpa
  * Siga boas práticas de automação e BDD

Nada de solução pronta — o foco é **raciocínio e organização do teste**.

Se depois você quiser, posso:

* revisar **seu raciocínio**
* avaliar **só a estrutura** (sem escrever por você)
* ou te ajudar a **debugar um erro específico** 😉
