import { toastr } from 'react-redux-toastr'

const Inicio = () => {
  function message () {
    toastr.error('The title', 'The message')
  }

  return <button onClick={message}>Abrir</button>
}

export default Inicio
