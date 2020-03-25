import React from 'react'
import ReactDOM from 'react-dom'

const user1 = {
  name: 'Brus',
  age: 21,
  country: 'Mexico'
}


function getInfo(user) {
  return `My name is ${user.name} and I from ${user.country}. I have ${user.age} years old.`
}

class TarjetaFruta extends React.Component {

  constructor() {
    super()

    const METHODS =[
      'agregar', 
      'quitar',
      'limpiar'
    ]

    METHODS.forEach((method) => {
      this[method] = this[method].bind(this)
    })

    this.state = {
      cantidad: 0
    }
  }

  agregar () {
    this.setState({
      cantidad: this.state.cantidad + 1
    })
  }

  quitar () {
    this.setState({
      cantidad: this.state.cantidad - 1
    })
  }

  limpiar () {
    this.setState({
      cantidad: 0
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>Cantidad: {this.state.cantidad}</div>
        <button
          /* El siguiente es un ejemplo de mala programación, debido a que afecta a todo el estadp
           * y los componentes deben renderizarse nuevamente cada uno. Se observa que el 
           * método setState asigna un nuevo valor numerico al estado, pero este estado está asociado a
           * cada componente que lo está usando. 
           
          
          onClick={() => {
            //this.state.cantidad = 100
            //this.forceUpdate()
            this.setState({ 
              cantidad: this.state.cantidad + 1
             })
          }} */

          // Una manera adecuada es la siguiente:
          onClick={this.agregar}
        >
          +
        </button>
        <button onClick={this.quitar}>-</button>
        <button onClick={this.limpiar}>Limpiar</button>
        <hr />
        <p>${this.props.price}</p>
      </div>
    )
  }
}

const App = () => (
  <div>
    <TarjetaFruta name={'Sandia'} price={2.00} />
    <TarjetaFruta name='Uva' price={1.5} />
    <TarjetaFruta name='Kiwi' price={3.00} />
    <TarjetaFruta name='Manzana' price={5.50} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))