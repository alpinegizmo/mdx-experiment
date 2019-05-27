import styled from '@emotion/styled'
import * as ververica from './ververica'

export default props => (
    <div style={{
        display: 'flex',
        height: '150px',
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
        background: ververica.white,
  }}>
      <img
        src='/images/ververica.png'
        css={{
          marginRight: '30px',
          height: '100px',
        }}
      />
    </div>
)