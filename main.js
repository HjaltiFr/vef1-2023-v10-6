import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://www.hi.is" target="_blank">
      <img src="hi_logo_blue.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://ugla.hi.is/" target="_blank">
      <img src="1553444873.svg" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Halló Heimur!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Ýttu á HÍ merkið til að fara á heimasíðu HÍ.
    </p>
  </div>
`



setupCounter(document.querySelector('#counter'))


