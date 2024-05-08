import {ToastType} from "@core/types/toast.type";

export interface Toast {
  type: ToastType;
  title: string;
  body: string;
  delay: number;
}
