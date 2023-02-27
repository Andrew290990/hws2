import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

export let pureAddUser = (name: string, setError: (error:string)=>void, setName: (name:string)=>void, addUserCallback: (name: string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name === ''){
        setError('Error')
    }else{
        addUserCallback(name)
        setName('')
    }
}

export let pureOnBlur = (name: string, setError:(error:string)=>void) => { // если имя пустое - показать ошибку
    if(name === ''){
        setError('Erorr')
    }
}

export let pureOnEnter = (event: KeyboardEvent<HTMLInputElement>, addUser:()=>void) => { // если нажата кнопка Enter - добавить
    if(event.key === 'Enter'){
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    let [name, setName] = useState<string>('') // need to fix any
    let [error, setError] = useState<string>('') // need to fix any

    let setNameCallback = (event:ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(event.currentTarget.value) // need to fix

        error && setError('')
    }
    let addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    let onBlur = () => {
        pureOnBlur(name, setError)
    }

    let onEnter = (event:KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(event, addUser)
    }

    let totalUsers = users.length // need to fix
    let lastUserName = totalUsers > 0 ? users[totalUsers - 1].name : '' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
