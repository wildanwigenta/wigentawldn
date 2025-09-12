export const GA_MEASUREMENT_ID = "G-X1TEMMVG2M"; 

// Tambahkan type deklarasi global untuk window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Log pageview
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Log event
export const event = ({
  action,
  params,
}: {
  action: string;
  params: Record<string, any>;
}) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", action, params);
  }
};
