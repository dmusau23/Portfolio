export const projects = [
{
title: "SmartCrowd — Smart Event Management",
period: "2025",
tagline: "Real-time ticketing, check-in, and crowd monitoring",
tech: ["React", "Spring Boot", "MySQL", "WebSockets", "Tailwind"],
highlights: [
"Built REST APIs in Spring Boot; 90%+ unit test coverage",
"Real-time check-in dashboard with WebSockets",
"Normalized MySQL schema; reduced duplicate records by 30%",
"Role-based access for organizers and staff",
],
links: {
demo: "https://your-demo-link.com",
repo: "https://github.com/dmusau23/smartcrowd" // update if different
},
image: "/images/smartcrowd.png",
},
{
title: "Text Adventure Game (Java)",
period: "2024",
tagline: "Console-based adventure with rooms, exits, items",
tech: ["Java"],
highlights: [
"Parser for commands (MOVE, TAKE, USE) with robust input handling",
"Modular Room/Exit/Item classes; easy to extend",
],
links: {
repo: "https://github.com/dmusau23/text-adventure"
},
image: "/images/text-adventure.png",
},
{
title: "Personal Website",
period: "2025",
tagline: "Landing site and blog hosted on Netlify",
tech: ["HTML", "CSS", "JavaScript", "jQuery"],
highlights: [
"Optimized Lighthouse performance 95+",
"Responsive layout and dark mode",
],
links: {
demo: "https://dmusau.domains.ggc.edu",
repo: "https://github.com/dmusau23/Personal-Website"
},
image: "/images/personal-site.png",
},
{
title: "Stadium Entry System (Hackathon)",
period: "2025",
tagline: "Buy tickets, check tickets, print tickets",
tech: ["React", "Spring Boot", "MySQL"],
highlights: [
"End-to-end flow: purchase → QR code → scan at gate",
"Queue-safe scanning with idempotent validation",
],
links: {
repo: "https://github.com/dmusau23/stadium-entry"
},
image: "/images/stadium-entry.png",
},
];