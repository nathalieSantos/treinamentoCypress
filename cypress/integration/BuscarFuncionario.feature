Feature: Buscar Funcionário

    COMO gerente de RH
    DESEJO poder buscar funcionários da lista
    PARA que possa achar os funcionários que eu estou buscando

    Background: Acesso à Lista de Funcionários
        Given o acesso ao sistema
        And informadas as credenciais
        And confirmado o acesso ao sistema
        And acesso à seção "Lista de Funcionários"

    Scenario Outline: Filtrar funcionário por nome
        And preencho o filtro por "<nome>"
        When tentar buscar os funcionários
        Then os funcionários com o "<nome>" são filtrados
        Examples:
            | nome    |
            | Alice   |
            | Sania   |
            | Jasmine |

    Scenario Outline: Filtrar funcionário por nome do surpervisor
        And preencho o filtro supervisor usando "<nomeSupervisor>"
        When tentar buscar os funcionários
        Then os funcionários supervisionados por "<nomeSupervisor>" são filtrados
        Examples:
            | nomeSupervisor |
            | John  Smith    |
            | Aaliyah  Haq   |
            | Fiona  Grace   |            

    Scenario Outline: Filtrar funcionário por ID
        And preencho o filtro usando o "<id>" do funcionário
        When tentar buscar o funcionário
        Then o funcionário do "<id>" é filtrado
        Examples:
            | id   |
            | 0204 |
            | 0261 |
            | 0050 |

    Scenario Outline: Filtrar funcionário por cargo
        And preencho o filtro usando o "<nomeDoCargo>"
        When tentar buscar os funcionários
        Then os funcionários de cargo "<nomeDoCargo>" são filtrados
        Examples:
            | nomeDoCargo              | 
            | Account Assistant        |
            | Chief Financial Officer  |
            | Chief Technical Officer  |
          
    Scenario Outline: Filtrar funcionário por tipo de contrato
        And preencho o filtro usando "<tipoDeContrato>"
        When tentar buscar os funcionários
        Then os funcionários dos contratos de tipo "<tipoDeContrato>" são filtrados
        Examples:
            | tipoDeContrato       |
            | Freelance            | 
            | Full-Time Contract   | 
            | Full-Time Permanent  | 

    Scenario Outline: Filtrar funcionário por divisao atribuida
        And preencho o filtro usando a "<divisaoAtribuida>"
        When tentar buscar os funcionários
        Then os funcionários da divisão "<divisaoAtribuida>" são filtrados
        Examples:
            | divisaoAtribuida  |
            | Administration    |
            | Engineering       |
            | Development       |

    Scenario Outline: Filtrar funcionário por situacao do contrato
        And preencho o filtro incluindo a "<situacaoContratoFuncionario>"
        When tentar buscar os funcionários
        Then os funcionários com a situação "<situacaoContratoFuncionario>" são filtrados
        Examples:
            | situacaoContratoFuncionario | 
            | Current Employees Only      | 
            | Current and Past Employees  | 
            | Past Employees Only         |

     Scenario: Buscar funcionários sem usar filtro
        But deixo o filtro em branco
        When tentar buscar os funcionários
        Then a lista de funcionários continua a mesma
