// utils/showToast.ts

type ToastType = "success" | "error" | "warning";

export const showToast = (message: string, type: ToastType = "success") => {
  const toast = document.createElement("div");

  const baseStyles =
    "fixed bottom-4 right-4 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 translate-y-0 z-[9999]";

  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-500 text-black",
  };

  toast.className = `${baseStyles} ${colors[type]}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transform = "translateY(150%)";
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
};
