import React from 'react'
//Importar componente TarjetaFruta
import TarjetaFruta from './components/TarjetaFruta'

const App = () => (
    <div>
        <TarjetaFruta name={'Sandia'} price={2.00} />
        <TarjetaFruta name='Uva' price={1.5} />
        <TarjetaFruta name='Kiwi' price={3.00} />
        <TarjetaFruta name='Manzana' price={5.50} />
    </div>
)

export default App