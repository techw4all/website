import type { Dict } from 'typesdk/types';
import { Box, type SxProps } from '@mui/material';
import React, { HTMLAttributes, forwardRef, memo } from 'react';

import { cn } from '@/utils/react';


const DEFAULT_SX: Dict<SxProps> = {
  boxicons: {
    fontFamily: 'boxicons !important',
    fontWeight: 400,
    fontStyle: 'normal',
    fontFeatureSettings: 'normal',
    fontVariant: 'normal',
    lineHeight: 1,
    textRendering: 'auto',
    display: 'inline-block',
    textTransform: 'none',
    speak: 'none',
    WebkitFontSmoothing: 'antialiased',
  },
  'fonts.google': {
    fontFamily: '"Material Symbols Outlined" !important',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: 1,
    letterSpacing: 'normal',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    direction: 'ltr',
    WebkitFontFeatureSettings: '"liga"',
    WebkitFontSmoothing: 'antialiased',
  },
};

const UNICODE_DICT = {
  'bx-error': '"\\eac5"',
  'bx-bell': '"\\e9d2"',
  'bxs-bell': '"\\ecc9"',
  'bx-home': '"\\eb12"',
  'bx-id-card': '"\\eb1a"',
  'bx-face': '"\\ead0"',
  'bx-archive': '"\\e9b0"',
  'bx-log-out': '"\\eb4f"',
  'bx-chalkboard': '"\\ea3e"',
  'bx-user-circle': '"\\ec65"',
  'bx-ghost': '"\\eaee"',
  'id-card': '"\\ea67"',
  'bx-lock': '"\\eb49"',
  'bx-lock-alt': '"\\eb4a"',
  'bx-loader-alt': '"\\eb46"',
  'bx-menu': '"\\eb5f"',
  'box-focus': '"\\e9fe"',
  'bx-shape-square': '"\\ec00"',
  'power-plug': '"\\e63c"',
  'bx-cog': '"\\ea6e"',
  'arrow-back': '"\\e5c4"',
  'bx-arrow-back': '"\\e9b4"',
  'bx-chevron-left': '"\\ea4d"',
  'bx-plus': '"\\ebc0"',
  'bx-x': '"\\ec8d"',
  'bx-paint': '"\\eba7"',
  'bx-paint-roll': '"\\eba8"',
  'bx-loader': '"\\eb45"',
  'bx-plus-circle': '"\\ebc1"',
  'bx-chevron-right': '"\\ea50"',
  'bx-chevron-down': '"\\ea4a"',
  'bx-search': '"\\ebf8"',
  'bx-search-alt': '"\\ebf9"',
  'bx-file-blank': '"\\ead6"',
  'bx-chevron-up': '"\\ea57"',
  'bx-youtube': '"\\e992"',
  'bx-link': '"\\eb3c"',
  'bx-link-alt': '"\\eb3d"',
  'bx-key': '"\\eb28"',
  'lock-open': '"\\e898"',
  'bx-play-arrow': '"\\ebbd"',
  'bx-server': '"\\ebfd"',
  'bx-check': '"\\ea41"',
  'bx-paper-plane': '"\\ebab"',
  'bx-notepad': '"\\eba2"',
  'bx-trash': '"\\ec51"',
  'bx-trash-alt': '"\\ec50"',
  'bx-tv': '"\\ec57"',
  'bx-ig': '"\\e942"',
  'bx-ig-alt': '"\\e943"',
  'bx-github': '"\\e93a"',
  'bx-linkedin': '"\\e94d"',
  'bx-linkedin-square': '"\\e94e"',
  'bx-whatsapp': '"\\e98a"',
  'bx-twitter': '"\\e982"',
};

const UNICODE_ICON_ALIAS = {};



export interface IconProps extends HTMLAttributes<HTMLElement> {
  provider?: 'boxicons' | 'fonts.google';
  icon?: keyof typeof UNICODE_DICT | keyof typeof UNICODE_ICON_ALIAS;
}


/* eslint-disable-next-line react/display-name */
const Icon = forwardRef<HTMLElement, IconProps>(({ provider, icon, className, color, ...props }: IconProps, ref) => {
  const i: string = (icon ?
    Object.keys(UNICODE_ICON_ALIAS).includes(icon as string)
      ? (UNICODE_ICON_ALIAS as Dict<string>)[icon]
      : icon
    : 'bx-error') as unknown as string;

  const p = provider && ['boxicons', 'fonts.google'].includes(provider) ?
    provider :
    (
      i.startsWith('bx-') ||
      i.startsWith('bxs-')
    ) ?
      'boxicons' :
      'fonts.google';

  return (
    <Box
      { ...props }
      component="i"
      role={props.role ?? 'icon'}
      ref={ref}
      className={cn('icon', 'drawer-ui-icon-element', className)}
      sx={Object.assign({}, {
        '&::before': {
          content: UNICODE_DICT[i as unknown as keyof typeof UNICODE_DICT],
        },

        color,
      }, DEFAULT_SX[p])}
    />
  );
});

export default memo(Icon);
