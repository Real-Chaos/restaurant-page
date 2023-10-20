const footer = () => {

  // <footer class="footer">
  //       <h2>Copyright &copy; Real Chaos 2023</h2>
  //     </footer>
  const footerElement = document.createElement('footer')
  const h3 = document.createElement('h3')

  h3.innerHTML = `Copyright &copy; Real Chaos 2023`
  footerElement.appendChild(h3)

  return footerElement
}


export default footer