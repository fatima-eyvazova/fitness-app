import { motion } from "framer-motion";
import { SelectedPage, ClassType } from '@/shared/types'
import HeadingText from "@/shared/HeadingText";
import Class from "./class";
import photo1 from '@/assets/photo1.jpeg'
import photo2 from '@/assets/photo2.jpeg'
import photo3 from '@/assets/photo3.jpeg'
import photo4 from '@/assets/photo4.jpeg'
import photo5 from '@/assets/photo5.webp'
import photo6 from '@/assets/photo6.avif'


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laboriosam a repellat. Voluptatem mollitia amet, voluptate placeat sint repellat nihil?",
        image: photo1,
    },
    {
        name: "Yoga Classes",
        image: photo2,
        description: "Rerum laboriosam a repellat. Voluptatem mollitia amet, voluptate placeat sint repellat nihil?",

    },
    {
        name: "Abs Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: photo3,
    },
    {
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: photo4,
    },
    {
        name: "Fitness Classes",
        image: photo5,
    },
    {
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: photo6,
    },
];
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {

    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HeadingText>OUR CLASSES</HeadingText>
                        <p className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor.
                            Mauris velit Euismod elementum arcu neque facilisi.
                            Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses