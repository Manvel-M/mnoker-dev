type ImportMetaEnv = {
  readonly RESEND_API_KEY: string;
  readonly RESENT_FROM_EMAIL: string;
  readonly SEND_TO_EMAIL: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
