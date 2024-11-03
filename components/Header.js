import Logo from './Logo.js'

export default function Header() {
  const el = document.createElement('header')
  el.innerHTML = `
    <ul class="menu">
      <li><a href="#/">Home</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/signin">Sign In</a></li>
      <li><a href="#/count">Count</a></li>
    </ul>
  ` 
  el.append(Logo())
  return el
}