import users from './users.json'

function getUserById( id ) {
  return users.find( u => u.id == id )
}

export function getUserInfoCallback( cb ) {
  setTimeout( () => {
    const user = getUserById( id )
    cb( user )
  }, 2000)
}

export function getUserInfo( id ) {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      const user = getUserById( id )

      resolve( user )
    }, 2000)
  })
}

export default {
  getUserInfo,
  getUserInfoCallback
}