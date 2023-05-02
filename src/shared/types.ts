import SignUp from "@/components/SignUp/SignUp";

export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourClasses',
    ContactUs = 'contactUs',
    SignUp = 'contactUs'
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}
export interface ClassType {
    name: string;
    description?: string;
    image: string;
}