/// <reference types="vite/client" />

declare module 'https://esm.sh/@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }
  const emailjs: {
    send: (
      serviceID: string,
      templateID: string,
      templateParams?: Record<string, unknown>,
      publicKey?: string
    ) => Promise<EmailJSResponseStatus>;
  };
  export default emailjs;
}
