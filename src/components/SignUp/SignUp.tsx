import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import gymGirl from "@/assets/gymGirlll.jpeg";
import HeadingText from "@/shared/HeadingText";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
type Props = {
    setSelectedPage?: (value: SelectedPage) => void,
    password?: string,
    email?: string,
    name?: string

};

const ContactUs = ({ setSelectedPage }: Props) => {
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
    const inputStyle = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

    const {
        register,
        handleSubmit,
        trigger,
        formState: { isDirty, isValid, errors }
    } = useForm<Props>({
        mode: "onChange",
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
            //onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HeadingText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HeadingText>
                    <p className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                            method="POST"
                        >
                            <input
                                className={inputStyle}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" &&
                                        "Max length is 100 char."}
                                </p>
                            )}

                            <input
                                className={`${inputStyle} form-control ${errors.password ? 'is-invalid' : ''}`}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email")}
                            />
                            <div className="invalid-feedback text-primary-500">{errors.email?.message}</div>



                            <input placeholder="PASSWORD"
                                type="password"
                                {...register('password')}
                                className={`${inputStyle} form-control ${errors.password ? 'is-invalid' : ''}`}
                            // className={inputStyle}

                            />
                            <div className="invalid-feedback text-primary-500">{errors.password?.message}</div>

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <img
                                className="w-full"
                                alt="contact-us-page-graphic"
                                src={gymGirl}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;