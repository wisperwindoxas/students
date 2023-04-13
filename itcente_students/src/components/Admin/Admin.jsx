import React from 'react'
import style from './admin.module.scss'
import axios from 'axios'

export default function Admin() {

    const [students, setStudents] = React.useState([])

    
    React.useEffect(() => {
        async function getStudents(){
            const data = await axios.get(`http://localhost:3004/students`)
            setStudents(data.data)
           }
           getStudents()
    },[])


    console.log(students);

  return (
    <div className={style.admin}>
                <h2 className={style.title}>Qumqo'rg'onda O'quv Markazida o'qiyotgan o'quvchilar Ro'yxati</h2>
            <div className={style.table}>
                    <table >
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Familyasi</th>
                                <th>Ismi</th>
                                <th>Yoshi</th>
                                <th>Mahalasi</th>
                                <th>Ijtimoyi xolati</th>
                                <th>Jinsi</th>
                                <th>Kurs nomi</th>
                                <th>Kurs davomiyligi (oy)</th>
                                <th>Kurs narxi (oy)</th>
                            </tr>
                        </thead>
                        <tbody>

                            {students.map((item, index) => {
                                return (
                                        <tr key={item._id} >
                                            <td>{index+1}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.region}</td>
                                            <td>{item.status}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.course}</td>
                                            <td>{item.course === "Web Dasturlash" ? "6-8 oy": item.course === "Kompyuter Sovatxonligi 1.0" ? "1-2 oy" :""}</td>
                                            <td>{
                                                
                                                item.course === "Web Dasturlash" ? "300 ming so'm":
                                                item.course === "Kompyuter Sovatxonligi 1.0" ? "200 ming so'm":
                                                item.course === "Kompyuter Sovatxonligi 2.0" ? "400 ming so'm":
                                                item.course === "Kompyuter Sovatxonligi Premium" ? "400 ming so'm":item.course === "Ingliz tili" ? "180 ming so'm":""
                                                
                                                }</td>

                                        </tr>
                                )
                            })}
                            
                          
                        </tbody>
                    </table>
            </div>
    </div>
  )
}
