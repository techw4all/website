import React, { ImgHTMLAttributes, memo, useEffect, useState } from 'react';


export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  readonly src: string;
  forceBlob?: boolean;
}

export const Image = ({
  forceBlob,
  ...props
}: ImageProps) => {
  const [source, setSource] = useState<string>(props.src);

  useEffect(() => {
    if(!props.src.includes('.svg') && forceBlob !== false) {
      fetch(props.src)
        .then(res => res.blob())
        .then(payload => {
          setSource(URL.createObjectURL(payload));
        });
    }
  }, [props.src]);

  return (
    <img
      {...props}
      src={source}
      alt={props.alt ?? (!props.src.includes('.svg') && forceBlob !== false ? undefined : `[${props.src}]`)}
      loading={props.loading ?? 'lazy'}
      decoding={props.decoding ?? 'async'}
    />
  );
};

export default memo(Image);
