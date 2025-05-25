<div align="center">

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

</div>

<div align="center">
  
<img src="/src/assets/carch.png" width="70" />

<h4> 
  
This is the documentation site for the [Carch](https://github.com/harilvfs/carch), built with Starlight Astro.
</h4>

</div>

<p align="center">
  <img src="https://img.shields.io/badge/Maintained%3F-Maybe-1c1c29?style=for-the-badge&color=ef9f9c&logoColor=85e185&labelColor=1c1c29">
  <img src="https://img.shields.io/github/license/carch-org/wiki?style=for-the-badge&color=e0ea9d&logoColor=D9E0EE&labelColor=171b22">
  <br>
  <img src="https://img.shields.io/github/last-commit/carch-org/wiki?style=for-the-badge&logo=github&color=7dc4e4&logoColor=D9E0EE&labelColor=1c1c29"/> <img src="https://img.shields.io/github/stars/carch-org/wiki?style=for-the-badge&logo=apachespark&color=eed49f&logoColor=D9E0EE&labelColor=1c1c29"/> <img src="https://img.shields.io/github/forks/carch-org/wiki?style=for-the-badge&color=9dc3ea&logoColor=D9E0EE&labelColor=1c1c29" />
</p>

<div align = "center">
  
[![github actions build status][check]][link]

</div>

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun/ run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

[check]: https://github.com/carch-org/wiki/actions/workflows/deploy.yml/badge.svg
[link]: https://github.com/carch-org/wiki/actions/workflows/deploy.yml
