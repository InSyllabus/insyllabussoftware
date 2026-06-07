import { useEffect, useState } from "react";

import DashboardHeader from "../components/admin/DashboardHeader/DashboardHeader";
import StatsCard from "../components/admin/StatsCard/StatsCard";
import ContactsTable from "../components/admin/ContactsTable/ContactsTable";

import { getAllContacts } from "../api/contactApi";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await getAllContacts();
      setContacts(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <DashboardHeader />

      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-4">
            <StatsCard
              title="Total Enquiries"
              value={contacts.length}
            />
          </div>
        </div>

        <ContactsTable
          contacts={contacts}
          refreshContacts={fetchContacts}
        />
      </div>
    </>
  );
};

export default AdminDashboard;