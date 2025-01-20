const projects = [
    {
        id: 'project-1',
        title: "Jetflix (Powered by GPT)",
        description: [
            "Jetflix is a Netflix clone that uses TMDB API to fetch movies and TV shows.",
            "The app allows users to search for movies and TV shows, view details, and watch trailers.",
            "The app also is powered by GPT-3, which allows users to ask questions about movies and TV shows."
        ],
        image: "/assets/projects/jetflix.png",
        skills: [
            "React",
            "Tailwind CSS",
            "Firebase",
            "OpenAI",
            "Redux"
        ],
        externals: [
            {
                name: "Source",
                url: "https://github.com/shari003/NetflixGPT",
            },
            {
                name: "Website",
                url: "https://netflixgpt-5a4f4.web.app/",
            }
        ]
    },
    {
        id: 'project-2',
        title: "Biryani Mowa",
        description: [
            "Biryani Mowa is a food delivery app that allows users to order food online.",
            "The app also has features like adding items to cart and placing orders with Apply Coupon feature.",
            "The app is built using Next.js and Tailwind CSS.",
        ],
        image: '/assets/projects/biryanimowa.png',
        skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Redux",
        ],
        externals: [
            {
                name: "Source",
                url: "https://github.com/shari003/Biryani-Mowa-Official",
            },
            {
                name: "Website",
                url: "https://biryani-mowa-official.vercel.app/",
            }
        ]
    },
    {
        id: 'project-3',
        title: "Pulspal",
        description: [
            "Pulspal is a social media app that allows users to share their thoughts and connect with others.",
            "The app is built using MERN stack and Material UI.",
            "The app also has features like liking posts."
        ],
        image: "/assets/projects/pulspal.png",
        skills: [
            "React",
            "MongoDB",
            "Node.js",
            "Express",
            "Material UI",
            "Redux"
        ],
        externals: [
            {
                name: "Source",
                url: "https://github.com/shari003/Pulspal",
            },
        ]
    },
    // {
    //     id: 'project-4',
    //     title: "QuickCrave",
    //     description: [],
    //     image: "/assets/projects/quickcrave.png",
    //     skills: [
    //         "React",
    //         "Tailwind CSS",
    //     ],
    //     externals: [
    //         {
    //             name: "Source",
    //             url: "https://github.com/shari003/QuickCrave",
    //         },
    //         {
    //             name: "Website",
    //             url: "https://quickcrave.netlify.app/",
    //         }
    //     ]
    // },
];

export default function getProjects() {
    return projects;
}