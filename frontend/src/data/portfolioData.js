// =====================================================
// PORTFOLIO DATA CONFIGURATION
// Edit this file to update your portfolio content
// =====================================================

// Personal Information
export const personalInfo = {
    name: "Abhay Kashyap",
    shortName: "AK",
    role: "MERN Stack Developer",
    phone: "+91 6307415883",
    email: "abhaykashyap2804@gmail.com",
    location: "Gorakhpur, Uttar Pradesh, India",
    about: {
        title: "MERN Stack Developer & Tech Enthusiast",
        description: [
            "I'm a passionate Full Stack Developer currently pursuing my Master of Computer Applications (MCA) at Madan Mohan Malaviya University of Technology, Gorakhpur. With a strong foundation in web development and a keen eye for creating seamless user experiences.",
            "My journey in tech has equipped me with expertise in the MERN stack - MongoDB, Express.js, React, and Node.js. I love transforming ideas into functional, beautiful web applications that solve real-world problems."
        ],
        stats: [
            { value: "2+", label: "Projects Completed" },
            { value: "1", label: "Internship" },
            { value: "8.21", label: "CGPA at MMMUT" },
            { value: "10+", label: "Technologies" }
        ]
    },
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/abhaykashyapak/",
        github: "https://github.com/abhay-kashyapp",
        leetcode: "https://leetcode.com/problemset/"
    }
};

// =====================================================
// EXPERIENCE - Add new experiences here
// =====================================================
export const experiences = [
    {
        title: "MERN Stack Developer Intern",
        company: "Codec Technologies Pvt. Ltd.",
        period: "June 2025",
        description: [
            "Completed a 1-month AICTE ICAC approved internship focused on full-stack web development using the MERN stack.",
            "Developed and integrated RESTful APIs, implemented CRUD operations, and worked with MongoDB schemas and queries.",
            "Implemented RESTful APIs and followed MVC-based backend structure.",
            "Improved skills in debugging, problem-solving, and real-world project development.",
            "Learned backend authentication concepts, API testing, and basic deployment practices."
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    }
    // Add more experiences here following the same format:
    // {
    //   title: "Job Title",
    //   company: "Company Name",
    //   period: "Month Year - Month Year",
    //   description: ["Point 1", "Point 2"],
    //   technologies: ["Tech1", "Tech2"]
    // }
];

// =====================================================
// PROJECTS - Add new projects here
// =====================================================
export const projects = [
    {
        title: "Forever Application",
        description: "A comprehensive and responsive full-stack e-commerce website with complete functionality including product management, cart, checkout, and order processing.",
        features: [
            "Implemented e-commerce functionalities including product CRUD operations, image uploads, cart management, secure checkout, and order processing.",
            "Built a self-managed authentication system using backend APIs and frontend state management to handle user login, registration, and session control securely.",
            "Deployed the application using modern hosting platforms and tested complete end-to-end functionality."
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB"],
        period: "Sept 2025 – Present",
        liveLink: "#",
        githubLink: "#",
        icon: "🛒"
    },
    {
        title: "Learning Management System",
        description: "A full-stack LMS website using the MERN stack to manage online courses and learning content with AI-powered features.",
        features: [
            "Developed a responsive LMS using MERN stack with AI-powered features for personalized learning and real-time insights.",
            "Enhanced user experience with Google Authentication using Firebase.",
            "Designed a scalable LMS website with clean code, error handling, and API integration for smooth frontend-backend communication."
        ],
        technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Git", "Firebase"],
        period: "June 2025 – Aug 2025",
        liveLink: "#",
        githubLink: "#",
        icon: "📚"
    },
    {
        title: "Real-Time Chat Application",
        description: "A full-stack real-time chat application with private messaging, group chats, and live notifications using Socket.io.",
        features: [
            "Real-time messaging with Socket.io for instant communication",
            "User authentication with JWT for secure login and registration",
            "Group chat functionality with member management",
            "Online/offline status indicators and typing notifications"
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
        period: "Jan 2026 – Present",
        liveLink: "https://chatapp-frontend-mwh3.onrender.com/",
        githubLink: "https://github.com/abhaykashyap/chatapp",
        icon: "💬"
    }
    // Add more projects here following the same format:
    // {
    //   title: "Project Name",
    //   description: "Short description",
    //   features: ["Feature 1", "Feature 2"],
    //   technologies: ["Tech1", "Tech2"],
    //   period: "Start - End",
    //   liveLink: "https://...",
    //   githubLink: "https://...",
    //   icon: "🚀"
    // }
];

// =====================================================
// EDUCATION - Add new education entries here
// =====================================================
export const education = [
    {
        degree: "Master of Computer Application (MCA)",
        institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
        period: "2024 – 2026",
        grade: "CGPA: 8.21",
        icon: "🎓"
    },
    {
        degree: "Bachelor of Science (BSC)",
        institution: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
        period: "2021 – 2024",
        grade: "CGPA: 8.31",
        icon: "📜"
    },
    {
        degree: "Higher Secondary (12th)",
        institution: "Soni Pariya Public School",
        board: "Board of High School and Intermediate Education, Uttar Pradesh",
        period: "2020 – 2021",
        grade: "Percentage: 80.44%",
        icon: "📚"
    },
    {
        degree: "Secondary (10th)",
        institution: "Soni Pariya Public School",
        board: "Board of High School and Intermediate Education, Uttar Pradesh",
        period: "2018 – 2019",
        grade: "Percentage: 80.66%",
        icon: "📖"
    }
];

// =====================================================
// SKILLS - Update your skills here
// =====================================================
export const skillCategories = [
    {
        title: "Languages",
        icon: "💻",
        skills: [
            { name: "JavaScript", level: 85 },
            { name: "Java", level: 80 },
            { name: "C/C++", level: 75 },
            { name: "SQL (Postgres)", level: 70 },
            { name: "HTML/CSS", level: 90 }
        ]
    },
    {
        title: "Frameworks",
        icon: "⚛️",
        skills: [
            { name: "React", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 80 },
            { name: "Tailwind CSS", level: 85 },
            { name: "MongoDB", level: 75 }
        ]
    },
    {
        title: "Developer Tools",
        icon: "🛠️",
        skills: [
            { name: "Git & GitHub", level: 85 },
            { name: "Docker", level: 60 },
            { name: "Postman", level: 80 },
            { name: "VS Code", level: 90 },
            { name: "IntelliJ", level: 70 }
        ]
    },
    {
        title: "Soft Skills",
        icon: "🎯",
        skills: [
            { name: "Problem-Solving", level: 85 },
            { name: "Teamwork", level: 90 },
            { name: "Communication", level: 80 },
            { name: "Time Management", level: 75 },
            { name: "Conflict Management", level: 80 }
        ]
    }
];

export const coursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management (DBMS)",
    "Object-Oriented Programming",
    "Computer Networks"
];

export const areasOfInterest = [
    "Frontend Development",
    "Backend Development",
    "MERN Stack Development",
    "Software Development"
];

// =====================================================
// NAVIGATION LINKS
// =====================================================
export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
];
