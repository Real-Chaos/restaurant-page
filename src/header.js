const header = () => {
  // <header class="header">
  //       <h1 class="logo">Mozzafiato</h1>
  //       <nav class="tab-nav">
  //         <ul>
  //           <li>Home</li>
  //           <li>Menu</li>
  //           <li>Contact</li>
  //         </ul>
  //       </nav>
  //     </header>
  const headerElement = document.createElement('header')
  const logo = document.createElement('h1')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  const homeTab = document.createElement('li')
  const menuTab = document.createElement('li')
  const contactTab = document.createElement('li')

  headerElement.classList.add('header')
  logo.classList.add('logo')
  nav.classList.add('tab-nav')

  logo.textContent="Mozzafiato"
  homeTab.textContent = "Home"
  menuTab.textContent = "Menu"
  contactTab.textContent="Contact"

  ul.appendChild(homeTab)
  ul.appendChild(menuTab)
  ul.appendChild(contactTab)
  nav.appendChild(ul)
  headerElement.appendChild(logo)
  headerElement.appendChild(nav)

  return headerElement
}

export default header