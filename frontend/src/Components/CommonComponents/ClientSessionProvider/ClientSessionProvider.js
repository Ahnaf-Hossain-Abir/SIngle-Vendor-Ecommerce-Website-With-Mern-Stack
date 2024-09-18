// src/components/ClientSessionProvider.js
"use client";

import { SessionProvider } from "next-auth/react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

// Define prop types for the component
function ClientSessionProvider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

ClientSessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
  session: PropTypes.object, // Adjust based on your session object
};

export default ClientSessionProvider;
