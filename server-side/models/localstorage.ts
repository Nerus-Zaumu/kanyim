import { LocalStorage } from 'node-localstorage';

export const getLocalStorage = () => {
  let tempLocalStorage = typeof localStorage === 'undefined' || typeof localStorage === null ? new LocalStorage('./localStore') : localStorage
  return tempLocalStorage
}
