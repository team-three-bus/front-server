import React from 'react';

import View from './View';

const Container = () => {
  const [isEvent, setIsEvent] = React.useState(false);
  return <View isEvent={isEvent} setIsEvent={setIsEvent} />;
};

export default Container;
