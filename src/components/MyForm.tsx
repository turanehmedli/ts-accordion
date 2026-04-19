import { useForm } from "@tanstack/react-form";

const MyForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
      lastName: "",
      password: "",
      age: undefined,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[\p{L}\s'-]+$/u;

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is Required";
    if (!emailRegex.test(value)) return "Invalid Email format";
  };

  const validateName = (value: string) => {
    if (!value.trim()) return "Name is Required";
    if (!nameRegex.test(value))
      return "Only letters, spaces and hypens allowed";
  };

  const validateLastName = (value: string) => {
    if (!value.trim()) return "LastName is Required";
    if (!nameRegex.test(value))
      return "Only letters, spaces and hypens allowed";
  };

  const validatePassword = (value: string) => {
    if (value.trim().length < 8)
      return "Password must be at least 8 characters";
  };

  return (
    <form
        className="border rounded-lg flex flex-col p-5 gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    > 
      <form.Field
        name="email"
        validators={{
          onBlur: ({ value }) => validateEmail(value),
        }}
      >
        {(field) => (
          <div className="flex flex-col gap-0.5">
            <input
                className={`border ${field.state.meta.errors?.[0]?'border-red-400 text-red-600 placeholder:text-red-600':"border-zinc-300"} py-2 px-4 rounded-lg `}
              placeholder="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            {
                field.state.meta.isTouched && 
                field.state.meta.errors?.[0] &&( // ?. kodu qirir error vermir
                    <p className="text-red-400 text-sm ">{field.state.meta.errors[0]}</p>
                )
            }
          </div>
        )}
      </form.Field>

       <form.Field
        name="name"
        validators={{
          onBlur: ({ value }) => validateName(value),
        }}
      >
        {(field) => (
          <div className="flex flex-col gap-0.5">
            <input
              className={`border ${field.state.meta.errors?.[0]?'border-red-400':"border-zinc-300"} py-2 px-4 rounded-lg `}
              placeholder="Name"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            {
                field.state.meta.isTouched && 
                field.state.meta.errors?.[0] &&( // ?. kodu qirir error vermir
                    <p className="text-red-400 text-sm ">{field.state.meta.errors[0]}</p>
                )
            }
          </div>
        )}
      </form.Field>

      <form.Field
        name="lastName"
        validators={{
          onBlur: ({ value }) => validateLastName(value),
        }}
      >
        {(field) => (
          <div className="flex flex-col gap-0.5">
            <input
              className={`border ${field.state.meta.errors?.[0]?'border-red-400':"border-zinc-300"} py-2 px-4 rounded-lg `}
              placeholder="LastName"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            {
                field.state.meta.isTouched && 
                field.state.meta.errors?.[0] &&( // ?. kodu qirir error vermir
                    <p className="text-red-400 text-sm ">{field.state.meta.errors[0]}</p>
                )
            }
          </div>
        )}
      </form.Field>

      <form.Field
        name="password"
        validators={{
          onBlur: ({ value }) => validatePassword(value),
        }}
      >
        {(field) => (
          <div className="flex flex-col gap-0.5">
            <input
            type="password"
              className={`border ${field.state.meta.errors?.[0]?'border-red-400':"border-zinc-300"} py-2 px-4 rounded-lg `}
              placeholder="password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            {
                field.state.meta.isTouched && 
                field.state.meta.errors?.[0] &&( // ?. kodu qirir error vermir
                    <p className="text-red-400 text-sm ">{field.state.meta.errors[0]}</p>
                )
            }
          </div>
        )}
      </form.Field>

      <button className="bg-blue-400 text-white py-2 rounded-lg" type="submit">ENTER</button>
    </form>
  );
};

export default MyForm;
