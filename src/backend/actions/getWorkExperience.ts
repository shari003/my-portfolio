const experience = [
    {
        id: 4,
        title: 'Software Developer',
        company: {
            title: 'Tutort Academy LLP',
            url: 'https://tutort.net/',
        },
        product: [
            {   
                id: 1,
                name: "Portal",
                url: "https://portal.tutort.net/"
            }
        ],
        location: 'On-Site, Bengaluru, KA, IN',
        duration: 'September 2024 - Present',
        description: [
            'Spearheaded the development of a Coding Engine, enabling course beneficiaries to practice coding through an interactive platform similar to Leetcode and HackerRank, enhancing user experience (UX) with intuitive design.',
            'Created a Contest Module within the Coding Engine, allowing students to participate in coding contests, submit solutions, and receive immediate feedback on their performance, fostering a competitive learning environment.',
            'Developed a Mentor Sessions feature that enables students to request one-on-one mentoring by submitting their availability, allowing mentors to review and accept requests based on their schedules, thereby enhancing personalized learning experiences and improving student engagement.',
            'Collaborated closely with cross-functional teams, including designers and content creators, to deliver high-quality web solutions that meet the company’s strategic goals.'
        ]
    },
    {
        id: 3,
        title: 'Software Developer Intern',
        company: {
            title: 'Tutort Academy LLP',
            url: 'https://tutort.net/',
        },
        product: [
            {   
                id: 1,
                name: "Website",
                url: "https://tutort.net/"
            }
        ],
        location: 'On-Site, Bengaluru, KA, IN',
        duration: 'March 2024 - August 2024',
        description: [
            'Developed key components of a responsive Tutort’s own website based on Next.js, ensuring optimal performance and SEO, and responsiveness across various devices and browsers leading to improved user engagement and search visibility.',
            'Designed and developed an admin portal featuring a blog creation and editing system, seamlessly integrated with the main website, allowing for real-time content updates.'
        ]
    },
    {
        id: 2,
        title: 'AI-ML Intern',
        company: {
            title: 'Xebia',
            url: 'https://xebia.com/',
        },
        product: [
            
        ],
        location: 'Remote',
        duration: 'June 2023 - August 2023',
        description: [
            'Developed an automated product review scraper using Python, enabling efficient data extraction at scale.',
            'Leveraged Machine Learning classification models and NLP techniques to analyze reviews and predict product ratings with high accuracy.'
        ]
    },
    {
        id: 1,
        title: 'Backend Developer',
        company: {
            title: 'Rudraksha Welfare Foundation',
            url: 'https://rudraksha.org.in/',
        },
        product: [],
        location: 'Remote',
        duration: 'June 2022 - August 2022',
        description: [
            'Developed a comprehensive CRM system from the ground up, featuring an Admin Panel and User Dashboard, enabling efficient management of employee data, leave requests, and performance evaluations.',
            'Implemented a Leave Management System with robust backend validation, allowing employees to request leaves within specified limits, with approval processes overseen by the Admin.',
            'Engineered a sophisticated Attendance Management System, empowering employees to mark their presence securely through OTP verification, streamlining the attendance tracking process.',
            'Designed and integrated dynamic reporting functionalities, enabling users to access and analyze monthly, fortnightly, quarterly, and yearly performance reports, fostering transparency and accountability.',
            'Enhanced administrative capabilities by implementing a rating system for employee performance, providing a structured mechanism for feedback and evaluation.'
        ]
    },
];

export default function getWorkExperience() {
    return experience;
}