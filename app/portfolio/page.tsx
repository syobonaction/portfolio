import PortfolioModal from "../components/modals/PortfolioModal";
import Thumbnail from "./Thumbnail";

export default function Portfolio() {
    return (
        <>
            <PortfolioModal />
            <div className="
                grid 
                w-full
                h-full
                grid-cols-2
                lg:grid-rows-4
                lg:grid-cols-4
                p-8
                gap-4
                xl:gap-16
                m-auto
            ">
                <Thumbnail
                    alt="grainger econnections"
                    src="/images/econ.jpg"
                    modalTitle="econnections"
                />
                <Thumbnail
                    alt="autentik fromagerie"
                    src="/images/autentik.jpeg"
                    modalTitle="autentik"
                />
                <Thumbnail
                    alt="easylight sarl"
                    src="/images/easylight.jpeg"
                    modalTitle="easylight"
                />
                <Thumbnail
                    alt="grainger's main e-commerce site"
                    src="/images/grainger.jpeg"
                    modalTitle="grainger"
                />
                <Thumbnail
                    alt="brighthouse virtual art gallery"
                    src="/images/brighthouse.jpeg"
                    modalTitle="netreality"
                />
                <Thumbnail
                    alt="The Future Left's LA 2020 Progressive Voter's Guide"
                    src="/images/laguide.jpeg"
                    modalTitle="flguide"
                />
                <Thumbnail
                    alt="Claudineco consutants website"
                    src="/images/claudineco.jpeg"
                    modalTitle="claudineco"
                />
            </div>
        </>
    )
}

