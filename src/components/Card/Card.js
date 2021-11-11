import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import Modal from 'react-modal';
import {
  DeleteIcon, EditIcon, HeartIcon, HeartActiveIcon,
  MailIcon, PhoneIcon, WebIcon, CancelIcon,
} from '../../utils/icons';

import {
  Column, StyledCard, CardCover, CardBody, Username,
  Info, UserInfoWrapper, CardFooter, ModalBody, ModalTitle, ModalFooter,
  ActionButtonsWrapper, ModalHeader, ActionButton, SaveButton, CancelButton,
  StyledModal, EditActionButton,
} from './card.styled';

import InputField from '../InputField';

import Button from '../Button';

const Card = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { link } = user;

  const toggleHeart = () => (
    setIsHeartActive(!isHeartActive)
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setName(currentUser.name);
    setEmail(currentUser.email);
    setPhone(currentUser.phone);
    setWebsite(currentUser.website);
  };

  const updateUser = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentUser({
      ...user, name, email, phone, website,
    });
  };

  const deleteUser = () => {
    setCurrentUser(null);
  };

  if (currentUser === null) return null;

  Modal.setAppElement('#root');
  return (
    <Column>
      <StyledCard>

        <CardCover
          src={link}
          alt="cover"
          width="200px"
          height="200px"
        />

        <CardBody>
          <Username>{ currentUser.name }</Username>

          <UserInfoWrapper>
            <MailIcon />
            <Info>{ currentUser.email }</Info>
          </UserInfoWrapper>

          <UserInfoWrapper>
            <PhoneIcon />
            <Info>{ currentUser.phone }</Info>
          </UserInfoWrapper>

          <UserInfoWrapper>
            <WebIcon />
            <Info>{ `http://${user.website} ` }</Info>
          </UserInfoWrapper>
        </CardBody>

        <CardFooter>
          <StyledModal
            className="actions-modal"
            shouldCloseOnOverlayClick
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
          >
            <ModalHeader>
              <ModalTitle>Basic Modal</ModalTitle>
              <Button
                Icon={CancelIcon}
                handleClick={toggleModal}
                style={{ cursor: 'pointer' }}
              />
            </ModalHeader>
            <ModalBody>
              <InputField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <InputField
                label="Web"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <CancelButton
                handleClick={toggleModal}
                text="Cancel"
              />
              <SaveButton
                handleClick={updateUser}
                text="Save"
              />
            </ModalFooter>
          </StyledModal>

          <ActionButtonsWrapper>
            <ActionButton
              Icon={isHeartActive ? HeartActiveIcon : HeartIcon}
              handleClick={toggleHeart}
            />
            <EditActionButton
              Icon={EditIcon}
              handleClick={toggleModal}
            />
            <ActionButton
              id="delete-icon"
              Icon={DeleteIcon}
              handleClick={deleteUser}
            />
          </ActionButtonsWrapper>
        </CardFooter>

      </StyledCard>
    </Column>
  );
};

export default Card;

Card.defaultProps = {
  user: PropTypes.shape({
    name: null,
    link: null,
    email: null,
    phone: null,
    website: null,
  }),
};

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
  }),
};
