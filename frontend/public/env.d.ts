/// <reference types="vite/client" />

interface ImportMetaEnv {
    BASE_URL(BASE_URL: any): import("vue-router").RouterHistory;
    readonly VITE_API_BASE_URL: string;
    // Add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }