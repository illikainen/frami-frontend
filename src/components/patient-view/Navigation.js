import React from 'react';

import { Navigation as BaseNavigation, NavigationItem } from '../navigation';

const Navigation = ({ user }) => {
  return (
    <BaseNavigation>
      <NavigationItem to="/" label="home" />
      <NavigationItem to="/question/" label="question" plural />
      <NavigationItem
        to={`/prescription/${user.id}/`}
        label="prescription"
        plural
      />
      <NavigationItem to="/result/" label="test_result" plural />
      <NavigationItem to="/appointment/" label="appointment" plural />
      <NavigationItem
        to="/appointment-request/"
        label="appointment_request"
        plural
      />
      <NavigationItem to="/notification/" label="notification" plural />
    </BaseNavigation>
  );
};

export { Navigation };
