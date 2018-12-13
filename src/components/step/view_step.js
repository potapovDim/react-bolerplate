import React from 'react'

const ViewStep = ({title, result, attachments}) => {
  return (
    <div>
      <div>{title}</div>
      {result && <div>{title}</div>}
      {attachments.length}
    </div>
  )
}

export {ViewStep}
