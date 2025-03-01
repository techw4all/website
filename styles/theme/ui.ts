import type { Property } from 'csstype';
import type { SxProps } from '@mui/material';


export function clampLine(lines: number = 1, textOverflow: Property.TextOverflow = 'ellipsis'): SxProps {
  if(typeof lines !== 'number' || lines < 1) {
    lines = 1;
  }

  if(
    !['-moz-initial', 'inherit', 'initial', 'revert', 'revert-layer', 'unset', 'clip', 'ellipsis']
      .includes(textOverflow)
  ) {
    textOverflow = 'ellipsis';
  }

  return {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: lines,
    textOverflow,
  };
}
