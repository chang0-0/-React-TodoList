import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../styles/TodoListItem.scss';
import cn from 'classnames';

//부모로부터 onRemove랑 onToggle props를 받음
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      {/* npm모듈인 cn값을 이용해서 classname설정
      cn('checkbox', { checked }) 해당 처럼 설정시
      checkbox.checked 로 classnames가 자동 설정됨. */}
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {/* checked가 true일때는  <MdCheckBox>가 보이고 
        false일때는 <MdCheckBoxOutlineBlank> 가 보임 */}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        {/* remove를 호출하는 함수를 전달
        remove그대로 전달하면 안됨 */}
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
//전달되는 props가(onRemove, onToggle) 바뀌지 않으면 리렌더링 되지 않게함 => 변환함
