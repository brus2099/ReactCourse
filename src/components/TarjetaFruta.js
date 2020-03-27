import React from 'react'
import './TarjetaFruta.css'

class TarjetaFruta extends React.Component {

    state = {
      cantidad: 0
    }
  
    // Este metodo funciona a partir de un inicializador de propiedad, son adoptados dentro de la comunidad
    // PERO NO FORMAN PARTE DEL ESTANDAR
    agregar = () => this.setState({
        cantidad: this.state.cantidad + 1
      })
    //////////////////////////
  
    quitar = () => {
      this.setState({
        cantidad: this.state.cantidad - 1
      })
    }
  
    limpiar = () => {
      this.setState({
        cantidad: 0
      })
    }
  
    render() {
      
      const hasItems = this.state.cantidad > 0
      const activeClass = hasItems ? 'card-active' : ''
      const clases = `card ${activeClass}`

      return (
        <div className={clases}>
          <h2>{this.props.name}</h2>
          <div>Cantidad: {this.state.cantidad}</div>
          <button
            onClick={this.agregar}
          >
            +
          </button>
          <button onClick={this.quitar}>-</button>
          <button onClick={this.limpiar}>Limpiar</button>
          <hr />
          <p>${this.props.price}</p>
          <p>
            Total: ${ this.props.price * this.state.cantidad }
          </p>
        </div>
      )
    }
  }

  // Componente en su propio archivo. Debe exportarse.

  export default TarjetaFruta