import './TodoList.css';

function TodoList(props) {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            <ul className="TodoList">
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    );
}

export { TodoList };