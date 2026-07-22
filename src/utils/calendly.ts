export const openCalendly = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: 'https://calendly.com/solidstatesconstruction-info'
    });
  } else {
    window.open('https://calendly.com/solidstatesconstruction-info', '_blank');
  }
};
