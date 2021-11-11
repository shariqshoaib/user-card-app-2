import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { selectUser, selectIsLoading as selectUsersLoading } from '../../redux/users/selectors';
import { selectImages, selectIsLoading as selectImagesLoading } from '../../redux/images/selectors';
import { fetchUsers } from '../../redux/users/actions';
import Card from '../../components/Card';
import { fetchImages } from '../../redux/images/actions';
import Spinner from '../../components/Spinner';

const Home = () => {
  const users = useSelector(selectUser);
  const images = useSelector(selectImages);
  const usersLoading = useSelector(selectUsersLoading);
  const imagesLoading = useSelector(selectImagesLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
    dispatch(fetchImages);
  }, [dispatch]);

  if (usersLoading || imagesLoading) return <Spinner />;
  return (
    <Container>
      { users.map((user) => {
        const link = images[user.username];
        return (
          <Card key={user.id} user={{ ...user, link }} />
        );
      })}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  word-spacing: 2px;
  min-height: 100vh;
`;
