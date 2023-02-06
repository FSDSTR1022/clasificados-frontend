import { useForm } from 'react-hook-form'
import styles from "./registerUser.module.css"
import axios from 'axios'


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

        axios.post('http://localhost:8043/clasificados/user/register', {
            name: data.name,
            surname: data.lastname,
            email: data.email,
            password: data.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        reset();
    }
        
        return (
        <>
        <div className={styles.containerPP}>

            <div className={styles.containerMain}>
                <div className={styles.containerRegister}>
                        
                    <form onSubmit={handleSubmit(customSubmit)} className={styles.formRegister} >
                            
                        <h2>Registro de Usuario</h2>

                        <div className={styles.formControlX}>
                            <label>Nombre</label>
                            <input type="text"
                            {...register("name", {
                                required:'Error !... Debe ingresar el nombre !.', 
                                minLength: {
                                    value: 2,
                                    message: 'Mínimo 2 caracteres !...',
                                    string:''
                                }
                            })}
                            />

                            {errors.name && <span className={styles.fail}>{errors.name.message}</span>}
                        </div>

                        <div className={styles.formControlX}>
                            <label>Apellido</label>
                            <input type="text"
                            {...register("lastname", {
                                required:'Error !... Debe ingresar el Apellido !...', 
                                minLength: {
                                    value: 2,
                                    message: 'Mínimo 2 caracteres !...',
                                    string:''
                                }
                            })}
                            />

                            {errors.lastname && <span className={styles.fail}>{errors.lastname.message}</span>}
                        </div>

                        <div className={styles.formControlEmail}>
                            <label>email</label>
                            <input type="email"
                            { ...register("email", { 
                                required: 'Error !... Debe ingresar el email !...',
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
                            { ...register("password", {
                                required: 'Error!... Debe ingresar la password !...',
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
                            { ...register("password2", {
                                required: 'Error !... Ingrese confirmación de password !...',
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
        </div>
        </>
            
                )
        }