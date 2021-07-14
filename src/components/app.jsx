import React from 'react';
import FlatList from '../containers/flat_list';
import Map from '../containers/map';

const APP = () => {
  return (
    <div className="row">
      <div className="flat">
        <FlatList />
        <Map />
      </div>
    </div>
  );
};
export default APP;
