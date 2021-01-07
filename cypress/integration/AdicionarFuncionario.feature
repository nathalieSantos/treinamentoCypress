Feature: Adicionar funcionário

    COMO Gerente de RH
    DESEJO adicionar funcionário
    PARA facilitar acesso às informações

Background: Login e acesso a seção de adicionar usuário
    Given o acesso ao sistema
    And informadas as credenciais
    And acesso à seção "Adicionar Funcionário"

#Adicionar usuário

Scenario: Adicionando funcionário sem detalhes de login
    When são preenchidos os campos para adicionar funcionário
    | first_name | middle_name | last_name |
    | José       | dos         | Campos    |
    Then o funcionário é adicionado ao sistema

#ID repetido

Scenario: Adicionando funcionário sem detalhes de login e com id repetido
    When são preenchidos os campos para adicionar funcionário
    | first_name | middle_name | last_name |
    | José       | dos         | Campos    |
    And é colocado um id já existente
    | id   |
    | 0002 |
    Then o funcionário é não adicionado ao sistema
    And erro de usuário já existente aparece

#Caractere no campo ID

Scenario: Adicionando funcionário sem detalhes de login e com id inválido
    When são preenchidos os campos para adicionar funcionário
    | first_name | middle_name | last_name |
    | José       | dos         | Campos    |
    And é colocado um id inválido
    | id   |
    | 000A |
    Then o funcionário é não adicionado ao sistema
    And erro de id inválido aparece

#Adicionar foto

Scenario: Adicionando funcionário sem detalhes de login e com foto
    When são preenchidos os campos para adicionar funcionário
    | first_name | middle_name | last_name |
    | José       | dos         | Campos    |
    And é adicionado uma imagem
    Then o funcionário é adicionado ao sistema

#Campos obrigatórios

Scenario Outline: Adicionando funcionário sem preencher campos obrigatórios sem detalhes de login
    When são preenchidos os campos para adicionar funcionário sem <sem>
    Then o funcionário não é adicionado ao sistema
    Examples:
        | first_name | middle_name | last_name | 
        |            | dos         | Campos    | 
        | José       | dos         |           | 
        |            | dos         |           | 

Scenario Outline: Adicionando funcionário sem preencher campos obrigatórios com detalhes de login
    When marco a opção de criar detalhes de login
    And são preenchidos os campos para adicionar funcionário
    Then o funcionário não é adicionado ao sistema
    Examples:
        | first_name | middle_name | last_name | username  | password        | re_password     |
        |            | dos         | Campos    | josecampos| testandoCypress | testandoCypress |
        | José       | dos         |           | josecampos| testandoCypress | testandoCypress |
        | José       | dos         | Campos    |           | testandoCypress | testandoCypress |
        | José       | dos         | Campos    | josecampos|                 | testandoCypress |
        | José       | dos         | Campos    | josecampos| testandoCypress |                 |

#Detalhes de login

Scenario: Adicionando funcionário com detalhes de login
    When são preenchidos os campos para adicionar funcionário
    | first_name | middle_name | last_name |
    | José       | dos         | Campos    |
    And marco a opção de criar detalhes de login
    And são preenchidos os campos para login do funcionário
    | username     | password        |
    | josecampos   | Testecomcypress |
    Then o funcionário é adicionado ao sistema

#Limite de caracteres
Scenario: Preenchendo campos além do limite permitido
    When são preenchidos os campos além do limite
    Then a quantidade de caracteres no campo não passa do limite

#Campo usuário

Scenario: Campo usuário com menos de 5 caracteres
    When são preenchidos os campos para login do funcionário
    Then o funcionário não é adicionado ao sistema

#Campo senha

Scenario: Campo senha com menos de 8 caracteres
    When são preenchidos os campos para login do funcionário
    Then o funcionário não é adicionado ao sistema

Scenario: Senha muito fraca
    When são preenchidos os campos para login do funcionário
    Then o funcionário não é adicionado ao sistema

#Campo confirmar senha

Scenario: Campo comfirmar senha não é igual a senha
    When são preenchidos os campos para login do funcionário
    Then o funcionário não é adicionado ao sistema
