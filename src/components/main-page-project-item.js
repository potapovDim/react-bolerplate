import React from 'react'

export const MainPageProjectItem = (props) => {
  const { category, title, status, descriptionShort, createdData, projectAuthor: { name, photo }, money, folowers, project, handleClick } = props
  return (<div onClick={() => handleClick(project)}>
    <div>{category.title}</div>
    <div>{title}</div>
    <div>{status}</div>
    <div>{createdData}</div>
    <div>{descriptionShort}</div>
    <div>{name}</div>
    <div>{money}</div>
    <div>{folowers}</div>
  </div>)
}