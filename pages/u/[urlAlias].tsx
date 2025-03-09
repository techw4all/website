import React from 'react';
import { Box } from '@mui/material';
import type { GetServerSidePropsContext } from 'next';

import { api, transporter } from '@/lib/http';
import type { ShortUrlDocument } from '@/@types';


const ShortUrlRedirect = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100svh',
        zIndex: '+20001',
        backgroundColor: 'var(--body-bg)',
        color: 'var(--text-color)',
      }}
    />
  );
};


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const urlAlias = (context.query.urlAlias || context.params?.urlAlias) as string | undefined;

  if(!urlAlias)
    return { notFound: true };

  const res = await api.get(`/api/s0/u/${urlAlias}`);

  if(res.status !== 200) {
    const response = await (
      res.headers['content-type']?.includes('application/json') ?
        res.json() :
        res.text()
    );

    throw new Error(`(${res.statusText.toUpperCase()}) ${response}`);
  }

  const payload = await transporter.parseToken<ShortUrlDocument>(await res.json());

  return {
    redirect: {
      destination: payload.fullUrl,
      permanent: true,
    },
  };
}


export default ShortUrlRedirect;
