import React from 'react';
import ClassCount from "../components/ClassCount/ClassCount";
import Count from "../components/Count/Count";
import CreateElement from "../components/CreateElement/CreateElement";
import Input from "../components/Input/Input"
import StyleText from "../components/StyleText/StyleText";
import ButtonCheckbox from "../components/ButtonCheckbox/ButtonCheckbox";

const Tutorial = () => {
   return (
      <>
         <h1 className="title">Создание элемента с помощью сreateElement</h1>
         <CreateElement/>
         <h1 className="title">Счетчик</h1>
         <Count/>
         <h1 className="title">Поле ввода</h1>
         <Input/>
         <h1 className="title">Счетчик написанный на классовом компоненте</h1>
         <ClassCount/>
         <h1 className="title">Примеры использования стилей</h1>
         <StyleText/>
         <h1 className="title">Анимация кнопки CSS</h1>
         <ButtonCheckbox/>
      </>
   );
};

export default Tutorial;