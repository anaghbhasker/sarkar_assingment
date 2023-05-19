import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

function ListUserPage() {

  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)

  const styles = {
    table: {
      borderCollapse: 'collapse',
      width: '100%'
    },
    th: {
      background: '#f2f2f2',
      fontWeight: 'bold',
      textAlign: 'left',
      padding: '8px'
    },
    td: {
      border: '1px solid #ddd',
      textAlign: 'left',
      padding: '8px'
    }
  };
  

  

  useEffect(()=>{
    async function invoke(){
      setLoading(true)
      const result= await axios.get('http://localhost:4000/userList')
      setLoading(false)
      setUsers(result.data.users);
    }invoke()
  },[])


  return (
    <div>

    {loading?<LoadingPage/>:<table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}></th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Email</th>
          <th style={styles.th}>Phone</th>
          <th style={styles.th}>DOB</th>
          <th style={styles.th}>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td style={styles.td}><img src={user.profileImg} style={{height:"50px", width:"50px"}} alt="Paris"/></td>
            <td style={styles.td}>{user.name}</td>
            <td style={styles.td}>{user.email}</td>
            <td style={styles.td}>{user.phoneno}</td>
            <td style={styles.td}>{user.dob}</td>
            <td style={styles.td}>{user.isActive?<>True</>:<>False</>}</td>
          </tr>
        ))}
      </tbody>
    </table>}


      
    </div>
  );
}

export default ListUserPage;
