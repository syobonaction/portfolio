import PortfolioModal from "../components/modals/PortfolioModal";
import Thumbnail from "./Thumbnail";

export default function Portfolio() {
    return (
        <>
            <PortfolioModal />
            <div className="
                grid 
                grid-rows-2
                grid-cols-2
                lg:grid-rows-4
                lg:grid-cols-4
                p-8
                gap-8
                lg:gap-16
            ">
                <Thumbnail
                    alt="grainger econnections"
                    src="/images/econ.jpg"
                    modalTitle="econnections"
                />
                <Thumbnail
                    alt="autentik fromagerie"
                    src="/images/autentik.jpeg"
                />
                <Thumbnail
                    alt="easylight sarl"
                    src="/images/easylight.jpeg"
                />
                <Thumbnail
                    alt="grainger's main e-commerce site"
                    src="/images/grainger.jpeg"
                />
                <Thumbnail
                    alt="brighthouse virtual art gallery"
                    src="/images/brighthouse.jpeg"
                />
                <Thumbnail
                    alt="The Future Left's LA 2020 Progressive Voter's Guide"
                    src="/images/laguide.jpeg"
                />
                <Thumbnail
                    alt="Claudineco consutants website"
                    src="/images/claudineco.jpeg"
                />
            </div>
        </>
    )
}

