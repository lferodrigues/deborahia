var prompts = {
            'Vendas': [
                "Crie um texto de vendas para o seguinte tema: \"{tema}\". Inclua detalhes sobre os benefícios, características do produto/serviço e um call-to-action claro.",
                "Elabore uma mensagem de e-mail de vendas para o seguinte tema: \"{tema}\". Destaque os principais pontos de dor que o produto/serviço resolve e inclua um call-to-action forte.",
                "Desenvolva um roteiro de telemarketing para o seguinte tema: \"{tema}\". Foque nos benefícios do produto/serviço e inclua perguntas para envolver o cliente.",
                "Escreva uma postagem de blog focada em vendas sobre o seguinte tema: \"{tema}\". Destaque como o produto/serviço pode melhorar a vida do cliente.",
                "Crie um script de vídeo de vendas para o seguinte tema: \"{tema}\". Inclua uma introdução cativante, benefícios do produto/serviço e um call-to-action direto.",
                "Desenvolva um anúncio de Facebook para o seguinte tema: \"{tema}\". Destaque um benefício chave do produto/serviço e inclua um call-to-action claro.",
                "Elabore uma carta de vendas para o seguinte tema: \"{tema}\". Inclua uma proposta de valor clara, benefícios e um call-to-action persuasivo.",
                "Crie um texto para uma página de vendas sobre o seguinte tema: \"{tema}\". Inclua uma descrição detalhada do produto/serviço, benefícios e depoimentos de clientes.",
                "Desenvolva uma mensagem de texto (SMS) de vendas para o seguinte tema: \"{tema}\". Seja breve e inclua um call-to-action imediato.",
                "Escreva um anúncio para Google Ads focado no seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um post para LinkedIn sobre o seguinte tema: \"{tema}\". Foque em benefícios profissionais do produto/serviço e inclua um call-to-action claro.",
                "Crie um folheto de vendas para o seguinte tema: \"{tema}\". Inclua imagens atrativas, detalhes do produto/serviço e benefícios.",
                "Desenvolva um e-mail de follow-up de vendas para o seguinte tema: \"{tema}\". Reforce os benefícios e inclua um call-to-action para agendar uma reunião.",
                "Escreva um discurso de apresentação de vendas para o seguinte tema: \"{tema}\". Inclua uma introdução, detalhes do produto/serviço e benefícios.",
                "Crie um anúncio para Instagram focado no seguinte tema: \"{tema}\". Use uma imagem atrativa, destaque os benefícios e inclua um call-to-action claro.",
                "Desenvolva um texto para uma campanha de remarketing para o seguinte tema: \"{tema}\". Relembre o cliente dos benefícios e inclua um call-to-action para retornar ao site.",
                "Elabore uma mensagem de WhatsApp de vendas para o seguinte tema: \"{tema}\". Seja direto e inclua um call-to-action para iniciar uma conversa.",
                "Crie um texto para uma landing page sobre o seguinte tema: \"{tema}\". Destaque os benefícios, inclua depoimentos e um call-to-action para conversão.",
                "Desenvolva uma proposta de valor para o seguinte tema: \"{tema}\". Inclua benefícios chave e razões para escolher o produto/serviço.",
                "Escreva um anúncio para Twitter focado no seguinte tema: \"{tema}\". Seja breve, destaque um benefício chave e inclua um call-to-action claro.",
                "Crie um texto para uma brochura de vendas sobre o seguinte tema: \"{tema}\". Inclua detalhes do produto/serviço, benefícios e imagens atrativas.",
                "Desenvolva uma mensagem de vendas para uma campanha de e-mail drip sobre o seguinte tema: \"{tema}\". Inclua benefícios progressivos e calls-to-action em cada e-mail.",
                "Elabore um pitch de vendas para investidores sobre o seguinte tema: \"{tema}\". Destaque o mercado, a proposta de valor e o potencial de crescimento.",
                "Crie um anúncio para YouTube focado no seguinte tema: \"{tema}\". Inclua um vídeo atrativo, benefícios e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de marketing de conteúdo sobre o seguinte tema: \"{tema}\". Destaque como o produto/serviço resolve problemas específicos.",
                "Escreva um post para Facebook sobre o seguinte tema: \"{tema}\". Inclua uma imagem atrativa, benefícios do produto/serviço e um call-to-action.",
                "Elabore um anúncio de rádio para o seguinte tema: \"{tema}\". Inclua uma introdução cativante, benefícios do produto/serviço e um call-to-action claro.",
                "Crie um texto para um flyer de vendas sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua uma imagem atrativa.",
                "Desenvolva um anúncio para LinkedIn Ads focado no seguinte tema: \"{tema}\". Destaque os benefícios profissionais e inclua um call-to-action claro.",
                "Escreva um discurso de vendas para uma feira de negócios sobre o seguinte tema: \"{tema}\". Inclua uma introdução, benefícios e um call-to-action para conversão.",
                "Crie um anúncio de TV para o seguinte tema: \"{tema}\". Inclua um roteiro cativante, benefícios do produto/serviço e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de marketing de influência sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Elabore um anúncio para revistas sobre o seguinte tema: \"{tema}\". Inclua uma imagem atrativa, benefícios e um call-to-action.",
                "Crie um roteiro de podcast de vendas para o seguinte tema: \"{tema}\". Inclua uma introdução, detalhes do produto/serviço e benefícios.",
                "Desenvolva um texto para uma campanha de marketing direto sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Escreva um anúncio de outdoor focado no seguinte tema: \"{tema}\". Destaque um benefício chave e inclua um call-to-action claro.",
                "Elabore um texto para um e-mail de boas-vindas focado em vendas sobre o seguinte tema: \"{tema}\". Inclua benefícios iniciais e um call-to-action para conversão.",
                "Crie um anúncio de retargeting para o seguinte tema: \"{tema}\". Relembre o cliente dos benefícios e inclua um call-to-action claro.",
                "Desenvolva um texto para uma apresentação em PowerPoint de vendas sobre o seguinte tema: \"{tema}\". Inclua slides com benefícios e um call-to-action.",
                "Escreva um anúncio de revista digital focado no seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Elabore um texto para uma promoção de tempo limitado sobre o seguinte tema: \"{tema}\". Destaque a urgência, benefícios e um call-to-action.",
                "Crie um anúncio para Pinterest focado no seguinte tema: \"{tema}\". Use uma imagem atrativa, benefícios e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de marketing por SMS sobre o seguinte tema: \"{tema}\". Seja breve e inclua um call-to-action imediato.",
                "Escreva um anúncio de banner para o seguinte tema: \"{tema}\". Destaque um benefício chave e inclua um call-to-action claro.",
                "Elabore um texto para uma campanha de pré-lançamento sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action para se inscrever.",
                "Crie um anúncio de rádio online focado no seguinte tema: \"{tema}\". Inclua uma introdução cativante, benefícios e um call-to-action.",
                "Desenvolva um texto para uma campanha de marketing de guerrilha sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Escreva um post para TikTok sobre o seguinte tema: \"{tema}\". Inclua um vídeo curto, benefícios e um call-to-action claro.",
                "Elabore um anúncio para Snapchat focado no seguinte tema: \"{tema}\". Inclua uma imagem ou vídeo, benefícios e um call-to-action claro.",
                "Crie um texto para uma campanha de e-mail de recuperação de carrinho abandonado sobre o seguinte tema: \"{tema}\". Relembre os benefícios e inclua um call-to-action.",
                "Desenvolva um anúncio para display ads focado no seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Escreva um texto para um press release de lançamento de produto/serviço sobre o seguinte tema: \"{tema}\". Inclua detalhes do lançamento e benefícios.",
                "Elabore um anúncio de TV por assinatura para o seguinte tema: \"{tema}\". Inclua um roteiro cativante, benefícios e um call-to-action claro.",
                "Crie um texto para uma campanha de marketing por correio direto sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action.",
                "Desenvolva um anúncio para um jornal focado no seguinte tema: \"{tema}\". Inclua uma imagem atrativa, benefícios e um call-to-action claro.",
                "Escreva um post para Medium sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um texto para um webinar de vendas sobre o seguinte tema: \"{tema}\". Inclua tópicos a serem discutidos, benefícios e um call-to-action para inscrição.",
                "Crie um anúncio para Spotify focado no seguinte tema: \"{tema}\". Inclua um áudio cativante, benefícios e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de marketing de afiliados sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action para os afiliados.",
                "Escreva um post para Reddit sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um texto para uma promoção de feriado sobre o seguinte tema: \"{tema}\". Destaque a urgência, benefícios e um call-to-action.",
                "Crie um anúncio para Twitch focado no seguinte tema: \"{tema}\". Inclua um vídeo curto, benefícios e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de marketing de conteúdo sobre o seguinte tema: \"{tema}\". Destaque como o produto/serviço resolve problemas específicos.",
                "Escreva um post para Quora sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um anúncio para um podcast focado no seguinte tema: \"{tema}\". Inclua uma introdução cativante, benefícios e um call-to-action.",
                "Crie um texto para uma campanha de e-mail de agradecimento sobre o seguinte tema: \"{tema}\". Reforce os benefícios e inclua um call-to-action para futuras compras.",
                "Desenvolva um anúncio para Hulu focado no seguinte tema: \"{tema}\". Inclua um vídeo cativante, benefícios e um call-to-action claro.",
                "Escreva um post para uma comunidade online sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um texto para uma campanha de co-marketing sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action para as duas marcas.",
                "Crie um anúncio para Google Shopping focado no seguinte tema: \"{tema}\". Inclua uma imagem do produto, benefícios e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de e-mail de reengajamento sobre o seguinte tema: \"{tema}\". Relembre os benefícios e inclua um call-to-action.",
                "Escreva um anúncio para Amazon Ads focado no seguinte tema: \"{tema}\". Inclua benefícios do produto e um call-to-action claro.",
                "Elabore um texto para um e-mail de upsell sobre o seguinte tema: \"{tema}\". Destaque os benefícios adicionais e inclua um call-to-action claro.",
                "Crie um anúncio para um aplicativo móvel focado no seguinte tema: \"{tema}\". Inclua uma imagem ou vídeo, benefícios e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de e-mail de feedback sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action para resposta.",
                "Escreva um post para Tumblr sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um anúncio para uma revista de nicho sobre o seguinte tema: \"{tema}\". Inclua uma imagem atrativa, benefícios e um call-to-action.",
                "Crie um texto para uma campanha de marketing por correio eletrônico sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Desenvolva um anúncio para uma revista digital focada no seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Escreva um post para uma newsletter sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um texto para uma campanha de marketing em eventos sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action para participação.",
                "Crie um anúncio para Google Display Network focado no seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Desenvolva um texto para uma campanha de marketing de conteúdo sobre o seguinte tema: \"{tema}\". Destaque como o produto/serviço resolve problemas específicos.",
                "Escreva um post para uma comunidade online sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um texto para uma campanha de e-mail de incentivo sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Crie um anúncio para uma revista digital focado no seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de e-mail de fidelização sobre o seguinte tema: \"{tema}\". Reforce os benefícios e inclua um call-to-action.",
                "Escreva um anúncio para um site de comparação de preços focado no seguinte tema: \"{tema}\". Inclua benefícios do produto e um call-to-action claro.",
                "Elabore um texto para um e-mail de recomendação de produtos sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Crie um anúncio para um marketplace focado no seguinte tema: \"{tema}\". Inclua uma imagem do produto, benefícios e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de marketing de conteúdo sobre o seguinte tema: \"{tema}\". Destaque como o produto/serviço resolve problemas específicos.",
                "Escreva um post para um blog corporativo sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro.",
                "Elabore um texto para uma campanha de e-mail de lançamento sobre o seguinte tema: \"{tema}\". Inclua benefícios e um call-to-action claro.",
                "Crie um anúncio para um site de avaliações focado no seguinte tema: \"{tema}\". Inclua benefícios do produto e um call-to-action claro.",
                "Desenvolva um texto para uma campanha de marketing de conteúdo sobre o seguinte tema: \"{tema}\". Destaque como o produto/serviço resolve problemas específicos.",
                "Escreva um post para uma rede social sobre o seguinte tema: \"{tema}\". Destaque os benefícios e inclua um call-to-action claro."],
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

