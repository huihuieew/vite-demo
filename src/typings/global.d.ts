// * Menu
declare namespace Menu {
  interface MenuOptions {
    path: string;
    title: string;
    icon?: string;
    isLink?: string;
    close?: boolean;
    children?: MenuOptions[];
  }
}
declare type TabsOptions = Menu.MenuOptions & {};
// * Vite
declare type Recordable<T = any> = Record<string, T>;
declare interface ViteEnv {
  VITE_APP_WEB_URL: string;
}
