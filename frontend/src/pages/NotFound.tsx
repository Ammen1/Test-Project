/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const notFoundStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #343a40;
`;

const headingStyle = css`
  font-size: 4rem;
  font-weight: bold;
`;

const subHeadingStyle = css`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const buttonStyle = css`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div css={notFoundStyle}>
      <h1 css={headingStyle}>404</h1>
      <p css={subHeadingStyle}>Page Not Found</p>
      <p>The page you are looking for might have been moved or deleted.</p>
      <button css={buttonStyle} onClick={handleBackToDashboard}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default NotFound;
