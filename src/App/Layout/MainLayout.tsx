import React, { useCallback, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderFont } from './HeaderFont'
import FooterFont from './FooterFont'
import { CheckingToken } from '../lib/LocalStorage'
import { setClientLogin } from '../Store/Client'
import { useDispatch } from 'react-redux'

function MainLayout() {
    const dispatch = useDispatch()
    
    const chkAuth = useCallback(() => {
        CheckingToken()
          .then((data) => {
            if (data?.token) {
              dispatch(setClientLogin(data))
            }
          })
      }, [dispatch])

      useEffect(() => {
        chkAuth();
      }, [chkAuth])

    return (
        <>
            <HeaderFont />
            <div className='mainpage'><Outlet /></div>
            <FooterFont/>
        </>
    )
}

export default MainLayout

