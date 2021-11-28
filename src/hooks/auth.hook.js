import { useCallback, useEffect, useState } from "react"

const storageName = 'user'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userRole, setUserRole] = useState(null)

  const login = useCallback((jwt, id, role, signTime, duration) => {
    setToken(jwt)
    setUserId(id)
    setUserRole(role)
    localStorage.setItem(storageName, JSON.stringify({
      token: jwt,
      userId: id,
      userRole: role,
      tokenSignTime: signTime,
      tokenDuration: duration
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUserRole(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if(data && data.token){
      login(data.token, data.userId, data.userRole, data.tokenSignTime, data.tokenDuration)

      const tokenSignSecs = data.tokenSignTime
      const tokenDurSecs = data.tokenDuration
      const today = new Date()
      const todayYearSecs = today.getFullYear()*12*30*24*60*60
      const todayMonthSecs = today.getMonth()*30*24*60*60
      const todayDaySecs = today.getDate()*24*60*60
      const todayHourSecs = today.getHours()*60*60
      const todayMinSecs = today.getMinutes()*60
      const todaySecs = today.getSeconds()
      const todayTimeSecs = todayYearSecs + todayMonthSecs + todayDaySecs + todayHourSecs + todayMinSecs + todaySecs

      // console.log(`
      // tokenSignedIn: ${tokenSignSecs}
      // tokenDuration: ${tokenDurSecs}
      // todaySecs: ${todayTimeSecs}
      // difference: ${todayTimeSecs - tokenSignSecs}
      // `)

      if((todayTimeSecs - tokenSignSecs) >= tokenDurSecs){
        logout()
      }
    }
  }, [login, logout])

  return {token, userId, userRole, login, logout}

}