import React from 'react'
import style from './admin.module.scss'

export default function Admin() {

    const [students, setStudents] = React.useState([])

    
    React.useEffect(() => {
        async function getStudents(){
            const data = await axios.get(`http://localhost:3004/students`)
            setStudents(data.data)
           }
           getStudents()
    },[])

  return (
    <div className={style.admin}>
                <h2 className={style.title}>Qumqo'rg'onda o'qiyotgan o'quvchilar Ro'yxati</h2>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>1</td>
                                <td>Soatov</td>
                                <td>Xurshid</td>
                                <td>28</td>
                                <td>Neftchilar</td>
                                <td>Ishchi</td>
                                <td>Erkak</td>
                                <td>Web dasturlash</td>
                                <td>6-8</td>

                            </tr>
                          
                        </tbody>
                    </table>
            </div>
    </div>
  )
}
