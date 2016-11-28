import React from 'react';
import Group from './Group.jsx';

export default class DistrictOfficeGroups extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const groupList = ['gr1', 'gr2', 'gr3', 'gr4'];
    const groups = [];

    for (let i = 0; i < groupList.length; i++) {
      groups.push(
        <Group />
      );
    }

    return (<div>{groups}</div>);
  }
}
