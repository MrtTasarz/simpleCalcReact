import React from 'react';



const btns = ['AC', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']

const Layout = (props) => {

  const btnEl = btns.map((btn) => {

    if (btn === 'AC') {
      return <button key={btn} className='opr btn lg' onClick={props.clearAll}>{btn}</button>
    }
    if (btn === '=') {
      return <button key={btn} className='opr btn lg' onClick={props.equalVal}>{btn}</button>
    }
    return <button key={btn} className={(typeof btn !== 'number') ? 'opr btn' : 'btn num'} value={btn} onClick={(e) => props.numberSubmit(e.target.value)}>{btn}</button>
  }
  )

  return <div className="container">{btnEl}</div>
}


export default Layout;