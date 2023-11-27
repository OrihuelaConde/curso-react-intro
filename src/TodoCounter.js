import './TodoCounter.css';

// const estilos = {
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48'
// }

function TodoCounter({ total, completed }) {
    const allCompleted = total == completed;

    return (
        !allCompleted ? 

        //<h1 style={estilos}>        
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>

        :

        <h1 className="TodoCounter">
            Has completado todas tus tareas 🎊
        </h1>
    );
}

export { TodoCounter };