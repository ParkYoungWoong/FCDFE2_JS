// http://localhost:3000/#/about - 해시(Hash) 모드
// http://localhost:3000/about - 히스토리(HTML5) 모드

function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, '', '/#/') // (상태, 제목, 주소)
  }
  const routerView = document.querySelector('router-view')
  const currentRoute = routes
    .find(route => new RegExp(`${route.path}/?$`).test(location.hash))
  routerView.innerHTML = ''
  routerView.append(currentRoute.component())
  window.scrollTo(0, 0) // restoration 복구(복원)
}
export function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}