export default function Logo() {
  const el = document.createElement('div')
  el.classList.add('logo')
  el.innerHTML = `
    <img src="https://heropy.dev/favicon.png" alt="logo" width="50" />
  `
  el.addEventListener('click', () => {
    console.log('Logo!!')
  })
  return el
}