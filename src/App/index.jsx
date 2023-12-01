import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';
import { EmptySearchResults } from '../EmptySearchResults';
//import { ChangeAlertWithStorageListener } from '../ChangeAlert';
import { ChangeAlert } from '../ChangeAlert';

function App() {
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    synchronizeTodos
  } = useTodos();

  return (
    <React.Fragment>

      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() =>
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        }
        onEmptySearchResult={() =>
          <EmptySearchResults
            searchText={searchValue}
          />
        }
      // render={todo => (
      //   <TodoItem
      //     key={todo.text}
      //     text={todo.text}
      //     completed={todo.completed}
      //     onComplete={() => completeTodo(todo.text)}
      //     onDelete={() => deleteTodo(todo.text)}
      //   />
      // )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      {/* <ChangeAlertWithStorageListener
        synchronize={synchronizeTodos}
      /> */}

      <ChangeAlert
        synchronize={synchronizeTodos}
      />

    </React.Fragment>
  );
}

export default App;
