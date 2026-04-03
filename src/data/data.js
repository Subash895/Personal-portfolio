// PORTFOLIO DATA
// Edit this file to update your portfolio content

export const personalInfo = {
    name: "Subash B R",
    title: "Java Developer | Spring Boot | AI/ML",
    intro: "Final-year AI/ML student passionate about building scalable backend systems and intelligent solutions.",
    email: "subashbr895@gmail.com",
    phone: "+91-8951201334",
    location: "Bangalore, Karnataka",
    github: "https://github.com/Subash895",
    linkedin: "https://linkedin.com/in/subash-b-r"
};

export const about = {
    paragraphs: [
        "I'm a final-year Computer Science student specializing in Artificial Intelligence and Machine Learning at RNS Institute of Technology, Bangalore.",
        "I focus on building real-world applications that are not just technically strong, but also intuitive and user-friendly. My experience spans backend development with Java, Spring Boot, and MySQL, along with developing AI-based systems like crowd counting models.",
        "What sets me apart is my ability to bridge development and user experience. I pay close attention to how users interact with products - simplifying complex outputs, structuring clean interfaces, and ensuring performance and usability go hand in hand.",
        "I believe in writing maintainable, scalable code and continuously improving by building, testing, and refining real projects.",
        "Currently, I'm expanding my skills in UI/UX design to create products that are both functional and thoughtfully designed."
    ]
};

export const projects = [
    {
        id: 1,
        title: "Smart City Web Application",
        description: "Engineered a Spring Boot web application using MVC architecture to deliver city services and civic information to 500+ users across 3 service categories. Designed distinct Controller and Service layers with MySQL integration.",
        tech: ["Spring Boot", "Java", "MySQL", "MVC", "REST API"],
        github: "https://github.com/Subash895/SmartCity-Chikamagaluru",
        demo: null,
        highlights: [
            "Reduced code coupling by 40% with layered architecture",
            "5 optimized MySQL tables for fast data retrieval",
            "Full REST API implementation"
        ]
    },
    {
        id: 2,
        title: "Eye Disease Detection System",
        description: "Trained a transfer learning model to classify 5 stages of diabetic eye disease from retinal fundus images, achieving 89% validation accuracy with TensorFlow and deep learning techniques.",
        tech: ["Python", "TensorFlow", "Deep Learning", "Transfer Learning"],
        github: "https://github.com/Subash895/Diabetic-Retinopathy-EfficientNet",
        demo: null,
        highlights: [
            "89% validation accuracy",
            "Custom learning-rate scheduler",
            "Sub-second inference time"
        ]
    },
    {
        id: 3,
        title: "Java CRUD Application",
        description: "Built a console-based Java CRUD application with 4 core database operations using JDBC and MySQL. Secured 100% of database interactions using Prepared Statements, eliminating SQL injection risks.",
        tech: ["Java", "JDBC", "MySQL", "OOP"],
        github: "https://github.com/Subash895/Advance-Java",
        demo: null,
        highlights: [
            "100% secure with Prepared Statements",
            "Zero SQL injection vulnerabilities",
            "Clean OOP design across 5 classes"
        ]
    },
    {
        id: 4,
        title: "Leave Scheduler Platform",
        description: "Built a full-stack leave management platform with Spring Boot, React, and MySQL to handle employee leave requests, approval workflows, and admin onboarding. Secured the system with JWT-based authentication and added Docker support for consistent local setup.",
        tech: ["Spring Boot", "React", "MySQL", "JWT", "Docker"],
        github: "https://github.com/Subash895/LeaveScheduler",
        demo: null,
        highlights: [
            "Role-based workflows for admin, manager, and employee users",
            "JWT-secured authentication and account bootstrap flow",
            "Dockerized frontend, backend, and database setup"
        ]
    },
    {
        id: 5,
        title: "Breast Cancer Prediction System",
        description: "Developed a machine learning model using scikit-learn to classify breast cancer cases from 30 diagnostic features. Automated dataset preparation, train-test evaluation, model persistence with Joblib, and interactive CLI-based prediction input.",
        tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Joblib"],
        github: "https://github.com/Subash895/BreastCarser",
        demo: null,
        highlights: [
            "Logistic Regression pipeline with train and test accuracy checks",
            "30-feature input validation for interactive predictions",
            "Reusable saved model artifact using Joblib"
        ]
    },
    {
        id: 6,
        title: "Personal Portfolio Website",
        description: "Designed and developed a responsive React portfolio site to present projects, skills, and contact information in a clean single-page layout. Organized content through reusable components and centralized data structures for quick updates.",
        tech: ["React", "JavaScript", "CSS", "Responsive Design", "Component Architecture"],
        github: "https://github.com/Subash895/Personal-portfolio",
        demo: null,
        highlights: [
            "Single-page responsive layout with animated sections",
            "Reusable React components for each portfolio section",
            "Centralized content management through structured data files"
        ]
    }
];

export const skills = {
    languages: ["Java", "Python", "SQL", "C", "HTML", "CSS", "JavaScript"],
    frameworks: ["Spring Boot", "Spring MVC", "JDBC", "Maven", "TensorFlow", "Keras"],
    tools: ["Git", "GitHub", "MySQL", "Postman", "IntelliJ IDEA", "VS Code", "Power BI"],
    concepts: ["MVC Architecture", "OOP", "REST API", "Deep Learning", "Transfer Learning", "DSA", "ADA"]
};

export const experience = [
    {
        role: "SmartCity - Karnataka",
        period: "November 2025 - February 2026",
        description: "Spring Boot Developer",
        achievements: [
            "Built MVC web app serving 500+ users",
            "Optimized MySQL schema with 5 tables",
            "Implemented full REST API backend"
        ]
    }
];
