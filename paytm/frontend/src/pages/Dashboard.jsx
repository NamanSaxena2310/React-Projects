import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect } from "react"
import axios from "axios"

export const Dashboard = () => {
  const [balance,setBalance] = useState(0)

  const fetchBalance = async()=>{
    const response = await axios.get("http://localhost:3000/api/v1/account/balance",{headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }})
    setBalance(response.data.data)
  }

  
  useEffect(()=>{
    fetchBalance()
  },[])

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}