import { useForm } from 'react-hook-form'
import styles from './login.module.css'



// Validar que password y password 2 son identicas

export function LoginUser() {

    const valueDefault = {
            email:'',
            password:'',
    }

    const {register, handleSubmit, formState: {errors}, reset } = useForm(valueDefault)
    
    const customSubmit= data => {
        console.log(data);

        reset();

        }
        
        return (
            <>
            <div className={styles.containerMain}>
                <div className={styles.containerLoginUser}>
                        
                    <form onSubmit={handleSubmit(customSubmit)} className={styles.formLoginUser} >
                            
                        <h2>Login de Usuario</h2>


                        <div className={styles.formControl}>
                            <label>email</label>
                            <input type="text"
                            { ...register("email", { required: 'Error !... Debe ingresar el email !...',
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                            message: 'Error !... email ingresado no es válido!...',
                                                            string:''
                                                        }
                                                    })}
                            />

                            {errors.email && <span className={styles.fail}>{errors.email.message}</span>}

                        </div>

                        <div className={styles.formControlPassword}>
                            <label>Password</label>
                            <input type="password" name="password"
                            { ...register("password", { required: 'Error!... Debe ingresar la password !...',
                                                            minLength: {
                                                                value: 8,
                                                                message: 'Mínimo 8 caracteres !...',
                                                                string:''
                                                            }
                                                    })}

                            />

                            {errors.password && <span className={styles.fail}>{errors.password.message}</span>}

                        </div>

                        <button type='submit'>Enviar</button>

                    </form>
                </div>
            </div>
        </>
            
            )
    }