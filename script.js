//Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',//APARTIR DE QUAL SESSÃO QUE EU ESTOU ANIMANDO
        start: '0% 95%',// ONDE VAI COMEÇAR A MINHA ANIMAÇÃO
        end: '70% 50%',// FIM DA ANIMAÇÃO (topo da tela atinge 50% da altura quando estiver 70% da sessão .two)
        scrub: true,
    }, 
})

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM ID '#fanta' PARA 120% DO TOPO
        left: '0%', 
    }, 
    'orange' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO  
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM ID '#laranja-cortada' PARA 160% DO TOPO
        left: '23%', //MOVE O ELEMENTO COM ID '#laranja-cortada' PARA 23% DA ESQUERDA
    },
    'orange' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO
);

tl.to(
    '#laranja',
    {
        width: '15%', //REDUZ A LARGURA DO ELEMENTO COM ID '#laranja' EM 15%
        top: '160%', //MOVE O ELEMENTO COM ID '#laranja' PARA 160% DO TOPO
        right: '10%', //MOVE O ELEMENTO COM ID '#laranja' PARA 10% DA DIREITA
    },
    'orange' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO
);

tl.to(
    '#folha',
    {
        rotate: '530deg', //FAZ O ELEMENTO COM ID '#folha' ROTACIONAR EM 530deg
        top: '110%', //MOVE O ELEMENTO COM ID '#folha' PARA 110% DO TOPO
        left: '70%', //MOVE O ELEMENTO COM ID '#folha' PARA 70% DA ESQUERDA
    },
    'orange' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO
);

tl.to(
    '#folha2',
    {
        rotate: '530deg', //FAZ O ELEMENTO COM ID '#folha2' ROTACIONAR EM 530deg
        top: '110%', //MOVE O ELEMENTO COM ID '#folha2' PARA 110% DO TOPO
        left: '0%', //MOVE O ELEMENTO COM ID '#folha2' PARA 0% DA ESQUERDA
    },
    'orange' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO
);

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three', //APARTIR DE QUAL SESSÃO QUE EU ESTOU ANIMANDO
        start: '0% 95%', // ONDE VAI COMEÇAR A MINHA ANIMAÇÃO
        end: '20% 50%', // FIM DA ANIMAÇÃO (topo da tela atinge 50% da altura quando estiver 20% da sessão .three)
        scrub: true,
    },
});

tl2.from(
    '.lemon1',
    {
        top: '110%', //MOVE O ELEMENTO COM ID '.lemon1' PARA 110% DO TOPO
        rotate: '-100deg', //FAZ O ELEMENTO COM ID '.lemon1' ROTACIONAR EM -100deg
        left: '-110%%', //MOVE O ELEMENTO COM ID '.lemon1' PARA -110% DA ESQUERDA
    },
    'refri' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'refri' PARA SINCRONIZAÇÃO
);

tl2.from(
    '#cocacola',
    {
        top: '110%', //MOVE O ELEMENTO COM ID '#cocacola' PARA 110% DO TOPO
        rotate: '-100deg', //FAZ O ELEMENTO COM ID '#cocacola' ROTACIONAR EM -100deg
        left: '-110%%', //MOVE O ELEMENTO COM ID '#cocacola' PARA -110% DA ESQUERDA
    },
    'refri' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'refri' PARA SINCRONIZAÇÃO
);

tl2.from(
    '.lemon2',
    {
        top: '110%', //MOVE O ELEMENTO COM ID '.lemon2' PARA 110% DO TOPO
        rotate: '100deg', //FAZ O ELEMENTO COM ID '.lemon2' ROTACIONAR EM 100deg
        left: '100%%', //MOVE O ELEMENTO COM ID '.lemon2' PARA 100% DA ESQUERDA
    },
    'refri' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'refri' PARA SINCRONIZAÇÃO
);

tl2.from(
    '#pepsi',
    {
        top: '110%', //MOVE O ELEMENTO COM ID '#pepsi' PARA 110% DO TOPO
        rotate: '100deg', //FAZ O ELEMENTO COM ID '#pepsi' ROTACIONAR EM 100deg
        left: '110%%', //MOVE O ELEMENTO COM ID '#pepsi' PARA 110% DA ESQUERDA
    },
    'refri' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'refri' PARA SINCRONIZAÇÃO
);

tl2.to(
    '#fanta',
    {
        width: '30%', //REDUZ A LARGURA DO ELEMENTO COM ID '#fanta' EM 35%
        top: '212%', //MOVE O ELEMENTO COM ID '#fanta' PARA 210% DO TOPO
        left: '35%', //MOVE O ELEMENTO COM ID '#fanta' PARA 33% DA ESQUERDA
    }, 
    'refri' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO  
);

tl2.to(
    '#laranja-cortada',
    {
        width: '15%', //REDUZ A LARGURA DO ELEMENTO COM ID '#laranja-cortada' EM 18%
        top: '204%', //MOVE O ELEMENTO COM ID '#laranja-cortada' PARA 160% DO TOPO
        left: '42%', //MOVE O ELEMENTO COM ID '#laranja-cortada' PARA 23% DA ESQUERDA
    },
    'refri' //NOMEIA ESTE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO
);