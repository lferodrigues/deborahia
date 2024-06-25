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
    "Crie um texto de divulgação para o tema \"{tema}\". Inclua uma descrição atrativa, público-alvo e métodos de distribuição.",
        "Elabore uma campanha de divulgação para promover \"{tema}\". Descreva os canais de comunicação, estratégias de engajamento e a mensagem principal.",
        "Desenvolva um plano de divulgação detalhado para o lançamento de \"{tema}\". Considere cronograma, recursos necessários e métricas de sucesso.",
        "Escreva um press release anunciando \"{tema}\". Destaque os benefícios, diferenciais e impacto esperado.",
        "Crie um pitch de divulgação de \"{tema}\" para investidores. Apresente oportunidades de mercado, potencial de crescimento e estratégias de penetração.",
        "Descreva como utilizar SEO para otimizar a divulgação de \"{tema}\". Inclua palavras-chave, técnicas de otimização de conteúdo e análise de concorrência.",
        "Elabore um plano de mídia para campanha de divulgação de \"{tema}\". Especifique mídias pagas, parcerias estratégicas e ações de relações públicas.",
        "Crie um roteiro para um vídeo de divulgação de \"{tema}\". Pense em storytelling, elementos visuais e call-to-action.",
        "Desenvolva uma estratégia de divulgação nas redes sociais para \"{tema}\". Inclua plataformas relevantes, conteúdo visual e interações com seguidores.",
        "Escreva um artigo de blog sobre \"{tema}\". Aborde aspectos educativos, tendências atuais e dicas práticas relacionadas.",
        "Proponha uma ação de marketing de guerrilha para promover \"{tema}\". Detalhe a execução, impacto esperado e orçamento necessário.",
        "Elabore um plano de email marketing para lançamento de \"{tema}\". Inclua segmentação de público, sequência de envios e objetivos de conversão.",
        "Crie um infográfico explicativo sobre \"{tema}\". Apresente dados relevantes, passos práticos ou benefícios do tema.",
        "Descreva como realizar um webinar para divulgar \"{tema}\". Inclua o conteúdo, formato de interação e estratégias de engajamento.",
        "Proponha uma parceria estratégica para ampliar a divulgação de \"{tema}\". Identifique potenciais parceiros, benefícios mútuos e plano de ação.",
        "Crie um guia passo-a-passo para influenciadores promoverem \"{tema}\" em suas redes sociais. Inclua incentivos e diretrizes de conteúdo.",
        "Elabore um plano de relações públicas para \"{tema}\". Identifique veículos de imprensa, oportunidades de entrevista e eventos para divulgação.",
        "Desenvolva uma estratégia de lançamento de produto para \"{tema}\". Inclua pré-lançamento, evento de lançamento e campanha pós-lançamento.",
        "Crie uma série de posts para Instagram Stories sobre \"{tema}\". Utilize elementos visuais, interações e hashtags relevantes.",
        "Descreva como usar marketing de conteúdo para promover \"{tema}\". Inclua tipos de conteúdo, calendário editorial e objetivos de engajamento.",
        "Proponha uma ação de buzz marketing para gerar curiosidade sobre \"{tema}\". Detalhe a estratégia, elementos surpresa e potencial viralização.",
        "Elabore um plano de patrocínio de eventos para \"{tema}\". Identifique eventos relevantes, benefícios do patrocínio e ativações de marca.",
        "Crie um flyer digital para divulgar \"{tema}\". Utilize design atraente, informações chave e call-to-action claro.",
        "Desenvolva uma estratégia de lançamento de podcast sobre \"{tema}\". Inclua formato, temas abordados e estratégias de promoção.",
        "Escreva um white paper técnico sobre \"{tema}\". Apresente insights profundos, análises comparativas e implicações práticas.",
        "Descreva como utilizar anúncios pagos para ampliar a divulgação de \"{tema}\". Inclua plataformas, segmentação de público-alvo e métricas de performance.",
        "Elabore uma estratégia de remarketing para \"{tema}\". Descreva o fluxo de comunicação, incentivos adicionais e reengajamento de leads.",
        "Crie uma apresentação para uma conferência sobre \"{tema}\". Inclua dados de mercado, soluções propostas e estudos de caso.",
        "Proponha uma ação de sampling para \"{tema}\". Detalhe locais de distribuição, amostras oferecidas e feedback esperado.",
        "Desenvolva um plano de marketing de conteúdo interativo para \"{tema}\". Inclua quizzes, infográficos interativos e vídeos 360º.",
        "Crie um vídeo de tutorial sobre \"{tema}\". Demonstre benefícios, funcionalidades e uso prático do produto ou serviço.",
        "Descreva como utilizar storytelling para promover \"{tema}\". Inclua personagens, conflito e resolução vinculados ao tema.",
        "Elabore um plano de ativação de marca em redes sociais para \"{tema}\". Inclua eventos, hashtags exclusivas e colaborações com influenciadores.",
        "Proponha uma campanha de caridade vinculada a \"{tema}\". Identifique causas relevantes, impacto esperado e engajamento da comunidade.",
        "Crie um roadmap de lançamento para \"{tema}\". Inclua fases de desenvolvimento, testes e lançamento oficial.",
        "Desenvolva uma estratégia de marketing viral para \"{tema}\". Pense em conteúdos compartilháveis, memes e desafios digitais.",
        "Elabore um plano de gamificação para promover \"{tema}\". Inclua elementos de competição, recompensas e engajamento de usuários.",
        "Descreva como usar marketing de afiliados para ampliar a divulgação de \"{tema}\". Inclua estratégias de recrutamento de afiliados e comissões oferecidas.",
        "Crie um manifesto sobre \"{tema}\". Apresente valores, missão e visão relacionados ao tema.",
        "Desenvolva um plano de influencer marketing para \"{tema}\". Identifique influenciadores relevantes, estratégias de abordagem e conteúdo colaborativo.",
        "Proponha uma estratégia de marketing de causa para \"{tema}\". Identifique causas sociais relevantes, campanhas de conscientização e impacto esperado.",
        "Elabore um plano de lançamento de aplicativo móvel para \"{tema}\". Inclua pré-lançamento, feedback de beta testers e estratégias de aquisição de usuários.",
        "Crie uma série de webinars educativos sobre \"{tema}\". Inclua temas específicos, convidados especialistas e interações com a audiência.",
        "Descreva como utilizar análise de dados para otimizar campanhas de divulgação de \"{tema}\". Inclua métricas chave, insights obtidos e ajustes recomendados.",
        "Elabore um plano de cross-promotion para \"{tema}\". Identifique parceiros estratégicos, benefícios mútuos e estratégias de promoção conjunta.",
        "Proponha uma ação de marketing sensorial para promover \"{tema}\". Detalhe elementos visuais, sonoros e olfativos na experiência de marca.",
        "Crie uma landing page otimizada para divulgar \"{tema}\". Utilize design responsivo, chamadas para ação claras e formulários de captura de leads.",
        "Desenvolva uma estratégia de remarketing para \"{tema}\". Inclua segmentação de público-alvo, conteúdo personalizado e incentivos adicionais.",
        "Escreva um estudo de caso sobre \"{tema}\". Apresente desafios enfrentados, soluções implementadas e resultados alcançados.",
        "Descreva como usar técnicas de neuromarketing para promover \"{tema}\". Inclua elementos de persuasão, reações emocionais e impacto no comportamento do consumidor.",
        "Elabore um plano de lançamento de produto digital para \"{tema}\". Inclua fase de pré-lançamento, estratégias de engajamento e feedback dos usuários.",
        "Crie um quiz interativo sobre \"{tema}\". Utilize perguntas relevantes, feedback imediato e compartilhamento social.",
        "Desenvolva uma estratégia de marketing de guerrilha digital para \"{tema}\". Inclua elementos virais, interações online e impacto nas redes sociais.",
        "Proponha uma ação de storytelling transmídia para \"{tema}\". Detalhe narrativas integradas em diferentes plataformas e engajamento do público.",
        "Elabore um plano de lançamento de serviço para \"{tema}\". Inclua etapas de desenvolvimento, testes piloto e estratégias de adoção pelo mercado.",
        "Crie um ebook sobre \"{tema}\". Inclua insights, tendências de mercado e dicas práticas relacionadas ao tema.",
        "Descreva como realizar um roadshow para promover \"{tema}\". Inclua cidades visitadas, eventos organizados e interações com stakeholders.",
        "Elabore um plano de marketing de eventos para \"{tema}\". Identifique tipos de eventos, agenda de atividades e estratégias de engajamento.",
        "Proponha uma estratégia de marketing de nicho para \"{tema}\". Identifique comunidades específicas, canais de comunicação e conteúdo personalizado.",
        "Crie uma série de podcasts sobre \"{tema}\". Inclua temas variados, convidados especializados e estratégias de distribuição.",
        "Desenvolva uma estratégia de conteúdo evergreen para \"{tema}\". Inclua temas atemporais, otimização SEO e promoção contínua.",
        "Escreva um manifesto sobre \"{tema}\". Apresente visão, valores e compromissos relacionados ao tema.",
        "Descreva como utilizar marketing de guerrilha para promover \"{tema}\". Inclua ações criativas, impacto viral e engajamento da comunidade.",
        "Elabore um plano de lançamento de campanha publicitária para \"{tema}\". Inclua estratégia de mídia, criação de peças e análise de resultados.",
        "Proponha uma ação de co-branding para \"{tema}\". Identifique marcas parceiras, benefícios compartilhados e estratégias de promoção conjunta.",
        "Crie um guia prático para criação de conteúdo para redes sociais sobre \"{tema}\". Inclua calendário editorial, melhores práticas e exemplos de sucesso.",
        "Desenvolva uma estratégia de marketing de influência para \"{tema}\". Identifique influenciadores-chave, formatos de colaboração e métricas de desempenho.",
        "Elabore um plano de marketing digital para \"{tema}\". Inclua SEO, PPC, redes sociais e métricas de monitoramento.",
        "Crie uma campanha de crowdfunding para \"{tema}\". Inclua metas de arrecadação, recompensas para apoiadores e estratégias de divulgação.",
        "Descreva como usar realidade aumentada para promover \"{tema}\". Inclua experiências interativas, gamificação e impacto na experiência do usuário.",
        "Elabore um plano de lançamento de conteúdo para \"{tema}\". Inclua formatos variados, cronograma de publicação e estratégias de distribuição.",
        "Proponha uma estratégia de marketing de conteúdo visual para \"{tema}\". Identifique tipos de conteúdo visual, plataformas de distribuição e storytelling visual.",
        "Crie um programa de fidelidade para \"{tema}\". Inclua benefícios para membros, pontos de recompensa e engajamento contínuo.",
        "Desenvolva uma estratégia de marketing omnichannel para \"{tema}\". Inclua integração de canais, consistência de mensagem e jornada do cliente.",
        "Escreva um artigo de opinião sobre \"{tema}\". Apresente análises, perspectivas e recomendações relacionadas ao tema.",
        "Descreva como utilizar inteligência artificial para otimizar campanhas de divulgação de \"{tema}\". Inclua análise preditiva, automação de processos e personalização de conteúdo.",
        "Elabore um plano de marketing internacional para \"{tema}\". Identifique mercados-alvo, adaptação cultural e estratégias de entrada no mercado.",
        "Proponha uma estratégia de marketing de recomendação para \"{tema}\". Identifique pontos de contato, incentivos e automatização do processo.",
        "Crie um plano de marketing de experiência para \"{tema}\". Inclua elementos sensoriais, emocionais e memórias de marca.",
        "Desenvolva uma estratégia de co-marketing para \"{tema}\". Identifique parceiros estratégicos, benefícios mútuos e plano de execução.",
        "Elabore um plano de lançamento de blog corporativo para \"{tema}\". Inclua temas de conteúdo, calendário editorial e estratégias de engajamento.",
        "Proponha uma ação de marketing de guerrilha para \"{tema}\". Detalhe a execução, elementos de surpresa e impacto viral.",
        "Crie um pitch de vendas para \"{tema}\". Inclua benefícios, diferenciais competitivos e argumentos persuasivos.",
        "Desenvolva uma estratégia de marketing de conteúdo educativo para \"{tema}\". Inclua webinars, ebooks e tutoriais especializados.",
        "Escreva um case de sucesso sobre \"{tema}\". Apresente desafios enfrentados, soluções implementadas e resultados alcançados.",
        "Descreva como usar influenciadores digitais para promover \"{tema}\". Inclua estratégias de parceria, conteúdo colaborativo e métricas de desempenho.",
        "Elabore um plano de lançamento de aplicativo móvel para \"{tema}\". Inclua fases de desenvolvimento, teste de usabilidade e estratégias de aquisição de usuários.",
        "Proponha uma campanha de email marketing para \"{tema}\". Inclua segmentação de público, sequência de envios e objetivos de conversão.",
        "Crie uma série de posts para redes sociais sobre \"{tema}\". Utilize conteúdo visual, hashtags relevantes e interações com seguidores.",
        "Desenvolva uma estratégia de marketing de conteúdo para \"{tema}\". Inclua tipos de conteúdo, calendário editorial e distribuição multicanal.",
        "Elabore um plano de relações públicas para \"{tema}\". Identifique oportunidades de mídia, estratégias de comunicação e gestão de crises.",
        "Escreva um artigo de blog sobre \"{tema}\". Aborde tendências de mercado, melhores práticas e insights estratégicos.",
        "Descreva como usar storytelling para promover \"{tema}\". Inclua personagens, narrativa e emocionalidade vinculados ao tema.",
        "Elabore um plano de lançamento de produto para \"{tema}\". Inclua pesquisa de mercado, desenvolvimento de produto e estratégias de marketing.",
        "Proponha uma ação de marketing de influência para \"{tema}\". Identifique influenciadores-chave, estratégias de colaboração e resultados esperados.",
        "Crie um webinar sobre \"{tema}\". Inclua tópicos relevantes, palestrantes especializados e interação com a audiência.",
        "Desenvolva uma estratégia de marketing digital para \"{tema}\". Inclua SEO, PPC, mídias sociais e análise de dados.",
        "Elabore um plano de lançamento de campanha publicitária para \"{tema}\". Inclua objetivos de marketing, criação de campanha e mídias selecionadas.",
        "Descreva como usar marketing de conteúdo para promover \"{tema}\". Inclua tipos de conteúdo, calendário editorial e distribuição multicanal.",
        "Crie um vídeo explicativo sobre \"{tema}\". Demonstre funcionalidades, benefícios e casos de uso do produto ou serviço.",
        "Proponha uma ação de marketing de guerrilha para \"{tema}\". Detalhe a execução, impacto desejado e engajamento do público.",
        "Elabore um plano de lançamento de produto para \"{tema}\". Inclua pesquisa de mercado, desenvolvimento de produto e estratégias de marketing.",
        "Desenvolva uma estratégia de marketing de influência para \"{tema}\". Identifique influenciadores-chave, estratégias de colaboração e métricas de desempenho.",
        "Escreva um artigo de blog sobre \"{tema}\". Aborde tendências de mercado, melhores práticas e insights estratégicos.",
        "Descreva como usar storytelling para promover \"{tema}\". Inclua personagens, narrativa e emocionalidade vinculados ao tema.",
        "Elabore um plano de lançamento de produto para \"{tema}\". Inclua pesquisa de mercado, desenvolvimento de produto e estratégias de marketing.",
        "Proponha uma ação de marketing de influência para \"{tema}\". Identifique influenciadores-chave, estratégias de colaboração e resultados esperados.",
        "Crie um webinar sobre \"{tema}\". Inclua tópicos relevantes, palestrantes especializados e interação com a audiência.",
        "Desenvolva uma estratégia de marketing digital para \"{tema}\". Inclua SEO, PPC, mídias sociais e análise de dados.",
        "Elabore um plano de lançamento de campanha publicitária para \"{tema}\". Inclua objetivos de marketing, criação de campanha e mídias selecionadas.",
        "Descreva como usar marketing de conteúdo para promover \"{tema}\". Inclua tipos de conteúdo, calendário editorial e distribuição multicanal.",
        "Crie um vídeo explicativo sobre \"{tema}\". Demonstre funcionalidades, benefícios e casos de uso do produto ou serviço.",
        "Proponha uma ação de marketing de guerrilha para \"{tema}\". Detalhe a execução, impacto desejado e engajamento do público.",
        "Elabore um plano de lançamento de produto para \"{tema}\". Inclua pesquisa de mercado, desenvolvimento de produto e estratégias de marketing.",
        "Desenvolva uma estratégia de marketing de influência para \"{tema}\". Identifique influenciadores-chave, estratégias de colaboração e métricas de desempenho.",
        "Escreva um artigo de blog sobre \"{tema}\". Aborde tendências de mercado, melhores práticas e insights estratégicos.",
        "Descreva como usar storytelling para promover \"{tema}\". Inclua personagens, narrativa e emocionalidade vinculados ao tema.",
        "Elabore um plano de lançamento de produto para \"{tema}\". Inclua pesquisa de mercado, desenvolvimento de produto e estratégias de marketing.",
        "Proponha uma ação de marketing de influência para \"{tema}\". Identifique influenciadores-chave, estratégias de colaboração e resultados esperados.",
        "Crie um webinar sobre \"{tema}\". Inclua tópicos relevantes, palestrantes especializados e interação com a audiência.",
        "Desenvolva uma estratégia de marketing digital para \"{tema}\". Inclua SEO, PPC, mídias sociais e análise de dados.",
        "Elabore um plano de lançamento de campanha publicitária para \"{tema}\". Inclua objetivos de marketing, criação de campanha e mídias selecionadas.",
        "Descreva como usar marketing de conteúdo para promover \"{tema}\". Inclua tipos de conteúdo, calendário editorial e distribuição multicanal.",
        "Crie um vídeo explicativo sobre \"{tema}\". Demonstre funcionalidades, benefícios e casos de uso do produto ou serviço.",
        "Proponha uma ação de marketing de guerrilha para \"{tema}\". Detalhe a execução, impacto desejado e engajamento do público.",
        "Elabore um plano de lançamento de produto para \"{tema}\". Inclua pesquisa de mercado, desenvolvimento de produto e estratégias de marketing.",
        "Desenvolva uma estratégia de marketing de influência para \"{tema}\". Identifique influenciadores-chave, estratégias de colaboração e métricas de desempenho.",
        "Escreva um artigo de blog sobre \"{tema}\". Aborde tendências de mercado, melhores práticas e insights estratégicos.",
        "Descreva como usar storytelling para promover \"{tema}\". Inclua personagens, narrativa e emocionalidade vinculados ao tema."
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

