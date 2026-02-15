export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  category: 'Residential' | 'Commercial' | 'Public'; // Strictly typed
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Ayendit Bilyang Hospital',
    location: 'Bilyang, Juba',
    year: '2023',
    description: 'A high-performance healthcare facility utilizing stabilized rammed earth for superior thermal mass and hygiene.',
    image: '/ayen.jpg', 
    category: 'Commercial',
  },
  {
    id: '02',
    title: 'Peace Garden Arts Center',
    location: 'Luri, Juba',
    year: '2024',
    description: 'Curved rammed earth walls designed for natural temperature regulation and acoustic excellence.',
    image: '/peace.jpg', 
    category: 'Commercial',
  },
  {
    id: '03',
    title: 'Thongpiny Apartments',
    location: 'Thongpiny Area, Juba', // Fixed casing for consistency
    year: '2025',
    description: 'Sustainable urban housing designed to blend seamlessly into the sandstone landscape.',
    image: '/thong.jpg',
    category: 'Residential',
  },
];