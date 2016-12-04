import React from 'react';

export default class Group extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <span>
            <strong>Nazwa grupy:
            </strong>
          </span>
          <span>
            {this.props.groupName}
          </span>
        </div>
        <div>
          <span>
            <strong>Czas obsługi:
            </strong>
          </span>
          <span>
            {this.props.time}</span>
        </div>
        <div>
          <span>
            <strong>Liczba Czynnych Stanowisk:
            </strong>
          </span>
          <span>
            {this.props.count}
          </span>
        </div>
        <br/>
      </div>
    );
  }

}
