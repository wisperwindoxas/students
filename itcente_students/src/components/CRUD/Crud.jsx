import React from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import style from './crud.module.scss'
import axios from 'axios';



async function getStudentDetails(){
    const { data } = await axios.get(`http://localhost:3004/students/${localStorage.getItem('id')}`);
    return data
}


export default function Crud({ getId, setIsEdit }) {
  const [firstName, setFirstName] = React.useState('');

  const {data, isLoading, isError} = useQuery('studentsOne',getStudentDetails)


  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  if(isLoading){
    return "<h1>loading...</h1>"
  }
  if(isError){
    return "<h1>Error</h1>"
  }

  console.log(data);
 

  return (
    <div className={style.wrapper}>
      <div className={style.crud}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            value={data.first_name}
            onInput={(e) => setFirstName()}
            placeholder="Ismingiz"
            {...register('first_name', {
              required: 'Ismingizni kiriting',
              minLength: {
                value: 5,
                message: "Eng kamida 5 ta harf bo'lishi shart",
              },
            })}
          />
          <div>
            {errors?.first_name && (
              <h4 style={{ color: 'black' }}>
                {errors?.first_name?.message || 'Error'}
              </h4>
            )}
          </div>
          <input
            type="text"
            value={data.last_name}
            placeholder="Familyangiz"
            {...register('last_name', {
              required: 'Familyangizni kiriting',
              maxLength: 100,
            })}
          />
          <div>
            {errors?.last_name && (
              <h4 style={{ color: 'black' }}>
                {errors?.last_name?.message || 'Error'}
              </h4>
            )}
          </div>
          <input
            type="number"
            value={data.age}
            placeholder="Yoshingiz nechida"
            {...register('age', { required: 'Yoshingizni kiriting' })}
          />
          <div>
            {errors?.age && (
              <h4 style={{ color: 'black' }}>
                {errors?.age?.message || 'Error'}
              </h4>
            )}
          </div>
          <input
            type="tel"
            value={data.phone}
            placeholder="Telefon raqamingiz +998 (xx) xxx-xx-xx"
            {...register('phone', {
              required: 'Telefon raqamingizni kiriting',
              minLength: 9,
              maxLength: 13,
            })}
          />
          <div>
            {errors?.phone && (
              <h4 style={{ color: 'black' }}>
                {errors?.phone?.message || 'Error'}
              </h4>
            )}
          </div>
          <input
            type="text"
            value={data.region}
            placeholder="Mahalangiz"
            {...register('region', {
              required: 'Mahalangiz nomini kiriting',
              minLength: 6,
              maxLength: 30,
            })}
          />
          <div>
            {errors?.region && (
              <h4 style={{ color: 'black' }}>
                {errors?.region?.message || 'Error'}
              </h4>
            )}
          </div>
          <label>Jinsingiz tanlang</label>
          <select {...register('gender', { required: 'Jinsingizni tanlang' })}>
            <option value="Erkak">Erkak</option>
            <option value="Ayol">Ayol</option>
          </select>
          <div>
            {errors?.gender && (
              <h4 style={{ color: 'black' }}>
                {errors?.gender?.message || 'Error'}
              </h4>
            )}
          </div>

          <label>Ishtimoyi statuyingizni tanlang</label>
          <select
            {...register('status', {
              required: 'Ijtimoyi xolatingizni tanlang',
            })}
          >
            <option value="Davlat xodimi">Davlat xodimi</option>
            <option value="IT Medical">IT Medical</option>
            <option value="Ishsiz">Ishsiz</option>
            <option value="Maktab o'quvchisi">Maktab o'quvchisi</option>
            <option value="Yoshlar daftari">Yoshlar daftari</option>
          </select>
          <div>
            {errors?.status && (
              <h4 style={{ color: 'black' }}>
                {errors?.status?.message || 'Error'}
              </h4>
            )}
          </div>
          <label> O'qimoqchi bo'lgan Kursingizni tanlang</label>
          <select
            {...register('course', {
              required: "O'qiyotgan kursingizni tanlang",
            })}
          >
            <option value="Web Dasturlash">Web Dasturlash</option>
            <option value="Kompyuter Sovatxonligi 1.0">
              Kompyuter Sovatxonligi 1.0
            </option>
            <option value="Kompyuter Sovatxonligi 2.0">
              Kompyuter Sovatxonligi 2.0
            </option>
            <option value="Kompyuter Sovatxonligi Premium">
              Kompyuter Sovatxonligi Premium
            </option>
          </select>
          <div>
            {errors?.course && (
              <h4 style={{ color: 'black' }}>
                {errors?.course?.message || 'Error'}
              </h4>
            )}
          </div>

          <div className={style.btns}>
            <input type="submit" value={"O'zgartirish"} />
            <button
              onClick={() => setIsEdit(false)}
              type="button"
              className={style.close}
            >
              Yopish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
