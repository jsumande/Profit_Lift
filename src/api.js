export async function SingIn(email, password) {
    try {
      const requestBody = {
        email: email,
        password: password
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           'Access-Control-Allow-Origin':'https://profit-lift.vercel.app'
        },
        body: JSON.stringify(requestBody),
      };
  
      const response = await fetch('https://exam-jay.onrender.com/api/auth', requestOptions);
      const data = await response.json();
      
      return data; 
    } catch (error) {
      throw error;
    }
  }

  export async function Invite(email) {
    try {
      const requestBody = {
        email: email,
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };
      const response = await fetch('https://exam-jay.onrender.com/api/auth/:council_id/invite', requestOptions);
      const data = await response.json();
      return data; 
    } catch (error) {
      throw error;
    }
  }


  export async function Register(email, password, passwordConfirm, council_id) {
    try {
      const requestBody = {
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        council_id, council_id
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };
  
      const response = await fetch('https://exam-jay.onrender.com/api/auth/invite/register', requestOptions);
      const data = await response.json();
      
      return data;
    } catch (error) {
     
      throw error; 
    }
  }

  export async function TopUp(amount) {
    try {
      const requestBody = {
        amount: amount,
      
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };
  
      const response = await fetch('https://exam-jay.onrender.com/api/topups/2', requestOptions);
      const data = await response.json();
      
      return data;
    } catch (error) {
     
      throw error; 
    }
  }

  export async function GetAvailableBalance() {
    try {
  
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await fetch('https://exam-jay.onrender.com/api/topups/2', requestOptions);
      const data = await response.json();
     
      
      return data;
    } catch (error) {
     
      throw error; 
    }
  }

  export default {
    SingIn,
    Invite,
    Register,
    TopUp,
    GetAvailableBalance
  };