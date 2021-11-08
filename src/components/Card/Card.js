import './Card.css'

import { 
  Delete, 
  Edit, 
  Heart, 
  HeartActive, 
  Mail,
  Phone, 
  Web,
  Cancel } from '../../utils/icons'

import Modal from 'react-modal'

import Field from '../Field'

import React, { useState } from 'react'

import Button from '../Button'


const Card = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  
  const [isHeartActive, setIsHeartActive] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  
  const { link } = user;

  const toggleHeart = () =>{
    setIsHeartActive(!isHeartActive);
  }

  const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
      setName(currentUser.name)
      setEmail(currentUser.email)
      setPhone(currentUser.phone)
      setWebsite(currentUser.website)
  }

  const updateUser = () => {
    setCurrentUser({ ...user, name, email, phone, website })
  }

  const deleteUser = () => {
      setCurrentUser(null)
  }

  if(currentUser === null) return null;

  Modal.setAppElement('#root')
  return(
    <div className='column'>
      <div className='card'>

        <div className='card-cover'>
            <img 
              src={ link } 
              alt='cover' 
              width='200px' 
              height='200px' 
            />
        </div>

        <div className='card-body'>
          <h3>{ currentUser.name }</h3>
          <div className='user-info'>
              { Mail() }
              <p>{ currentUser.email }</p>
          </div>
          <div className='user-info'>
              { Phone() }
              <p>{ currentUser.phone }</p>
          </div>
          <div className='user-info'>
              { Web() }
              <p>{ `http://${user.website} ` }</p>
          </div>
        </div>

        <div className='actions'>
          <Modal 
              className='actions-modal'
              shouldCloseOnOverlayClick= { true }  
              isOpen={ isModalOpen } 
              onRequestClose={ toggleModal }
          >
              <div className='modal-header'>
                  <h4>Basic Modal</h4>
                  <Button 
                    icon={ Cancel() } 
                    handleClick={ toggleModal } 
                    style={{ cursor:'pointer' }}
                  />
              </div>
              <div className='modal-body'>
                  <Field 
                    label='Name' 
                    value={ name } 
                    onChange={ (e) => setName(e.target.value) }
                  />
                  <Field 
                    label='Email' 
                    value={ email } 
                    onChange={ (e) => setEmail(e.target.value) }
                  />
                  <Field 
                    label='Phone' 
                    value={ phone } 
                    onChange={ (e) => setPhone(e.target.value) }
                  />
                  <Field 
                    label='Web' 
                    value={ website } 
                    onChange={ (e) => setWebsite(e.target.value) }
                  />
              </div>
              <div className='modal-footer'>
                  <Button 
                    id='modal-cancel' 
                    handleClick={ toggleModal } 
                    icon='Cancel'
                  />
                  <Button 
                    id='modal-save' 
                    handleClick={ updateUser } 
                    icon ='Save'
                  />
              </div>
          </Modal>

          <ul className='actions-buttons'>
            <li>
                  <Button 
                    icon={ isHeartActive ? HeartActive() : Heart() } 
                    handleClick= { toggleHeart }
                  />
            </li>
            <li>
              <Button 
                  icon={ Edit() }
                  handleClick= { toggleModal }
              />
            </li>
            <li>
              <Button 
                  id='delete-icon' 
                  icon={ Delete() }
                  handleClick= { deleteUser }
              />
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Card;

