import React, { FC, createContext, useState } from 'react';

// Types
import { Side, SideContext } from 'types';

interface Props {
  value: Side;
}

const Context = createContext<SideContext | null>(null);

const Provider: FC<Props> = ({ children, value }) => {
  const [side, setSide] = useState<Side>(value);

  const contextValue = {
    side,
    setSide
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default { Context, Provider };
