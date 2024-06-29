import oreSvg from "../../assets/images/ore.svg"
import revisionsSvg from "../../assets/images/revisions.svg"
import ldsSvg from "../../assets/images/lds.svg"
import mocksSvg from "../../assets/images/mocks.svg"
import productsSvd from "../../assets/images/products.svg"


const categoriesArr = [
    {
        collection: 'ore',
        svg: oreSvg,
        caption: 'Explore our 16 ORE Courses'
    },
    {
        collection: 'lds',
        svg: ldsSvg,
        caption: 'Explore our 14 lds Courses'
    },
    {
        collection: 'revisions',
        svg: revisionsSvg,
        caption: 'Explore our revision sessions'
    },
    {
        collection: 'mocks',
        svg: mocksSvg,
        caption: 'Explore Available Mock Exams Now!'
    },
    {
        collection: 'products',
        svg: productsSvd,
        caption: 'Explore Our Products!'
    }
];

export default categoriesArr;