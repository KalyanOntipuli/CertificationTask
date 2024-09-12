import HomeIntro from "./HomeIntro";
import HomeLinks from "./HomeLinks";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";

const HomeContent: React.FC = () => {
    return (
        <>
            <HomeIntro />
            <HomeLinks />
            <FAQ />
            <ContactUs />
        </>
    );
}
export default HomeContent;