import { createStore } from 'redux'
i
function View(text){
  console.log(`"${text}"`)
}

let prevText
function render(){
  const text = store.getState()
  if(prevText !== text){
    prevText = text
    View(text)
  }
}

const insertCharacter = char => ({
  type: 'CHARACTER_TYPED',
  char,
})

const removeCharacter = () => ({
  type: 'SPACE'
})

const appendChar = (state, action) => state + action.char

const reducer = (state = '', action) => {
  switch(action.type){
    case 'CHARACTER_TYPED':
      return state + action.char
    case 'BACKSPACE':
      return state.substr(0, state.length - 1)
    case 'RANDOM':
      return state + '-'
    default:
      return state
  }
}


const store = createStore(reducer)
store.subscribe(render)
// render()

const userInput = `this is first redux`

let index = 0 
let nextIsRandom = false

const interval = setInterval( () => {
  if(index < userInput.length){
    if(nextIsRandom){
      store.dispatch({type: 'RANDOM'})
      nextIsRandom = false
    }
    else{
      store.dispatch(insertCharacter(userInput[index++]))
      nextIsRandom = index % 5 === 0
    }
  }
  else{
    clearInterval(interval)
  }
}, 100)

