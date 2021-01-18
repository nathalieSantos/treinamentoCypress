Feature: Buscar Funcionário

    COMO gerente de RH
    DESEJO poder buscar funcionários da lista
    PARA que possa achar os funcionários que eu estou buscando

    Background: Acesso à Lista de Funcionários
        Given o acesso ao sistema
        And informadas as credenciais
        And confirmado o acesso ao sistema
        And acesso à seção "Lista de Funcionários"

    #RN01: É possível buscar funcionários por nome
    Scenario Outline: Filtrar funcionário por nome
        And preencho o filtro por "<nome>"
        When tentar buscar os funcionários
        Then os funcionários com o "<nome>" são filtrados
        Examples:
            | nome    |
            | Alice   |
            | Sania   |
            | Jasmine |

    #RN02: É possível buscar funcionários por nome do supervisor
    Scenario Outline: Filtrar funcionário por nome do surpervisor
        And preencho o filtro supervisor usando "<nomeSupervisor>"
        When tentar buscar os funcionários
        Then os funcionários supervisionados por "<nomeSupervisor>" são filtrados
        Examples:
            | nomeSupervisor |
            | John  Smith    |
            | Aaliyah  Haq   |
            | Fiona  Grace   |            

    #RN03: É possível buscar um funcionário por ID
    Scenario Outline: Filtrar funcionário por ID
        And preencho o filtro usando o "<id>" do funcionário
        When tentar buscar o funcionário
        Then o funcionário do "<id>" é filtrado
        Examples:
            | id   |
            | 0002 |
            | 0007 |
            | 0208 |

    #RN04: É possível buscar funcionários por cargo
    Scenario Outline: Filtrar funcionário por cargo
        And preencho o filtro usando o "<nomeDoCargo>"
        When tentar buscar os funcionários
        Then os funcionários de cargo "<nomeDoCargo>" são filtrados
        Examples:
            | nomeDoCargo              | 
            | Account Assistant        |
            | Chief Financial Officer  |
            | Chief Technical Officer  |
          
    #RN05: É possível buscar funcionários por tipo de contrato
    Scenario Outline: Filtrar funcionário por tipo de contrato
        And preencho o filtro usando "<tipoDeContrato>"
        When tentar buscar os funcionários
        Then os funcionários dos contratos de tipo "<tipoDeContrato>" são filtrados
        Examples:
            | tipoDeContrato       |
            | Freelance            | 
            | Full-Time Contract   | 
            | Full-Time Permanent  | 

    #RN06: É possível buscar funcionários por divisao atribuida
    Scenario Outline: Filtrar funcionário por divisao atribuida
        And preencho o filtro usando a "<divisaoAtribuida>"
        When tentar buscar os funcionários
        Then os funcionários da divisão "<divisaoAtribuida>" são filtrados
        Examples:
            | divisaoAtribuida  |
            | Administration    |
            | Engineering       |
            | Development       |

    #RN07: É possível buscar funcionários por situacao do contrato
    Scenario Outline: Filtrar funcionário por situacao do contrato
        And preencho o filtro incluindo a "<situacaoContratoFuncionario>"
        When tentar buscar os funcionários
        Then os funcionários com a situação "<situacaoContratoFuncionario>" são filtrados
        Examples:
            | situacaoContratoFuncionario | 
            | Current Employees Only      | 
            | Current and Past Employees  | 
            | Past Employees Only         |