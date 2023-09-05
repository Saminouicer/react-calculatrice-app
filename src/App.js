import { useReducer } from 'react'
import './App.css'
import ItemBtn from './componants/ItemBtn'
import { reducer } from './componants/reducer'

const App=()=> {

  const arr=[
    'AC','%','/','=','7','8','9','-','4','5','6','*','1','2','3','+','0','.','del'
  ]

    const initialstate={
      res:'',
      op:'0'
    }

  const [state,dispatch]=useReducer(reducer,initialstate)

  console.log(state)

  return (
    <div className='App'>
      <div className='container'>
        <div>
          <span className='res'>{state.res}</span>
          <span className='op'>{state.op}</span>
        </div>
          <div className='calc'>
            {
              arr.map((item,index)=> {
                return <ItemBtn
                 key={index} 
                 item={item}
                 action={dispatch}
                 />
              })
            }
          </div>
      </div>
    </div>
  )
}

export default App