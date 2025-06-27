interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly SEND_TO_EMAIL: string;
  readonly SENT_FROM_EMAIL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
