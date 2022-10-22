

export const deconstructor = (object: object) => {
  for (let [key, value] of Object.entries(object)){
    let string = `${parseInt(key)}: ${value}`
    // let arr = string.split(' ')
    // let year = arr[0]
    return string
  }
}

export default deconstructor