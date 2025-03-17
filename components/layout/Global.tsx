import { Box } from '@mui/system';
import React, { memo } from 'react';
import { SxProps } from '@mui/material';

import { cn } from '@/utils';
import Container, { type ContainerProps } from '../Container';


export interface GlobalLayoutProps extends ContainerProps {
  sx?: SxProps;
  containerSize?: ContainerProps['size'];
  readonly children?: React.ReactNode;
}

const GlobalLayout = ({
  sx,
  children,
  size,
  spacing,
  allowTextSelection,
  ...props
}: GlobalLayoutProps) => {
  return (
    <Box
      {...props}
      className={cn('drawer-ui-global-layout-component', props.className)}
      sx={{
        width: '100%',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* some */}
      <Container
        sx={sx}
        size={size}
        spacing={spacing}
        allowTextSelection={allowTextSelection}
      >
        {children}
      </Container>
    </Box>
  );
};

export default memo(GlobalLayout);
