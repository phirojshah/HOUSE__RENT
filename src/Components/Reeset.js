import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ResetPasswordForm = styled.section`
  background-color: #f9fafb;

  & .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    margin: 0 auto;
    max-width: 480px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  }

  & .logo {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 600;
    color: #374151;

    & img {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
  }

  & h2 {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    color: #374151;
  }

  & form {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & label {
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.5;
      color: #374151;
    }

    & input {
      background-color: #f3f4f6;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #374151;
      transition: border-color 0.2s ease-in-out;

      &:focus {
        outline: none;
        border-color: #6b7280;
      }

      &::placeholder {
        color: #9ca3af;
      }
    }

    & input[type="submit"] {
      background-color: #2563eb;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      padding: 12px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #1d4ed8;
      }
    }
  }
`;

const Reeset = () => {
  return (
    <ResetPasswordForm>
      <div className="form-container">
        <div className="logo">
          <img src="/images/logo.jpg" alt="logo" />
          House-Rent
        </div>
        <h2>Change Password</h2>
        <form>
          <div>
            {/* <label htmlFor="email">Your email: </label> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@gmail.com"
              required=""
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password"
              required=""
            />
          </div>
          <div>
            {/* <label htmlFor="confirm-password">Confirm Password</label> */}
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm-password"
              required=""
            />
          </div>
          <input type="submit" value="Reset Password" />
          <h2>
            <NavLink className="/Signup" to="/Login">
              Login
            </NavLink>
          </h2>
        </form>
      </div>
    </ResetPasswordForm>
  );
};

export default Reeset;
