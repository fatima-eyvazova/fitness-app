import HeadingText from '@/shared/HeadingText'
import Usefuls from './Usefuls'
import gymGrapic from '@/assets/gymgrapic.jpeg'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage, BenefitType } from '@/shared/types'
import { motion } from 'framer-motion'
import { HiHomeModern, HiUserGroup, HiAcademicCap } from 'react-icons/hi2'
const usefuls: Array<BenefitType> = [
    {
        icon: <HiHomeModern className="h-6 w-6" />,
        title: "The Most Successful Results",
        description:
            "Nor is coaching a hobby. Let the pain fly for the leaven in the bed of the children. Any body and.",
    },
    {
        icon: <HiUserGroup className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "In football, it is necessary to laugh at the time, because someone always triggers it. Nor is it easy to pursue and poison. It is necessary and ugly.",
    },
    {
        icon: <HiAcademicCap className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "I'm going to have some work tomorrow. If you read the book you need to know. Let the lake be my children. They will give birth to homework",
    },
]
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id='benefits'
            className='mx-auto min h-full w-5/6 py-20'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* header */}
                <div className='md:my-5 md:w-3/5'>
                    <HeadingText>Choose the best for you</HeadingText>
                    <p className='my-5 text-sm'>
                        Our address is the best place to get good results. Get the body shape you want in a short time.
                        The way to achieve health and ideal body shape is through our address.
                        Step towards success with us on this path.</p>
                </div>
                {/* benefits */}
                <div className='mt-5 items-center justify-between gap-8 md:flex'>
                    {usefuls.map((item) => (<Usefuls
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        setSelectedPage={setSelectedPage}
                    />))}
                </div>
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={gymGrapic}
                />
            </div>
            {/* description */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <HeadingText>
                                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                <span className="text-primary-500">FIT</span>
                            </HeadingText>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="my-5">
                    Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                    egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                    fames vitae vitae quis. Quis amet vulputate tincidunt at in
                    nulla nec. Consequat sed facilisis dui sit egestas ultrices
                    tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                    Felis orci diam odio.
                </p>
                <p className="mb-5">
                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                    tellus quam porttitor. Mauris velit euismod elementum arcu neque
                    facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                    enim mattis odio in risus nunc.
                </p>
                {/* BUTTON */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </motion.div >

        </section >
    )
}

export default Benefits