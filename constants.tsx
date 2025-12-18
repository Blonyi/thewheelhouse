
import { FacilityType } from './types';

export const FACILITIES = [
  {
    type: FacilityType.ADULTS_RINK,
    title: "Pista Principal",
    description: "Nuestra pista estrella con el logo oficial en el centro, iluminación de neón dinámica y el mejor ambiente de Las Palmas.",
    icon: "🛼",
    image: "https://images.unsplash.com/photo-1517456793572-1d8efd6ad13e?q=80&w=1200&auto=format&fit=crop", // Imagen representativa de la pista real
  },
  {
    type: FacilityType.KIDS_RINK,
    title: "Zona Infantil",
    description: "Área protegida con monitores y nuestros famosos ayudantes (elefantes, tigres y jirafas) para los más pequeños.",
    icon: "🐘",
  },
  {
    type: FacilityType.KARAOKE,
    title: "Karaoke VIP",
    description: "Salas privadas insonorizadas con tecnología de sonido envolvente y luces LED reactivas.",
    icon: "🎤",
  },
  {
    type: FacilityType.BAR,
    title: "The Diner",
    description: "Perritos calientes premium, papas fritas y auténticos batidos americanos. Comida rápida de alta calidad.",
    icon: "🌭",
  }
];

export const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Experiencias', href: '#facilities' },
  { label: 'Reservar', href: '#booking' },
  { label: 'Ubicación', href: '#location' },
];

export const MOCK_SLOTS = [
  "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"
];
