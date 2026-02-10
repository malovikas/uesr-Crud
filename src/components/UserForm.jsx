import { userForm } from "../config/userForm";
import { useState ,useEffect} from "react";
import {TextField,Button,Box,Card,CardContent,Typography} from "@mui/material"


const UserForm=({onSubmit,initialData={}})=>{


    const createEmptForm=()=>{
        const data={};
        userForm.forEach(field=>{
            data[field.name]=initialData?.[field.name]||"";
        });
        return data;
     };

    const[formData,setFormData]=useState(createEmptForm());
    const[errors,setErrors]=useState({});

    // -------------------adding validations----------------//
    const validate=()=>{
        const newErrors={};
        if(!formData.firstName.trim()){
            newErrors.firstName="First name is requires"
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone must be 10 digits";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
    }

    useEffect(()=>{
            const updatedData={};
            userForm.forEach((field)=>{
                updatedData[field.name]=initialData?.[field.name]||"";
            });
            setFormData(updatedData);
              
    },[initialData])


    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!validate())
            return;
            onSubmit(formData);
            setFormData(createEmptForm());
            setErrors({});
    }

    
    return(
    <Card sx={{maxWidth:500,margin:"20px auto",padding:2}}>
        <CardContent>
            <Typography variant="h5" gutterBottom>
                 Add User
            </Typography>
        
             
        <Box component={"form"} onSubmit={handleSubmit}>
            {userForm.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={formData[field.name]}
              onChange={handleChange}
              error={Boolean(errors[field.name])}     
              helperText={errors[field.name] || ""}   
              fullWidth
              margin="normal"
            />
          ))}
        <Button type="submit" variant="contained" fullWidth sx={{mt:2}} >Save</Button>  
        </Box>
        </CardContent>
    </Card>
    
  );
};
export default UserForm;

