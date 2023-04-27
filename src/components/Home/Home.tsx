import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import fitnessGirl from '@/assets/fitnessGirl.jpg'
import TextImage from '@/assets/fitnessText.webp'
import fiji from '@/assets/fijii.webp'
import toblerone from '@/assets/tobleronee.webp'
import vitaminTea from '@/assets/vitamin.webp'
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section className='gap-16 py-10 md:h-full md:pb-0 w-full'>
            <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                {/* image and main header */}
                <div>
                    {/* main header */}
                    <div className='z-10 mt-32 md:basis-3/5'>
                        {/* headings */}
                        <motion.div className='md:-mt-20 pt-8 relative'
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div>
                                <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                                    <img src={TextImage} alt="home-text" />
                                </div>
                            </div >
                            <p className='mt-8 text-sm'>
                                Fitness Classes. Get your dream body shape now. Join us without wasting time.The one address of health and beauty.You deserve the best!</p>
                        </motion.div>
                        {/* actions */}
                        <motion.div className='mt-8 flex items-center gap-8'
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                                href={`#${SelectedPage.ContactUs}`}
                            >
                                <p>Learn More</p>
                            </AnchorLink>
                        </motion.div>

                    </div>
                </div>
                {/* image */}
                <div className='flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end pt-5'>
                    <img alt='fitness girl' src={fitnessGirl} />
                </div>
            </motion.div>
            {/* sponsors */}
            {
                isAboveMediumScreens && (
                    <div className='h-[150px] w-full bg-primary-100 py-10'>
                        <div className='mx-auto w-5/6'>
                            <div className='flex justify-around items-center'>
                                <img alt='fiji' src={fiji} className='w-[40px] h-[75px]' />
                                <img alt='toblerone' src={toblerone} className='w-[150px]' />
                                <img alt='vitaminTea' src={vitaminTea} className='w-[90px]' />
                            </div>
                        </div>
                    </div>

                )
            }

        </section >

    )
}

export default Home