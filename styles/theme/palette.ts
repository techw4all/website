export type Palette = {
  readonly theme: {
    readonly default: string;
    readonly secondary: string;
    readonly accent: string;
    readonly gray: string;
    readonly 'gray-dark': string;
    readonly 'gray-light': string;
  };
};


export const palette: Palette = Object.freeze<Palette>({
  theme: Object.freeze<Palette['theme']>({
    default: '#6a0dad',
    secondary: '#00d4a0',
    accent: '#2ecc71',
    gray: '#6c757d',
    'gray-dark': '#212529',
    'gray-light': '#dee2e6',
  }),
});
