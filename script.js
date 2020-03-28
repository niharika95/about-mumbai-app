// const pages = {}

// const loadPages = () => {
//   return fetch('pages/home.html')
//     .then(res => res.text())
//     .then(text => {
//       pages['/'] = text
//     })
//     .then(() => fetch('pages/location.html'))
//     .then(res => res.text())
//     .then(text => {
//       pages.location = text
//     })
//     .then(() => fetch('pages/weather.html'))
//     .then(res => res.text())
//     .then(text => {
//       pages.weather = text
//     })
//     .then(() => fetch('pages/references.html'))
//     .then(res => res.text())
//     .then(text => {
//       pages.references = text
//       return true
//     })
// }

// const setPage = page => {
//   console.log(page)
//   let bodyElement = document.querySelector('#mainContent')
//   bodyElement.innerHTML = pages[page]
// }

// const init = () => {
//   loadPages().then(() => {
//     console.log(pages)
//     console.log(window.location.href)
//     setPage(window.location.href.split('#')[1] || '/')
//   })
// }
