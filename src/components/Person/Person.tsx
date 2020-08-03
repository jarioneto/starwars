import React, { FC } from 'react';

// Types
import { Person as PersonType } from 'types';

// Styles
import { Container } from './styles';

interface Props {
  person: PersonType;
}

const Person: FC<Props> = ({ person: { name, avatar } }) => {
  return (
    <Container>
      <img src={avatar} alt={name} title={name} />
      <h5>
        Your master is <strong>{name}</strong>
      </h5>
    </Container>
  );
};

export default Person;
