const API_URL="https://6989d8e6c04d974bc6a09d81.mockapi.io/getUsers"
export const createUser=async(user)=>{
    const response=await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    });
    return response.json();
};
export const getUser=async()=>{
    const response=await fetch(API_URL);
    return response.json();
};
export const delUser=async(id)=>{
    await fetch(`${API_URL}/${id}`,{
        method:"DELETE"
    });
};
export const updUSer=async(id,user)=>{
    const response=await fetch(`${API_URL}/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    });
    return response.json()
};
