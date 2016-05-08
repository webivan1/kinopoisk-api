import fetch from 'node-fetch'

const api = 'http://api.kinopoisk.cf'
const f = uri => fetch(`${api}/${uri}`).then(res => res.json())

export function getFilm (filmID) {
  return f(`getFilm?filmID=${filmID}`)
}

export function getStaff (filmID) {
  return f(`getStaff?filmID=${filmID}`)
}

export function getGallery (filmID) {
  return f(`getGallery?filmID=${filmID}`)
}

export function getSimilar (filmID) {
  return f(`getSimilar?filmID=${filmID}`)
}

export function getReviews (filmID) {
  return f(`getReviews?filmID=${filmID}`)
}

export function getSeance (filmID) {
  return f(`getSeance?filmID=${filmID}`)
}

export function searchFilms (keywords) {
  return f(`searchFilms?keyword=${keywords.join(',')}`)
}