import { createContext, useContext } from "react";

export type ToastStatus = "success" | "info" | "warn" | "error";

export type ShowToastFn = (
  status: ToastStatus,
  detail: string,
  summary?: string,
) => void;

export const ToastContext = createContext<ShowToastFn | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx)
    throw new Error("useToast должен использоваться внутри ToastProvider");
  return ctx;
};