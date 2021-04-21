import React, { useReducer, useState } from 'react'
// import FlagIconFactory from 'react-flag-icon-css'
import useIpAddress  from '../hooks/useIpAddress' 
import ipReducer from '../reducers/ipReducer'
import axios from 'axios'
import { IpAddress, Country, UploadButton} from './'
import '../styles/main.css'



const App = () => {

//  const FlagIcon = FlagIconFactory(React)   

const [ ipState, ipDispatch ] = useReducer(ipReducer, {})
const { ipAddress, loading, countryCode, countryName} = ipState
const [progress, setProgress ] = useState({})

 useIpAddress(ipDispatch)

 const handleUpload = async() => {

    const data = {
        // id: '2383982',
        ipAddress : ipAddress,
        countryName: countryName
    }

        setProgress({message: 'Uploading IP Data'})
    try {
        //upload
        await axios.post('http://localhost:3001/ipData', data)
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