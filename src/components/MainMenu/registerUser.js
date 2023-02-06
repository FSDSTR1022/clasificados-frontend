import { useForm } from 'react-hook-form'
import styles from "./registerUser.module.css"



// Validar que password y password 2 son identicas

export function RegisterUser() {

    const valueDefault = {
            name:'',
            lastName:'',
            email:'',
            password:'',
            password2:''
    }

    const {register, handleSubmit, formState: {errors}, reset } = useForm(valueDefault)
    
    const customSubmit= data => {
        console.log(data);

        reset();

        }
        
        return (
            <>
            <div className={styles.containerMain}>
                <div className={styles.containerRegister}>
                        
                    <form onSubmit={handleSubmit(customSubmit)} className={styles.formRegister} >
                            
                        <h2>Registro de Usuario</h2>

                        <div className={styles.formControl}>
                            <label>Nombre</label>
                            <input type="text"
                            {...register("name", { required:'Error !... Debe ingresar el nombre !.', 
                                                    minLength: {
                                                        value: 2,
                                                        message: 'Mínimo 2 caracteres !...',
                                                        string:''
                                                    }
                                                })}
                            />

                            {errors.name && <span className={styles.fail}>{errors.name.message}</span>}
                            
                        </div>

                        <div className={styles.formControl}>
                            <label>Apellido</label>
                            <input type="text"
                            {...register("lastname", { required:'Error !... Debe ingresar el Apellido !...', 
                                                        minLength: {
                                                            value: 2,
                                                            message: 'Mínimo 2 caracteres !...',
                                                            string:''
                                                        }
                                                    })}
                            />

                            {errors.lastname && <span className={styles.fail}>{errors.lastname.message}</span>}

                        </div>

                        <div className={styles.formControl}>
                            <label>email</label>
                            <input type="text"
                            { ...register("email", { required: 'Error !... Debe ingresar el email !...',
                                                        pattern: {
                                                            // value: /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
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

                        <div className={styles.formControlPassword}>
                            <label>Confirma Password</label>
                            <input type="password" name="password2"
                            { ...register("password2", { required: 'Error !... Ingrese confirmación de password !...',
                                                            minLength: {
                                                                value: 8,
                                                                message: 'Mínimo 8 caracteres !...',
                                                                string: ''
                                                            }
                                                    })} 
                            />

                            {errors.password2 && <span className={styles.fail}>{errors.password2.message}</span>}
            
                        </div>

                        <button type='submit'>Registrar</button>

                    </form>
                </div>
            </div>
        </>
            
            )
    }