import React from 'react'

const Profile = (props) => {
    return (
        <div className="profile">
            <img className="image" src={props.pfp}/>
            <div className="description">
                {props.followers}
            </div>
        </div>
    )
}

export default Profile
