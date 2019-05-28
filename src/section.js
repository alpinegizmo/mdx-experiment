import React from 'react'
import styled from '@emotion/styled'
import * as ververica from './ververica'

const Break = styled.div(
  {
    marginTop: `calc((${ververica.slideHeight} - 100vh) / 2)`,
    marginLeft: `calc((${ververica.slideWidth} - 100vw) / 2)`,
    paddingLeft: `calc((100vw - ${ververica.slideWidth}) / 2)`,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: ververica.white,
    backgroundColor: ververica.ververicaDark,
    h1: {
        fontSize: '2.0em',
        marginBlockEnd: '0.2em',
    },
    h2: {
        color: ververica.white,
    },
  }
)

export const Section = props => {
    const arr = React.Children.toArray(props.children)
    return <Break>
        <div css={{
        margin: '30px 0',
        height: '10px',
        width: '250px',
        backgroundColor: ververica.ververicaBlue,
        }}>
        </div>
        { arr }
    </Break>
}

export const Title = props => {
    const [a, ...rest] = React.Children.toArray(props.children)
    return <Break className='fullscreen' css={{
        backgroundColor: ververica.ververicaBlue,
    }}>
        { a }
        <div css={{
        margin: '30px 0',
        height: '10px',
        width: '250px',
        backgroundColor: ververica.white,
        }}>
        </div>
        { rest }
    </Break>
}

export const FullScreen = props => {
    const kids = React.Children.toArray(props.children)
    return <Break className='fullscreen' css={{
        backgroundColor: ververica.ververicaBlue,
        zIndex: 10000,
    }}>
        { kids }
    </Break>
}
