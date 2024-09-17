
import AboutCart from "./AboutCart/AboutCart";
import Profile from "./Profile/Profile";
import AboutWorkSystem from "./AboutWorkSystem/AboutWorkSystem";
import OurStory from "./OurStory/OurStory";


const About = () => {
    return (
        <div className="flex flex-col gap-16">
            <OurStory/>
            <AboutCart/>
            <Profile/>
            <AboutWorkSystem/>
        </div>
    );
};

export default About;