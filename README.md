# munzuratak.github.io

Personal CV and portfolio site of Munzur Atak, AI & Software Engineer.
Live at **https://munzuratak.github.io** (English at `/en/`, Dutch at `/nl/`).

## Stack

- [Astro](https://astro.build) static site, no client framework
- Vanilla TypeScript for the interactive parts (thesis chart, debate replay, skill popovers, theme toggle)
- Deployed to GitHub Pages with GitHub Actions on every push to `main`

## Structure

```
src/
  data/content.ts     All copy in English and Dutch, plus skills and links
  data/thesis.json    Data for the thesis visualisation (see below)
  components/         One component per section
  layouts/Base.astro  <head>, meta tags, theme bootstrap
  pages/en, pages/nl  The two language versions
public/cv/            CV PDFs behind the download buttons
```

To change text, edit `src/data/content.ts`. To swap a CV, replace the PDF in `public/cv/` with the same file name.

## Thesis data

`src/data/thesis.json` is derived from the final experiment artifacts in
[stance-preservation-llm-debates](https://github.com/MunzurAtak/stance-preservation-llm-debates):
per-round drift curves from the `*_final_eval_final_turn_scores.csv` files (test agent turns, aligned stance score),
and per-debate metrics from `scripts/recompute_corrected_metrics.py`.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```
