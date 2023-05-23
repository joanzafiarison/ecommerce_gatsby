import React , {useState, useContext} from "react";
import { payment_context } from "../../services/context";

const availableCountries = [
    "france",
    "Réunion",
    "angleterre",
    "belgique",
    "pays-bas",
    "italie",
]
const relay = [
    {
        "name":"point relais",
        "lat":76.55,
        "lng":173.55
    },
    {
        "name":"point relais",
        "lat":76.55,
        "lng":173.55
    }
]

const DeliveryProcess = () => {
    const ctx = useContext(payment_context);
    console.log("deliv ctx", ctx)
    const [adressData, setAdressData] = useState({
        "adress":"",
        "postal":"",
        "city":"",
        "country":""
    })
    const [relayPoints, setRelayPoints] = useState(relay)
    const [chosenRelay, setRelay] = useState(0)
    console.log(chosenRelay);
    function handleChange(e){
        setAdressData({...adressData, [e.target.name] : e.target.value});
        console.log(adressData)
    }
    return(
        <div>
            <form>
                <label>
                    Adresse : 
                    <input type="text" name="adress" onChange={handleChange}/>
                </label>
                <label>
                    Code Postal : 
                    <input type="text" name="postal" onChange={handleChange}/>
                </label>
                <label>
                    Ville : 
                    <input type="text" name="city" onChange={handleChange}/>
                </label>
                <label>
                    Pays : 
                    <select  name="country" onChange={handleChange}>
                        {availableCountries.map( country => (
                            <option value={country}>{country}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Point : 
                    <select value={relayPoints[chosenRelay]} onChange={(e) => setRelay(e.target.value)}>
                        {relayPoints.map(pt => (
                            <option value={pt.name}>{pt.name}</option>
                        ))

                        }
                    </select>
                </label>
            </form>
        </div>
    )
}

export default DeliveryProcess;