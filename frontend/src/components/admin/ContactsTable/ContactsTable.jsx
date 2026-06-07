import { useEffect, useState } from "react";
import { getAllContacts, deleteContact } from "../../../api/contactApi";
import { FaSearch, FaTrashAlt, FaEye } from "react-icons/fa";
import "./ContactsTable.css";

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchContacts = async () => {
    try {
      const res = await getAllContacts();

      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search),
  );

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete enquiry?");

    if (!confirmDelete) return;

    try {
      await deleteContact(id);

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  return (
    <div className="table-wrapper">
      <div className="table-top">
        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Message</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>

              <td>{contact.email}</td>

              <td>{contact.phone}</td>

              <td>
                {contact.message.length > 50
                  ? `${contact.message.substring(0, 50)}...`
                  : contact.message}
              </td>

              <td>
                <div className="action-buttons">
                  <button
                    className="view-btn"
                    onClick={() => handleView(contact)}
                  >
                    <FaEye />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(contact._id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedContact && (
        <>
          <div
            className="modal-backdrop-custom"
            onClick={() => setShowModal(false)}
          />

          <div className="contact-modal">
            <div className="contact-modal-header">
              <h4>Enquiry Details</h4>

              <button className="close-btn" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>

            <div className="contact-modal-body">
              <p>
                <strong>Name:</strong> {selectedContact.name}
              </p>

              <p>
                <strong>Email:</strong> {selectedContact.email}
              </p>

              <p>
                <strong>Phone:</strong> {selectedContact.phone}
              </p>

              <p>
                <strong>Message:</strong>
              </p>

              <div className="message-box">{selectedContact.message}</div>

              <p className="mt-3">
                <strong>Date:</strong>{" "}
                {new Date(selectedContact.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactsTable;
