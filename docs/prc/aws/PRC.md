# PRC — AWS (apoiase--home-mobile-first)

Site Next.js estático, deploy real via GitHub Pages (branch `gh-pages`,
ver workflows), sem `serverless.yml` e sem SDK AWS. Validado contra o
inventário da task NA-598 (Steampipe `sa_automation_ro`): **0 recursos**
com nome `home-mobile-first`/`mobile-first` (ver `docs/prc/scan/2026-07-18-scan.md`).

## Checklist

- [x] Nenhum recurso AWS órfão associado ao repo (confirmado no inventário)
- [x] Deploy confirmado como GitHub Pages, não AWS — consistente entre
  código (workflows) e inventário (0 recursos)
- [x] Nenhuma credencial AWS em código/CI (os 10 tokens achados no gitleaks
  são do Plasmic, não AWS — ver PRC de Security SEC9)
