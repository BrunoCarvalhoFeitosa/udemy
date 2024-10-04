export const galleries = [
    {
        category: "Desenvolvimento web",
        title: "Domine frameworks como React.js, Angular e Vue.js",
        src: "/image/image-hero-01.jpg",
        content: <div className="flex flex-col gap-4 bg-[#F5F5F7] md:py-14 rounded-3xl mb-4">
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Desenvolvimento Web:</strong> Refere-se ao processo de criação e manutenção de 
                sites e aplicações para a web. Envolve várias disciplinas, incluindo design, 
                programação, e configuração de servidores. O desenvolvimento web pode ser dividido 
                em dois principais aspectos: o front-end (lado do cliente) e o back-end (lado do servidor). 
                O front-end lida com a interface e a experiência do usuário, enquanto o back-end gerencia a 
                lógica, a base de dados e a comunicação com o front-end.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">React.js:</strong> É uma biblioteca JavaScript desenvolvida pelo Facebook para construir 
                interfaces de usuário. O React é baseado em componentes, que são peças reutilizáveis de código 
                que representam partes da interface. Ele utiliza um conceito chamado "Virtual DOM" para melhorar 
                a performance, atualizando apenas as partes da interface que mudaram em vez de toda a página. 
                É muito popular por sua eficiência e flexibilidade.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Angular:</strong> É um framework JavaScript desenvolvido pelo Google para criar 
                aplicações web de página única (SPA). O Angular oferece uma estrutura completa, incluindo 
                dois-way data binding (sincronização automática entre o modelo e a visão), injeção de dependências 
                e uma abordagem baseada em módulos. É conhecido por sua robustez e pela criação de aplicações de grande 
                escala e complexidade.
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">Vue.js:</strong> É um framework progressivo para construir interfaces de usuário. É conhecido por 
                sua simplicidade e flexibilidade, permitindo a integração gradual em projetos existentes. Vue é baseado 
                em componentes e é fácil de aprender e adotar, oferecendo funcionalidades como reatividade e um sistema 
                de roteamento. É frequentemente elogiado por sua facilidade de uso e pela documentação clara.
            </p>
        </div>
    },
    {
      category: "Desenvolvimento mobile",
      title: "Domine frameworks como React Native, Flutter, Swift",
      src: "/image/image-hero-02.jpg",
      content: <div className="flex flex-col gap-4 bg-[#F5F5F7] md:py-14 rounded-3xl mb-4">
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Desenvolvimento Mobile:</strong> Refere-se à criação de aplicações para dispositivos móveis, 
                como smartphones e tablets. Envolve a construção de aplicativos nativos (desenvolvidos especificamente para 
                uma plataforma, como iOS ou Android) ou aplicativos híbridos (que podem funcionar em várias plataformas a 
                partir de um único código-base). O desenvolvimento mobile pode incluir a interface do usuário, a lógica de 
                negócios e a integração com serviços e APIs.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">React Native:</strong> É um framework de desenvolvimento mobile criado pelo Facebook que permite 
                construir aplicativos móveis usando JavaScript e React. Com o React Native, você pode escrever código uma 
                vez e executá-lo em várias plataformas, como iOS e Android, com uma base de código compartilhada. Ele combina 
                a performance de aplicativos nativos com a flexibilidade do desenvolvimento baseado em JavaScript, aproveitando 
                componentes nativos e permitindo acesso a APIs nativas.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Flutter:</strong> É um framework de desenvolvimento mobile criado pelo Google. Utiliza a linguagem de 
                programação Dart e permite a criação de aplicativos nativos de alta performance para iOS e Android a partir de 
                um único código-base. O Flutter é conhecido por seu sistema de widgets personalizáveis e por sua abordagem “hot reload”, 
                que permite ver as mudanças no código em tempo real. É muito valorizado pela sua capacidade de criar interfaces ricas e 
                altamente responsivas.
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">Swift:</strong> É uma linguagem de programação desenvolvida pela Apple para criar aplicativos para iOS, macOS, 
                watchOS e tvOS. Swift é uma linguagem moderna, segura e eficiente que substitui o Objective-C como a principal linguagem 
                para desenvolvimento de software para as plataformas Apple. É conhecida por sua performance e por ter uma sintaxe que 
                facilita a leitura e a escrita de código.
            </p>
        </div>
    },
    {
      category: "Banco de dados",
      title: "Domine ferramentas como SQL Server, MySQL, NoSQL",
      src: "/image/image-hero-03.jpg",
      content: <div className="flex flex-col gap-4 bg-[#F5F5F7] md:py-14 rounded-3xl mb-4">
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Banco de Dados:</strong> É um sistema que organiza, armazena e gerencia dados de 
                forma estruturada e eficiente. Os bancos de dados permitem o armazenamento e a recuperação  de informações de maneira 
                rápida e segura. Eles podem ser classificados em diferentes tipos,  principalmente com base em como os dados são estruturados 
                e acessados.  Cada projeto poderá reservar-se de uma estrutura em que seja melhor utilizar bancos de dados relacionais como o 
                SQL Server e MySQL ou utilizar o NoSQL.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">SQL Server:</strong> É um sistema de gerenciamento de banco de dados relacional 
                (RDBMS) desenvolvido pela Microsoft. O SQL Server usa a Structured Query Language (SQL) para gerenciar e 
                consultar dados. Ele é conhecido por suas características robustas, incluindo suporte para transações, 
                escalabilidade, e integração com outras ferramentas da Microsoft, como o Microsoft Azure e o Power BI. 
                É amplamente utilizado em ambientes corporativos para aplicações que exigem alta disponibilidade e segurança.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">MySQL:</strong> É um sistema de gerenciamento de banco de dados relacional de código aberto. Desenvolvido 
                originalmente pela MySQL AB e agora mantido pela Oracle Corporation, o MySQL é popular por sua simplicidade, flexibilidade 
                e pelo fato de ser gratuito. Assim como o SQL Server, o MySQL usa SQL para operações de gerenciamento e consulta de dados. 
                É frequentemente usado em combinação com tecnologias de código aberto, como o PHP e o Apache, para construir aplicações web.
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">NoSQL:</strong> Refere-se a uma categoria de sistemas de gerenciamento de banco de dados que não utilizam o modelo 
                relacional tradicional. NoSQL é uma abreviação de "Not Only SQL" (Não Apenas SQL). Esses bancos de dados são projetados para 
                lidar com grandes volumes de dados não estruturados ou semi-estruturados e oferecem alta escalabilidade e flexibilidade. 
                Existem vários tipos de bancos de dados NoSQL, incluindo:
                <ul className="mt-2">
                    <li>
                        <strong className="text-neutral-700">Documento:</strong> Armazenam dados em documentos JSON ou BSON (por exemplo, MongoDB).
                    </li>
                    <li>
                        <strong className="text-neutral-700">Colunas:</strong> Armazenam dados em colunas em vez de linhas (por exemplo, Apache Cassandra).
                    </li>
                    <li>
                        <strong className="text-neutral-700">Chave-Valor:</strong> Armazenam dados como pares chave-valor (por exemplo, Redis).
                    </li>
                    <li>
                        <strong className="text-neutral-700">Grafos:</strong> Focados em relações e conexões entre dados (por exemplo, Neo4j).
                    </li>
                </ul>
            </p>
        </div>
    },
    {
      category: "Quality Assurance",
      title: "Domine ferramentas como Selenium, Cypress, Jest",
      src: "/image/image-hero-04.jpg",
      content: <div className="flex flex-col gap-4 bg-[#F5F5F7] md:py-14 rounded-3xl mb-4">
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">QA (Quality Assurance):</strong> Refere-se ao processo de garantir que o software 
                atenda aos padrões de qualidade e funcione conforme esperado. O objetivo do QA é identificar 
                e corrigir bugs, melhorar a usabilidade e assegurar que o software seja confiável e robusto. 
                O QA pode incluir testes manuais, onde testadores executam o software e verificam seu comportamento, 
                e testes automatizados, onde ferramentas e scripts são usados para realizar testes repetitivos e garantir 
                que o software funcione corretamente em diferentes cenários.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Selenium:</strong> É uma ferramenta de automação de testes para aplicações web. O Selenium permite 
                que os testers escrevam scripts para automatizar a interação com uma aplicação web, simulando ações do usuário, 
                como cliques e preenchimento de formulários. Suporta várias linguagens de programação, incluindo Java, C#, Python 
                e Ruby, e é compatível com diversos navegadores e sistemas operacionais. O Selenium é amplamente usado para testes 
                de regressão e para garantir que as mudanças no código não quebrem funcionalidades existentes.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Cypress:</strong> É uma ferramenta de automação de testes de front-end para aplicações web. Ao contrário do 
                Selenium, que simula interações com o navegador, o Cypress executa os testes diretamente no navegador e é conhecido 
                por sua velocidade e facilidade de configuração. Ele oferece uma abordagem "end-to-end", permitindo testar a aplicação 
                inteira, desde a interface do usuário até a interação com APIs e servidores. Cypress tem uma interface de usuário 
                amigável para depuração e análise de testes, tornando-o popular para testes de integração e e2e (end-to-end).
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">Jest:</strong> É um framework de testes para JavaScript, desenvolvido pelo Facebook. Jest é amplamente 
                utilizado para testes de unidade e de integração, principalmente em aplicações React, mas também pode ser usado 
                com outras bibliotecas e frameworks JavaScript. Oferece uma configuração mínima, uma interface de relatórios clara 
                e suporte para espiões e mocks, facilitando o teste de funções e componentes isolados. Jest é conhecido por sua 
                velocidade e por ser fácil de configurar, integrando-se bem com pipelines de CI/CD (Integração Contínua/Entrega Contínua).
            </p>
        </div>
    },
    {
        category: "Cloud Computing",
        title: "Domine ferramentas de computação na nuvem",
        src: "/image/image-hero-06.jpg",
        content: <div className="flex flex-col gap-4 bg-[#F5F5F7] md:py-14 rounded-3xl mb-4">
            <p className="mx-auto max-w-3xl mb-8 text-neutral-600 text-base">
                <strong className="text-neutral-700">Cloud Computing:</strong> Cloud computing é um modelo de fornecimento de recursos computacionais pela 
                internet. Em vez de usar servidores locais ou hardware físico próprio, as empresas e indivíduos podem acessar 
                e utilizar serviços de computação (como armazenamento, processamento e software) através da internet, pagando 
                apenas pelo que utilizam. Isso oferece flexibilidade, escalabilidade e custo reduzido.
            </p>
            <p className="pt-7 text-neutral-600 text-left text-base">
                <strong className="text-neutral-700">
                    Principais ferramentas e serviços de cloud computing incluem:
                </strong>
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Infraestrutura como Serviço (IaaS):</strong> Fornece recursos de computação, armazenamento e rede sob demanda. 
                Exemplos incluem Amazon Web Services (AWS), Microsoft Azure e Google Cloud Platform (GCP).
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Plataforma como Serviço (PaaS):</strong> Oferece uma plataforma para o desenvolvimento e gerenciamento de 
                aplicações sem a complexidade de gerenciar a infraestrutura subjacente. Exemplos incluem Google App Engine e Microsoft Azure App Services.
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">Software como Serviço (SaaS):</strong> Fornece aplicações prontas para uso, acessíveis pela internet. Exemplos incluem Google Workspace, 
                Microsoft 365 e Salesforce.
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">Função como Serviço (FaaS):</strong> Também conhecido como serverless computing, permite executar código em resposta a eventos sem 
                gerenciar servidores. Exemplos incluem AWS Lambda e Google Cloud Functions.
                Microsoft 365 e Salesforce.
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">Armazenamento em Nuvem:</strong> Serviços para armazenar e gerenciar dados na nuvem, como Amazon S3, Google Cloud Storage 
                e Microsoft Azure Blob Storage.
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">Backup e Recuperação:</strong> Soluções para fazer backup de dados e recuperá-los em caso de falhas. Exemplos incluem 
                AWS Backup e Azure Backup.
            </p>
        </div>
    },
    {
      category: "Design",
      title: "Domine ferramentas como Photoshop, Corel Draw, Figma",
      src: "/image/image-hero-05.jpg",
      content: <div className="flex flex-col gap-4 bg-[#F5F5F7] md:py-14 rounded-3xl mb-4">
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Design:</strong> Refere-se ao processo de criar e organizar elementos visuais e funcionais 
                para comunicar uma mensagem ou resolver um problema. O design pode abarcar várias áreas, incluindo 
                design gráfico, design de interface (UI), design de experiência do usuário (UX), e muito mais. O objetivo 
                é criar soluções estéticas e eficazes que atendam às necessidades do usuário e aos objetivos do projeto.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Photoshop:</strong> Desenvolvido pela Adobe, o Photoshop é uma das ferramentas mais conhecidas e 
                amplamente usadas para edição de imagens e design gráfico. É utilizado para criar e modificar imagens rasterizadas 
                (baseadas em pixels), como fotos e gráficos detalhados. O Photoshop oferece uma ampla gama de ferramentas e recursos
                 para retocar fotos, criar composições complexas, e desenhar elementos gráficos. É muito popular em áreas como 
                 fotografia, design de sites, e marketing.
            </p>
            <p className="mx-auto max-w-3xl mb-4 text-neutral-600 text-base">
                <strong className="text-neutral-700">Corel Draw:</strong> É um software de design gráfico vetorial desenvolvido pela Corel Corporation. Diferente 
                do Photoshop, que é orientado a imagens rasterizadas, o Corel Draw é especializado em criar e editar gráficos vetoriais, 
                que são baseados em formas geométricas e são escaláveis sem perda de qualidade. É frequentemente usado para criar 
                logotipos, ilustrações, e layouts para impressos e materiais promocionais. O Corel Draw é conhecido por suas ferramentas 
                de design precisas e pela sua interface amigável.
            </p>
            <p className="mx-auto max-w-3xl text-neutral-600 text-base">
                <strong className="text-neutral-700">Figma:</strong> É uma ferramenta de design colaborativo baseada em nuvem, focada principalmente em design de 
                interface (UI) e prototipagem. O Figma permite que designers trabalhem em tempo real e colaborem com outros membros da 
                equipe, facilitando a criação de protótipos interativos e a definição de estilos e componentes de design. É especialmente 
                popular em projetos de design de aplicativos e websites, devido à sua capacidade de facilitar a colaboração e a integração 
                com outros fluxos de trabalho de design e desenvolvimento.
            </p>
        </div>
    }
]

export const categories: { title: string; description: string }[] = [
    {
      title: "Tecnologia da Informação",
      description: "Aprenda a desenvolver aplicações desktop, mobile e web.",
    },
    {
      title: "Design UI e UX",
      description: "Aprenda a criar protótipos para suas aplicações.",
    },
    {
      title: "Finanças Pessoais e Comerciais",
      description: "Aprenda a investir corretamente e monte seu negócio.",
    },
    {
      title: "Marketing e Propaganda",
      description: "Aprenda a impulsionar seu negócio criando campanhas.",
    },
    {
      title: "Música",
      description: "Aprenda a tocar viola, violão, guitarra e contra baixo.",
    },
    {
      title: "Saúde",
      description: "Aprenda a se alimentar de maneira correta e saudável.",
    }
]

export const peoples = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Desenvolvedor Front-End",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Cientista de Dados",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Desenvolvedor Back-end",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "Analista de Testes",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    }
]

export const coursesWebDevelopment = [
    {
        image: "",
        title: "Desenvolva aplicações React.js",
        author: "Lorem ipsum",
        rating: "5,0",
        buyers: "73.493",
        price: "R$199,99",
        discountPrice: "R$69,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Next.js",
        author: "Lorem ipsum",
        rating: "4,9",
        buyers: "68.092",
        price: "R$199,99",
        discountPrice: "R$59,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Vue.js",
        author: "Lorem ipsum",
        rating: "4,8",
        buyers: "45.529",
        price: "R$199,99",
        discountPrice: "R$39,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Gatsby",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "26.117",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Svelte",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações PHP",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
]

export const coursesMobileDevelopment = [
    {
        image: "",
        title: "Desenvolva aplicações React Native",
        author: "Lorem ipsum",
        rating: "5,0",
        buyers: "73.493",
        price: "R$199,99",
        discountPrice: "R$69,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Flutter",
        author: "Lorem ipsum",
        rating: "4,9",
        buyers: "68.092",
        price: "R$199,99",
        discountPrice: "R$59,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Android",
        author: "Lorem ipsum",
        rating: "4,8",
        buyers: "45.529",
        price: "R$199,99",
        discountPrice: "R$39,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Swift",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "26.117",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Dart",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Desenvolva aplicações Kotlin",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
]

export const coursesDatabase = [
    {
        image: "",
        title: "Modelagem de banco SQL Server",
        author: "Lorem ipsum",
        rating: "5,0",
        buyers: "73.493",
        price: "R$199,99",
        discountPrice: "R$69,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Entidades e relacionamentos",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Executando procedures",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "View, sub-consultas e funções",
        author: "Lorem ipsum",
        rating: "4,9",
        buyers: "68.092",
        price: "R$199,99",
        discountPrice: "R$59,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Triggers, transações e cursores",
        author: "Lorem ipsum",
        rating: "4,8",
        buyers: "45.529",
        price: "R$199,99",
        discountPrice: "R$39,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "BigQuery consultas avançadas",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "26.117",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
]

export const coursesQualityAssurance = [
    {
        image: "",
        title: "Testes unitários com Jest",
        author: "Lorem ipsum",
        rating: "5,0",
        buyers: "73.493",
        price: "R$199,99",
        discountPrice: "R$69,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Testes automatizados com Cypress",
        author: "Lorem ipsum",
        rating: "4,9",
        buyers: "68.092",
        price: "R$199,99",
        discountPrice: "R$59,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Testes automatizados com Selenium",
        author: "Lorem ipsum",
        rating: "4,8",
        buyers: "45.529",
        price: "R$199,99",
        discountPrice: "R$39,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Testes automatizados com Cucumber",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "26.117",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Testes automatizados com JUnit",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Testes automatizados com Appium",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
]

export const coursesCloudComputing = [
    {
        image: "",
        title: "Introdução ao Cloud Computing",
        author: "Lorem ipsum",
        rating: "5,0",
        buyers: "73.493",
        price: "R$199,99",
        discountPrice: "R$69,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Infraestrutura como serviço (IaaS)",
        author: "Lorem ipsum",
        rating: "4,9",
        buyers: "68.092",
        price: "R$199,99",
        discountPrice: "R$59,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Plataforma como serviço (PaaS)",
        author: "Lorem ipsum",
        rating: "4,8",
        buyers: "45.529",
        price: "R$199,99",
        discountPrice: "R$39,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Software como serviço (SaaS)",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "26.117",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Função como serviço (FaaS)",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Nuvem pública, privada e híbrida",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
]

export const coursesDesign = [
    {
        image: "",
        title: "Domine o Adobe Photoshop",
        author: "Lorem ipsum",
        rating: "5,0",
        buyers: "73.493",
        price: "R$199,99",
        discountPrice: "R$69,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Domine o Adobe Illustrator",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Domine o Sketch",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "20.010",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Domine o Corel Draw",
        author: "Lorem ipsum",
        rating: "4,9",
        buyers: "68.092",
        price: "R$199,99",
        discountPrice: "R$59,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Prototipação com Figma",
        author: "Lorem ipsum",
        rating: "4,8",
        buyers: "45.529",
        price: "R$199,99",
        discountPrice: "R$39,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
    {
        image: "",
        title: "Prototipação com Adobe XD",
        author: "Lorem ipsum",
        rating: "4,7",
        buyers: "26.117",
        price: "R$199,99",
        discountPrice: "R$29,99",
        content: (
            <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
                <p>Product Tab</p>
            </div>
        ),
    },
]

export const testimonials = [
    {
      quote: "Graças a Udemy tive acesso à cursos de ótimo conteúdo e preço barato, hoje sou head de tecnologia na empresa em que atuo.",
      name: "Gabriel Silva Santos",
      title: "Head de Tecnologia",
      date: "05/09/2024"
    },
    {
      quote: "Utilizo a Udemy há cerca de 4 anos e pude aprender conceitos e práticas de desenvolvimento mobile, front-end e back-end.",
      name: "Carlos Miguel Santiago",
      title: "Desenvolvedor Full-stack",
      date: "06/09/2024"
    },
    {
      quote: "Estou completamente satisfeito com os aprendizados que venho tendo, tudo o que aprendo aqui, aplico diariamente em meu trabalho.",
      name: "Edgar Villas Boas",
      title: "Desenvolvedor Asp.net Core",
      date: "07/09/2024"
    },
    {
      quote: "Porquê não descobri antes esta plataforma? Comprei diversos cursos de tecnologia e já consigo desenvolver meus apps sozinho.",
      name: "Júlio Verner Prestes",
      title: "Desenvolvedor Flutter Pleno",
      date: "08/09/2024"
    },
    {
      quote: "Qualidade extrema de aprendizado e vídeo, os instrutores lessionam em faculdades de tecnologia, então qualquer um pode aprender.",
      name: "Bruno Carvalho Feitosa",
      title: "Desenvolvedor Front-end Sênior",
      date: "09/09/2024"
    }
]

export const jobs = [
    {
        id: 1,
        title: "Desenvolvedor Front-End Sênior",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 7800,
    },
    {
        id: 2,
        title: "Desenvolvedor Back-End Sênior",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 8500,
    },
    {
        id: 3,
        title: "Desenvolvedor Full Stack Sênior",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 9600,
    },
    {
        id: 4,
        title: "Desenvolvedor Android",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 9000,
    },
    {
        id: 5,
        title: "Desenvolvedor iOS",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 10000,
    },
    {
        id: 6,
        title: "Quality Assurance Pleno",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 6000,
    },
    {
        id: 7,
        title: "Scrum Master",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 11000,
    },
    {
        id: 8,
        title: "Product Owner",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 10000,
    },
    {
        id: 9,
        title: "Executivo de Contas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 5000,
    },
    {
        id: 10,
        title: "Lorem ipsum dolot",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis, tenetur voluptates porro aperiam ipsa quidem dolores voluptas dolore impedit hic illo. In necessitatibus ut reiciendis incidunt commodi id molestias?",
        type: "Remoto",
        salary: 7000,
    }
]