import { motion } from "framer-motion";
import fitnessPhoto from '@/assets/signinPhoto.png'
import HeadingText from '@/shared/HeadingText';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


type UserSubmitForm = {
    email: string;
    password: string;
};

const SignIn = () => {
    const validationSchema = yup.object().shape({
        email: yup.string()
            .required('Email is required')
            .matches(
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                "Email is invalid"
            ),

        password: yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
    })

    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors }
    } = useForm<UserSubmitForm>({
        mode: "onChange",
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
    };

    const inputStyle = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`

    const navigate = useNavigate()
    function handleClick() {
        navigate('/')
    }


    return (
        <section id='sign-in' className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}>
                <HeadingText><span className='text-primary-500'>LOG INTO YOUR ACCOUNT</span>
                    AND GET YOUR BODY IN SHAPE</HeadingText>
                <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut saepe mollitia animi unde similique provident voluptate temporibus,
                    magni autem, nostrum eos quo dolor accusamus illo ab, veritatis eius necessitatibus modi.</p>
            </motion.div>
            <div className='flex justify-between mt-10 items-center'>
                {/* RIGHT */}
                <motion.div className='w-3/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }} >
                    <form className='flex flex-col gap-3'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input placeholder="EMAIL"
                            // className={inputStyle}
                            type="email"
                            {...register('email')}
                            className={`${inputStyle}
                             form-control ${errors.email ? 'is-invalid' : ''}`}

                        />
                        <div className="invalid-feedback text-primary-500">{errors.email?.message}</div>

                        <input placeholder="PASSWORD"
                            type="password"
                            {...register('password')}
                            className={`${inputStyle} form-control ${errors.password ? 'is-invalid' : ''}`}
                        // className={inputStyle}

                        />
                        <div className="invalid-feedback text-primary-500">{errors.password?.message}</div>



                        <button type='submit' className={`mt-5 rounded-lg py-3 transition duration-500 hover:text-white w-[200px] ${!isValid ? "bg-secondary-500 opacity-60" : "bg-secondary-500"}`}
                            color="primary"
                            disabled={!isDirty || !isValid}
                            onClick={handleClick}
                        >SUBMIT</button>
                    </form>
                </motion.div>
                {/* LEFT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    <img src={fitnessPhoto} alt="sport" className='w-[500px] h-[400px]' />
                </motion.div>
            </div>
        </section>
    )
}

export default SignIn;