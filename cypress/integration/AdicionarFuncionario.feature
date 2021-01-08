Feature: Adicionar funcionário

    COMO Gerente de RH
    DESEJO adicionar funcionário
    PARA facilitar acesso às informações

Background: Login e acesso a seção de adicionar usuário
    Given o acesso ao sistema
    And informadas as credenciais
    And confirmado o acesso ao sistema
    And acesso à seção "Adicionar Funcionário"

#Adicionar usuário
@focus
Scenario: Adicionando funcionário sem detalhes de login
    When é preenchido o nome do funcionário "completo sem login"
    | primeiro nome | nome do meio | último nome | id    | 
    | José          | dos          | Campos      | 00001 |
    And persistir as informações
    Then o funcionário é adicionado ao sistema

#ID repetido

Scenario: Adicionando funcionário sem detalhes de login e com id repetido
    When é preenchido o nome do funcionário "com id repetido"
    | primeiro nome | nome do meio | último nome | id   |
    | José          | dos          | Campos      | 0002 |
    And persistir as informações
    Then o funcionário é não adicionado ao sistema
    And é informado que usuário já existe

#Caractere no campo ID

Scenario: Adicionando funcionário sem detalhes de login e com id inválido
    When é preenchido o nome do funcionário "com id inválido"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 0002A |
    And persistir as informações
    Then o funcionário é não adicionado ao sistema
    And é informado que o id é inválido

#Adicionar foto

Scenario: Adicionando funcionário sem detalhes de login e com foto
    When é preenchido o nome do funcionário "completo com foto"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 00016 |
    And é adicionado uma imagem
    And persistir as informações
    Then o funcionário é adicionado ao sistema

#Campos obrigatórios

Scenario Outline: Adicionando funcionário sem preencher campos obrigatórios sem detalhes de login
    When é preenchido o nome do funcionário "<teste>"
    And persistir as informações
    Then o funcionário não é adicionado ao sistema
    Examples:
        | teste                       | 
        | sem primeiro nome sem login | 
        | sem último nome sem login   |  

Scenario Outline: Adicionando funcionário sem preencher campos obrigatórios com detalhes de login
    When marco a opção de criar detalhes de login
    And é preenchido o nome do funcionário "<teste>"
    And é preenchido os detalhes de login do funcionário "<teste>"
    And persistir as informações
    Then o funcionário não é adicionado ao sistema
    Examples:
        | teste                       | 
        | sem primeiro nome com login | 
        | sem último nome com login   |
        | sem usuário                 |
        | sem senha                   |
        | sem repetir senha           | 

#Detalhes de login

Scenario: Adicionando funcionário com detalhes de login
    When marco a opção de criar detalhes de login
    And é preenchido o nome do funcionário "completo com login"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 00006 |
    And é preenchido os detalhes de login do funcionário "completo com login"
    | username     | password        |
    | josecampos   | testeCypress |
    And persistir as informações
    Then o funcionário é adicionado ao sistema

#Limite de caracteres
Scenario: Preenchendo campos além do limite permitido
    When são preenchidos os campos além do limite
    Then a quantidade de caracteres no campo não passa do limite

#Campo usuário

Scenario: Campo usuário com menos de 5 caracteres
    When marco a opção de criar detalhes de login
    And é preenchido o nome do funcionário "com usuário inválido"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 00012 |
    And é preenchido os detalhes de login do funcionário "com usuário inválido"
    | username     | password        | repassword   |
    | jose         | testeCypress    | testeCypress |
    And persistir as informações
    Then o funcionário não é adicionado ao sistema

#Campo senha

Scenario: Campo senha com menos de 8 caracteres
    When marco a opção de criar detalhes de login
    And é preenchido o nome do funcionário "com senha inválida"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 00013 |
    And é preenchido os detalhes de login do funcionário "com senha inválida"
    | username     | password        | repassword |
    | josecampos   | teste           | teste      |
    And persistir as informações
    Then o funcionário não é adicionado ao sistema

Scenario: Senha muito fraca
    When marco a opção de criar detalhes de login
    And é preenchido o nome do funcionário "com senha muito fraca"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 00015 |
    And é preenchido os detalhes de login do funcionário "com senha muito fraca"
    | username     | password        | repassword |
    | josecampos   | 12345678        | 12345678   |
    And persistir as informações
    Then o funcionário não é adicionado ao sistema

#Campo confirmar senha

Scenario: Campo comfirmar senha não é igual a senha
    When marco a opção de criar detalhes de login
    And é preenchido o nome do funcionário "com repetir senha incompatível"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 00014 |
    And é preenchido os detalhes de login do funcionário "com repetir senha incompatível"
    | username     | password        | repassword |
    | josecampos   | testeCypress    | teste      |
    And persistir as informações 
    Then o funcionário não é adicionado ao sistema
