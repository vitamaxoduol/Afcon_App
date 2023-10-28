// import React from "react";
import "../StyleSheets/tickets.css";
import TicketHeader from "./ticket components/TicketHeader";
import Packages from "./ticket components/Packages";
import ListTickets from "./ticket components/ListTickets";
import Paypal from "./ticket components/Pay";

function TicketStore() {
  return (
    <>
      <TicketHeader />
      <Packages />
      <ListTickets />
      <Paypal />
    </>
  );
}

export default TicketStore;
