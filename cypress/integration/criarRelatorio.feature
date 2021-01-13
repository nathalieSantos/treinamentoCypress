Feature: Criar Relatório

    COMO gerente do Departamento de Pessoas
    DESEJO criar Relatórios 
    PARA documentar as informações dos funcionários
    
    Background: 
        Given o acesso ao sistema
        And informadas as credenciais
        And confirmado o acesso ao sistema
		And acesso à seção "PIM"
		And acesso à seção "Relatórios"
        And acesso à seção "Add"

#RN: É possível criar um relatório 
#RN: É exibida uma mensagem de Sucesso ao criar o relatório
#RN: É possível criar nome de relatório com números e caracteres especiais 
    Scenario Outline: Criar relatório
        And preencher as informações "<nome>", "<seleçãoGrupo>"
        And adiciono o grupo de campos a ser exibido
		When confirmar envio do relatório
        Then o relatório "<nome>" foi criado
        Examples:
            | nome                 | seleçãoGrupo |
            | Relatório de Formados| Education    |
            | 239846780            | Supervisors  |
            | #@!#*&%!#            | Job          |

#RN: É necessário preencher os campos que são obrigatórios 
#RN: É exibido um campos requeridos para criação do relatório
    Scenario: Enviar relatório vazio 
        And não se forneça nenhuma informação
        When confirmar envio do relatório
        Then são indicados as seções obrigatorias

#RN: É possível adicionar críterios durante a criação do relatório
#RN: Ao adicionar critérios estes passam a ser obrigatórios
	Scenario Outline: Adiciona critérios
		And preencher informações "<nome>", "<seleçãoGrupo>" 
		And adiciono o grupo de campos a ser exibido
		When adiciono o tipo de critério "<critério>" 
		And selecio o valor do criterio "<valor>"
		And confirmar envio do relatório
        Then o relatório "<resultado>" 
			Examples:
			| nome       	   	     			    | seleçãoGrupo    | critério | valor   | resultado    | 
            | Relatório de Experiência Profissional | Work Experience | Language |         | não é criado | 
			| Relatório de Experiência Profissional | Work Experience | Language | Chinese | é criado     | 
		
#RN: É possível remover críterios durante a criação do relatório
	Scenario Outline: Remover critérios
		And preencho as informações "<nome>", "<seleçãoGrupo>"
		And adiciono o grupo de campos a ser exibido
		And adiciono um critério "<critério>"
		When removo o critério que foi adicionado 
		And confirmar envio do relatório
        Then o relatório "<nome>" foi criado
        Examples:
            | nome       	   	     			   | seleçãoGrupo    | critério       |
            | Relatório de Funcionários Imigrantes | Work Experience | Service Period |
			
#RN: É possível excluir alguns campos de exibição de dados durante a criação do relatório
	Scenario Outline: Excluir campos de exibição
        And preencho informações "<nome>", "<seleçãoGrupo>"
		And adiciono o grupo de campos a ser exibido
		When excluo o campo "<campo1>", "<campo2>" da exibição 
		And confirmar envio do relatório
        Then o relatório "<nome>" foi criado
        Examples:
            | nome       	   	                       | seleçãoGrupo    | campo1      | campo2         |
            | Relatório de Dependentes de Funcionários | Contact Details | Other Email | Home Telephone |

#RN: O input nome não tem um limite de caracteres 		
Scenario Outline: Limite de Caracteres do nome do relatório
        And preencha as informações "<nome>", "<seleçãoGrupo>"
		And adiciono o grupo de campos a ser exibido
		When verifico quantidade de caracteres inseridos no nome
        And confirmar envio do relatório
        Then o relatório "<nome>" foi criado 
        Examples:
            | nome                                                                                                                                                                 | seleçãoGrupo | 
            | RASRH-BA: Relatório Anual da Superintendência de Recursos Humanos do Estado da Bahia - Estimativa de contratação e demissão da empresa X-Ltda                        | Supervisors  |
            | RSMSGSDE: Relatório Semestral de Média Salarial dos Gerente, Supervisores, Diretores e Encarregados em seus cargos atuais sem considerar promoções futuras ou abonos | Salary       |


