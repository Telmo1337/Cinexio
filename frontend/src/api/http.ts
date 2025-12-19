
const baseUrl = "http://localhost:5050/api/v1";


//this function will be used in all services files to make http requests
export async function request(endpoint: string, options: RequestInit = {}) {

    //retrieve token from local storage
    const token = localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4NDQ0MDhiLWUyOGUtNGUxYi1iZGI1LWQ2NTJkYWMyYTdjMiIsImVtYWlsIjoidGVsbW9AaXB2Yy5wdCIsInJvbGUiOiJBRE1JTiIsIm5pY2tOYW1lIjoiVFIyNSIsImlhdCI6MTc2NjE2NTI0NywiZXhwIjoxNzY2NzcwMDQ3fQ.MBlLRIU7_P3i4WyybwVFDa6gq8WdDEigEYEP5WPHQAc";

    //calls backend api
    //await _ means wait for the promise
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        ...options,
    });

    //error check
    if(!response.ok){
        throw new Error(`Error: ${response.status}`);
    }

    //return JSON
    return response.json();
}