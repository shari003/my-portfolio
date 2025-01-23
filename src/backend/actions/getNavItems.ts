export interface NavItemType {
    id: number;
    label: string;
    to: string;
}

const mainPageNavItems = [
    {
        id: 1,
        label: "Home",
        to: "/"
    },
    {
        id: 2,
        label: "About",
        to: "#about"
    },
    {
        id: 3,
        label: "Projects",
        to: "#projects"
    },
    {
        id: 4,
        label: "Work Experience",
        to: "#work-experience"
    },
    {
        id: 5,
        label: "Contact",
        to: "#contact"
    }
];

const blogPageNavItems = [
    {
        id: 1,
        label: "Home",
        to: "/"
    },
];

export enum PageType {
    MAIN = "main",
    BLOG = "blog"
}

export default function getNavItems(page: PageType): NavItemType[] {
    switch (page) {
        case PageType.MAIN:
            return mainPageNavItems;
        
        case PageType.BLOG:
            return blogPageNavItems;

        default:
            return [];
    }
}