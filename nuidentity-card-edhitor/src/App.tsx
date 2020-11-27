import MainForm from 'container/MainForm';
import React from 'react';
import { ApplicationContext, useApplicationStore } from 'service/store';

const App: React.FC = () => (
  <ApplicationContext.Provider value={useApplicationStore()}>
    <MainForm />
  </ApplicationContext.Provider>
);

export default App;
