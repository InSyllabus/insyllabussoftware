import { useEffect, useState } from "react";
import {
    getAllContacts,
    deleteContact,
} from "../api/contactApi";


export default function Queries() {
    const [queries, setQueries] = useState([]);
    const [selectedQuery, setSelectedQuery] =
        useState(null);

    useEffect(() => {
        loadQueries();
    }, []);

    const loadQueries = async () => {
        try {
            const res = await getAllContacts();
            setQueries(res.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Delete this enquiry?"
        );

        if (!confirmDelete) return;

        try {
            await deleteContact(id);
            loadQueries();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container-fluid">
            <h2 className="mb-4">Customer Queries</h2>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Date</th>
                                    <th width="200">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {queries.length > 0 ? (
                                    queries.map((query) => (
                                        <tr key={query._id}>
                                            <td>{query.name}</td>
                                            <td>{query.email}</td>
                                            <td>{query.phone}</td>

                                            <td>
                                                {new Date(
                                                    query.createdAt
                                                ).toLocaleDateString()}
                                            </td>

                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm me-2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#queryModal"
                                                    onClick={() =>
                                                        setSelectedQuery(query)
                                                    }
                                                >
                                                    View Query
                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        handleDelete(query._id)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center"
                                        >
                                            No Queries Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Query Modal */}

            <div
                className="modal fade"
                id="queryModal"
                tabIndex="-1"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        {selectedQuery && (
                            <>
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Query Details
                                    </h5>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                    />
                                </div>

                                <div className="modal-body">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th width="35%">Name</th>
                                                <td>{selectedQuery.name}</td>
                                            </tr>

                                            <tr>
                                                <th>Email</th>
                                                <td>{selectedQuery.email}</td>
                                            </tr>

                                            <tr>
                                                <th>Phone</th>
                                                <td>{selectedQuery.phone}</td>
                                            </tr>

                                            <tr>
                                                <th>Submitted</th>
                                                <td>
                                                    {new Date(
                                                        selectedQuery.createdAt
                                                    ).toLocaleString()}
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>Message</th>
                                                <td>{selectedQuery.message}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}