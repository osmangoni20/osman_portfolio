import Banner from "../Componant/Home/Banner";
import ContactSection from "../Componant/Home/ContactSection";
import Project from "../Componant/Home/Project";
import Service from "../Componant/Home/Service";
import SkillSection from "../Componant/Home/SkillSection";


const Home = () => {
    return (
        <div className="primary_color_bg">
            <Banner/>
            <Service/>
            <SkillSection/>
            <Project/>
            <ContactSection/>
        </div>
    );
};

export default Home;