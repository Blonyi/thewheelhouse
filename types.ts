
export interface TimeSlot {
  time: string;
  available: boolean;
  price: number;
}

export interface DayAvailability {
  date: string;
  slots: TimeSlot[];
}

export enum FacilityType {
  KIDS_RINK = 'Pista Infantil',
  ADULTS_RINK = 'Pista Adultos',
  KARAOKE = 'Karaoke',
  BAR = 'The Diner'
}

export interface Booking {
  id: string;
  date: string;
  time: string;
  facility: FacilityType;
  customerName: string;
  isPaid: boolean;
}
