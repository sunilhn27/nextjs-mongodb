"use client"
import React, { useEffect, useState } from 'react'


function DashBoared() {

  const [users, setUsers] = useState([])

  const handleSubmit = async () => {
    const res = await fetch("/api/contact")
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div className="w-full">
      {/* <button className='text-xl space-y-4 mt-4 bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 flex-wrap w-32'>Get Data</button> */}
      <table className="w-full table-auto m-9">
        <thead>
          <tr>
            <th className="px-4 py-2">Your Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan={2}>
                No data available
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.yourName}</td>
                <td className="border px-4 py-2">{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

}

export default DashBoared