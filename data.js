// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Alice",        // TODO: Add your name
        title: "Student",      // TODO: Add your professional title
        email: "alicesyli@berkeley.edu", // TODO: Add your email
        location: "Berkeley, CA",  // TODO: Add your location
        bio: "I’m an EECS undergraduate at UC Berkeley passionate about AI/ML, software engineering, and building technology that can positively impact people’s lives. I’m especially interested in human-centered AI, agentic systems, and the intersection of AI with cognitive science. My goal is to grow as an AI/ML engineer, gain hands-on experience, and build reliable, meaningful technology that addresses real-world problems." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Python",   // TODO: Replace with your actual skills
        "Java",  // TODO: Add more skills
        "HTML",    // TODO: Students should have at least 5 skills
        "CSS", 
        "Javascript", 
        "Figma" // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "PawPal",
            description: "An AI-powered pet care app that uses personalized recommendations and a RAG-based knowledge system to help pet owners manage daily care tasks and schedules.",
            technologies: ["Streamlit", "Python", "You.API"], // Array of technologies used
            completionDate: "2026-04-29",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Music Recommender", 
            description: "An AI-powered music recommendation system that uses song features such as genre, mood, energy, and danceability to recommend songs based on user preferences.",
            technologies: ["Python", "Machine Learning", "Recommender System"],
            completionDate: "2026-04-14",
            featured: false
        },

        {
            title: "Job Genie", 
            description: "An AI-powered Chrome extension that analyzes resumes and provides personalized job recommendations to help users streamline their job search.An AI-powered music recommendation system that uses song features such as genre, mood, energy, and danceability to recommend songs based on user preferences.",
            technologies: ["Javascript", "HTML", "CSS", "JSON"],
            completionDate: "2026-04-14",
            featured: false
        }
        
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true      // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
console.log("My name:", portfolio.owner.name);
console.log("Total skill:", portfolio.skills.length);
console.log("First Project:", portfolio.projects[0]);


// Create summary statistics
console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

// Find featured projects
for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}

// Convert to JSON for storage/debugging
let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);


// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);