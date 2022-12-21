import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup () {
  const u = uploadPhoto()
  const c = createUser()

  const p = Promise.all([u, c]).then(data => {
    console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`)
  }).catch(() => console.log('Signup system offline'))
  return p
}
