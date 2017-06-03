const FOCUS_PROJECT = 'FOCUS_PROJECT'

const initialState = {
  projectsState: [
    {
      title: 'Тест 1віфловдлфіовлофідовдолфідо',
      status: 'Реалізований', //фільруємо
      createdData: '',
      projectAuthor: {
        name: '',
        photo: ''
      },
      category: { //фільруємо
        title: 'Спорт',
        ico: '',
        color: ''
      },
      code: 123,
      descriptionShort: '',
      town: 'Київ',
      region: 'Голосіївський',
      address: '',
      destinationTime: '',
      money: 200000,
      descriptionFull: {
        trouble: '',
        howDoIt: '',
        result: '',
        userDestination: '',
        roadToFinish: '',
        creteriaToUsage: ''
      },
      photos: [],
      files: [],
      examples: [],
      limitation: '',
      folowers: 123,
      timeLimitToEnd: 14
    }, {
      title: 'Теіе 2 івдфлодліфдводлфіолдлдддвіф',
      status: 'Неможливо реалізувати', //фільруємо
      createdData: '',
      projectAuthor: {
        name: '',
        photo: ''
      },
      category: { //фільруємо
        title: 'Комунальне господарство',
        ico: '',
        color: ''
      },
      code: 123,
      descriptionShort: '',
      town: 'Київ',
      region: 'Шевченківський',
      address: '',
      destinationTime: '',
      money: 350000,
      descriptionFull: {
        trouble: '',
        howDoIt: '',
        result: '',
        userDestination: '',
        roadToFinish: '',
        creteriaToUsage: ''
      },
      photos: [],
      files: [],
      examples: [],
      limitation: '',
      folowers: 123,
      timeLimitToEnd: 14
    }, {
      title: 'Еуіе івфофіодвфліодовлдіф',
      status: 'Брав участь', //фільруємо
      createdData: '',
      projectAuthor: {
        name: '',
        photo: ''
      },
      category: { //фільруємо
        title: "Охорона здоров'я'",
        ico: '',
        color: ''
      },
      code: 123,
      descriptionShort: '',
      town: 'Дніпропетровськ',
      region: 'Центральний',
      address: '',
      destinationTime: '',
      money: 50000,
      descriptionFull: {
        trouble: '',
        howDoIt: '',
        result: '',
        userDestination: '',
        roadToFinish: '',
        creteriaToUsage: ''
      },
      photos: [],
      files: [],
      examples: [],
      limitation: '',
      folowers: 123,
      timeLimitToEnd: 14
    }, {
      title: '%%%%%%%%%%%23142142141224212421421',
      status: 'Відхилений', //фільруємо
      createdData: '',
      projectAuthor: {
        name: '',
        photo: ''
      },
      category: { //фільруємо
        title: 'Дорожнє господарство',
        ico: '',
        color: ''
      },
      code: 123,
      descriptionShort: '',
      town: 'Харків',
      region: 'Шевченківський',
      address: '',
      destinationTime: '',
      money: 100000,
      descriptionFull: {
        trouble: '',
        howDoIt: '',
        result: '',
        userDestination: '',
        roadToFinish: '',
        creteriaToUsage: ''
      },
      photos: [],
      files: [],
      examples: [],
      limitation: '',
      folowers: 123,
      timeLimitToEnd: 14
    }
  ],
  focusedProject: null
}


export const focusProject = project=> ({
  type: FOCUS_PROJECT, project
})


export default (state = initialState, action) => {
  switch (action.type) {
    case FOCUS_PROJECT:
      return {...state, focusedProject: action.project}
    default:
      return state
  }
}