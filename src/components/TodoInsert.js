import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    onInsert(text);
    setText('');
    e.preventDefault();
  };

  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={handleChange}
      />
      <button
        type="submit"
        // onClick={() => {
        //   onInsert(text);
        // }}
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
