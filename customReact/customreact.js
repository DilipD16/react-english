function customRendor(reactElement,container){
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children 
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('href',reactElement.props.target)
  container.appendChild(domElement)
}

const reactElement ={
  type: 'a',
  props: {
    href: "https://google.com",
    target: '-blank'
  },
  children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRendor(reactElement,mainContainer)