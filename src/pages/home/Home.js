import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    <div className="container">
      { users.map((user) => {
        const link = images[user.username];
        return (
          <Card key={user.id} user={{ ...user, link }} />
        );
      })}
    </div>
  );
};

export default Home;
