import React from 'react'
import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import "./CreateTicketLayout";

export const CreateTicketLayout = ({children}) => {
  return (
    <div className="default-layout">
        <header className="header">
            <Header/>
        </header>

        <create-ticket-main className="create-ticket-main">
            {children}
        </create-ticket-main>

        <footer className="footer">
            <Footer />
        </footer>
    </div>
  )
}