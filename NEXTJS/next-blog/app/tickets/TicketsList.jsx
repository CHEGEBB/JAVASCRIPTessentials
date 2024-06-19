import React from 'react'

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets')
  return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()
  return (
    <>
    {tickets.map((ticket)=>((

        <div className="card" key={ticket.id}>
        <h3>{ticket.title}</h3>
        <p>{ticket.body.slice(0, 200)}...</p>
        <div className={`pill ${ticket.priority}`}>
            {ticket.priority}priority
        </div>

        </div>
        
    )))}
    {tickets.length === 0 && (
        <p className='text-center'>There are no </p>
    )}

    </>
  )
}
