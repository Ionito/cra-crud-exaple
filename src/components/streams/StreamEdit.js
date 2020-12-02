import React, { useEffect } from 'react'
import { fetchStream, editStream } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import StreamForm from '../streams/StreamForm'

const StreamEdit = ({ match }) => {
    const dispatch = useDispatch()
    const stream = useSelector((state) => state.streams[match.params.id])
    useEffect(() => {
        dispatch(fetchStream(match.params.id))
    }, [])

    if (!stream) return <div>loading...</div>
    return (
        <div>
            <h3>Edit stream</h3>
            <StreamForm
                initialValues={{
                    title: stream.title,
                    description: stream.description,
                }}
                onSubmit={(formValues) =>
                    dispatch(editStream(stream.id, formValues))
                }
            />
        </div>
    )
}

export default StreamEdit
