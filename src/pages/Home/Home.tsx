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

  const handleStart = () => {
    setLoading(true);

    fetchSide()
      .then((data) => {
        context?.setSide?.(data);
        setLoading(false);

        history.push('/side');
      })
      .catch(() => {
        setLoading(false);
        toast('Error, try again');
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
        <Button loading={loading} onClick={handleStart}>
          Start
        </Button>
      </Footer>
    </Container>
  );
};

export default Home;
