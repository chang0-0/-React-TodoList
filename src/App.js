import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const createBulkTodos = () => {
  const todos = [];

  for (let i = 1; i <= 2500; i++) {
    todos.push({
      id: i,
      text: `할 일 ${i}`, //템플릿 문자열
      checked: false,
    });
  }
  return todos;
};

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '리액트 컴포넌트 스타일링 해보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들기',
  //     checked: false,
  //   },
  // ]);
  //`4`;
  const [todos, setTodos] = useState(createBulkTodos);

  //로컬 변수 정의
  //리렌더링 때문에 useRef로 정의
  const nextId = useRef(4);
  //레퍼런스 객체. 참조객체

  //값을 접근하기 위해서는 current를 통해서 해야됨.
  const addTodo = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text, //text: text, 로도 가능
      checked: false,
    };
    //setTodos(todos.concat(todo));
    setTodos((list) => list.concat(todo));
    //원래 배열을 복사해서 새로운배열을 만듬 concat함수
    //setTodos를 통해서 값을 바꿈
    nextId.current += 1;
    //.current를 통해서 접근을 함
  }, []);
  //useCallback 첫번째 매개변수는 함수 두번째 매개변수는 종속 리스트
  //한번만 생성되고 값이 바뀌지 않음 props가 바뀌지 않는다는 뜻

  const removeTodo = useCallback((id) => {
    /*
    const newTodos = [...todos];

    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === id) {
        newTodos.splice(i, 1); // i에서 한개를 없애라는 의미
        break;
      }
    }

    setTodos(newTodos);
    */

    //쉽게 하는 방법
    //filter도 새로운 배열을 만들어줌 매개변수는 함수
    //원소의 아이디가 다른것만 제거
    //  setTodos(todos.filter((todo) => todo.id !== id));

    setTodos((list) => list.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodo = useCallback((id) => {
    // setTodos(
    //   todos.map(
    //     (todo) =>
    //       todo.id === id ? { ...todo, checked: !todo.checked } : todo, //id가 같은 값만 바뀌면됨. 원래 항목에서 checked 값만 바꿔라
    //   ),
    // );

    //id가 같은 값만 바뀌면됨. 원래 항목에서 checked 값만 바꿔라
    setTodos((list) =>
      list.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []); //todos가 바뀌면 종속리스트를 새로만듬

  //map함수 배열을 하나 받아서 원소에 값을 대입해서 새로운 배열에 추가시켜줌
  //toggletodo는 단 한번만 생성됨 종속리스트를 사용안함

  return (
    <TodoTemplate>
      <TodoInsert onInsert={addTodo} />
      {/* props로 값을 전달함 onInsert라는 props로 값을 전달함 값=addTodo */}
      <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo} />
      {/* 오류 */}
    </TodoTemplate>
  );
}

export default App;
