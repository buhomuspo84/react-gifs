import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length < 2) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onChangeInput}
        id="newCategory"
      />
    </form>
  );
};
