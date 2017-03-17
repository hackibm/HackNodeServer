import React from 'react';

const Address = (props) => {
    return (
    <div>
      <div>
        <span>
          <strong>Adres: </strong>
        </span>
        <span>
          {props.contactInfo.address}
        </span>
      </div>
      <div>
        <span>
          <strong>Telefon: </strong>
        </span>
        <span>
          {props.contactInfo.phone}</span>
      </div>
      <div>
        <span>
          <strong>Email: </strong>
        </span>
        <span>
          {props.contactInfo.email}
        </span>
      </div>
    </div>
    );
  }

export default Address;
