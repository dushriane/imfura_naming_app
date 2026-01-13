// Kinyarwanda language utilities

export interface KinyarwandaName {
  name: string;
  meaning: string;
  gender?: 'male' | 'female' | 'unisex';
  category?: string;
}

export const commonNames: KinyarwandaName[] = [
  { name: 'Imena', meaning: 'A blessing from above', gender: 'unisex' },
  { name: 'Ukuri', meaning: 'Truth', gender: 'unisex' },
  { name: 'Amahoro', meaning: 'Peace', gender: 'unisex' },
  { name: 'Izuba', meaning: 'Sun', gender: 'unisex' },
  { name: 'Imbuto', meaning: 'Seed', gender: 'unisex' },
  { name: 'Shema', meaning: 'Be prosperous', gender: 'male' },
  { name: 'Mugisha', meaning: 'Blessing', gender: 'unisex' },
  { name: 'Uwase', meaning: 'Be healed/saved', gender: 'female' },
  { name: 'Bizimana', meaning: 'Only God knows', gender: 'male' },
  { name: 'Ingabire', meaning: 'One who gives birth', gender: 'female' },
];

export function translateToKinyarwanda(word: string): string | null {
  const translations: Record<string, string> = {
    'peace': 'amahoro',
    'truth': 'ukuri',
    'blessing': 'mugisha',
    'sun': 'izuba',
    'love': 'urukundo',
    'hope': 'ibyiringiro',
    'faith': 'kwizera',
    'joy': 'igisubizo',
  };
  
  return translations[word.toLowerCase()] || null;
}

export function isValidKinyarwandaName(name: string): boolean {
  // Basic validation - Kinyarwanda names typically use specific character patterns
  const kinyarwandaPattern = /^[a-zA-Z]+$/;
  return kinyarwandaPattern.test(name) && name.length >= 2;
}

export function getNamesByCategory(category: string): KinyarwandaName[] {
  return commonNames.filter(name => name.category === category);
}

export function searchNames(query: string): KinyarwandaName[] {
  const lowerQuery = query.toLowerCase();
  return commonNames.filter(
    name =>
      name.name.toLowerCase().includes(lowerQuery) ||
      name.meaning.toLowerCase().includes(lowerQuery)
  );
}
