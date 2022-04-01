import React from 'react'
import { Deposit } from '../components/Buy Crypto/Deposit/Deposit'
import Footer from '../components/shared/Footer/footer'
import Navbar from '../components/shared/Navbar/navbar'

export const DepositPage = () => {
  return (
    <div>
        <Navbar />
        <Deposit />
        <Footer />
    </div>
  )
}
