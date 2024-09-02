import oreSvg from "../../assets/images/ore-section.svg"
import revisionsSvg from "../../assets/images/revision-sessions.svg"
import ldsSvg from "../../assets/images/lds-section.svg"
import mocksSvg from "../../assets/images/mock-exams.svg"


export const courses = [
    {
        collection: 'ore',
        svg: oreSvg,
        caption: ' ORE COURSES'
    },
    {
        collection: 'lds',
        svg: ldsSvg,
        caption: 'LDS COURSES'
    },
    {
        collection: 'mocks',
        svg: mocksSvg,
        caption: 'MOCK EXAMS'
    },
    {
        collection: 'revisions',
        svg: revisionsSvg,
        caption: 'REVISION SESSIONS'
    }
];

export const therapists = [
    {
        collection: 'therapists',
        svg: ldsSvg,
        caption: 'The ultimate dental therapist training course'
    },
    {
        collection: 'hygienist',
        svg: oreSvg,
        caption: 'The Ultimate Hygienist Masterclass'
    }
];

export const advanced = [
    {
        collection: 'periodontitis1',
        svg: mocksSvg,
        caption: 'Periodontitis Treatment: Step 1 & 2'
    },
    {
        collection: 'periodontitis2',
        svg: revisionsSvg,
        caption: '2 Day Masterclass in Periodontics'
    },
    {
        collection: 'restorative',
        svg: oreSvg,
        caption: 'Restorative Dentistry – 2 Day Class'
    },
    {
        collection: 'prosthodontics',
        svg: ldsSvg,
        caption: 'Removable Prosthodontics'
    },
    {
        collection: 'oralsurgery',
        svg: oreSvg,
        caption: 'Oral Surgery Masterclass'
    },
];
