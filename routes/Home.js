import MovieList from '../components/MovieList.js'

export default function Home() {
  const el = document.createElement('div')
  el.innerHTML = '<h1>Home</h1>'
  el.append(
    MovieList([
      { id: '1', title: '어벤져스' },
      { id: '2', title: '토르' }
    ])
  )
  return el
}
