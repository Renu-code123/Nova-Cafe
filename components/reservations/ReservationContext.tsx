"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ReservationContextType {
  isOpen: boolean;
  openReservation: (preselectedGuests?: number) => void;
  closeReservation: () => void;
  defaultGuests: number;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultGuests, setDefaultGuests] = useState(2);

  const openReservation = (guests = 2) => {
    setDefaultGuests(guests);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeReservation = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <ReservationContext.Provider
      value={{
        isOpen,
        openReservation,
        closeReservation,
        defaultGuests,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
