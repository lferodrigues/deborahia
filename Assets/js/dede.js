var prompts = {
            'Vendas': [
                  "Crie um texto de vendas para \"{tema}\" destacando os benefícios exclusivos e apelos emocionais.",
    "Elabore uma estratégia de vendas para \"{tema}\" que inclua gatilhos mentais e técnicas persuasivas.",
    "Desenvolva um script de vendas para \"{tema}\" focado em resolver as dores específicas do cliente.",
    "Crie uma oferta irresistível para \"{tema}\" que destaque o valor agregado do produto ou serviço.",
    "Elabore um argumento de vendas para \"{tema}\" que enfatize a urgência da compra.",
    "Desenvolva uma abordagem consultiva de vendas para \"{tema}\" que construa confiança e credibilidade.",
    "Crie um pitch de vendas para \"{tema}\" que capture a atenção imediata do cliente.",
    "Elabore uma proposta comercial para \"{tema}\" que apresente soluções personalizadas e adaptadas às necessidades do cliente.",
    "Desenvolva uma campanha de e-mail marketing para \"{tema}\" que utilize técnicas de copywriting persuasivas.",
    // Adicionando os prompts extras
    "Crie um plano de vendas estratégico para \"{tema}\" que identifique oportunidades-chave de mercado.",
    "Elabore um discurso de vendas persuasivo para \"{tema}\" que enfatize os diferenciais competitivos.",
    "Desenvolva uma apresentação de vendas para \"{tema}\" que seja envolvente e informativa.",
    "Crie uma campanha promocional para \"{tema}\" que aumente a conscientização e atraia novos clientes.",
    "Elabore um roteiro de vendas telefônicas para \"{tema}\" que maximize as taxas de conversão.",
    "Desenvolva um plano de follow-up pós-venda para \"{tema}\" que fortaleça o relacionamento com o cliente.",
    "Crie um guia de vendas para \"{tema}\" que oriente os representantes sobre melhores práticas e estratégias.",
    "Elabore um webinar de vendas para \"{tema}\" que eduque e engaje potenciais clientes.",
    "Desenvolva um kit de vendas para \"{tema}\" que inclua materiais de suporte e recursos educativos.",
    "Crie um vídeo tutorial de vendas para \"{tema}\" que demonstre o uso e os benefícios do produto ou serviço.",
    "Elabore uma proposta de valor única para \"{tema}\" que destaque os benefícios tangíveis e intangíveis.",
    "Desenvolva uma estratégia de upselling e cross-selling para \"{tema}\" que aumente o valor médio por transação.",
    "Crie um programa de fidelidade para \"{tema}\" que recompense clientes frequentes e promova a lealdade à marca.",
    "Elabore um plano de reativação de clientes inativos para \"{tema}\" que reconquiste antigos compradores.",
    "Desenvolva uma análise SWOT para \"{tema}\" que identifique forças, fraquezas, oportunidades e ameaças no mercado.",
    "Crie um playbook de vendas para \"{tema}\" que padronize processos e otimize o desempenho da equipe.",
    "Elabore um relatório de vendas para \"{tema}\" que analise métricas-chave e proponha melhorias estratégicas.",
    "Desenvolva um calendário de eventos de vendas para \"{tema}\" que maximize a participação e a exposição da marca.",
    "Crie uma apresentação de caso de sucesso para \"{tema}\" que destaque resultados positivos e depoimentos de clientes.",
    "Elabore um plano de marketing integrado para \"{tema}\" que alinhe esforços de vendas e comunicação de forma eficaz.",
    "Desenvolva um guia de resolução de objeções para \"{tema}\" que prepare a equipe de vendas para lidar com diferentes cenários.",
    "Crie uma estratégia de pricing competitivo para \"{tema}\" que posicione o produto ou serviço de forma atraente no mercado.",
    "Elabore um manual de treinamento de vendas para \"{tema}\" que capacite novos representantes e atualize habilidades existentes.",
    "Desenvolva uma análise de mercado para \"{tema}\" que identifique segmentos-alvo e oportunidades de expansão.",
    "Crie um plano de vendas B2B para \"{tema}\" que estabeleça parcerias estratégicas e maximize o alcance comercial.",
    "Elabore uma estratégia de influenciadores para \"{tema}\" que utilize personalidades reconhecidas para promover o produto ou serviço.",
    "Desenvolva um plano de vendas sazonais para \"{tema}\" que capitalize períodos de alta demanda.",
    "Crie um white paper de vendas para \"{tema}\" que ofereça insights profundos sobre tendências e desafios do setor.",
    "Elabore uma análise de custo-benefício para \"{tema}\" que justifique o investimento no produto ou serviço.",
    "Desenvolva um playbook de onboarding de clientes para \"{tema}\" que assegure uma experiência positiva desde o início.",
    "Crie um programa de referência de vendas para \"{tema}\" que incentive clientes existentes a indicar novos clientes potenciais.",
    "Elabore uma estratégia de marketing de conteúdo para \"{tema}\" que eduque o público-alvo e construa autoridade na área.",
    "Desenvolva uma análise de competitividade para \"{tema}\" que compare ofertas similares no mercado.",
    "Crie um plano de vendas omnichannel para \"{tema}\" que integre diferentes canais de vendas de forma coesa.",
    "Elabore uma estratégia de retenção de clientes para \"{tema}\" que minimize a perda de clientes e promova a lealdade.",
    "Desenvolva uma campanha de redes sociais para \"{tema}\" que aumente o engajamento e a interação com a marca.",
    "Crie um playbook de qualificação de leads para \"{tema}\" que otimize o processo de identificação de oportunidades de venda.",
    "Elabore um plano de vendas internacionais para \"{tema}\" que explore novos mercados e oportunidades globais.",
    "Desenvolva uma análise de tendências de mercado para \"{tema}\" que antecipe mudanças e adapte estratégias de vendas.",
    "Crie um programa de treinamento de vendas contínuo para \"{tema}\" que mantenha a equipe atualizada com as melhores práticas.",
    "Elabore uma estratégia de marketing de influência para \"{tema}\" que utilize líderes de opinião para promover o produto ou serviço.",
    "Desenvolva um plano de vendas cross-border para \"{tema}\" que facilite transações internacionais de forma eficiente.",
    "Crie uma campanha de inbound marketing para \"{tema}\" que atraia potenciais clientes através de conteúdo relevante.",
    "Elabore um programa de educação de clientes para \"{tema}\" que ofereça recursos e suporte contínuo após a compra.",
    "Desenvolva uma análise de retorno sobre investimento (ROI) para \"{tema}\" que avalie o impacto das estratégias de vendas.",
    "Crie um plano de vendas baseado em dados para \"{tema}\" que utilize análises preditivas para prever comportamentos de compra.",
    "Elabore uma estratégia de parceria estratégica para \"{tema}\" que estabeleça colaborações benéficas com outras empresas.",
    "Desenvolva um plano de vendas orientado por insights de mercado para \"{tema}\" que adapte estratégias conforme as demandas do consumidor.",
    "Crie um playbook de vendas remoto para \"{tema}\" que maximize a produtividade e eficácia da equipe de vendas à distância.",
    "Elabore uma análise de perfil de cliente ideal (ICP) para \"{tema}\" que defina características-chave do público-alvo.",
    "Desenvolva uma estratégia de remarketing para \"{tema}\" que reconquiste potenciais clientes que demonstraram interesse anteriormente.",
    "Crie um programa de avaliação de satisfação do cliente para \"{tema}\" que meça e melhore a experiência do cliente ao longo do tempo.",
    "Elabore um plano de vendas personalizado para \"{tema}\" que atenda às necessidades específicas de clientes corporativos.",
    "Desenvolva uma análise de viabilidade de mercado para \"{tema}\" que avalie a demanda potencial e a concorrência.",
    "Crie uma estratégia de vendas de solução completa para \"{tema}\" que ofereça pacotes integrados de produtos e serviços.",
    "Elabore um plano de vendas focado em sustentabilidade para \"{tema}\" que promova práticas eco-friendly e responsabilidade social.",
    "Desenvolva uma análise de penetração de mercado para \"{tema}\" que identifique oportunidades de expansão em novos segmentos.",
    "Crie um plano de vendas para lançamento de produto para \"{tema}\" que maximize a visibilidade e adoção inicial.",
    "Elabore uma estratégia de vendas baseada em personas para \"{tema}\" que segmente as estratégias de acordo com diferentes perfis de consumidor.",
    "Desenvolva um playbook de vendas de ciclo longo para \"{tema}\" que gerencie vendas complexas ao longo de um período estendido.",
    "Crie um programa de feedback de vendas para \"{tema}\" que colete insights dos clientes para aprimorar processos.",
    "Elabore uma campanha de vendas sazonal para \"{tema}\" que capitalize oportunidades durante períodos específicos do ano.",
    "Desenvolva uma análise de análise de vendas para \"{tema}\" que identifique padrões de compra e comportamentos de consumidores.",
    "Crie um plano de vendas local para \"{tema}\" que explore oportunidades de mercado em regiões geográficas específicas.",
    "Elabore uma estratégia de vendas B2G (Business to Government) para \"{tema}\" que estabeleça parcerias com órgãos governamentais e entidades públicas.",
    "Desenvolva um plano de vendas diferenciado para \"{tema}\" que personalize ofertas e serviços conforme as necessidades exclusivas de cada cliente.",
    "Crie uma análise de estudo de caso para \"{tema}\" que demonstre resultados tangíveis alcançados por clientes através do uso do produto ou serviço."
],
  'Divulgação': [
    "Crie um texto de divulgação para \"{tema}\" que gere curiosidade e interesse imediato.",
    "Elabore um comunicado de imprensa para \"{tema}\" que destaque os principais pontos de interesse.",
    "Desenvolva um anúncio criativo para \"{tema}\" que utilize elementos visuais impactantes.",
    "Crie uma campanha publicitária para \"{tema}\" que alcance o público-alvo de maneira eficaz.",
    "Elabore um post patrocinado para \"{tema}\" que aumente a visibilidade e o reconhecimento da marca.",
    "Desenvolva um banner promocional para \"{tema}\" que seja visualmente atraente e informativo.",
    "Crie um flyer informativo para \"{tema}\" que destaque os benefícios e características principais.",
    "Elabore um anúncio impresso para \"{tema}\" que seja memorável e persuasivo.",
    "Desenvolva uma estratégia de marketing digital para \"{tema}\" que engaje o público-alvo.",
    "Crie um teaser de lançamento para \"{tema}\" que crie expectativa e antecipe o interesse do público.",
    "Elabore um vídeo promocional para \"{tema}\" que transmita a essência e os benefícios do produto ou serviço.",
    "Crie uma landing page otimizada para \"{tema}\" que converta visitantes em leads qualificados.",
    "Desenvolva uma estratégia de remarketing para \"{tema}\" que recupere visitantes que abandonaram o carrinho de compras.",
    "Elabore um webinar de vendas para \"{tema}\" que eduque potenciais clientes sobre os benefícios do produto ou serviço.",
    "Crie uma apresentação visual de vendas para \"{tema}\" que simplifique informações complexas e destaque vantagens competitivas.",
    "Desenvolva uma campanha de marketing de influência para \"{tema}\" que utilize influenciadores para promover o produto ou serviço.",
    "Elabore um plano de conteúdo para redes sociais focado em vendas para \"{tema}\" que aumente a geração de leads.",
    "Crie um podcast informativo sobre \"{tema}\" que posicione a empresa como uma autoridade no setor.",
    "Desenvolva um guia de compra para \"{tema}\" que oriente os clientes durante o processo de decisão.",
    "Elabore uma série de e-mails automatizados para \"{tema}\" que nutra leads ao longo do funil de vendas.",
    "Crie um tutorial em vídeo para \"{tema}\" que demonstre a utilização do produto ou serviço de forma prática.",
    "Desenvolva um programa de afiliados para \"{tema}\" que incentive parceiros a promoverem o produto ou serviço em troca de comissões.",
    "Elabore um roadshow de vendas para \"{tema}\" que percorra diferentes regiões para aumentar a exposição da marca.",
    "Crie uma estratégia de vendas baseada em dados analíticos para \"{tema}\" que otimize campanhas e identifique oportunidades.",
    "Desenvolva um programa de demonstração do produto para \"{tema}\" que permita aos clientes potenciais experimentarem o produto antes da compra.",
    "Elabore um infográfico informativo para \"{tema}\" que apresente estatísticas relevantes e argumentos persuasivos.",
    "Crie uma competição de vendas interna para \"{tema}\" que motive a equipe e aumente o desempenho individual.",
    "Desenvolva um kit de mídia para \"{tema}\" que forneça recursos visuais e informações para jornalistas e influenciadores.",
    "Elabore um jogo interativo para \"{tema}\" que engaje o público-alvo e promova o conhecimento sobre o produto ou serviço.",
    "Crie uma parceria estratégica para \"{tema}\" que amplie o alcance da marca e gere novas oportunidades de venda.",
    "Desenvolva uma estratégia de vendas baseada em parcerias B2B para \"{tema}\" que explore sinergias comerciais.",
    "Elabore um programa de feedback de clientes para \"{tema}\" que capture insights valiosos para melhorar o produto ou serviço.",
    "Crie um manual de vendas para \"{tema}\" que padronize o processo de vendas e aumente a eficiência da equipe.",
    "Desenvolva uma estratégia de upselling para \"{tema}\" que aumente o valor médio por transação.",
    "Elabore um plano de vendas personalizado para \"{tema}\" que adapte abordagens conforme o perfil de cada cliente.",
    "Crie uma análise de mercado competitiva para \"{tema}\" que identifique vantagens competitivas e áreas de oportunidade.",
    "Desenvolva um programa de retenção de clientes para \"{tema}\" que fortaleça o relacionamento e promova a lealdade à marca.",
    "Elabore uma análise de ROI (retorno sobre investimento) para \"{tema}\" que avalie o impacto das estratégias de marketing e vendas.",
    "Crie uma estratégia de vendas baseada em storytelling para \"{tema}\" que conecte emocionalmente com o público-alvo.",
    "Desenvolva um programa de treinamento de vendas contínuo para \"{tema}\" que aprimore habilidades e conhecimentos da equipe.",
    "Elabore um programa de indicação de clientes para \"{tema}\" que incentive clientes satisfeitos a indicarem novos clientes potenciais.",
    "Crie um programa de fidelidade para \"{tema}\" que recompense clientes frequentes com benefícios exclusivos.",
    "Desenvolva uma análise SWOT para \"{tema}\" que identifique pontos fortes, fracos, oportunidades e ameaças no mercado.",
    "Elabore uma estratégia de vendas sazonais para \"{tema}\" que capitalize picos de demanda durante períodos específicos do ano.",
    "Crie uma análise de viabilidade de mercado para \"{tema}\" que avalie o potencial de mercado e a demanda pelo produto ou serviço.",
    "Desenvolva um plano de marketing integrado para \"{tema}\" que alinhe esforços de marketing e vendas para resultados eficazes.",
    "Elabore um playbook de vendas para \"{tema}\" que documente processos e melhores práticas para a equipe de vendas seguir.",
    "Crie uma análise de segmentação de mercado para \"{tema}\" que identifique grupos-alvo específicos para campanhas direcionadas.",
    "Desenvolva uma estratégia de vendas omnicanal para \"{tema}\" que integre diferentes canais de vendas de forma harmoniosa.",
    "Elabore um programa de educação de clientes para \"{tema}\" que forneça suporte contínuo e educação sobre o uso do produto ou serviço.",
    "Crie uma campanha de marketing direto para \"{tema}\" que alcance diretamente clientes potenciais através de estratégias como mailing e telemarketing.",
    "Desenvolva um plano de vendas personalizado para \"{tema}\" que adapte a abordagem de vendas com base nas necessidades individuais de cada cliente.",
    "Elabore uma estratégia de remarketing para \"{tema}\" que recupere clientes potenciais que mostraram interesse anteriormente.",
    "Crie uma análise de análise de vendas para \"{tema}\" que identifique padrões de compra e comportamento do consumidor.",
    "Desenvolva um plano de vendas local para \"{tema}\" que explore oportunidades de mercado em regiões geográficas específicas.",
    "Elabore uma estratégia de vendas B2G (Business to Government) para \"{tema}\" que estabeleça parcerias com agências governamentais e entidades públicas.",
    "Crie um plano de vendas diferenciado para \"{tema}\" que personalize ofertas e serviços conforme as necessidades exclusivas de cada cliente.",
    "Desenvolva uma análise de estudo de caso para \"{tema}\" que demonstre resultados tangíveis alcançados por clientes através do uso do produto ou serviço."
],
            'Post para Instagram': [
                "Crie um post para Instagram sobre \"{tema}\" que inspire e motive os seguidores.",
                "Elabore um conteúdo educativo para Instagram sobre \"{tema}\" que ofereça dicas práticas.",
                "Desenvolva um post promocional para Instagram sobre \"{tema}\" que destaque os benefícios exclusivos.",
                "Crie um conteúdo visual para Instagram sobre \"{tema}\" que conte uma história envolvente.",
                "Elabore um post de perguntas e respostas para Instagram sobre \"{tema}\" que interaja diretamente com os seguidores.",
                "Desenvolva um carrossel informativo para Instagram sobre \"{tema}\" que forneça insights detalhados.",
                "Crie um post de bastidores para Instagram sobre \"{tema}\" que mostre o processo por trás do produto ou serviço.",
                "Elabore um post de estilo de vida para Instagram sobre \"{tema}\" que se conecte emocionalmente com os seguidores.",
                "Desenvolva um tutorial passo a passo para Instagram sobre \"{tema}\" que seja útil e educativo.",
                "Crie um post de agradecimento para Instagram sobre \"{tema}\" que reconheça o apoio dos seguidores."
            ],
            'Post para LinkedIn': [
                "Crie um post profissional para LinkedIn sobre \"{tema}\" que compartilhe insights valiosos.",
                "Elabore um conteúdo educacional para LinkedIn sobre \"{tema}\" que ofereça conhecimentos práticos.",
                "Desenvolva um post inspiracional para LinkedIn sobre \"{tema}\" que motive profissionais.",
                "Crie um post de atualização para LinkedIn sobre \"{tema}\" que informe sobre novidades e tendências.",
                "Elabore um post de networking para LinkedIn sobre \"{tema}\" que promova conexões profissionais.",
                "Desenvolva um post promocional para LinkedIn sobre \"{tema}\" que divulgue eventos ou lançamentos.",
                "Crie um post de carreira para LinkedIn sobre \"{tema}\" que ofereça conselhos para avanço profissional.",
                "Elabore um post de case study para LinkedIn sobre \"{tema}\" que demonstre resultados positivos.",
                "Desenvolva um post de agradecimento para LinkedIn sobre \"{tema}\" que reconheça colaborações ou conquistas.",
                "Crie um post de liderança para LinkedIn sobre \"{tema}\" que compartilhe experiências e insights."
            ],
            'Post Carrossel': [
                "Crie um post em carrossel para Instagram sobre \"{tema}\" que apresente uma série de informações envolventes e visualmente atraentes.",
                "Elabore um carrossel educacional para Instagram sobre \"{tema}\" que forneça insights detalhados em cada slide.",
                "Desenvolva um carrossel promocional para Instagram sobre \"{tema}\" que destaque diferentes aspectos do produto ou serviço.",
                "Crie um carrossel de histórias de sucesso para Instagram sobre \"{tema}\" que apresente depoimentos e casos reais.",
                "Elabore um carrossel de passo a passo para Instagram sobre \"{tema}\" que seja prático e fácil de seguir.",
                "Desenvolva um carrossel de dicas rápidas para Instagram sobre \"{tema}\" que ofereça conselhos úteis e diretos ao ponto.",
                "Crie um carrossel de curiosidades para Instagram sobre \"{tema}\" que desperte a curiosidade dos seguidores.",
                "Elabore um carrossel de perguntas frequentes para Instagram sobre \"{tema}\" que responda às dúvidas mais comuns.",
                "Desenvolva um carrossel de etapas para Instagram sobre \"{tema}\" que guie os seguidores em um processo específico.",
                "Crie um carrossel de dados estatísticos para Instagram sobre \"{tema}\" que ilustre informações importantes."
            ],
            'Artigo Acadêmico': [
                "Desenvolva um artigo acadêmico sobre \"{tema}\" que explore as últimas descobertas na área.",
                "Crie um artigo acadêmico revisado por pares sobre \"{tema}\" que apresente novas teorias ou metodologias.",
                "Elabore um artigo acadêmico para uma conferência sobre \"{tema}\" que seja inovador e impactante.",
                "Desenvolva um artigo acadêmico para publicação sobre \"{tema}\" que contribua significativamente para o campo de estudo.",
                "Crie um artigo acadêmico de revisão sistemática sobre \"{tema}\" que analise e sintetize estudos anteriores.",
                "Elabore um artigo acadêmico teórico sobre \"{tema}\" que discuta conceitos e perspectivas contemporâneas.",
                "Desenvolva um artigo acadêmico experimental sobre \"{tema}\" que apresente resultados de pesquisas originais.",
                "Crie um artigo acadêmico empírico sobre \"{tema}\" que inclua análise estatística e interpretação de dados.",
                "Elabore um artigo acadêmico crítico sobre \"{tema}\" que avalie diferentes abordagens e argumentos.",
                "Desenvolva um artigo acadêmico interdisciplinar sobre \"{tema}\" que integre múltiplas perspectivas e disciplinas."
            ],
            'Resposta de Exercício Escolar': [
                "Forneça uma resposta detalhada para o exercício escolar sobre \"{tema}\" incluindo passos e raciocínio.",
                "Elabore uma solução completa para o problema de \"{tema}\" demonstrando todas as etapas necessárias.",
                "Desenvolva uma resposta estruturada para a questão sobre \"{tema}\" utilizando exemplos e explicações claras.",
                "Crie uma resposta argumentativa para \"{tema}\" que apresente diferentes pontos de vista e conclusões.",
                "Elabore uma solução passo a passo para o exercício de \"{tema}\" demonstrando a aplicação dos conceitos aprendidos.",
                "Desenvolva uma resposta criativa para \"{tema}\" que utilize diferentes métodos e abordagens.",
                "Forneça uma solução analítica para o problema de \"{tema}\" que inclua análise crítica e interpretação de dados.",
                "Elabore uma resposta comparativa para \"{tema}\" que explore semelhanças e diferenças entre diferentes abordagens.",
                "Desenvolva uma resposta argumentativa para o exercício sobre \"{tema}\" que apresente evidências e exemplos.",
                "Crie uma solução prática para \"{tema}\" que seja aplicável a situações do mundo real."
            ],
            'Fórmula de Excel': [
                "Crie uma fórmula de Excel para \"{tema}\" que calcule de forma eficiente e precisa.",
                "Elabore uma fórmula avançada para \"{tema}\" que inclua funções lógicas e de busca.",
                "Desenvolva uma fórmula matricial para \"{tema}\" que resolva problemas complexos de análise de dados.",
                "Crie uma fórmula condicional para \"{tema}\" que automatize decisões baseadas em critérios específicos.",
                "Elabore uma fórmula de referência para \"{tema}\" que vincule diferentes planilhas e intervalos de dados.",
                "Desenvolva uma fórmula estatística para \"{tema}\" que analise tendências e padrões.",
                "Crie uma fórmula financeira para \"{tema}\" que calcule investimentos e retorno sobre o investimento.",
                "Elabore uma fórmula de data e hora para \"{tema}\" que manipule datas e horários de forma precisa.",
                "Desenvolva uma fórmula de texto para \"{tema}\" que formate e manipule strings de texto.",
                "Crie uma fórmula de engenharia para \"{tema}\" que resolva problemas específicos da área."
            ],
            'Código em Programação': [
                "Escreva um código em \"{tema}\" que resolva o problema proposto de maneira eficiente e otimizada.",
                "Elabore um algoritmo em \"{tema}\" que utilize estruturas de controle e manipulação de dados.",
                "Desenvolva uma função em \"{tema}\" que cumpra um requisito específico do projeto.",
                "Crie um script em \"{tema}\" que implemente uma solução inovadora para um desafio técnico.",
                "Elabore um programa em \"{tema}\" que integre diferentes módulos e componentes de software.",
                "Desenvolva um código orientado a objetos em \"{tema}\" que utilize classes e herança de maneira eficaz.",
                "Escreva um script de automação em \"{tema}\" que simplifique processos e aumente a produtividade.",
                "Elabore um código de análise de dados em \"{tema}\" que manipule grandes conjuntos de dados de forma eficiente.",
                "Desenvolva um algoritmo de aprendizado de máquina em \"{tema}\" que realize previsões e análises preditivas.",
                "Crie um código de interface de usuário em \"{tema}\" que seja intuitivo e responsivo."
            ]
        };

        var currentTopic = '';
        var currentIndex = 0;

        document.getElementById('topicSelect').addEventListener('change', function() {
            currentTopic = this.value;
            if (prompts[currentTopic] && prompts[currentTopic].length > 0) {
                document.getElementById('respostaContainer').innerHTML = "";
            } else {
                document.getElementById('respostaContainer').innerHTML = "";
            }
        });
    
        document.getElementById('enviarBtn').addEventListener('click', function() {
            enviarNecessidade();
        });
    
        function enviarNecessidade() {
            if (currentTopic && document.getElementById('userInput').value.trim() !== "") {
                exibirResposta();
            } else {
                alert("Por favor, selecione um tópico e digite o tema.");
            }
        }
    
        function exibirResposta() {
            var tema = document.getElementById('userInput').value.trim();
            var respostas = prompts[currentTopic];
            var respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)].replace("{tema}", tema);
    
            var respostaContainer = document.getElementById('respostaContainer');
            respostaContainer.innerHTML = '';
    
            var respostaElemento = document.createElement('div');
            respostaElemento.id = 'resposta';
            respostaElemento.textContent = respostaAleatoria;
            respostaContainer.appendChild(respostaElemento);
    
            var navButtons = document.createElement('div');
            navButtons.className = 'nav-buttons';
            var btnVoltar = document.createElement('button');
            btnVoltar.id = 'btnVoltar';
            btnVoltar.textContent = 'Voltar';
            btnVoltar.onclick = exibirResposta; // Troca para exibir nova resposta aleatória
            navButtons.appendChild(btnVoltar);
    
            var btnCopiar = document.createElement('button');
            btnCopiar.className = 'copy-button';
            btnCopiar.onclick = copiarResposta;
            var copyIcon = document.createElement('span');
            copyIcon.className = 'copy-icon';
            copyIcon.innerHTML = '📋';
            btnCopiar.appendChild(copyIcon);
            navButtons.appendChild(btnCopiar);
            var btnAvancar = document.createElement('button');
            btnAvancar.id = 'btnAvancar';
            btnAvancar.textContent = 'Avançar';
            btnAvancar.onclick = exibirResposta; // Troca para exibir nova resposta aleatória
            navButtons.appendChild(btnAvancar);

    
            respostaContainer.appendChild(navButtons);
        }
    
        function copiarResposta() {
            var resposta = document.getElementById('resposta').textContent;
    
            var textarea = document.createElement('textarea');
            textarea.value = resposta;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
    
            alert('Resposta copiada para a área de transferência!');
        }

// Atualiza o ano no rodapé

