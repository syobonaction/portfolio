import Thumbnail from "./Thumbnail";

export default function Portfolio() {
    return (
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
        </div>
    )
}

