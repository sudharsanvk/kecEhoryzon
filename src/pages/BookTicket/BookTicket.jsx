import React from 'react'

export default function BookTicket() {
  return (
    <div>
         <form action="http://localhost:2882/create-checkout-session" method="POST">
            <button type="submit">Checkout</button>
        </form>
    </div>
  )
}
