import React from 'react'


const ViewAttachment = ({type, content, description = null}) => {
  return (
    <div>
      {description && <spna>{description}</spna>}
      {type === 'img' && <img src={content} />}
      {type === 'text' && <span>{content}</span>}
      {type === 'json' && <span>{content}</span>}
    </div>
  )
}

export {ViewAttachment}
