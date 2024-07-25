import blog01 from './blog_standard01.jpg';
import blog02 from './blog_standard02.jpg';
import blog03 from './blog_standard03.jpg';
import blog04 from './blog_standard04.jpg';
import blog_sm1 from './blog_standard01-150x150.jpg';
import blog_sm2 from './blog_standard02-150x150.jpg';
import blog_sm3 from './blog_standard03-150x150.jpg';
import blog_sm4 from './blog_standard04-150x150.jpg';

let all_blog = [
    {
        id: 1,
        title: "When aeunkno printer took galley of scrambled",
        image: blog01,
        small_image: blog_sm1,
        department: "Finance",
        category: "ui/ux",
        featured: true
    },
    {
        id: 2,
        title: "Full Stack GraphQL With Next.js And Vercel",
        image: blog02,
        small_image: blog_sm2,
        department: "Business",
        category: "programming",
        featured: true
    },
    {
        id: 3,
        title: "What Leonardo Teach us About Web Design",
        image: blog03,
        small_image: blog_sm3,
        department: "Data Science",
        category: "education",
        featured: true
    },
    {
        id: 4,
        title: "The Potentially Dangerous Non Accessibility Of Cookie Notices",
        image: blog04,
        small_image: blog_sm4,
        department: "Art & Design",
        category: "art",
        featured: false
    }
];
export default all_blog;