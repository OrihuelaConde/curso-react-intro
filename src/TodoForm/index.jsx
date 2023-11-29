import React from 'react'
import './TodoForm.css'

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Agrega un nuevo TODO</label>
            <textarea
                placeholder="Hacer las compras" />
            <div className='TodoForm-buttonContainer'>
                <button 
                    trype=""
                    className='TodoForm-button TodoForm-button--cancel'>
                    Cancelar
                </button>
                <button 
                    trype="submit"
                    className='TodoForm-button TodoForm-button--add'>
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };