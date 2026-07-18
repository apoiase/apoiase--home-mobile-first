# PRC — GitHub (apoiase--home-mobile-first)

- Org: `apoiase`, repo GH-nativo. Scaffold `create-plasmic-app` nunca
  renomeado (`package.json` ainda diz `tmp-cpa`).
- Branch default: `main`. Branch desta task: `big-picture/NA-598-apoiase--home-mobile-first`.
- Remotos: só `origin`. 12 commits de histórico.
- Deploy real é via **GitHub Pages** (branch `gh-pages`), acionado por dois
  workflows: `plasmic.yml` (dispatch do Plasmic Studio) e `plasmic-push.yml`
  (push em `main`).

## Checklist

- [ ] **PRC-GH1**: os 2 workflows existentes só fazem sync/build/deploy —
  nenhum gate de qualidade/segurança rodava antes deste combo.
- [x] Gate consultivo adicionado por este combo
  (`.github/workflows/quality-gates.yml`, ruleset `p/typescript` +
  `p/security-audit` — repo é TypeScript/Next.js)
- [ ] PRC-GH2: sem PR template, sem CODEOWNERS.
- [ ] PRC-GH3: `plasmic.yml` usa `permissions: contents: write` (necessário
  pro `github-pages-deploy-action` escrever em `gh-pages`) — escopo amplo
  mas justificado pelo propósito do workflow; não é um achado, é o esperado
  pro padrão de deploy via Pages.
- [x] Gitleaks (árvore + histórico completo, 12 commits): 10 findings no
  HEAD, 1 só no histórico — ver PRC de Security (SEC9), registrado em
  `.gitleaksignore` da raiz da task, não rotacionado sem mapear o alcance.
