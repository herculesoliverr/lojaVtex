import React from 'react'

interface CountdownProps {
  targetDate: string
}

function Countdown({targetDate}: CountdownProps) {
  return (
    <>
      <h1>{targetDate}</h1>
    </>
    );
}

Countdown.schema = {
  title: 'Teste Site Editor',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
       targetDate: {
          title: 'Data final',
          description: 'Data final utilizada no contador',
          type: 'string',
          default: null,
    },
  }
}

export default Countdown;