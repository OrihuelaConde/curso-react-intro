import './TodoCounter.css';

// const estilos = {
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48'
// }

function TodoCounter({ total, completed }) {
    return (
        //<h1 style={estilos}>
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
    );
}

export { TodoCounter };