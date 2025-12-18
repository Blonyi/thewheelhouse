
import { FacilityType } from './types';

export const FACILITIES = [
  {
    type: FacilityType.KIDS_RINK,
    title: "Zona Infantil",
    description: "Espacio seguro con monitores y ayudantes de animales (elefantes, tigres y jirafas) para que los más pequeños aprendan a rodar con confianza.",
    icon: "🐘",
  },
  {
    type: FacilityType.ADULTS_RINK,
    title: "Pista Principal",
    description: "Nuestra pista estrella rodeada de neones lineales y sonido envolvente. La mejor experiencia de patinaje de la ciudad.",
    icon: "🛼",
  },
  {
    type: FacilityType.KARAOKE,
    title: "Karaoke VIP",
    description: "Salas privadas insonorizadas con luces LED y el catálogo más completo para cantar con tus amigos.",
    icon: "🎤",
  },
  {
    type: FacilityType.BAR,
    title: "The Diner",
    description: "Auténtica comida americana: perritos calientes premium, papas fritas crujientes y batidos. El sabor de los 50 sobre ruedas.",
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
