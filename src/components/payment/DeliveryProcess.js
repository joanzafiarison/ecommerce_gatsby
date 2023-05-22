import React , {useState} from "react";

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
                    <input type="text" name="postal"/>
                </label>
                <label>
                    Ville : 
                    <input type="text" name="city"/>
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