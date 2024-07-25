import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import course01 from './courses01.jpg';
import course02 from './courses02.jpg';
import course03 from './courses04.jpg';
import course04 from './courses03.jpg';
import course05 from './courses05.jpg';
import course06 from './courses06.jpg';
import course07 from './courses07.jpg';
import course08 from './courses08.jpg';
import course09 from './courses09.jpg';
import course10 from './courses10.jpg';

let all_course = [
    {
        id: 1,
        title: "Bigener Adobe Illustrator for Graphic Design",
        description: "Learn How To Build The Perfect Diet & Meal Plan For Improved Health, Better Weight Loss And…",
        image: course01,
        category: "Graphic Design",
        department: "Marketing",
        lessons: 6,
        duration_hr: 12,
        duration_min: 30,
        students: 101,
        level: "All Levels",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStarHalfAlt />,
            }
        ],
        no_rating: 4.3,
        fees: "Free",
        featured: true,
        date: new Date('2024-05-01')
    },
    {
        id: 2,
        title: "How to Market Yourself as a Coach or Consultant",
        description: "Learn How To Build The Perfect Diet & Meal Plan For Improved Health, Better Weight Loss And…",
        image: course02,
        category: "Health",
        department: "Health & Fitness",
        lessons: 15,
        duration_hr: 16,
        duration_min: 30,
        students: 61,
        level: "All Levels",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            }
        ],
        no_rating: 5,
        fees: "Free",
        featured: false,
        date: new Date('2024-05-05')
    },
    {
        id: 3,
        title: "Become a Certified JavaScript Developer",
        description: "Are you new to PHP or need a refresher? Then this course will help you get all…",
        image: course03,
        category: "Developer",
        department: "Development",
        lessons: 16,
        duration_hr: 19,
        duration_min: 30,
        students: 28,
        level: "Intermediate",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStarHalfAlt />,
            }
        ],
        no_rating: 4.6,
        fees: '$ 200',
        featured: true,
        date: new Date('2024-04-01')
    },
    {
        id: 4,
        title: "Web Development Fully Complete Guideline",
        description: "Do you want to learn the number #1 programming language that powers the internet? Are you tired…",
        image: course04,
        category: "Developer",
        department: "Development",
        lessons: 14,
        duration_hr: 18,
        duration_min: 20,
        students: 21,
        level: "Intermediate",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStarHalfAlt />,
            }
        ],
        no_rating: 4.5,
        fees: '$ 300',
        featured: false,
        date: new Date('2024-04-29')
    },
    {
        id: 5,
        title: "Photography training for the Artist in you",
        description: "We focus on real-world cases and I present the best techniques that require minimal effort yet produce…",
        image: course05,
        category: "Photography",
        department: "Photography",
        lessons: 14,
        duration_hr: 13,
        duration_min: 20,
        students: 13,
        level: "All Levels",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStarHalfAlt />,
            }
        ],
        no_rating: 4.3,
        fees: "Free",
        featured: true,
        date: new Date('2024-05-05')
    },
    {
        id: 6,
        title: "The Complete Guide to the Global Markets",
        description: "Learn how to create 3D Models and Assets for games using Blender, the free-to-use 3D production suite.…",
        image: course06,
        category: "Animation",
        department: "3D & Animation",
        lessons: 16,
        duration_hr: 15,
        duration_min: 20,
        students: 2,
        level: "Beginner",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStarHalfAlt />,
            }
        ],
        no_rating: 4.5,
        fees: '$ 150',
        featured: false,
        date: new Date('2024-03-07')
    },
    {
        id: 7,
        title: "Sales Training Practical Sales Techniques",
        description: "Sales is all about listening to people and prescribing a solution. In every job you'll come across…",
        image: course07,
        category: "Sales",
        department: "Business",
        lessons: 14,
        duration_hr: 10,
        duration_min: 30,
        students: 2,
        level: "Expert",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaRegStar />,
            }
        ],
        no_rating: 4,
        fees: "Free",
        featured: true,
        date: new Date('2024-01-02')
    },
    {
        id: 8,
        title: "Complete Guidelines advanced fundamentals",
        description: "Trello lets you work more collaboratively and get more done. It's intuitive and easy to pick up,…",
        image: course08,
        category: "Management",
        department: "Business",
        lessons: 14,
        duration_hr: 8,
        duration_min: 30,
        students: 6,
        level: "Intermediate",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStarHalfAlt />,
            }
        ],
        no_rating: 4.5,
        fees: "Free",
        featured: true,
        date: new Date('2024-01-01')
    },
    {
        id: 9,
        title: "Complete Financial Analyst Course",
        description: "You simply have to find a way to acquire practical skills that will give you an edge…",
        image: course09,
        category: "Education",
        department: "Business",
        lessons: 15,
        duration_hr: 17,
        duration_min: 20,
        students: 7,
        level: "All Levels",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaRegStar />,
            }
        ],
        no_rating: 4,
        fees: "Free",
        featured: false,
        date: new Date('2023-05-01')
    },
    {
        id: 10,
        title: "User Experience Design Essentials",
        description: "Are you excited to get into the world of UI/UX but you don't know where to start?…",
        image: course10,
        category: "Ui/Ux Designer",
        department: "Business",
        lessons: 15,
        duration_hr: 10,
        duration_min: 40,
        students: 3,
        level: "Beginner",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaRegStar />,
            }
        ],
        no_rating: 4,
        fees: "Free",
        featured: false,
        date: new Date('2024-02-29')
    },
    {
        id: 11,
        title: "WordPress for Beginners – Master WordPress",
        description: "This course will guide you through every single step from installation to finished website. I'll show you…",
        image: course10,
        category: "Education",
        department: "Business",
        lessons: 15,
        duration_hr: 7,
        duration_min: 30,
        students: 18,
        level: "Beginner",
        star_rating: [
            {
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaStar />,
            },{
                icon: <FaRegStar />,
            }
        ],
        no_rating: 4,
        fees: "$ 100",
        featured: true,
        date: new Date('2024-03-10')
    }
];

export default all_course;