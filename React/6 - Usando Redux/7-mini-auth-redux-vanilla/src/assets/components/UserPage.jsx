/* eslint-disable semi */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions'

function UserPage() {
  const context = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <p>
        Olá,
        {' '}
        {context}
        !
      </p>
      <button type="button" onClick={() => dispatch(logout)}>Sair</button>
    </div>
  )
}

export default UserPage
