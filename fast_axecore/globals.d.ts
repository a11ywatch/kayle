import type { axe } from './axe';

declare global {
  var _global: {
    axe: typeof axe;
    translation: {
      [key: string]: Record<string, unknown>;
    };
  };
  // var axe: typeof axe;
}
