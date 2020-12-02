import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

const isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

const StreamList = () => {
    const dispatch = useDispatch()
    const [streamList, setStreamList] = useState([])
    const streams = useSelector((state) => state.streams)
    const userId = useSelector((state) => state.auth.userId)
    const isSignedIn = useSelector((state) => state.auth.isSignedIn)

    useEffect(() => {
        dispatch(fetchStreams())
    }, [])

    useEffect(() => {
        if (!isObjEmpty(streams)) {
            setStreamList(Object.values(streams))
        }
    }, [streams])

    const renderAdminBtns = (stream) => {
        if (stream.userId === userId)
            return (
                <div className="right floated content">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="ui button primary"
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/streams/delete/${stream.id}`}
                        className="ui button red"
                    >
                        Delete
                    </Link>
                </div>
            )
    }

    const renderCreateBtn = () => {
        if (isSignedIn)
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="button ui primary">
                        Create Stream
                    </Link>
                </div>
            )
    }

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {streamList.map((strm) => (
                    <div className="item" key={strm.id}>
                        {renderAdminBtns(strm)}
                        <i className="large middle aligned icon camera" />
                        <div className="content">
                            <Link to={`/streams/${strm.id}`} className="header">
                                {strm.title}
                            </Link>
                            <div className="description">
                                {strm.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {renderCreateBtn()}
        </div>
    )
}

export default StreamList
