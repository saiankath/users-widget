import React from 'react'
// import './Popup.css'

const Update = () => {

    return(
        <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                <div className="form-group">
                    <label  className="col-form-label">Recipient:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="form-group">
                    <label className="col-form-label">Message:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Send message</button>
            </div>
            </div>
        </div>
        </div>
    
    ) 
}

export default Update;