import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  //@ts-ignore
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const login = async () => {
    console.log("Login function executed", formData);

    // Check for admin credentials
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
      window.location.replace('/dashboard');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const signup = async () => {
    console.log("Signup function executed", formData);
  
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        setState("Login");
        alert("Signup successful! Please login.");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };
  
  return (
    <section className="max_padd_container flexCenter flex-col pt-32 pb-20">
      <div className="max-w-[555px] h-[570px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3 flexCenter">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Your Email"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Your Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }} className="btn_dark_rounded my-4 w-full !rounded-md">
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account{" "}
            <span onClick={() => setState("Login")} className="text-[#ff813f] underline cursor-pointer">Login</span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Create an account.{" "}
            <span onClick={() => setState("Sign Up")} className="text-[#ff813f] underline cursor-pointer">Click here</span>
          </p>
        )}
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
