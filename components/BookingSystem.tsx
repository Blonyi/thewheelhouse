
import React, { useState, useMemo } from 'react';
import { MOCK_SLOTS } from '../constants';
import { FacilityType } from '../types';

export const BookingSystem: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<FacilityType>(FacilityType.ADULTS_RINK);
  const [isProcessing, setIsProcessing] = useState(false);
  const [booked, setBooked] = useState(false);

  const dates = useMemo(() => {
    const list = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      list.push(d.toISOString().split('T')[0]);
    }
    return list;
  }, []);

  const handleBooking = () => {
    if (!selectedSlot) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBooked(true);
    }, 2000);
  };

  if (booked) {
    return (
      <div className="bg-slate-800 p-12 rounded-3xl border-2 border-green-500 text-center animate-pulse">
        <h3 className="text-3xl font-bungee text-green-400 mb-4">¡Reserva Confirmada!</h3>
        <p className="text-xl">Te esperamos el {selectedDate} a las {selectedSlot}</p>
        <button 
          onClick={() => setBooked(false)}
          className="mt-8 px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-full transition-colors"
        >
          Hacer otra reserva
        </button>
      </div>
    );
  }

  return (
    <div id="booking" className="bg-slate-900 p-6 md:p-10 rounded-3xl border border-slate-700 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-4xl font-bungee text-white">RESERVA TU TURNO</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {Object.values(FacilityType).map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFacility(f)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedFacility === f ? 'bg-pink-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <label className="block text-slate-400 mb-4 font-semibold uppercase tracking-wider">Paso 1: Selecciona el Día</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {dates.map((date) => {
              const d = new Date(date);
              const isSelected = selectedDate === date;
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`p-4 rounded-xl flex flex-col items-center transition-all ${
                    isSelected ? 'bg-cyan-500 text-white ring-4 ring-cyan-500/20' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <span className="text-xs uppercase opacity-70">{d.toLocaleDateString('es', { weekday: 'short' })}</span>
                  <span className="text-xl font-bold">{d.getDate()}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-slate-400 mb-4 font-semibold uppercase tracking-wider">Paso 2: Selecciona la Hora</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MOCK_SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-4 rounded-xl font-bold transition-all ${
                  selectedSlot === slot ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
        <div className="flex justify-between w-full max-w-md mb-6 text-xl">
          <span className="text-slate-400">Total a pagar:</span>
          <span className="font-bold text-white">15,00 €</span>
        </div>
        <button
          disabled={!selectedSlot || isProcessing}
          onClick={handleBooking}
          className={`w-full max-w-md py-4 rounded-2xl font-bungee text-xl transition-all ${
            !selectedSlot 
              ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-105 active:scale-95 text-white shadow-xl shadow-pink-500/20'
          }`}
        >
          {isProcessing ? 'PROCESANDO PAGO...' : 'PAGAR Y RESERVAR'}
        </button>
        <p className="mt-4 text-slate-500 text-sm">Pago seguro mediante pasarela bancaria</p>
      </div>
    </div>
  );
};
