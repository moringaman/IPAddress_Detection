import { useEffect } from 'react'
// import ipReducer from '../reducers/ipReducer'


const useIpAddress = (dispatch) => {

    // const [ipState, ipDispatch ] = useReducer(ipReducer, {})

    useEffect(() => {
        // make call to aws to get up address
        (async () => {
            console.log("GETTINF IP")
            dispatch({type: 'FETCHING_IP'})
            try {
                const result2 = await fetch('https://api.db-ip.com/v2/free/self')
                const parsed = await result2.json()
                console.log(parsed.ipAddress)
                dispatch({type: 'SET_IP', payload: parsed})
                dispatch({type: 'FETCHED_IP'})
            } catch(err) {
                console.log(err)
                dispatch({type: 'FETCHED_IP'})
            }
        })()

    }, [dispatch])

}

export default useIpAddress