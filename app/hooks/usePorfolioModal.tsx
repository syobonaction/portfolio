import { create } from "zustand"

interface ModalContentTypes {
    title: string
    subhead: string
    imageAlt: string,   
    imageSrc: string,
    text: string,
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
                    in 2018. This employee-facting application helps to manage
                    order flow between Grainger and its suppliers.`
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
        text: ''
    },
    onOpen: (title) => title.length && set({ 
        isOpen: true,
        modalContent: getModalContent(title),
    }),
    onClose: () => set({ isOpen: false })
}))

export default usePortfolioModal