import React, { Component } from 'react'

export class Project extends Component {
  componentWillMount(){
    const {backStateHistory} = this.props
    window.addEventListener('popstate', backStateHistory);
  }
  render() {
    console.log(this.props)
    const {focusedProject: {
      title,
      status,
      createdData,
      projectAuthor: {name, photo},
      category,
      code,
      descriptionShort,
      town,
      region,
      address,
      destinationTime,
      money,
      descriptionFull: {
        trouble,
        howDoIt,
        result,
        userDestination,
        roadToFinish,
        creteriaToUsage
      },
      photos,
      files,
      examples,
      limitation,
      folowers,
      timeLimitToEnd
    }} = this.props
    return (
      <div>
        <div>title  status </div>
        <div>data</div>
        <div>author</div>
        <div>category</div>
        <div>code</div>
        <div>Інформація про проект</div>
        <div>Таймлайн проекту</div>
        <div>
          <div>Короткий опис</div>
          <div>descriptions</div>
          <div>
            <div>Місто</div>
            <div>Адреса</div>
            <div>Район</div>
            <div>Час на реалізацію</div>
          </div>
        </div>
        <div>
          <div>Бюджет </div>
          <div>Батон</div>
        </div>
        <div>
          <div>Опис</div>
          <div>Проблема</div>
          <div>Рішення</div>
          <div>Результат</div>
          <div>Для кого проект</div>
          <div>Основні етапи реалізації</div>
          <div>Умови використання</div>
          <div>Фото / Схеми /Креслення / Тощо</div>
          <div>
            Карусель!!!!!!!
          </div>
          <div>
            Файли
          </div>
          <div>
            Приклади подібних рішень
          </div>
          <div>
            Обмеження та примітки
          </div>
        </div>
      </div>
    )
  }
}