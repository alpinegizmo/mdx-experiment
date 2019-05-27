import React from 'react'
import Flex from '@mdx-deck/layouts/src/Flex'
import Box from '@mdx-deck/layouts/src/Box'

const FigureLeft = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children)
  return (
    <Flex
      css={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start'
      }}
    >
      <Box width={0.4}>
      <Flex css={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      }}>{a}</Flex>
      </Box>
      <Box width={0.6}>{rest}</Box>
    </Flex>
  )
}

export default FigureLeft
