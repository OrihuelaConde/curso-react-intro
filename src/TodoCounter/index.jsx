import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

// const estilos = {
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48'
// }

function TodoCounter() {
    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext)

    const allCompleted = totalTodos === completedTodos;

    return (
        !allCompleted ?

            //<h1 style={estilos}>        
            <h1 className="TodoCounter">
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
            </h1>

            :

            <h1 className="TodoCounter">
                Has completado todas tus tareas 🎊
            </h1>
    );
}

export { TodoCounter };