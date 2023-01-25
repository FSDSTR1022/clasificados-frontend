import { useForm } from "react-hook-form"

export function Login() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { register, handleSubmit } = useForm();
    const customSubmit = data => console.log(data);

    return (
    <>
        <form onSubmit={handleSubmit(customSubmit)} className='formLogin'>

            <h2>Login Usuario</h2>

            <div className="userLogin">
                <label>email</label>
                <input type='mail' {...register('mail')} />
            </div>
            <div className="userLogin">
                <label>Password</label>
                <input type='password' {...register('password')} />
            </div>

        </form>
    </>
)
}
    