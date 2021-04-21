import React, {useEffect, useState} from 'react'
import { CountryFlag } from './'

const Country = ({ code, country }) => {


    const countryCodes = [{ccode: 'GB', htmlCode: "\\1F1EC \\1F1E7"}, { cccode: 'FR', htmlCode: 'something else' }]
    const [ flagCode, setFlagCode ] = useState('')



    const getCountryCode = (code) => {
       const myCode = countryCodes.filter(el => el.ccode === code )[0].htmlCode
          setFlagCode(JSON.stringify(myCode.replace(/\\/gi, '\\' )))
            let trimmed = JSON.stringify(myCode).slice(2, 8)
            trimmed = "" + trimmed + " " + JSON.stringify(myCode).slice(10, 16) + ""
            console.log("REPLACED", trimmed)
            setFlagCode(String.raw`${trimmed}`)
            console.log(typeof String.raw`${flagCode}`)
    }


    useEffect(() => {
          getCountryCode(code)
    } )



    return (
        <div className="country-container">
            <h1>
                {country}
            </h1>
            {                    
            flagCode !== '' &&
            <CountryFlag flagCode={flagCode} />
            }
        </div>
    )
}

export default Country