# appse ai Documentation

Official documentation for [appse ai](https://docs.appse.ai), a platform by [APPSeCONNECT](https://www.appseconnect.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

### Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve Production Build Locally

```bash
pnpm serve
```

## 🐳 Docker

### Build Docker Image

```bash
docker build -t appse-ai-docs .
```

### Run Docker Container

```bash
docker run -p 3000:3000 appse-ai-docs
```

The documentation will be available at `http://localhost:3000`.

## 📁 Project Structure

```
appse-ai-docs/
├── docs/                           # Documentation files (Markdown)
│   ├── app_integrations/          # Integration guides
│   │   ├── apify.md
│   │   ├── big-commerce.md
│   │   ├── business-central.md
│   │   ├── hubspot.md
│   │   ├── microsoft-teams.md
│   │   ├── openai.md
│   │   └── http.md
│   └── platform/                  # Platform documentation
├── src/                           # Custom React components and pages
│   ├── components/               # Reusable React components
│   ├── css/                      # Custom CSS
│   └── pages/                    # Custom pages
├── static/                        # Static assets
│   └── img/                      # Images and icons
├── docusaurus.config.ts          # Docusaurus configuration
├── sidebars.ts                   # Sidebar navigation configuration
├── package.json                  # Dependencies and scripts
└── tsconfig.json                 # TypeScript configuration
```

## 📚 Documentation

### Adding New Documentation

1. Create a new Markdown file in the appropriate directory under `docs/`
2. Add frontmatter with metadata:

```markdown
---
sidebar_position: 1
title: Your Page Title
---

# Your Content Here
```

3. Update [sidebars.ts](sidebars.ts) if needed to include the new page in navigation

### App Integrations

Integration guides are located in [docs/app_integrations/](docs/app_integrations/). Each integration has its own dedicated documentation file:

- [Apify](docs/app_integrations/apify.md)
- [BigCommerce](docs/app_integrations/big-commerce.md)
- [Business Central](docs/app_integrations/business-central.md)
- [HubSpot](docs/app_integrations/hubspot.md)
- [Microsoft Teams](docs/app_integrations/microsoft-teams.md)
- [OpenAI](docs/app_integrations/openai.md)
- [HTTP/Generic Integrations](docs/app_integrations/http.md)

## 🔍 Search Integration

This project is integrated with [Typesense](https://typesense.org/) to provide instant documentation search. For details on how the local auto-indexing works and instructions on how to set it up in production, please read the [Search Setup & Architecture Guide](SEARCH_SETUP.md).

## 🛠️ Configuration

- **Docusaurus Config**: Edit [docusaurus.config.ts](docusaurus.config.ts) for site-wide settings
- **Sidebar Navigation**: Modify [sidebars.ts](sidebars.ts) to customize the documentation sidebar
- **TypeScript**: Configure TypeScript in [tsconfig.json](tsconfig.json)

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Create a new branch from `dev`:

   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally:

   ```bash
   pnpm start
   ```

3. Build to verify no errors:

   ```bash
   pnpm build
   ```

4. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request to the `dev` branch

## 📝 Scripts

- `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm serve` - Serve production build locally
- `pnpm clear` - Clear Docusaurus cache
- `pnpm swizzle` - Eject Docusaurus components for customization
- `pnpm deploy` - Deploy to GitHub Pages (if configured)
- `pnpm write-translations` - Write translation files
- `pnpm write-heading-ids` - Write heading IDs to markdown files

## 🔧 VS Code

This project includes VS Code workspace settings in [.vscode/appse-ai-docs.code-workspace](.vscode/appse-ai-docs.code-workspace) with recommended extensions and configurations.

## 📄 License

This project is proprietary software. All rights reserved by APPSeCONNECT.

## 🆘 Support

For support and questions, please contact the APPSeCONNECT team or open an issue in the repository.

## 🌐 Links

- [APPSeCONNECT Website](https://www.appseconnect.com/)
- [appse ai Platform](https://appse.ai/)
- [appse ai Documentation](https://docs.appse.ai)
- [Docusaurus Documentation](https://docusaurus.io/)
- [Markdown Guide](https://www.markdownguide.org/)

---

Built with ❤️ by the APPSeCONNECT team
