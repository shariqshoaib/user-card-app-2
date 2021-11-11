import Modal from 'react-modal';
import styled from 'styled-components';
import Button from '../Button';

export const Column = styled.div`
  width: 25%;
  transition: all 0.5s fade-out;
  @media screen and (max-width: 1200px) {
    width:33%;
  }
  @media screen and (max-width: 770px) {
    width:100%;
  }
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border: 1px solid rgb(232, 232, 232);
  margin: 15px;
  transition-delay: 0s;
  transition-delay: 0s;
  transition-duration: 0.3s;
`;

export const CardCover = styled.img`
  background-color: ${({ theme }) => theme.image};
  width: 100%;
`;

export const CardBody = styled.div`
  background-color: ${({ theme }) => theme.cardBody};
  padding: 24px;
`;

export const Username = styled.h3`
  ${'' /* color: rgba(0,0,0,1) !important; */}
  font-size: 16.38px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.p`
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const ActionButtonsWrapper = styled.ul`
  align-items: center;
  border-top: 1px solid rgb(232, 232, 232);
  display: flex;
  height: 50px;
  justify-content: flex-starts;
  list-style: none;
  width: 100%;
  padding-left:0px;
`;

export const ActionButton = styled(Button)`
  display:flex;
  justify-content: center;
  width:33.33%;
`;

export const EditActionButton = styled(ActionButton)`
  border-left: 1px solid white;
  border-right: 1px solid white;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.image};
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid rgb(232, 232, 232);
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
}
`;

export const ModalTitle = styled.h3`
  font-size: 16px;
`;

export const ModalBody = styled.div`
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid rgb(232, 232, 232);
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  padding: 10px 16px;
  width: 100%;

  button {
    border: 1px solid black;
    color: white;
    cursor: pointer;
    font-size: 16px;
    height: 32px;
    padding: 0px 15px;
    text-align: center;
  }  
`;

export const SaveButton = styled(Button)`
    background-color: #1890ff;
    border: 1px solid #1890ff !important;
    margin-left: 8px;
`;

export const CancelButton = styled(Button)`
    background-color: #fff;
    border: 1px solid #d9d9d9;
    color: rgba(0,0,0,0.65);
    color: black !important;
`;

export const StyledModal = styled(Modal)`
    &{background-color: ${({ theme }) => theme.primary}}
    color: ${({ theme }) => theme.secondary};
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    background: white;
    width: 500px;
    border: 1px solid rgb(232, 232, 232);
`;
