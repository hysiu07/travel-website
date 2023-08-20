/// <reference types="react-scripts" />
declare module "*.png" 
declare module "*.json" {
    const value: any;
    export default value;
}
declare module "*.JSON" {
    const value: any;
    export default value;
}
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module '*.mp4' {
  const src: string;
  export default src;
}