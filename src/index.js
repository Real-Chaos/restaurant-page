import home from "./home"
import './styles.css'
import header from "./header"
import footer from "./footer"

const displayPage = () => {
  const content = document.querySelector('#content')
  

  content.appendChild(header())
  content.appendChild(home())
  content.appendChild(footer())



  const homeTab = document.querySelector('.tab-nav ul li:first-child')
  const menuTab = document.querySelector('.tab-nav ul li:nth-child(2)')
  const contactTab = document.querySelector('.tab-nav ul li:nth-child(3)')
  
  
  homeTab.addEventListener('click', () => {
    document.querySelector('#content div').remove()

    content.appendChild(home())
  })

  menuTab.addEventListener('click', () => {
    document.querySelector('#content div').remove()
    const div = document.createElement('div')
    div.textContent = 'menu'
    content.appendChild(div)
  })
  contactTab.addEventListener('click', () => {
    document.querySelector('#content div').remove()
    const div = document.createElement('div')
    div.textContent = 'contact'
    content.appendChild(div)
  })
  
  

  // homeTab.addEventListener('click', () => {
  //   content.innerHTML = ""
  //   content.appendChild(home())
  // })
  // menuTab.addEventListener('click', () => {
  //   content.innerHTML = ""
  //   content.appendChild("Menu")
  // })
  // contactTab.addEventListener('click', () => {
  //   content.innerHTML = ""
  //   content.appendChild("Contact")
  // })
  
}

displayPage()