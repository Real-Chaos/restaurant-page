import location from './images/restaurant-location.png'

const contact = () => {
  const contactElement = document.createElement('div')
  const phone = document.createElement('p')
  const address = document.createElement('p')
  const img = new Image()

  phone.innerHTML = `<i class="fa-solid fa-phone"></i> 382-328-3289`
  address.innerHTML = `<i class="fa-solid fa-house"></i> Hollywood Boulevard 42, Los Angeles, USA`
  img.src = location


  contactElement.classList.add('contact-content')

  contactElement.appendChild(phone)
  contactElement.appendChild(address)
  contactElement.appendChild(img)

  return contactElement
}


export default contact