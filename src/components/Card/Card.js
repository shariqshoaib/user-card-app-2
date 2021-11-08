/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './Card.css';

import Modal from 'react-modal';
import {
  Delete, Edit, Heart, HeartActive, Mail, Phone, Web, Cancel,
} from '../../utils/icons';

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
    <div className="column">
      <div className="card">

        <div className="card-cover">
          <img
            src={link}
            alt="cover"
            width="200px"
            height="200px"
          />
        </div>

        <div className="card-body">
          <h3>{ currentUser.name }</h3>
          <div className="user-info">
            <Mail />
            <p>{ currentUser.email }</p>
          </div>
          <div className="user-info">
            <Phone />
            <p>{ currentUser.phone }</p>
          </div>
          <div className="user-info">
            <Web />
            <p>{ `http://${user.website} ` }</p>
          </div>
        </div>

        <div className="actions">
          <Modal
            className="actions-modal"
            shouldCloseOnOverlayClick={true}
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
          >
            <div className="modal-header">
              <h4>Basic Modal</h4>
              <Button
                Icon={Cancel}
                handleClick={toggleModal}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <Button
                id="modal-cancel"
                handleClick={toggleModal}
                text="Cancel"
              />
              <Button
                id="modal-save"
                handleClick={updateUser}
                text="Save"
              />
            </div>
          </Modal>

          <ul className="actions-buttons">
            <li>
              <Button
                Icon={isHeartActive ? HeartActive : Heart}
                handleClick={toggleHeart}
              />
            </li>
            <li>
              <Button
                Icon={Edit}
                handleClick={toggleModal}
              />
            </li>
            <li>
              <Button
                id="delete-icon"
                Icon={Delete}
                handleClick={deleteUser}
              />
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Card;
