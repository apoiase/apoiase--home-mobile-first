# PRC — Security (apoiase--home-mobile-first)

## Checklist

- [ ] **SEC9**: `plasmic.json` tem **10 API tokens do Plasmic em texto
  plano**, committados e presentes no HEAD atual (um por projeto
  sincronizado: `apoiase_home_mobile_first`, `apoiase_website_mobile_first`,
  `antd`, `plasmic-basic-components`, `plasmic-cms`, `plasmic-embed-css`,
  `plasmic-nav`, `react-awesome-reveal`, `react-parallax-tilt`,
  `react-scroll-parallax`). Confirmado por gitleaks (regra `generic-api-key`).
  Há também 1 finding só no histórico (commit `aefd67b`, chunk `_next/static/`
  de um deploy antigo pro gh-pages — arquivo não existe mais na árvore atual).
  **Não rotacionado nesta rodada** — mapear primeiro onde cada token é
  consumido (o workflow `plasmic.yml` recebe token via `client_payload` do
  dispatch do Plasmic Studio, não lê direto deste arquivo) antes de girar,
  pra não quebrar o pipeline de sync sem aviso. Fingerprints registrados no
  `.gitleaksignore` da raiz da task NA-598.
- [x] SEC1: gitleaks na árvore + histórico completo (12 commits): 10
  findings no HEAD + 1 só no histórico (ver SEC9)
- [ ] SEC2: sem `.env`/segredo de runtime — o único achado é o SEC9 acima
- [ ] SEC3: sem SECURITY.md
- [ ] SEC4: sem pre-commit / hooks locais de defesa
- [ ] SEC5: nenhum SAST/secret-scan rodava no CI antes deste combo — os
  workflows existentes (`plasmic.yml`, `plasmic-push.yml`) só fazem
  sync/build/deploy. O gate consultivo deste combo (gitleaks/semgrep/trivy)
  passa a cobrir isso em PR.
- [ ] SEC6 (Renovate/Dependabot): sem config de update automático — Next.js
  12.1.6 e React 18.1.0 estão bem datados; avaliar numa rodada futura.
