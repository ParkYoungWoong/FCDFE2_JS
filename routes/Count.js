import { Store } from '../heropy.js'

const el = document.createElement('div')
el.id = 'count'
el.innerHTML = `
  <h1></h1> 
  <button>증가!</button>  
`
el.querySelector('button').addEventListener('click', () => {
  store.state.count += 1
})

function rerender(store) {
  const h1El = document.createElement('h1')
  h1El.textContent = `Count: ${store.state.count}`
  el.querySelector('h1').remove()
  el.prepend(h1El)
}

const store = new Store({
  count: 7
})
store.subscribe('count', newValue => {
  console.log('count 변경!')
  rerender(store)
})

export default function Count() {
  rerender(store)
  return el
}
