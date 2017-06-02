const initialState = {
  positive: ['Реалізований', 'Реалізований' ,'На реалізацї', 'Успішно оцінений'],
  negative: ['Неможливо реалізувати', 'Відхилений'],
  neutral: ['На рогляді', 'На голосуванні', 'Брав участь']
}

export default  (state = initialState, action) => {

  switch (action.type) {
    case 'positive':
      
      break;
    case 'negative':
    
      break;
    case 'neutral':

      break;
  }
}