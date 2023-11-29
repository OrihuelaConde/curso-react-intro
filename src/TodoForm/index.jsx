import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Agrega un nuevo TODO</label>
            <textarea
                placeholder="Hacer las compras" 
                value={newTodoValue}
                onChange={onChange}/>
            <div className='TodoForm-buttonContainer'>
                <button
                    trype="button"
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}>
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