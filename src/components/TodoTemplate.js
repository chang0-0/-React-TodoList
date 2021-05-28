import React from 'react';
import '../styles/TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div>
      <div class="TodoTemplate">
        <div class="app-title">일정 관리</div>
        <div class="contents">{children}</div>
      </div>
    </div>
  );
};

export default TodoTemplate;
