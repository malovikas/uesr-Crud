import UserForm from "./components/UserForm";
import { useEffect,useState } from "react";
import {createUser,getUser,delUser, updUSer} from "./service/api";
import { Container,Typography,List,ListItem,ListItemText,Button } from "@mui/material";


function App() {

  const[users,setUsers]=useState([])
  const[selectedUsr,setSelectedUsr]=useState(null)

  const fetchUsers=async()=>{
    const data=await getUser();
    setUsers(data);
  };

  useEffect(()=>{
    fetchUsers();
  },[]);

  const handleCreateUser=async(userData)=>{
    await createUser(userData);
    fetchUsers();
  };

  const handleEditUser=(user)=>{
    console.log("editing",user)
    setSelectedUsr(user);
  }

  const handleUpdateUser=async(updaData)=>{
    await updUSer(selectedUsr.id,updaData);
    setSelectedUsr(null);
    fetchUsers();
  };

  const handleDeleteUser=async(id)=>{
    await delUser(id);
    fetchUsers();
  };

  // const handleSubmit=(data)=>{
  //   console.log("first",data)
  // } 
  return (

    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        User Management App
      </Typography>
      
      <UserForm onSubmit={selectedUsr? handleUpdateUser :handleCreateUser}
      initialData={selectedUsr}/>
      
      <Typography variant="h6" gutterBottom>
          User List
      </Typography>
      
      <List>
        {users.map(user=>(
          <ListItem key={user.id}
          secondaryAction={
            <>
              <Button        
                onClick={()=>handleEditUser(user)}
                variant="outlined"
                size="small"
                sx={{marginRight:1}}
              >
              Edit
            </Button>
           

          
             <Button onClick={()=>handleDeleteUser(user.id)}
              variant="contained"
                size="error"
                >
                Delete
             </Button>
            </>
          }
          >
            <ListItemText
            primary={`${user.firstName} ${user.lastName}`}
            secondary={`${user.email} - ${user.phone}`}
            />
            </ListItem>     
        ))} 
      </List>
  
 
    </Container>
  );
     
}

export default App;
