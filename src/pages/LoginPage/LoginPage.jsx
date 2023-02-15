import React from 'react'

export default function LoginPage() {
  return (
    <>
        <form action="http://localhost:2882/" method='post'>
            <input type="text" name="username" id="" />
            <input type="password" name="password" id="" />
            <input type="button" value="Submit" />
        </form>
    </>
  )
}
