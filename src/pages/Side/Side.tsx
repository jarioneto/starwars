import React, { FC, useState, useContext, useEffect } from 'react';

// Types
import { Side as SideType, Sides, Person as PersonType } from 'types';

// Components
import Button from 'components/Button';
import Person from 'components/Person';

// Context
import SideContext from 'contexts/SideContext';

// Services
import { fetchSide } from 'services/api';

// Third party
import { useHistory } from 'react-router-dom';
import { DefaultTheme, ThemeContext } from 'styled-components';

// Utils
import toast from 'utils/toast';

// Assets
import { ReactComponent as Arrow } from 'assets/images/arrow.svg';
import avatarDarth from 'assets/images/darth-vader.png';
import avatarLuke from 'assets/images/luke-skywalker.png';

// Styles
import * as themes from 'styles/theme';
import { Container, Content, Header } from './styles';

const Side: FC = () => {
  const [loading, setLoading] = useState(false);
  const [side, setSide] = useState<SideType>(null);
  const [theme, setTheme] = useState<DefaultTheme>(themes.default);
  const [person, setPerson] = useState<PersonType>({ name: '', avatar: '' });

  const context = useContext(SideContext.Context);
  const history = useHistory();

  useEffect(() => {
    if (context?.side) {
      const currentSide = context.side;
      const currentTheme = Sides.light === currentSide ? themes.light : themes.dark;

      const currentPerson: PersonType = {
        name: Sides.light === currentSide ? 'Luke Skywalker' : 'Dart Vader',
        avatar: Sides.light === currentSide ? avatarLuke : avatarDarth
      };

      setTheme(currentTheme);
      setPerson(currentPerson);
      setSide(currentSide);
    } else {
      history.push('/');
    }
  }, [context, history]);

  const handleAgain = () => {
    setLoading(true);

    fetchSide()
      .then((data) => {
        context?.setSide?.(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast('Error, try again');
      });
  };

  const goBack = () => {
    history.push('/');
  };

  return (
    side && (
      <ThemeContext.Provider value={theme}>
        <Container loading={loading}>
          <Header>
            <Arrow onClick={goBack} role="button" />
            <span>back</span>
          </Header>
          <Content>
            <Button onClick={handleAgain} loading={loading}>
              choose your path again, Padawan
            </Button>
            <Person person={person} />
          </Content>
        </Container>
      </ThemeContext.Provider>
    )
  );
};

export default Side;
