import { createContext } from 'react';

const IpContext=createContext({
  info: {},
  setInfo: () => { }
});

export default IpContext;
