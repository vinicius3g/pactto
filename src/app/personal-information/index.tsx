'use client'

import { useState } from "react";
import Menu from "@/components/Menu/Menu";
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  activities: string[];
  username: string;
  password: string;
  confirmPassword: string;
  other: string;
}

export const PersonalInformation = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  const handleCloseMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleReset = () => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      activities: [],
      username: "",
      password: "",
      confirmPassword: ""
    });
  }

  return (
    <>
      <div className="p-12 pb-0">
        <Menu close={menuOpen} handleClose={handleCloseMenu} />
      </div>
      <main className={`main ${menuOpen ? 'shifted' : ''} p-12`}>

        <form className='forms mt-20' onSubmit={handleSubmit(onSubmit)}>
          <div className="input_wrapper">
            <input
              className="general_input"
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              defaultValue="Vinicius"
            />
            {errors.firstName ? <p className="error">{errors.firstName.message}</p> : null}
          </div>

          <div className="input_wrapper">
            <input
              className="general_input"
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName ? <p className="error">{errors.lastName.message}</p> : null}
          </div>

          <div className="input_wrapper">
            <input
              className="general_input"
              id="email"
              {...register("email", { required: "Email is required" })}
              defaultValue="default.kastin@gmail.com"
            />
            {errors.email ? <p className="error">{errors.email.message}</p> : null}
          </div>

          <div className="input_wrapper">
            <select
              className="general_input"
              id="country"
              {...register("country", { required: "Country is required" })}
            >
              <option value="">Country</option>
              <option value="Brazil">Brazil</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>

            {errors.country ? <p className="error">{errors.country.message}</p> : null}
          </div>

          <p className="text-2xl text-white mt-14 mb-10">
            What is your main activity? Or activities
          </p>

          <div>
            <div className="checkbox_wrapper">
              <input
                id="design"
                type="checkbox"
                {...register("activities")}
                value="Design"
              />
              <label htmlFor="design">Design</label>
            </div>
            <div className="checkbox_wrapper">
              <input
                id="development"
                type="checkbox"
                {...register("activities")}
                value="Development"
              />
              <label htmlFor="development">Development</label>
            </div>
            <div className="checkbox_wrapper">
              <input
                id="sports"
                type="checkbox"
                {...register("activities")}
                value="Sports"
              />
              <label htmlFor="sports">Sports</label>
            </div>
            <div className="checkbox_wrapper">
              <input
                id="medical"
                type="checkbox"
                {...register("activities")}
                value="Medical"
              />
              <label htmlFor="medical">Medical</label>
            </div>
            <div className="checkbox_wrapper">
              <input
                id="inspections"
                type="checkbox"
                {...register("activities")}
                value="Inspections"
              />
              <label htmlFor="inspections">Inspections</label>
            </div>

            <div className="input_wrapper">
              <input
                className="general_input_other"
                id="other"
                {...register("other")}
              />
            </div>
          </div>
          <p className="text-2xl text-white mt-14 mb-10">
            User handle and password
          </p>
          <div className="input_wrapper">
            <input
              className="general_input"
              id="username"
              {...register("username", {
                required: "User handle is required",
                validate: value => value !== "default.kastin823" || "Invalid user name."
              })}
            />
            {errors.username ? <p className="error">{errors.username.message}</p> : null}
          </div>

          <div className="input_wrapper">
            <input
              className="general_input"
              id="password"
              placeholder="Password"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password ? <p className="error">{errors.password.message}</p> : null}
          </div>

          <div className="input_wrapper">
            <input
              className="general_input"
              id="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: value => value === watch('password') || "Passwords do not match"
              })}
            />
            {errors.confirmPassword ? <p className="error">{errors.confirmPassword.message}</p> : null}
          </div>

          <div className="button_wrapper flex justify-between items-center mt-14">
            <button className="reset" onClick={handleReset} type="button">
              <span>reset changes</span>
            </button>
            <button className="save" type="submit">
              <span>save Changes</span>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
