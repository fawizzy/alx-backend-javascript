import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup (firstName, lastName, fileName) {
  const s = signUpUser(firstName, lastName)
  const u = uploadPhoto(fileName)

  return Promise.allSettled([s, u]).then((vals) => {
    const arr = []
    vals.forEach((val) => {
      if (val.status === 'fulfilled') {
        arr.push({ status: val.status, value: val.value })
      } else {
        arr.push({ status: val.status, value: val.reason.message })
      }
    })
    return arr
  })
}
