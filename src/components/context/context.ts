import { createContext } from "react";

type Material = {
  id: string;
  name: string;
  image: string;
  enDescription: string;
  idDescription: string;
};

type MaterialContextType = {
  setShouldRefetch: (value: boolean) => void;
  setSelectedMaterial?: (value: Material) => void;
  selectedMaterial?: Material | null;
  onClose?: (value: void) => void;
};

type AlertContextType = {
  success?: boolean;
  message?: string;
  setSuccess: (value: boolean) => void;
  setMessage: (value: string) => void;
  open?: (value: void) => void;
};

export const MaterialContext = createContext<MaterialContextType | undefined>(undefined);
export const AlertContext = createContext<AlertContextType | undefined>(undefined);
