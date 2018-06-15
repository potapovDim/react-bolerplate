const toProm = (val, time) => new Promise(res => setTimeout(() => res(val), time))

const arr = [4, 3, 2, 5, 7, 1]
const promArr = arr.map((el) => (el) => toProm(el))

arr.reduce((resolver, current) => {
  return resolver.then((res) => {
    if(res) {res = current}
    return toProm(current, 100 + current).then(val => {
      console.log(res + val)
      return val
    })
  })
}, Promise.resolve()).then(console.log)

// promArr.reduce((resolver, current) => {
//   resolver.then((val = 0) => {
//     return current(val)
//   })
// }, Promise.resolve())