import React, { useState } from 'react';

function Todo() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const onAdd = (e) => {
    e.preventDefault();
    const item = { text: value, id: new Date().getTime() };
    setItems(items.concat(item));
    setValue('');
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onDelete = (id) => {
    const filtered = items.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setItems(filtered);
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          onAdd(e);
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </form>

      <ul className="TodoList">
        {items.map((item) => {
          return (
            <li  key={item.id}>
              {item.text}

              <button
                onClick={() => {
                  onDelete(item.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;