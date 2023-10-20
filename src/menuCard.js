

const menuCard = (src, title, ingredient) => {
  const div = document.createElement('div')
  const img = new Image()
  const h1 = document.createElement('h1')
  const ingredients = document.createElement('p')

  div.classList.add('menu-card')
  img.src=src
  h1.textContent = title
  ingredients.textContent = ingredient

  div.appendChild(img)
  div.appendChild(h1)
  div.appendChild(ingredients)

  return div
}


export default menuCard