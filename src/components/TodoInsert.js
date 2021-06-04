import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

//props의 값을 풀어서 onInsert라는 변수로 받겠다는 의미
const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  //+버튼 누르면 form이기때문에 submit이벤트가 발생하기 때문에 핸들러 구현
  const handleSubmit = (e) => {
    //추가를 하라는 의미
    onInsert(text);
    //입력상자의 값을 블랭크로 초기화
    setText('');
    //submit 동작은 원래의 동작이 있음 그러나 대신에 위 작업을 수행함 원래작업(서버에 요청 URL)
    e.preventDefault();
    // 원래의 동작을 취소하는게 preventDefault 원래의 동작을 하지않도록 설정해줌 원래대로면 새로고침됨
  };
  //onSubmit 1차오류
  //해결 concat함수 current 추가수정

  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={handleChange}
      />
      {/* form 컴포넌트를 사용하면 enter를 사용가능 */}
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

export default React.memo(TodoInsert);
//전달되는 props가 바뀌지 않으면 리렌더링 되지않음
