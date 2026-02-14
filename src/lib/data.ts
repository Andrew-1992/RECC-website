// src/lib/data.ts  <-- Ensure there are TWO slashes here

export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  category: 'Residential' | 'Commercial' | 'Public';
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'The High Desert Retreat',
    location: 'Joshua Tree, CA',
    year: '2023',
    description: 'A thermal-mass focused residential build utilizing local iron-rich soils.',
    image: 'https://images.unsplash.com/photo-1518005020251-58296d8fca00',
    category: 'Residential',
  },
  {
    id: '02',
    title: 'Earthbound Winery',
    location: 'Sonoma, CA',
    year: '2024',
    description: 'Curved rammed earth walls designed for natural temperature regulation.',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85',
    category: 'Commercial',
  },
  {
    id: '03',
    title: 'Canyon Pavilion',
    location: 'Moab, UT',
    year: '2025',
    description: 'A community structure that blends seamlessly into the sandstone landscape.',
    image: 'https://images.unsplash.com/photo-14491560015dd-c3d98bd9b7af',
    category: 'Public',
  },
];