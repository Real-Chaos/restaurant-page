import menuCard from './menuCard'
import salsiccia from './images/salsiccia.png'
import gamberi from './images/gamberi.png'
import pepe from './images/pepe.png'
import disgustoso from './images/disgustoso.png'
import colorato from './images/colorato.png'
import pomodoro from './images/pomodoro.png'

const menu = () => {
  const menuContent = document.createElement('div')

  menuContent.classList.add('menu-content')

  menuContent.appendChild(
    menuCard(
      salsiccia,
      'Salsiccia',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    )
  )
  menuContent.appendChild(
    menuCard(
      gamberi,
      'Gamberi',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    )
  )
  menuContent.appendChild(
    menuCard(
      pepe,
      'Pepe',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    )
  )
  menuContent.appendChild(
    menuCard(
      disgustoso,
      'Disgustoso',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    )
  )
  menuContent.appendChild(
    menuCard(
      colorato,
      'Colorato',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    )
  )
  menuContent.appendChild(
    menuCard(
      pomodoro,
      'Pomodoro',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    )
  )

  return menuContent
}

export default menu
