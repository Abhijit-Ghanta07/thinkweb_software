declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
    };
  }
}
export {};
