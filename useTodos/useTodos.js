import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) ?? [] ; 
}

export const useTodos = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type:'Add Todo',
            payload:todo,
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        const action = {
            type:'Delete Todo',
            payload: id,
        }

        dispatch( action );
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type:'Complete Todo',
            payload: id,
        }

        dispatch( action );
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter( todo => !todo.done ).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
