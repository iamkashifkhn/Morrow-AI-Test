import React, { useState } from "react";

import { Row, Col , Modal} from "reactstrap";

import { LatestTransationData } from "../../CommonData/Data/index";

const LatestTransation = () => {
  const [visible, setVisible] = useState(false);
  const [selectedTransaction , setSelectedTransaction] = useState(null)

  const handleTransaction = (item) => {
    console.log(item)
    setSelectedTransaction(item)
    setVisible(true);
  };

  function tog_xlarge() {
    setVisible(!visible)
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Latest Transaction</h4>

              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: "50px" }}>
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            htmlFor="customCheckall"
                          ></label>
                        </div>
                      </th>
                      <th scope="col" style={{ width: "60px" }}></th>
                      <th scope="col">ID & Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LatestTransationData.map((item, key) => (
                      <tr key={key}>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id={item.id}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={item.id}
                            ></label>
                          </div>
                        </td>
                        <td>
                          {item.src ? (
                            <img
                              src={item.src}
                              alt="user"
                              className="avatar-xs rounded-circle"
                            />
                          ) : (
                            <div className="avatar-xs">
                              <span className="avatar-title rounded-circle bg-soft-primary text-success">
                                {item.clientName.charAt(0)}
                              </span>
                            </div>
                          )}
                        </td>
                        <td>
                          <p className="mb-1 font-size-12">{item.clientId}</p>
                          <h5 className="font-size-15 mb-0">
                            {item.clientName}
                          </h5>
                        </td>
                        <td>{item.date}</td>
                        <td>$ {item.price}</td>
                        <td>{item.quantity}</td>

                        <td>$ {item.quantity * item.price}</td>
                        <td>
                          <i
                            className={
                              "mdi mdi-checkbox-blank-circle me-1 text-" +
                              item.color
                            }
                          ></i>{" "}
                          {item.status}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-success btn-sm me-1"
                            onClick={() => handleTransaction(item)}
                          >
                            View
                          </button>
                          {/* <button
                            type="button"
                            className="btn btn-outline-danger btn-sm me-1"
                          >
                            Cancel
                          </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Modal
        size="md"
        isOpen={visible}
        toggle={() => {
          tog_xlarge()
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">
            Latest Transaction
          </h5>
          <button
            onClick={() => {
              setVisible(false)
            }}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="mb-0">
            <span>Client Name: </span>{selectedTransaction?.clientName}
          </p>
          <p className="mb-0">
          <span>Date: </span>{selectedTransaction?.date}
          </p>
          <p className="mb-0">
          <span>Quantity: </span>{selectedTransaction?.quantity}
          </p>
          <p className="mb-0">
          <span>Price: </span>{selectedTransaction?.price}
          </p>
          <p className="mb-0">
          <span>Amount: </span>{selectedTransaction?.price * selectedTransaction?.quantity}
          </p>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default LatestTransation;
