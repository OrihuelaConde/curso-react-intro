import React from 'react';
import './TodoCounter.css';

// const estilos = {
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48'
// }

function TodoCounter({
    totalTodos,
    completedTodos
}
) {
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