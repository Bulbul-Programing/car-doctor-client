import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Feedback from "../../Components/Feedback/Feedback";
import Footer from "../../Components/Footer/Footer";
import Location from "../../Components/Location/Location";
import Service from "../../Components/Service/Service";
import Team from "../../Components/Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <Location></Location>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;