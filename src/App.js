import React, { useState, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '리액트 컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: false,
    },
  ]);

  //로컬 변수 정의
  //리렌더링 때문에 useRef로 정의
  const nextId = useRef(4);

  const addTodo = (text) => {
    const todo = {
      id: nextId,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId = nextId + 1;
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={addTodo} />
      <TodoList todos={todos} />
      {/* 오류 */}
    </TodoTemplate>
  );
}

export default App;
