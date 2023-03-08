import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import logoutImg from 'images/logout.svg';
import { selectUserEmail } from 'redux/selectors';
// import { selectIsLoggedIn} from 'redux/selectors';

// import { UniversalModal } from 'components/UniversalModal/UniversalModal';
import { logOut } from 'redux/auth/operation';

export const AuthNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserEmail);

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    // isLoggedIn && (
    <>
      <nav>
        <div>{userEmail[0].toUpperCase()}</div>
        <p>{userEmail}</p>
        <img src={logoutImg} alt="logout" onClick={handleModalOpen} />
        <span></span>
        <button type="button" onClick={handleModalOpen}>
          Exit
        </button>
      </nav>
      {modalOpen && (
        <p closeModal={handleModalClose} dispatch={handleClick}>
          Do you really want to leave?
        </p>
        // <UniversalModal closeModal={handleModalClose} dispatch={handleClick}>
        //   Do you really want to leave?
        // </UniversalModal>
      )}
    </>
  );
  // );
};
