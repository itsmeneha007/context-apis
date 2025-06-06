import React, { useEffect, useState, useRef } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentPage = useRef(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(todos.length / itemsPerPage);

  const fetchTodos = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setTodos(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching todos:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const startIndex = (currentPage.current - 1) * itemsPerPage;
  const currentTodos = todos.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (pageNum) => {
    currentPage.current = pageNum;
    
    setTodos([...todos]);
  };

  const handlePrev = () => {
    if (currentPage.current > 1) {
      currentPage.current--;
      setTodos([...todos]);
    }
  };

  const handleNext = () => {
    if (currentPage.current < totalPages) {
      currentPage.current++;
      setTodos([...todos]);
    }
  };

  return (
    <div className="container">
      <h1>Todo Pagination</h1>
      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <>
          <TodoList todos={currentTodos} />
          <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage.current === 1}>
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={currentPage.current === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}

            <button onClick={handleNext} disabled={currentPage.current === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
