import { createContext, useContext } from "react";

// Mock guest — replace with real auth later
const MOCK_GUEST = { name: "Sarah" };

const GuestContext = createContext(null);

export function GuestProvider({ children }) {
  return (
    <GuestContext.Provider value={MOCK_GUEST}>
      {children}
    </GuestContext.Provider>
  );
}

export function useGuest() {
  const guest = useContext(GuestContext);
  return guest ?? { name: "Guest" };
}
