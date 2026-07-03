import { Toast, type ToastMessage } from "primereact/toast";
import { useCallback, useRef, type ReactNode } from "react";
import { ToastContext } from "../../../hook/useToast";

type ToastStatus = "success" | "info" | "warn" | "error";

type ShowToastFn = (
  status: ToastStatus,
  detail: string,
  summary?: string,
) => void;

const DEFAULT_SUMMARIES: Record<ToastStatus, string> = {
  success: "Успешно",
  info: "Информация",
  warn: "Внимание",
  error: "Ошибка",
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const toastRef = useRef<Toast>(null);

  const showToast: ShowToastFn = useCallback((status, detail, summary) => {
    toastRef.current?.show({
      severity: status,
      summary: summary ?? DEFAULT_SUMMARIES[status],
      detail,
      life: 3000,
    } as ToastMessage);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};
