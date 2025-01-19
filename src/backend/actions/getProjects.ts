const projects = [
    {
        id: 'project-1',
        title: "Jetflix (Powered by GPT)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro rerum enim placeat laborum, explicabo cum tempore ipsum magni soluta. Tempore ex minus, dolore necessitatibus ab debitis cupiditate quibusdam expedita quasi.",
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
        title: "QuickCrave",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro rerum enim placeat laborum, explicabo cum tempore ipsum magni soluta. Tempore ex minus, dolore necessitatibus ab debitis cupiditate quibusdam expedita quasi.",
        image: "/assets/projects/quickcrave.png",
        skills: [
            "React",
            "Tailwind CSS",
        ],
        externals: [
            {
                name: "Source",
                url: "https://github.com/shari003/QuickCrave",
            },
            {
                name: "Website",
                url: "https://quickcrave.netlify.app/",
            }
        ]
    },
    {
        id: 'project-3',
        title: "Pulspal",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro rerum enim placeat laborum, explicabo cum tempore ipsum magni soluta. Tempore ex minus, dolore necessitatibus ab debitis cupiditate quibusdam expedita quasi.",
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
            // {
            //     name: "Website",
            //     url: "https://github.com",
            // }
        ]
    }
];

export default function getProjects() {
    return projects;
}