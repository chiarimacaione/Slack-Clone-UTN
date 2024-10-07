import React from 'react'

const ChatItem = ({author, text}) => {
    return (
        <div >
            <h4>{author}</h4>
            <p>{text}</p>
        </div>
    )
}
export default ChatItem