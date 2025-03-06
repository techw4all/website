import React from 'react';
import { Box } from '@mui/material';

import LogoImage from '@/components/svg/LogoImage';
import { useMediaQuery, useRender } from '@/hooks';
import { Container, Icon, Button, Typography } from '@/components';
import { emailAddress, instagram, linkedin } from '@/resources/static/contact';


const currentYear = new Date(Date.now()).getFullYear();


const App = () => {
  useRender(() => { document.title = 'Tech World for All - Empoderando o futuro, juntos.'; });

  const isSmallScreen = useMediaQuery('(max-width: 56.25rem)');

  return (
    <Box
      sx={{
        '--text-color': '#fefeff',

        position: 'fixed',
        top: 0,
        left: 0,
        width: '100svw',
        height: '100svh',
        overflow: isSmallScreen ? 'auto' : 'hidden',
        zIndex: '+50',
        backgroundColor: '#050505',

        '&::-webkit-scrollbar': {
          width: '0 !important',
          display: 'none !important',
        },
      }}
    >
      <Container size="lg" spacing={{ top: 'none' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '1rem',
            left: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',

            '& > svg': {
              width: '55px',
              height: 'auto',
            },

            '& > span': {
              fontSize: '1.65rem',
              fontWeight: 700,
              color: 'var(--theme-color)',
              letterSpacing: 'calc(var(--default-letter-spacing) / 1.5)',
              display: 'inline-block',
              marginTop: '1rem',
            },
          }}
        >
          <LogoImage />
          <Typography.Text>TechWorld4All</Typography.Text>
        </Box>
        <div className="row">
          <div className="col-6 col-md-12 col-sm-12">
            <Box
              sx={{
                width: '100%',
                height: '100svh',
                padding: '1rem 1.1rem',

                '& > h1': {
                  width: '100%',
                  maxWidth: '700px',
                  textAlign: 'center',
                  fontSize: '3rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: 'var(--theme-accent)',
                  margin: '11vh auto 0',
                  textShadow: '0 1px 5px #2ecc713a',
                  letterSpacing: 'var(--default-letter-spacing)',
                },

                '& > .acube': {
                  marginTop: '7rem',
                },
              }}
            >
              <Typography.Title component="h1">
                Estamos construindo coisas incríveis!
              </Typography.Title>
              <div className="acube al-on loose-height" style={{ '--size': '10.94rem' } as any}>
                <div className="cube">
                  <div className="top"></div>
                  <div>
                    <span style={{ '--i': '0' } as any}></span>
                    <span style={{ '--i': '1' } as any}></span>
                    <span style={{ '--i': '2' } as any}></span>
                    <span style={{ '--i': '3' } as any}></span>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="col-6 col-md-12 col-sm-12">
            <Box
              sx={{
                width: '100%',
                maxWidth: '680px',
                margin: isSmallScreen ? '0 auto' : '4.2em auto',
                height: '100svh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isSmallScreen ? 'flex-start' : 'center',
                flexDirection: 'column',
                gap: '2rem',
                padding: '1rem 1.1rem',

                '& > span': {
                  width: '100%',
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: '1.26rem',
                  fontWeight: 'normal',
                  color: 'var(--text-color)',
                  lineHeight: '1.35',
                  letterSpacing: 'calc(var(--default-letter-spacing) / 2)',
                  userSelect: 'text',

                  '& > span': {
                    fontWeight: 600,
                    marginTop: '.64rem',
                    color: 'var(--theme-accent)',
                    display: 'inline-block',
                    userSelect: 'text',
                  },
                },
              }}
            >
              <Typography.Text>
                Nossa equipe está trabalhando duro para construir algo inovador, poderoso e projetado para causar um impacto real.
                <br />
                Este website também está em construção.
                <br />
                <span>Fique ligado, logo teremos novidades!</span>
              </Typography.Text>
              <Box
                sx={{
                  '--size': '80px',

                  marginTop: '2rem',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  gap: '1.5rem',

                  '& > button': {
                    position: 'relative',
                    width: 'var(--size)',
                    height: 'var(--size)',
                    transition: '.5s',
                    backgroundColor: '#333333',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: 0,
                    outline: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    borderRadius: '9px',
                    color: 'var(--clr, var(--text-color))',

                    '&:hover > .icon-default': {
                      transform: 'rotateX(90deg) translateY(-50%)', /* Moves out */
                      opacity: 0,
                    },

                    '&:hover > .icon-hover': {
                      transform: 'rotateX(0) translateY(-100%)', /* Moves in */
                      opacity: 1,
                    },

                    '&:hover': {
                      backgroundColor: 'var(--clr)',
                      color: 'var(--txt)',
                      transform: 'translateY(-1.5rem)',

                      '&::after': {
                        opacity: 1,
                      },
                    },

                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: '-2.5rem',
                      width: 'var(--size)',
                      height: 'calc(var(--size) * .35)',
                      backgroundColor: 'var(--sd, var(--theme-secondary))',
                      borderRadius: '50%',
                      transition: '.5s',
                      opacity: 0,
                      filter: 'blur(5px)',
                      transform: 'scale(0.8)',
                    },

                    '& > span': {
                      width: '100%',
                      height: '100%',
                      borderRadius: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transformOrigin: 'top',
                      transition: 'transform .5s',
                      color: 'unset',

                      '&, & > *, & > * *': {
                        pointerEvents: 'none !important',
                      },

                      '&.icon-hover': {
                        transformOrigin: 'bottom',
                        transform: 'rotateX(90deg) translateY(-50%)',
                      },

                      '& > .icon': {
                        fontSize: 'calc(var(--size) - 2rem)',
                        fontWeight: 'normal',
                      },
                    },

                    '& .icon-hover': {
                      transform: 'translateY(100%)', /* Initially hidden */
                      opacity: 0,
                    },
                  },
                }}
              >
                <Button
                  title="Veja nosso perfil no GitHub"
                  sx={{ '--clr': '#6e5494', '--txt': '#fefeff', '--sd': '#6e54944a' }}
                  onClick={() => {
                    window.open('https://github.com/techw4all', '_blank', 'noopener,noreferrer');
                  }}
                >
                  <span className="icon-default">
                    <Icon icon="bx-github" />
                  </span>
                  <span className="icon-hover">
                    <Icon icon="bx-github" />
                  </span>
                </Button>
                {
                  linkedin ? (
                    <Button
                      title="Veja nosso perfil no LinkedIn"
                      sx={{ '--clr': '#0077b5', '--txt': '#fefeff', '--sd': '#0077b54a' }}
                      onClick={() => {
                        window.open(`https://www.linkedin.com/in/${linkedin}`, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <span className="icon-default">
                        <Icon icon="bx-linkedin" />
                      </span>
                      <span className="icon-hover">
                        <Icon icon="bx-linkedin" />
                      </span>
                    </Button>
                  ) : null
                }
                <Button
                  title="Veja nosso perfil no X (antigo Twitter)" // #1DA1F2
                  sx={{ '--clr': '#000000', '--txt': '#fefeff', '--sd': '#1DA1F24a' }}
                  onClick={() => {
                    window.open('https://x.com/TechW4All', '_blank', 'noopener,noreferrer');
                  }}
                >
                  <span className="icon-default">
                    <Icon icon="bx-twitter" />
                  </span>
                  <span className="icon-hover">
                    <Icon icon="bx-twitter" />
                  </span>
                </Button>
                {
                  instagram ? (
                    <Button
                      title="Veja nosso perfil no Instagram"
                      sx={{ '--clr': '#e4405f', '--txt': '#fefeff', '--sd': '#e4405f4a' }}
                      onClick={() => {
                        window.open(`https://instagram.com/${instagram}`, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <span className="icon-default">
                        <Icon icon="bx-ig" />
                      </span>
                      <span className="icon-hover">
                        <Icon icon="bx-ig" />
                      </span>
                    </Button>
                  ) : null
                }
                {
                  process.env.NEXT_PUBLIC_CONTACT_PHONE ? (
                    <Button
                      title="Fale conosco no WhatsApp"
                      sx={{ '--clr': '#25D366', '--txt': '#fefeff', '--sd': '#25D3664a' }}
                      onClick={() => {
                        window.open(`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/\D/g, '')}?text=${encodeURIComponent('Olá!\nEu gostaria de falar com alguém do time TechW4All, por favor.')}`, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <span className="icon-default">
                        <Icon icon="bx-whatsapp" />
                      </span>
                      <span className="icon-hover">
                        <Icon icon="bx-whatsapp" />
                      </span>
                    </Button>
                  ) : null
                }
              </Box>
              <Box
                sx={{
                  marginTop: '1rem',
                  padding: '0 1.05rem',
                  width: '100%',

                  '& > span': {
                    width: '100%',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    letterSpacing: 'calc(var(--default-letter-spacing) / 2)',
                    color: 'var(--text-color)',
                  },

                  '& > div': {
                    marginTop: '.72rem',
                    width: '100%',

                    '& > p': {
                      marginTop: '1.5rem',
                      width: 'max-content',
                      fontSize: '1rem',
                      fontWeight: 300,
                      letterSpacing: 'calc(var(--default-letter-spacing) / 2)',
                      color: 'var(--text-color)',
                      position: 'relative',
                      paddingLeft: '1rem',
                      marginLeft: '1rem',

                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        width: '3.5px',
                        height: '2rem',
                        backgroundColor: 'var(--clr)',
                      },

                      '&:not(span)': {
                        userSelect: 'all',
                      },

                      '& > span': {
                        fontWeight: 'normal',
                      },
                    },
                  },
                }}
              >
                <Typography.Text>
                  Outras informações de contato
                </Typography.Text>
                <div>
                  {
                    emailAddress ? (
                      <Typography.Text
                        component="p"
                        sx={{ '--clr': 'var(--theme-color)' }}
                      >
                        <span>Email: </span> {emailAddress}
                      </Typography.Text>
                    ) : null
                  }
                  {
                    process.env.NEXT_PUBLIC_CONTACT_PHONE ? (
                      <Typography.Text
                        component="p"
                        sx={{ '--clr': '#25D366' }}
                      >
                        <span>Telefone{isSmallScreen ? '' : ' (preferencialmente WhatsApp)'}: </span> {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                      </Typography.Text>
                    ) : null
                  }
                </div>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #555555',

                  '& > span': {
                    display: 'inline-block',
                    textAlign: 'center',
                    color: 'var(--muted-text-color)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    letterSpacing: 'calc(var(--default-letter-spacing) / 3)',
                    width: '100%',
                    userSelect: 'text',
                  },
                }}
              >
                <Typography.Text>
                  &copy; {currentYear} Tech World for All Software Development & IT Services. Todos os direitos reservados.
                </Typography.Text>
              </Box>
            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default App;
