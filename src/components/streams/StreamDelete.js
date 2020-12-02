import React, { useEffect } from 'react'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = ({ match }) => {
    const dispatch = useDispatch()
    const steam = useSelector((state) => {
        return state.streams[match.params.id]
    })
    useEffect(() => {
        dispatch(fetchStream(match.params.id))
    }, [])

    const actions = (
        <>
            <button
                onClick={() => dispatch(deleteStream(match.params.id))}
                className="ui button negative"
            >
                Delete
            </button>
            <Link to="/" className="ui button ">
                Cancel
            </Link>
        </>
    )

    const renderContent = () => {
        if (!steam) {
            return 'Are you sure you want to delete this stream?'
        }

        return `"Are you sure you want to delete this stream with title ${steam.title}?"`
    }

    return (
        <Modal
            title="Delete stream"
            content={renderContent()}
            actions={actions}
            onDissmis={() => history.push('/')}
        />
    )
}

export default StreamDelete
