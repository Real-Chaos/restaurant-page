import home from "./home"
import './styles.css'
import header from "./header"
import footer from "./footer"
import menu from "./menu"

const displayPage = () => {
  const content = document.querySelector('#content')
  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content')
  pageContent.appendChild(menu())

  content.appendChild(header())
  content.appendChild(pageContent)
  content.appendChild(footer())



  const homeTab = document.querySelector('.tab-nav ul li:first-child')
  const menuTab = document.querySelector('.tab-nav ul li:nth-child(2)')
  const contactTab = document.querySelector('.tab-nav ul li:nth-child(3)')
  
  
  homeTab.addEventListener('click', () => {
    pageContent.innerHTML = ""
    pageContent.appendChild(home())
    content.appendChild(pageContent)
  })

  menuTab.addEventListener('click', () => {
    pageContent.innerHTML = ""
    pageContent.appendChild(menu())
    content.appendChild(pageContent)
  })
  contactTab.addEventListener('click', () => {
    pageContent.innerHTML = ""
    const div = document.createElement('div')
    div.textContent = 'contact'
    pageContent.appendChild(div)
    content.appendChild(pageContent)
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