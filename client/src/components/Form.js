import React, { useRef, useState } from 'react'
import Loading from './Loading'
import Profile from './Profile'

const Form = () => {

    const inputElement = useRef(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const res = await fetch('http://localhost:1000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: inputElement.current.value
            })
        })
        const data = await res.json()
        setLoading(false)
    }
    
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    ref={inputElement}
                    placeholder="Enter a username"
                    />
                <input 
                    type="submit" 
                    value="GO!"
                    />
            </form>
            <div className="content">
                {loading ? 
                <Loading/>
                :
                <Profile />}
            </div>
        </React.Fragment>
    )
}

export default Form