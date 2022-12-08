import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
  const id = nextId();
  
  const toDays = new Date;

  const [todo, setTodo] = useState([
    {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  },
]);

const [title, setTitle] = useState("")
const [body, setBody] = useState("")

  const myTodos = useSelector((state)=>state.todos.todos)
  // console.log(myTodos)

  // console.log(todo)


  
  const dispatch = useDispatch();
  
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    
    if (todo.title.trim() === "" || todo.body.trim() === "") 
    
      return;
      event.preventDefault();  
    }

      const onClickAddHandler = ()=>{
      if ((todo.title !== "", todo.body !== "")) {
        const newTodos ={
          id: id,
          title: todo.title,
          body: todo.body,
          isDone: false,
        };
  
        dispatch(addTodo(newTodos));
  
      } else {
        alert("빈칸이 있습니다!");
      }
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton onClick={onClickAddHandler}>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
