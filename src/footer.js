const footer = () => {

  const footerElement = document.createElement('footer')
  const h3 = document.createElement('h3')

  h3.innerHTML = `Copyright &copy; Real Chaos 2023`
  footerElement.appendChild(h3)

  return footerElement
}


export default footer