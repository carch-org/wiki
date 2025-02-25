[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

<div align="center">
  
<img src="/src/assets/carch.png" width="70" />

<h4> 
  
This is the documentation site for the [Carch](https://github.com/harilvfs/carch), built with Starlight Astro.
</h4>

</div>
<br>
<p align="center">
  <img src="https://img.shields.io/badge/Maintained%3F-Yes-1c1c29?style=for-the-badge&color=ef9f9c&logoColor=85e185&labelColor=1c1c29">
  <img src="https://img.shields.io/github/license/carch-org/wiki?style=for-the-badge&color=e0ea9d&logoColor=D9E0EE&labelColor=171b22">
  <br><br>
  <img src="https://img.shields.io/github/last-commit/carch-org/wiki?style=for-the-badge&logo=github&color=7dc4e4&logoColor=D9E0EE&labelColor=1c1c29"/> <img src="https://img.shields.io/github/stars/carch-org/wiki?style=for-the-badge&logo=apachespark&color=eed49f&logoColor=D9E0EE&labelColor=1c1c29"/> <img src="https://img.shields.io/github/forks/carch-org/wiki?style=for-the-badge&color=9dc3ea&logoColor=D9E0EE&labelColor=1c1c29" />
</p>

<br>

<div align = "center"
  
[![github actions build status][check]][link]

</div>

> [!NOTE]
> The official Carch Wiki and documentation are built with VitePress, which remains the primary official documentation for now.
> 
> I created this version with Starlight as a test to explore the template.
>
> And guess what? It’s awesome! You can check it out too [here](https://carch-org.github.io/wiki), but I won’t be adding this link to the official Carch documentation.
>
> For now, VitePress remains superior in my opinion.
By the way, thanks to the developer for this amazing template—love it! ❤️

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
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

[check]: https://github.com/carch-org/docs/actions/workflows/docs.yml/badge.svg
[link]: https://github.com/carch-org/docs/actions/workflows/docs.yml
