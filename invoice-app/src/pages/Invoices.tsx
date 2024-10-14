import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Invoices: React.FC = () => {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const fetchInvoices = async () => {
    const response = await fetch('http://localhost:3000/invoices');
    const data = await response.json();
    setInvoices(data);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const handleShow = (invoice: any) => {
    setSelectedInvoice(invoice);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedInvoice(null);
  };

  return (
    <div>
      <h2>Invoices</h2>
      <Link to="/">Back to Main Page</Link>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <button onClick={() => handleShow(invoice)}>View Invoice {invoice.id} {invoice.vendor_name}</button>
          </li>
        ))}
      </ul>

      {/* Bootstrap Modal 
        No longer need GET /invoices/:id: to retrieve details of a specific invoice for modal display.
      */}

      {showModal && (
        <div className="modal fade show" style={{ display: 'block', zIndex: 1050 }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invoice Details</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {selectedInvoice && (
                    <div>
                        <h5>Invoice ID: {selectedInvoice.id}</h5>
                        <p>vendor_name: {selectedInvoice.vendor_name}</p>
                        <p>Description: {selectedInvoice.description}</p>
                        <p>due_date: {selectedInvoice.due_date}</p>
                        <p>Amount: ${selectedInvoice.amount.toFixed(2)}</p>
                        <p>Status: {selectedInvoice.paid ? 'Paid' : 'Unpaid'}</p>
                    </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show" />}
    </div>
  );
};

export default Invoices;
