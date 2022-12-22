import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default async function handleProfileSignup (firstName, lastName, fileName) {
  const s = signUpUser(firstName, lastName)
  const u = uploadPhoto(fileName)

  const vals = await Promise.allSettled([s, u])
  const arr = []
  vals.forEach((val) => {
    if (val.status === 'fulfilled') {
      arr.push({ status: val.status, value: val.value })
    } else {
      arr.push({ status: val.status, value: `Error: ${val.reason.message}` })
    }
  })
  console.log(arr)
  return arr
}
