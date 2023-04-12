import React from 'react'
import { useForm } from 'react-hook-form';
import style from './register.module.scss'
import axios from 'axios'
import {Link} from 'react-router-dom'

let imgWall = ['img_one.webp', 'img_two.webp', 'img_three.webp']

let randomWallImg = Math.floor(Math.random() * imgWall.length)

let thank = [
    "https://www.meme-arsenal.com/memes/db9b3ffc6f841bc13b1fe3c96c8b85d4.jpg",
    "https://risovach.ru/upload/2014/12/mem/davaj-do-svidaniya_67879949_orig_.jpg",
    "https://i.ytimg.com/vi/Gc-086HKsg8/maxresdefault.jpg",
    "https://memchik.ru//images/memes/5bff7061b1c7e358965f21f8.jpg",
    "https://www.fincabank.kg/wp-content/uploads/sites/6/2021/03/raxmat.jpg",
    "https://latifa.uz/stickers/stickers/sticker_uz_hi.png"
]


let randomThankImg = Math.floor(Math.random() * thank.length)

export default function Register() {




    const { register, handleSubmit, reset, formState: { isSubmitSuccessful, errors} } = useForm();


    const onSubmit = data => PostStudents(data)

    React.useEffect(() => {
        reset({
            first_name: "",
            last_name:"",
            age:"",
            phone:"",
            region:"",
            status:"",
            gender:"",
            course:""
        })
      }, [isSubmitSuccessful])
      


 
   
    async function PostStudents(data){
            await axios.post(`http://localhost:3004/register`, data)
     }

    return (
      <div className={style.register}>
        <Link to="/auth">
          <button className={style.admin}>Administrator</button>
        </Link>
        <div className={style.right_wall}>
          <img src={`./img/${imgWall[randomWallImg]}`} alt="" />
        </div>

        <div className={style.left_wall}>
          <h1>
            Qumqo'rg'on tumani O'quv markazi <br /> O'quvchilarni Ro'yxatga
            olish Platformasi
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
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
              placeholder="Telefon raqamingiz +998 (xx) xxx-xx-xx"
              {...register('mobile', {
                required: 'Telefon raqamingizni kiriting',
                minLength: 9,
                maxLength: 13,
              })}
            />
            <div>
              {errors?.mobile && (
                <h4 style={{ color: 'black' }}>
                  {errors?.mobile?.message || 'Error'}
                </h4>
              )}
            </div>
            <input
              type="text"
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
            <select
              {...register('gender', { required: 'Jinsingizni tanlang' })}
            >
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
            <p>Offert shartnomasiga rozimisiz </p>
            <div className={style.offert}>
              <input
                {...register('developer', { required: true })}
                id="yes"
                name="offert"
                type="radio"
                value="Yes"
              />
              <input
                {...register('developer', { required: true })}
                id="no"
                name="offert"
                type="radio"
                value="No"
              />
            </div>

            <input type="submit" value={'Yuborish'} />
          </form>
        </div>
        {isSubmitSuccessful && (
          <div className={style.success}>
            return <img src={thank[randomThankImg]} />
          </div>
        )}
      </div>
    );
}
