Feature: Excluir Funcionário

    COMO Gerente de RH
    DESEJO Poder excluir funcionários da lista
    PARA que possa manter a lista organizada

    Background: Acesso à Lista de Funcionários
        Given o acesso ao sistema
        And informadas as credenciais
        And confirmado o acesso ao sistema
        And acesso à seção "Lista de Funcionários"

    Scenario: Excluir Funcionário
        And selecionar um funcionário
        When tentar excluir este funcionário
        And confirmar a operação de exclusão
        And a operação for bem sucedida
        Then o funcionário foi excluído

    Scenario: Excluir Todos os Funcionários
        And selecionar todos os funcionários
        When tentar excluir estes funcionários
        And confirmar a operação de exclusão
        And a operação for bem sucedida
        Then o funcionários foram excluídos

    Scenario: Exclusão desabilitada
        And não selecionar nenhum funcionário
        When tentar excluir um funcionário
        Then a exclusão não é permitida