import React, { useEffect } from 'react'
import { fetchStream } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

const StreamShow = ({ match }) => {
    const dispatch = useDispatch()
    const stream = useSelector((state) => state.streams[match.params.id])
    useEffect(() => {
        dispatch(fetchStream(match.params.id))
    }, [])

    if (!stream) return <div>loading...</div>

    return (
        <div>
            <h3>{stream.title}</h3>
            <p>{stream.description}</p>
        </div>
    )
}

export default StreamShow
