const initialState = [
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
    city: '',
    region: '',
    address: '',
    destinationTime: '',
    money: '',
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
  },  {
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
    city: '',
    region: '',
    address: '',
    destinationTime: '',
    money: '',
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
  },  {
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
    city: '',
    region: '',
    address: '',
    destinationTime: '',
    money: '',
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
  },  {
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
    city: '',
    region: '',
    address: '',
    destinationTime: '',
    money: '',
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
]


export default (state= initialState, action) => {
  switch (action.type) {
    case '':

      break;
  
    default:
      return state
  }
}