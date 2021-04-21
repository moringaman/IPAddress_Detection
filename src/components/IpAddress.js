import React from 'react'

const IpAddress = ({ipAddress, loading}) => {
    return (
        <div className="ip-container">
            {
                loading ? <div> Loading </div>:
            <h1>{ipAddress && ipAddress}</h1>
            }
        </div>
    )
}

export default IpAddress