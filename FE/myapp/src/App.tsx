import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';
import LayoutComponent from './component';

const App: FC = () => (
  <div className="App">
    {/* <Button type="primary">Button</Button> */}
    <LayoutComponent />
  </div>
);

export default App;