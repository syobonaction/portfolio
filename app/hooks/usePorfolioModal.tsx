import { create } from "zustand"

interface ModalContentTypes {
    title: string
    subhead: string
    imageAlt: string,   
    imageSrc: string,
    text: string,
    linkUrl?: string
}

interface PortfolioModalStore {
    isOpen: boolean
    onOpen: (title: string) => void
    modalContent: ModalContentTypes
    onClose: () => void
}

const getModalContent = (title: string): ModalContentTypes => {
    switch(title) {
        case 'econnections':
            return {
                title: 'Econnections',
                subhead: 'Grainger | 2018',
                imageAlt: 'grainger econnections',
                imageSrc: '/images/econ.jpg',
                text: `I helped to build Grainger\'s Econnections application from the ground up 
                    in 2018. This employee-facing application aids in managing
                    order flow between Grainger and its suppliers.`
            }
        case 'autentik':
            return {
                title: 'Autentik',
                subhead: 'Midwest Development | 2022',
                imageAlt: 'autentik fromage vacherin fribourgois',
                imageSrc: '/images/autentik_full.jpeg',
                text: `Managed a team to develop this small eccommerce site for a
                    Swiss cheese vendor in Fribourg. This page utilizes Wordpress and 
                    WooCommerce so that the company can easily maintain the store page
                    after the completion of our intial work.`,
                linkUrl: 'https://www.autentik.ch'
            }
        case 'easylight':
            return {
                title: 'Easylight SARL',
                subhead: 'Midwest Development | 2020',
                imageAlt: 'easylight lighting solutions in switzerland',
                imageSrc: '/images/easylight_full.jpeg',
                text: `Led the development of this landing page for Swiss lighting solutions
                    company Easylight. We built this page with CMS features to allow
                    customer updating of the page after our initial setup.`,
                linkUrl: 'https://www.easy-light.ch'
            }
        case 'grainger':
            return {
                title: 'Grainger.com',
                subhead: 'Grainger | 2019 - 2020',
                imageAlt: 'grainger.com ecommerce site',
                imageSrc: '/images/grainger_full.jpeg',
                text: `Beginning in 2019 we refactored the legacy code into a custom 
                    reusable component framework. I was responsible for porting over to 
                    these new components, as well as creating new ones. We also 
                    transformed the page to meet all regulatory specifications 
                    regarding accessibility.`,
                linkUrl: 'https://www.grainger.com'
            }
        case 'netreality':
            return {
                title: 'Brighthouse Gallery',
                subhead: 'Freelance | 2019',
                imageAlt: 'brighthouse gallery digital art exhibition',
                imageSrc: '/images/brighthouse_full.jpeg',
                text: `During the easly stages of the COVID pandemic I worked 
                    with net-art collective Netreality to develop Brigthouse 
                    Gallery, a virtual multi-user art gallery that could facilitate 
                    exhibitions while everyone was under lockdown. I created the 
                    models and built out the virtual space utilizing the JanusWeb 
                    XR library. I also created a custom OS-like front-end framework 
                    complete with clickable icons and draggable windows in order 
                    give the space an antiquated tech look and feel. An archived 
                    version of the museum is still avaiable at the link below.`,
                linkUrl: 'https://eclectic-cascaron-573cbc.netlify.app/'
            }
        case 'flguide':
            return {
                title: 'Future Left Progressive Voter\'s Guide',
                subhead: 'Freelance | 2020',
                imageAlt: 'Future Left\'s Progressive Voter\'s Guide',
                imageSrc: '/images/laguide.jpeg',
                text: `In 2020 helped LA's The Future Left to develop a digital 
                    voter's guide for local elections which could be opened and 
                    referenced anywhere, especially at the polls.`,
            }
        case 'claudineco':
            return {
                title: 'Claudineco',
                subhead: 'Midwest Development | 2023',
                imageAlt: 'claudineco consultancy company',
                imageSrc: '/images/claudineco_full.jpeg',
                text: `I created a site for a consultancy company which provides
                    services for foreigners moving into France.`,
                linkUrl: 'https://claudineco.com/'
            }
        default:
            return {
                title: '',
                subhead: '',
                imageAlt: '',
                imageSrc: '',
                text: ''
            }
    }
}

const usePortfolioModal = create<PortfolioModalStore>((set) => ({
    isOpen: false,
    modalContent: {
        title: '',
        subhead: '',
        imageAlt: '',
        imageSrc: '',
        text: '',
        linkUrl: '',
    },
    onOpen: (title) => title.length && set({ 
        isOpen: true,
        modalContent: getModalContent(title),
    }),
    onClose: () => set({ isOpen: false })
}))

export default usePortfolioModal