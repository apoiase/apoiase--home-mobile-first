# CLAUDE.md — apoiase--home-mobile-first

Site Next.js da home mobile-first da Apoia.se, com design visual gerenciado
no **Plasmic Studio** (codegen blackbox — componentes gerados a partir do
editor visual). Scaffold `create-plasmic-app` nunca renomeado
(`package.json` ainda diz `tmp-cpa`). Deploy real via **GitHub Pages**
(branch `gh-pages`), não AWS.

## Comandos

```bash
yarn install
yarn dev      # next dev
yarn build    # next build
yarn start    # next start
yarn lint     # next lint (ignoreDuringBuilds: true no next.config.js)
```

## Arquitetura

- `pages/index.tsx` / `pages/continua-por-mes.tsx` — páginas "skeleton"
  geradas pelo Plasmic: renderizam `PlasmicHome`/`PlasmicContinuaPorMes`
  dentro dos providers de variante global.
- `pages/plasmic-host.tsx` — página especial exigida pelo Plasmic Studio
  (canvas de edição ao vivo, `PlasmicCanvasHost`).
- `components/*.tsx` (32 arquivos) — wrappers **"owned by you"**: cada um
  delega a renderização real pro `Plasmic<Nome>` gerado; é o único lugar
  pra customizar comportamento/handlers sem perder no próximo sync.
- `components/plasmic/apoiase_home_mobile_first/` (108 arquivos) — código
  **gerado** (blackbox) do projeto de design principal. **Nunca editar
  manualmente** — sobrescrito a cada `plasmic sync`.
- `components/plasmic/apoiase_website_mobile_first/` (53 arquivos) —
  segundo projeto Plasmic sincronizado no mesmo repo, nomes parcialmente
  sobrepostos ao principal; sem página em `pages/` que o referencie neste
  checkout (achado a investigar se ainda é necessário).
- `plasmic.json` / `plasmic.lock` — config do Plasmic CLI, lista os 11
  projetos sincronizados. **`plasmic.json` tem 10 API tokens em texto
  plano** — ver `docs/prc/security/PRC.md` (SEC9), não rotacionado sem
  mapear o alcance primeiro.
- `.github/workflows/{plasmic,plasmic-push}.yml` — únicos dois pipelines:
  sync+build+deploy (disparado pelo Studio) e build+deploy (push em
  `main`), ambos publicando em `gh-pages`.

## Contexto de domínio

Front-end institucional (não é o app de crowdfunding em si) — mostra a
proposta de valor da Apoia.se e a campanha "Continua por mês". Referência
de domínio completa: apoiase-context-layer (sob demanda).

## Convenções

- Commits do rollout NA-598 em português natural, primeira pessoa, com
  `NA-598` no texto.
- Branch do rollout: `big-picture/NA-598-apoiase--home-mobile-first`.
- Nunca editar `components/plasmic/**` manualmente — mudanças de design
  entram via Plasmic Studio + sync.
- PR só via review humano — nunca merge por API.

## Knowledge graph

- `graphify-out/graph.html` (interativo) · `GRAPH_REPORT.md` (auditoria) —
  1450 nós, 92 comunidades (a maioria = 1 wrapper + seu componente gerado +
  ícones relacionados). Dangling edges esperadas: imports de npm externos
  (react, antd, @plasmicapp/*) e de módulos `.module.css` (CSS não entra
  no grafo de código) — não é corrupção.
- `.understand-anything/knowledge-graph.json` (layers, tour) — query via
  `/understand-chat`. Imagens decorativas (11 SVG/JPEG de ilustração) foram
  **excluídas** da extração semântica — conteúdo puramente visual, sem
  valor arquitetural, extração via vision não se justificava.
- `docs/prc/scan/2026-07-18-scan.md` — validação código→realidade: 0
  recursos AWS (esperado, deploy é GitHub Pages) + achado de segurança
  SEC9 (tokens Plasmic em texto plano).
