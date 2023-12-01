import React from 'react';

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: "Ir de compras", completed: true },
//   { text: "Hacer las compras", completed: false },
//   { text: "Pagar las compras", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [synchronizedItem, setSynchronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = initialValue;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        }
        else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
        setSynchronizedItem(true);
      }
      catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [synchronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  const synchronizeItem = () =>{
    setItem(initialValue);
    setLoading(true);
    setSynchronizedItem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  };
}

export { useLocalStorage };