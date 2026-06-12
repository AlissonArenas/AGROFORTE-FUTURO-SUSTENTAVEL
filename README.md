# Agroforte — Futuro Sustentável

> **Pesquisa realizada em 2026**
> 
> Equilíbrio absoluto entre a potência da produção em larga escala e a preservação vital do bioma brasileiro. Um projeto focado na relação entre alta produtividade agrícola e metas globais de descarbonização.

---

## 📌 Sobre o Projeto

O **Agroforte** é uma plataforma institucional e informativa que apresenta dados, métricas e pilares práticos sobre a agricultura sustentável no Brasil. O site defende que a produção agrícola não deve ser uma extração, mas um diálogo contínuo com a geologia local, alcançando alta performance sem a necessidade de desmatamento de árvores nativas.

Os dados compilados e exibidos na plataforma são de autoria da **EMBRAPA** e do **IBGE**.

---

## 📊 Impacto e Dados de Pesquisa

O site destaca três métricas principais de impacto ecológico e liderança global do Brasil no setor do agronegócio:

* **100% de Substituição do Nitrogênio Químico em Soja:** Eliminação completa de resíduos sintéticos no solo e redução drástica da pegada de carbono na cadeia produtiva, alinhando alta produtividade a metas globais de descarbonização.
* **282,8 Milhões de Hectares Preservados:** A pesquisa realizada pela EMBRAPA revela que as áreas dedicadas à preservação da vegetação nativa no interior dos imóveis rurais somam este total.
* **1 Bilhão de Reais em Biodefensivos Agrícolas:** Dados compilados pela Embrapa apontam o Brasil como líder global no uso de controle biológico na agricultura de larga escala.

---

## 🌱 Os Três Pilares

A metodologia apresentada para a construção de um "amanhã fértil" baseia-se em:

1. **Regeneração:** Cobertura vegetal contínua, rotação inteligente e biofertilizantes microbiológicos.
2. **Conservação:** Monitoramento real de expansões ilegais sobre as florestas.
3. **Comunidade:** Educação ambiental e incentivo monetário à prática da agricultura sustentável.

> "O segredo da vida é o solo, porque do solo dependem as plantas, a água, o clima e a nossa vida. Tudo está interligado. Não existe ser humano sadio se o solo não for sadio."
> — **Dra. Ana Maria Primavesi**

---

## 🛠️ Tecnologias e Recursos Utilizados

O projeto foi construído utilizando tecnologias web puras (Vanilla Architecture), prezando pela leveza, semântica e performance:

* **HTML5:** Estruturação semântica de layouts e uso de tags voltadas para acessibilidade (`aria-*`).
* **CSS3 Customizado:**
    * Uso de variáveis globais (`:root`) para gerenciamento de design tokens (cores, fontes e transições).
    * Arquitetura responsiva baseada em *Flexbox*, *CSS Grid* e tipografia fluida com `clamp()`.
    * Animações nativas de transição e revelação gradual (`@keyframes`).
* **JavaScript (ES6+):**
    * **Intersection Observer API:** Utilizado para detectar a rolagem do usuário e disparar de forma otimizada as animações de revelação dos elementos (`.reveal`).
    * **Contadores Animados Dinâmicos:** Efeito de contagem progressiva (`0` até o valor final) com suavização exponencial (*easing function*) assim que os números entram na tela.
    * **Efeito Parallax customizado:** Aplicado nas imagens de fundo de forma otimizada usando `requestAnimationFrame` para evitar travamentos.
    * **Gerenciamento de Estado em LocalStorage:** Persistência das preferências de acessibilidade do usuário.

---

## ♿ Recursos de Acessibilidade (A11y Widget)

O site conta com um painel (*widget*) flutuante dedicado à acessibilidade, oferecendo controle total ao usuário:

* **Alternador de Tema (Modo Claro / Modo Escuro):** Ajuste em tempo real de toda a paleta de cores do site, salvando a escolha do usuário no navegador.
* **Ajuste Dinâmico de Fonte:** Botões para aumentar ou diminuir a tipografia base do site em tempo real (Mínimo de `16px` e Máximo de `22px`).
* **Suporte a Redução de Movimento (`prefers-reduced-motion`):** Caso o usuário possua a opção de reduzir animações ativada no sistema operacional, o JavaScript e o CSS desativam automaticamente os efeitos de Parallax e as animações de transição para evitar desconforto visual.
* **Tags ARIA:** Uso correto de atributos como `aria-expanded`, `aria-hidden`, `aria-label` e `role="switch"` para garantir leitura correta por softwares de leitura de tela.

---

## 📂 Estrutura de Arquivos

```bash
├── index.html       # Estrutura principal do site e dados textuais
├── styles.css       # Design system, temas (Light/Dark) e responsividade
├── script.js        # Lógica de animações, contadores e widget de acessibilidade
└── assets/          # Imagens utilizadas no projeto
```

## 🔗 Fontes Oficiais da Pesquisa

Todo o conteúdo e base de dados estatísticos inseridos neste projeto são provenientes dos canais oficiais das entidades brasileiras:

* **Embrapa** (Empresa Brasileira de Pesquisa Agropecuária)
* **IBGE** (Instituto Brasileiro de Geografia e Estatística)
