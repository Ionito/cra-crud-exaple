import React from 'react'
import StreamForm from '../streams/StreamForm'
import { useDispatch } from 'react-redux'
import { createStream } from '../../actions'

const StreamCreate = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <h3>Add new stream</h3>
            <StreamForm
                onSubmit={(formValues) => dispatch(createStream(formValues))}
            />
        </div>
    )
}

export default StreamCreate
