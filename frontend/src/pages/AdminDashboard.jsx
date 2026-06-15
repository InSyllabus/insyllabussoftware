import { useEffect, useState } from "react";

import DashboardHeader from "../components/admin/DashboardHeader/DashboardHeader";
import StatsCard from "../components/admin/StatsCard/StatsCard";
import {
  getAllJobsAdmin,
  getApplications,
} from "../api/careerApi";

import Jobs from "./Jobs";
import Applications from "./Applications";
import Queries from "./Queries";

import { getAllContacts } from "../api/contactApi";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] =
    useState("dashboard");
  const [jobsCount, setJobsCount] = useState(0);
  const [applicationsCount, setApplicationsCount] =
    useState(0);

  const fetchContacts = async () => {
    try {
      const res = await getAllContacts();
      setContacts(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDashboardData = async () => {
    try {
      const contactsRes = await getAllContacts();
      const jobsRes = await getAllJobsAdmin();
      const applicationsRes =
        await getApplications();

      setContacts(contactsRes.data || []);

      setJobsCount(
        jobsRes.data?.length ||
        jobsRes.count ||
        0
      );

      setApplicationsCount(
        applicationsRes.data?.length ||
        applicationsRes.count ||
        0
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <DashboardHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="container py-5">
        {activeTab === "dashboard" && (
          <>
            <div className="row g-4">

              <div className="col-md-4">
                <StatsCard
                  title="Total Enquiries"
                  value={contacts.length}
                />
              </div>

              <div className="col-md-4">
                <StatsCard
                  title="Total Jobs"
                  value={jobsCount}
                />
              </div>

              <div className="col-md-4">
                <StatsCard
                  title="Applications"
                  value={applicationsCount}
                />
              </div>

            </div>
          </>
        )}

        {activeTab === "queries" && <Queries />}

        {activeTab === "jobs" && <Jobs />}

        {activeTab === "applications" && (
          <Applications />
        )}


      </div>
    </>
  );
};

export default AdminDashboard;