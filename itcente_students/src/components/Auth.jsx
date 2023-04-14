import React from 'react'
import { useForm } from 'react-hook-form';
import style from './auth.module.scss'
import { useNavigate } from 'react-router-dom';

const login = 'itmarkaz';
const password = 'markazadmin';


export default function Auth() {
	

	


	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  function isCheckAdmin(data){
	
	if (data.firstName === 'itmarkaz' && data.password === 'markazadmin') {
    	navigate('/admin')
    	
	} else {
		navigate('/');
	}
  }



  return (
    <div className={style.auth}>
     
      <h1>Xush kelibsiz IT markaz Platformasiga</h1>
      <h2>IT Markaz O'quvchilari Ro'yxati</h2>
      <img src="https://sam-itcenter.uz/wp-content/uploads/2022/09/cropped-Logo-Shablon.png" alt="" />
      <form onSubmit={handleSubmit((data) => isCheckAdmin(data))}>
        <input
          {...register('firstName', { required: 'Login kiriting' })}
          placeholder="Username"
        />
        <div>
          {errors?.firstName && (
            <h4 style={{ color: 'black' }}>
              {errors?.firstName?.message || 'Error'}
            </h4>
          )}
        </div>
        <input
          type="password"
          {...register('password', { required: 'Parolni kiriting' })}
          placeholder="password"
        />
        <div>
          {errors?.password && (
            <h4 style={{ color: 'black' }}>
              {errors?.password?.message || 'Error'}
            </h4>
          )}
        </div>
        <input
          onClick={() => isCheckAdmin}
          type="submit"
          value="Platformaga Kirish"
        />
      </form>
    </div>
  );
}
