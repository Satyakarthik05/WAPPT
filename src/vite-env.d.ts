/// <reference types="vite/client" />

// Media file declarations – imported files return their bundled URL as a string
declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.ogg' {
  const src: string;
  export default src;
}
