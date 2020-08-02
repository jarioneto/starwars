import React, { FC, useState, useContext } from 'react';

// Components
import Button from 'components/Button';

// Context
import SideContext from 'contexts/SideContext';

// Services
import { fetchSide } from 'services/api';

// Third party
import { useHistory } from 'react-router-dom';

// Utils
import toast from 'utils/toast';

// Styles
import { Container, Content, Footer } from './styles';

const Home: FC = () => {
  const [loading, setLoading] = useState(false);

  const context = useContext(SideContext.Context);
  const history = useHistory();

  const handleClick = () => {
    setLoading(true);

    fetchSide()
      .then((side) => {
        context?.setSide?.(side);
        history.push('/side');
      })
      .catch(() => {
        toast('Error, try again');
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Content>
        <h2>
          Welcome to <strong>iClinic</strong>
        </h2>
        <h5>Frontend Challenge</h5>
      </Content>
      <Footer>
        <Button loading={loading} onClick={handleClick}>
          Start
        </Button>
      </Footer>
    </Container>
  );
};

export default Home;
