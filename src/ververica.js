import React from 'react'

export const white = '#ffffff'
export const black = '#222'
export const ververicaLight = '#8EB3BB'
export const ververicaBlue = '#2A6576'
export const ververicaDark = '#163A45'
export const slideWidth = '1280px'
export const slideHeight = '720px'

const heightOfLogo = 32
const logoPadding = 14
const footerHeight = heightOfLogo + 2 * logoPadding

const Provider = props => {
  return <div>
    <div
      css={{
        position: 'relative',
        top: 0,
      }}
    >
      {props.children}
      <div
          css={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100vw',
            height: footerHeight,
            display: (props.mode === 'presenter' ? 'none' : 'flex'),
            alignItems: 'center',
            justifyContent: 'space-between',
            background: white,
            zIndex: 100,
          }}
      >
        <div
          css={{
            marginLeft: logoPadding,
            color: ververicaLight,
          }}
        >
          <p>{props.index > 0 ? props.index + ' :' : ''} Copyright &copy; 2019 Ververica</p>
        </div>
        <div
          css={{
            position: 'relative',
            marginRight: logoPadding,
            width: heightOfLogo,
            height: heightOfLogo,
            backgroundImage: "url(/images/avvDS-JR_400x400.png)",
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </div>
      </div>
    </div>
  </div>
}

export default {
  Provider,
  font: '"Open Sans", sans-serif',
  googleFont: 'https://fonts.googleapis.com/css?family=Open+Sans',
  colors: {
    text: black,
    background: white,
    link: ververicaBlue,
    code: ververicaBlue,
  },
  css: {
    '*': { margin: 0, padding: 0 },
    textAlign: 'left',
    fontSize: '1.5em',
    '@media screen and (min-width:64em)': {
      fontSize: '2.5em',
    },
    '@media print': {
      width: '1600px',
      height: '900px',
    },
  },
  pre: {fontSize: '0.5em'},
  h1: {
    fontWeight: 600,
    fontSize: '1.5em',
    marginBlockEnd: '0.5em',
  },
  h2: {
    fontSize: '1.1em',
    fontWeight: 'normal',
    color: ververicaBlue,
    marginBlockEnd: '1.3em',
  },
  h3: {fontSize: '1.0em'},
  ul: {
    marginBottom: '1em',
    paddingLeft: '1.3em',
    listStyleType: 'none',
    li: {
      marginTop: '0.3em',
    },
    'li:before': {
      color: ververicaBlue,
      content: '"\u2022"',
      position: 'absolute',
      marginTop: '-0.2em',
      marginLeft: '-0.8em',
      fontSize: '150%',  
    },
    ul: {
      li: {
        fontSize: '0.9em',
      },
      'li:before': {
        color: ververicaBlue,
        content: '"–"',
        position: 'absolute',
        marginTop: '-0.3em',
        marginLeft: '-1em',
      },
    },
  },
  Slide: {
    '& > div': {
      minWidth: slideWidth,
      maxWidth: slideWidth,
      minHeight: slideHeight,
      maxHeight: slideHeight,
    },
  },
}
