import header from "./header"
import footer from "./footer"
import chefSrc from './images/chef.png'

const home = () => {
  // <div class="home-content">
  //         <h2>Best Pizza in the country</h2>
  //         <h3>Made with passion since 1908</h3>
  //         <img src="../src/images/chef.png" alt="" />
  //         <h3>Order online or visit us!</h3>
  //       </div>
  //     </div>
  
  
  const homeContent = document.createElement('div')
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  const chefImg = new Image()
  const orderH3 = document.createElement('h3')


  homeContent.classList.add('home-content')
  
  h2.textContent = 'Best Pizza in the World!'
  h3.textContent = 'Made with passion since 1908'
  chefImg.src = chefSrc
  orderH3.textContent = 'Order online or Visit us!'

  homeContent.appendChild(h2)
  homeContent.appendChild(h3)
  homeContent.appendChild(chefImg)
  homeContent.appendChild(orderH3)
  
  return homeContent
}


export default home
