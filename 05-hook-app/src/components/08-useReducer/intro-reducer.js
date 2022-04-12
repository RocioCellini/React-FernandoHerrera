
const initialState = [{
    id: 1,
    todo: "Comprar pan",
    done: false
}];

const todoReducer = ( state = initialState, action ) =>{
    if( action?.type === 'agregar' ){
        return[...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "Comprar leche",
    done: false
}
// es importante recordar no utilizar el push para agregar un elem a un arreglo, porq eso modifica el objeto

const AgregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, AgregarTodoAction);
console.log(todos);