Feature: Editar Relatório

COMO Gerente de RH
DESEJO editar relatório 
PARA facilitar o acesso às informações que desejo verificar
    
    Background: 
        Given o acesso ao sistema
        And informadas as credenciais
        And confirmado o acesso ao sistema
        And acesso à seção "Lista de Funcionários"
        And acesso à seção "Relatórios"
        And acesso à seção "Editar Relatórios"

#RN01: É possível adicionar números na seção nome
    Scenario Outline: Adicionando Números
        When inserir números na seção '<nome>'
        And confirmar alteração realizada
        Then é exibido confirmação de mudança
        And é exibido números no nome
        Examples:
            | nome                   | 
            | 12356                  | 

#RN02: É possível editar critérios de seleção    
    Scenario Outline: Editando critérios
        When adicionar '<critérios>'
        And selecionar '<Idioma>' 
        And confirmar alteração realizada
        Then é exibido confirmação de mudança
        Examples:
            | critérios               | Idioma              | 
            | language                | Arabic              |

#RN03: É possível editar seção de exibição  
    Scenario Outline: Editando seção de exibição
        When editar seção de grupos de '<Exibição>' 
        And editar '<CamposDeExibição>' 
        And confirmar alteração realizada
        Then é exibido confirmação de alteração realizada
        Examples:
            | Exibição             | CamposDeExibição   | 
            | Dependents           | Relationship       | 

#RN04: É possível editar relatórios para nomes iguais
    Scenario Outline: Editando relatórios para nomes iguais
        When inserir informações na seção "<Nome>"
        And confirmar alteração realizada
        Then é exibido confirmação de alteração realizada
        And é exibido relatórios com nomes iguais
        Examples:
            | Nome                   | 
            | Relatório de presença  |

#RN05: Não é possível adicionar dois critérios de exibição iguais  
    Scenario: Adicionando critérios de exibição iguais
        When adicionar seção de grupos de exibição 
            | DOGroups                | 
            | Dependents              | 
        And tento adicionar a mesma seção de grupos de exibição 
            | DOGroups                | 
            | Dependents              |    
        Then é exibido apenas uma seção
