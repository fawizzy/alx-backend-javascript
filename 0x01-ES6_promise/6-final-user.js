import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup (firstName, lastName, fileName) {
  const s = signUpUser(firstName, lastName)
  const u = uploadPhoto(fileName)

  return Promise.allSettled([s, u]).then((val) => val)
}
