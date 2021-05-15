import React, { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';

interface RegisterState {
  username: string;
  password: string;
}

const Register: React.FC = () => {
  const [registerData, setRegisterData] = useState<RegisterState>({
    username: '',
    password: '',
  });

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper width='w-50'>
      <div className='card mt-5'>
        <div className='card-body'>
          <form>
            <InputField
              labelText='Username'
              id='username'
              type='text'
              name='username'
              formHandler={formHandler}
            />
            <InputField
              labelText='Password'
              id='password'
              type='password'
              name='password'
              formHandler={formHandler}
            />
            <Button
              buttonBackgroundColor='dark'
              buttonText='Submit'
              buttonWidth='w-100'
              styles='mt-4'
            />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
