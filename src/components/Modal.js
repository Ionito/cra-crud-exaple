import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ title, content, actions, onDissmis }) => {
    return ReactDOM.createPortal(
        <div onClick={onDissmis} className="ui dimmer modals visible active">
            <div
                onClick={(e) => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">{title}</div>
                <div className="content">{content}</div>
                <div className="actions">{actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal
