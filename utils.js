'use strict'

export const parseHash = () => {
  const o = {}
  location.hash
    .slice(1)
    .split('&')
    .map(part => part.split('='))
    .forEach(([k,v]) => o[k] = v)
  return o
}
