import React from 'react'

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

  // Componente en su propio archivo. Debe exportarse.

  export default TarjetaFruta