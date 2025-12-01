const projects = [
    {
        id: 3,
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
        id: 4,
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
    // {
    //     id: 5,
    //     title: "Pulspal",
    //     description: [
    //         "Pulspal is a social media app that allows users to share their thoughts and connect with others.",
    //         "The app is built using MERN stack and Material UI.",
    //         "The app also has features like liking posts."
    //     ],
    //     image: "/assets/projects/pulspal.png",
    //     skills: [
    //         "React",
    //         "MongoDB",
    //         "Node.js",
    //         "Express",
    //         "Material UI",
    //         "Redux"
    //     ],
    //     externals: [
    //         {
    //             name: "Source",
    //             url: "https://github.com/shari003/Pulspal",
    //         },
    //     ]
    // },
    {
        id: 1,
        title: "Unneu",
        description: [
            "Contributed to the development of an e-commerce platform for selling new/old sarees, featuring role-based access for buyers and sellers with dynamic product pricing (fixed/negotiable).",
            "Integrated Cashfree Payments for secure transactions and developed an admin dashboard for sellers to manage listings, track sales, and view financial reports.",
            "Enabled real-time price negotiations between buyers and sellers via in-app chat, increasing engagement and flexibility in transactions.",
            "Developed a subscription-based model for Sellers onboarding featuring Cashfree's Recurring Payment Option.",
            "Developed Client-Side Image Compression Logic to convert any featuring image to WebP format reducing uploading times and improving performance on slower networks."
        ],
        image: "/assets/projects/unneu.png",
        skills: [
            "TypeScript",
            "Next.js",
            "DynamoDB",
            "AWS SNS",
            "Zustand",
            "TailwindCSS",
        ],
        externals: [
            {
                name: "Website",
                url: "https://unneu.com/",
            }
        ]
    },
    {
        id: 2,
        title: "Video Transcoding Pipeline",
        description: [
            "Designed and implemented a distributed video transcoding system leveraging AWS ECS, Lambda, S3, SQS, and Elasticache for real-time load scaling and high availability.",
            "Integrated AWS SQS for getting triggered on RAW Video Uploads in S3 and for processing queued processes.",
            "Utilized Elasticache (valkey) to track active transcoding instances, ensuring optimal resource utilization and concurrency control.",
            "Integrated FFmpeg within ECS containers to transcode videos into multiple formats and resolutions based on dynamic job parameters.",
        ],
        image: "/assets/projects/video_transcoding.png",
        skills: [
            "JavaScript",
            "FFmpeg",
            "AWS ECS",
            "Lambda",
            "S3",
            "CloudFront",
            "SQS",
            "ElasticCache",
            "EventBridge",
        ],
        externals: []
    },
];

export default function getProjects() {
    return projects.sort((a, b) => a.id-b.id);
}