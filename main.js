import Header from './components/Header.js'
import router from './routes/index.js'

document
  .getElementById('app')
  .append(
    Header(), 
    document.createElement('router-view')
  )

router()

























