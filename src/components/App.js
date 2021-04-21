import React, { useReducer, useState } from 'react'
import useIpAddress  from '../hooks/useIpAddress' 
import ipReducer from '../reducers/ipReducer'
import { IpAddress, Country, UploadButton} from './'
import '../styles/main.css'



const App = () => {

//  const FlagIcon = FlagIconFactory(React)   

const [ ipState, ipDispatch ] = useReducer(ipReducer, {})
const { ipAddress, loading, countryCode, countryName} = ipState
const [progress, setProgress ] = useState({})

 useIpAddress(ipDispatch)

 const handleUpload = async() => {

    
    const raw = {
        ipAddress : ipAddress,
        countryName: countryName
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(raw)
    }

        setProgress({message: 'Uploading IP Data'})
    try {
        //upload
        await fetch('http://localhost:3001/ipData', options )
        setProgress({message: 'IP Data Uploaded'})
    } catch(err) {
        //display error
        setProgress({message: 'An error occured connecting to server'})
        console.log("An error occured", err)
    }
 }

console.log(ipState)

    return (
        <div className="container">
            {ipAddress && 
            <>
            <IpAddress ipAddress={ ipAddress} loading={loading}/>
            <Country code={countryCode} country={countryName} />
            {/* <FlagIcon code="gb"/> */}
            </>
            }
            { ipAddress && <UploadButton handleUpload={handleUpload} upLoadProgress={progress}/> }
        </div>
    )
}

export default App