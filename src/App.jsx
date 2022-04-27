import React, { useEffect, useState } from 'react';

const App = () => {

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([{ tarefa: item, status: false }, ...list]);
  }

  const removeItem = (key) => {
    setList(list.filter((item, itemKey) => itemKey !== key))
  }

  const changeStatus = (key) => {
    const newList = list.map((item, itemKey) => {
      if (itemKey == key) {
        item.status = !item.status
      }

      return item;
    });

    setList(newList)
  }

  return (
    <>
      <div className="container my-5">

        <div className="w-100 d-flex py-4">
          <div className="input-group">
            <input
              type={'text'}
              value={item}
              onChange={e => setItem(e.target.value)}
              placeholder="Tarefa a fazer..."
              className='form-control' />

            <button
              type='button'
              className='btn btn-success'
              onClick={addItem}>
              Adicionar item
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5>To-do</h5>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {list.map((item, key) => (
                <li
                  className={'list-group-item d-flex justify-content-between ' + (item.status ? 'bg-success text-white' : 'bg-light')}
                  key={key}>
                  <span>{item.tarefa}</span>

                  <div>
                    <input
                      type={'checkbox'}
                      onChange={() => changeStatus(key)}
                      checked={item.status}
                      className="m-2"
                      value={1} />

                    <button
                      onClick={() => removeItem(key)}
                      className='btn btn-danger btn-sm'>
                      Apagar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;