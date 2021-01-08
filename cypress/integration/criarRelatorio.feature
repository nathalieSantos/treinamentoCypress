Feature: Criar Relatório

    COMO gerente do Departamento de Pessoas
    DESEJO criar Relatórios 
    PARA documentar as informações dos funcionários
    
    Background: 
        Given o acesso ao sistema
        And informadas as credenciais
        And confirmado o acesso ao sistema
		And acesso à seção "PIM"
		And acesso à seção "Reports"
        And acesso à seção "Add"
  
#RN01: É possível criar um relatório 
    Scenario: Criar relatório
        And preencher as informações
            | nome                 | seleçãoGrupo |
            | Relatório de Formados| Education    |
        And adiciono o grupo de campos a ser exibido
		When confirmar envio do relatório
        Then o relatório foi criado

#RN02: É necessário preencher os campos que são obrigatórios 
    Scenario: Enviar relatório vazio 
        And não se forneça nenhuma informação
        When confirmar envio do relatório
        Then são indicados os inputs requeridos 
@focus  		
#RN03: É possível adicionar críterios durante a criação do relatório
#RN04: Ao adicionar critérios estes passam a ser obrigatórios
	Scenario Outline: Adiciona critérios
		And preencher informações 
            | nome       	   	     			    | seleçãoGrupo    | 
            | Relatório de Experiência Profissional | Work Experience | 
		And adiciono o grupo de campos a ser exibido
		When adiciono o tipo de critério "<criterio>" 
		And selecio o valor do criterio "<valor>"
		And confirmar envio do relatório
        Then o relatório "<resultado>" 
			Examples:
			| critério  | valor   | resultado    | 
            | Languague |         | não é criado | 
			| Languague | Chinise | é criado     | 
			
#RN05: É possível remover críterios durante a criação do relatório
	Scenario: Remover critérios
		And preencho as informações 
            | nome       	   	     			   | seleçãoGrupo    | 
            | Relatório de Funcionários Imigrantes | Work Experience | 
		And adiciono o grupo de campos a ser exibido
		And adiciono um critério 
			| Service Period |
		When removo o critério que foi adicionado 
		And confirmar envio do relatório
        Then o relatório foi criado //sem tal critério
		
#RN06: É possível excluir alguns campos de exibição de dados durante a criação do relatório
	Scenario: Excluir campos de exibição
        And preencho informações
            | nome       	   	                       | seleçãoGrupo | 
            | Relatório de Dependentes dos Funcinários | Dependents   | 
		And adiciono o grupo de campos a ser exibido
		When excluo 
		And confirmar envio do relatório
        Then o relatório foi criado
		
#RN07: É possível criar nome de relatório com números e caracteres especiais 
Scenario: Criar Relatório com números os caracteres especiais 
        And preencha as informações 
            | nome      | seleçãoGrupo | 
            | 2398467!@ | Supervisors  |
		And adiciono o grupo de campos a ser exibido
		When confirmar envio do relatório
        Then o relatório foi criado

