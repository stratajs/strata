export function getUserInfo( cb ) {
  setTimeout( () => {
    cb({
      firstName: "Peter",
      lastName: "McKee",
      twitter: "@pmckeetx",
      instagram: "@seaccelerator"
    })
  }, 2000)
}

export function getUserInfoPromise() {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve({
        firstName: "Peter",
        lastName: "McKee",
        twitter: "@pmckeetx",
        instagram: "@seaccelerator"
      })
    }, 2000)
  })
}

export default {
  getUserInfo,
  getUserInfoPromise
}