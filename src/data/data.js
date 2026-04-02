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
    description: "I'm a final-year Bachelor of Engineering student specializing in Artificial Intelligence and Machine Learning at RNS Institute of Technology, Bangalore. With strong expertise in Java, Spring Boot, and MySQL, I focus on engineering clean, scalable backend systems and delivering deep learning solutions. I believe in writing maintainable code, following OOP principles, and building real-world applications that solve practical problems."
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
        github: "#",
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
    }
];

export const skills = {
    languages: ["Java", "Python", "SQL"],
    frameworks: ["Spring Boot", "Spring MVC", "JDBC", "Maven", "TensorFlow", "Keras"],
    tools: ["Git", "GitHub", "MySQL", "Postman", "IntelliJ IDEA", "VS Code", "Power BI"],
    concepts: ["MVC Architecture", "OOP", "REST API", "Deep Learning", "Transfer Learning"]
};

export const experience = [
    {
        role: "SmartCity – Karnataka",
        period: "November 2025 – February 2026",
        description: "Spring Boot Developer",
        achievements: [
            "Built MVC web app serving 500+ users",
            "Optimized MySQL schema with 5 tables",
            "Implemented full REST API backend"
        ]
    }
];