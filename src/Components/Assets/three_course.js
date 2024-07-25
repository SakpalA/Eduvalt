import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import course01 from './courses01.jpg';
import course02 from './courses02.jpg';
import course03 from './courses04.jpg';
import course04 from './courses03.jpg';


let three_course = [
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
    }
];

export default three_course;