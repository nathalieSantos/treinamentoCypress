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
    Then o funcionário não é adicionado ao sistema
    And é informado usuário já existente

#Caractere no campo ID

Scenario: Adicionando funcionário sem detalhes de login e com id inválido
    When é preenchido o nome do funcionário "com id inválido"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 0002A |
    And persistir as informações
    Then o funcionário não é adicionado ao sistema
    And é informado erro "com id inválido"

#Adicionar foto

Scenario: Adicionando funcionário sem detalhes de login e com foto
    When é preenchido o nome do funcionário "completo com foto"
    | primeiro nome | nome do meio | último nome | id    |
    | José          | dos          | Campos      | 00016 |
    And é adicionado uma imagem
    And persistir as informações
    Then o funcionário é adicionado ao sistema

#Campos obrigatórios

Scenario Outline: Adicionando funcionário <teste>
    When é preenchido o nome do funcionário "<teste>"
    | primeiro nome | nome do meio | último nome | id    |
    |               | dos          | Campos      | 00002 |
    | José          | dos          |             | 00003 |
    | José          | dos          | Campos      |       |
    And persistir as informações
    Then o funcionário não é adicionado ao sistema
    And é informado erro "<teste>"
    Examples:
        | teste                       | 
        | sem primeiro nome sem login | 
        | sem último nome sem login   |
        | sem id                      |  

Scenario Outline: Adicionando funcionário <teste>
    When marco a opção de criar detalhes de login
    And é preenchido o nome do funcionário "<teste>"
    | primeiro nome | nome do meio | último nome | id    |
    |               | dos          | Campos      | 00007 |
    | José          | dos          |             | 00008 |
    | José          | dos          | Campos      | 00009 |
    | José          | dos          | Campos      | 00010 |
    | José          | dos          | Campos      | 00011 |
    And é preenchido os detalhes de login do funcionário "<teste>"
    | username     | password        | repassword   |
    | josecampos   | testeCypress    | testeCypress |
    | josecampos   | testeCypress    | testeCypress |
    |              | testeCypress    | testeCypress |
    | josecampos   |                 | testeCypress |
    | josecampos   | testeCypress    |              |
    And persistir as informações
    Then o funcionário não é adicionado ao sistema
    And é informado erro "<teste>"
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
    | username     | password        | repassword   |
    | josecampos   | testeCypress    | testeCypress |
    And persistir as informações
    Then o funcionário é adicionado ao sistema

#Limite de caracteres

Scenario: Preenchendo campos além do limite permitido
    When marco a opção de criar detalhes de login
    And são preenchidos os campos além do "limite de caracteres"
    Then a quantidade de caracteres nos campo não passa do "limite de caracteres"

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
    And é informado erro "com usuário inválido"

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
    And é informado erro "com senha inválida"

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
    And é informado erro "com senha muito fraca"

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
    And é informado erro "com repetir senha incompatível"
