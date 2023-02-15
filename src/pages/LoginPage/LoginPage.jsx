import React from 'react'

export default function LoginPage() {
  return (
    <>
        <div className="addForm">
        <form action="http://localhost:2882/login" method='post'>
            <input type="text" name="username" id="" />
            <input type="password" name="password" id="" />
            <input type="submit" value="Submit" />
        </form>
        </div>
    </>
  )
}
