import React from 'react';
import { Box } from '@mui/material';

import { Button, Icon, Typography } from '@/components';


const NotFound = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafaff',
        color: '#111111',

        '@media (prefers-color-scheme: dark)': {
          backgroundColor: '#111111',
          color: '#fafaff',
        },
      }}
    >
      <Box
        sx={{
          lineHeight: '48px',
          display: 'inline-flex',

          '& > .next-error-h1': {
            borderRight: '1px solid rgba(0, 0, 0, .3)',
            display: 'inline-block',
            margin: '0 20px 0 0',
            paddingRight: '23px',
            fontSize: 'calc(2rem - 8px)',
            fontWeight: 500,
            verticalAlign: 'top',

            '@media (prefers-color-scheme: dark)': {
              borderRight: '1px solid rgba(255, 255, 255, .3)',
            },
          },

          '& > h2': {
            fontSize: '1rem',
            fontWeight: 'normal',
            lineHeight: '28px',
            display: 'grid',
            placeItems: 'center',
          },
        }}
      >
        <h1 className="next-error-h1">
          404
        </h1>
        <h2>
          Ops! Não sei para onde você quer ir...
        </h2>
      </Box>
      <Button
        variant="discreet"
        onClick={() => { window.location.href = '/'; }}
        sx={{
          marginTop: '2rem',
          cursor: 'pointer',
          background: 'transparent',
          border: '1px solid transparent',
          outline: 'none',
          padding: '.32rem .78rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-color) !important',
          gap: '.7rem',

          '@media (prefers-color-scheme: dark)': {
            color: '#fefeff !important',
          },

          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .11)',
          },

          '& > .icon': {
            fontSize: '22px',
            fontWeight: 300,
            color: 'unset',
          },

          '& > span': {
            fontSize: '.9rem',
            fontWeight: 'normal',
            letterSpacing: 'calc(var(--default-letter-spacing) / 2)',
            paddingRight: '.32rem',
            color: 'unset',
            display: 'inline-block',
            marginTop: '2px',
          },
        }}
      >
        <Icon icon="arrow-back" />
        <Typography.Text>
          Voltar
        </Typography.Text>
      </Button>
    </Box>
  );
};

export default NotFound;
