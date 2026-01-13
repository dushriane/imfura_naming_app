# Imfura Naming App 🎯

**Global Hack Week: Beginners Challenge** - A Christian, cultural, family-oriented, and modern Rwandan naming application powered by AI.

## Project Overview

Imfura Naming App helps parents discover meaningful Rwandan names that blend:
- **Christian significance** - Catholic saint connections and spiritual meanings
- **Traditional/Kinyarwanda culture** - Rich heritage and linguistic roots
- **Family themes** - Names that harmonize with siblings
- **Modern appeal** - Contemporary relevance

## Features

### Current Interface (v1)
✅ **AI Naming Consultant** - Ask AI for name suggestions based on themes, prefixes, or family patterns
✅ **Multidimensional Filtering** - Adjust weights for Christian, Traditional, and Modern styles
✅ **Sibling Similarity** - Enter sibling names to find harmonious matches
✅ **Legacy Card** - Visual summary showing:
  - Name meaning and etymology
  - Patron saint (feast day, patronage, description)
  - Notable figures with the same name
✅ **Mobile Responsive** - Full touch-friendly interface for all devices

### Planned Features (Coming Soon)
🚧 LLM Integration - OpenAI GPT-4o or Anthropic Claude 3.5 for intelligent suggestions
🚧 Vector Embeddings - Pinecone/pgvector for semantic name similarity
🚧 Wikipedia/Wikidata API - Real-time lookup of notable Rwandans and global figures
🚧 Hagiography API - Catholic saint database integration
🚧 Advanced AI Explanations - Etymological and spiritual significance generation

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- (Optional) OpenAI or Anthropic API key for future AI features

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd imfura_naming_app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Usage Guide

1. **Enter a Prompt**: Describe themes (e.g., "gratitude, faith, nature") or mention prefixes/suffixes
2. **Add Siblings**: Enter existing children's names for harmonious suggestions
3. **Adjust Weights**: Use sliders to balance Christian, Traditional, and Modern influences
4. **Generate**: Click "Generate Name Ideas" to get AI suggestions
5. **Explore**: Click any suggested name to view its full Legacy Card with meaning, saint, and notable figures

## Project Structure

```
app/
├── api/
│   ├── generate/route.ts    # Name generation endpoint
│   ├── saints/route.ts      # Saint lookup
│   ├── notables/route.ts    # Notable figures API
│   └── meaning/route.ts     # Name meaning lookup
├── components/
│   ├── HeroScene.tsx        # Hero banner
│   ├── FilterControls.tsx   # Weight sliders
│   ├── AIQueryBox.tsx       # Prompt + sibling input
│   ├── ResultsPanel.tsx     # Name suggestions grid
│   ├── LegacyCard.tsx       # Detailed name card
│   ├── NameCard.tsx         # Simple name display
│   └── SiblingInput.tsx     # Add sibling form
└── page.tsx                 # Main app interface
lib/
├── kinyarwanda.ts          # Name database & utilities
├── saints-data.json        # Catholic saints data
└── embeddings.ts           # Vector similarity (stub)
```

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI** (planned): OpenAI GPT-4o / Anthropic Claude 3.5
- **Vector DB** (planned): Pinecone or pgvector

## Contributing

This project is under active development. Future contributions welcome for:
- LLM integration
- Wikipedia/Wikidata API connections
- Extended saint and notable person databases
- Phonetic similarity algorithms
- Multilingual support

## License

MIT License - see LICENSE file for details

---

**Imfura** (meaning "Gift/Blessing") - Helping families choose names that honor faith, culture, and legacy.
