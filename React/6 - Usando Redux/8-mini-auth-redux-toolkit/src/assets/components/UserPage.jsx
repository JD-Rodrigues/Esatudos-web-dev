/* eslint-disable semi */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slice'

function UserPage() {
  const context = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <div>
      <p>
        Olá,
        {' '}
        {context}
        !
      </p>
      <button type="button" onClick={() => dispatch(logout(false))}>Sair</button>
    </div>
  )
}

export default UserPage
