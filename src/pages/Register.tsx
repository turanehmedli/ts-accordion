import { useForm } from "@tanstack/react-form";
import { useState } from "react";

const Register = () => {
  const [page, setPage] = useState(1);
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  // const firstFieldMeta = form.getFieldMeta("firstName");
  // const lastFieldMeta = form.getFieldMeta("lastName");
  // const errors = firstFieldMeta?.errors || lastFieldMeta?.errors;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[\p{L}\s'-]+$/u;

  const errorFirstName = (value: string) => {
    if (!value.trim()) return "FirstName is Required";
    if (!nameRegex.test(value))
      return "Only letters, spaces and hypens allowed";
  };

  const errorLastName = (value: string) => {
    if (!value.trim()) return "LastName is Required";
    if (!nameRegex.test(value))
      return "Only letters, spaces and hypens allowed";
  };

  const errorEmail = (value: string) => {
    if (!value.trim()) return "Email is Required";
    if (!emailRegex.test(value)) return "Invalid email format";
  };

  const errorPassword = (value: string) => {
    if (value.trim().length < 8)
      return "Password must be at least 8 characters";
  };

  return (
    <form
      className="border rounded-lg w-130 p-7 px-10 flex flex-col gap-5 shadow shadow-gray-200"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h2 className="font-semibold my-5 text-4xl text-center">Register</h2>
      {page === 1 && (
        <>
          <form.Field
            name="firstName"
            validators={{ onBlur: ({ value }) => errorFirstName(value) }}
          >
            {(field) => (
              <div>
                <input
                  className={`border w-full px-4 py-3 rounded-lg text-lg outline-blue-400 ${field.state.meta.errors?.[0] ? "border-red-400" : "border-zinc-400"}`}
                  placeholder="Enter you first name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
                  <p className="text-red-600">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="lastName"
            validators={{ onBlur: ({ value }) => errorLastName(value) }}
          >
            {(field) => (
              <div className="gap-1 flex flex-col">
                <input
                  className={`border w-full px-4 py-3 rounded-lg text-lg outline-blue-400 ${field.state.meta.errors?.[0] ? "border-red-400" : "border-zinc-400"}`}
                  placeholder="Enter you last name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
                  <p className="text-red-500">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          </form.Field>

          <button
            disabled={
              form.getFieldMeta('firstName')?.errors?.length ||
              form.getFieldMeta('lastName')?.errors?.length ? true:false
            }
            className="border py-3 rounded-lg my-5 bg-sky-600 text-white text-2xl font-semibold "
            onClick={() => {
              setPage(2);
            }}
          >
            Next
          </button>
        </>
      )}
      {page === 2 && (
        <>
          <form.Field
            name="email"
            validators={{ onBlur: ({ value }) => errorEmail(value) }}
          >
            {(field) => (
              <div>
                <input
                  className={`border w-full px-4 py-3 rounded-lg text-lg outline-blue-400 ${field.state.meta.errors?.[0] ? "border-red-400" : "border-zinc-400"}`}
                  placeholder="Enter you Email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
                  <p className="text-red-500">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="password"
            validators={{ onBlur: ({ value }) => errorPassword(value) }}
          >
            {(field) => (
              <div>
                <input
                  className={`border w-full px-4 py-3 rounded-lg text-lg outline-blue-400 ${field.state.meta.errors?.[0] ? "border-red-400" : "border-zinc-400"}`}
                  type="password"
                  placeholder="Enter you password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
                  <p className="text-red-500">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          </form.Field>

          <button
            className="border py-3 rounded-lg my-5 bg-sky-600 text-white text-2xl font-semibold "
            type="submit"
          >
            submit
          </button>
        </>
      )}
    </form>
  );
};

export default Register;
