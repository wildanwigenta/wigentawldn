export const GA_MEASUREMENT_ID = "G-X1TEMMVG2M"; 

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
export const event = ({
  action,
  params,
}:

{
  action: string;
  params: Record<string, any>;
}) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", action, params);
  }
};
