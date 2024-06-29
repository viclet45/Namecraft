import React from 'react';

const NameInput = ({ name, setName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any additional logic here, such as validation or form submission
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <form className="bg-light p-4 rounded shadow" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">
          Generate Name Tag
        </button>
      </form>
    </div>
  );
};

export default NameInput;