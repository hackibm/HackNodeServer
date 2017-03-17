import React from 'react';

const Group = (props) => {
    return (
      <div>
        <div>
          <span>
            <strong>Nazwa grupy:
            </strong>
          </span>
          <span>
            {props.groupName}
          </span>
        </div>
        <div>
          <span>
            <strong>Czas obsługi:
            </strong>
          </span>
          <span>
            {props.time}</span>
        </div>
        <div>
          <span>
            <strong>Liczba Czynnych Stanowisk:
            </strong>
          </span>
          <span>
            {props.count}
          </span>
        </div>
        <div>
          <span>
            <strong>Liczba osób w kolejce:
            </strong>
          </span>
          <span>
            {props.count}
          </span>
        </div>
        <br/>
      </div>
    );
  }

export default Group;
