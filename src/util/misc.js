export const withCommas = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const toSlug = str =>
  str.split(' ').map(val => val.toLowerCase()).join('-')

export const getUrlParams = () =>
  Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  )
