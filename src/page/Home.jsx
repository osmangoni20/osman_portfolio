import Banner from "../Componant/Home/Banner";
import ContactSection from "../Componant/Home/ContactSection";
import Project from "../Componant/Home/Project";
import Service from "../Componant/Home/Service";


const Home = () => {
    return (
        <div className="primary_color_bg">
            <Banner/>
            <Service/>
            <Project/>
            <ContactSection/>
        </div>
    );
};

export default Home;