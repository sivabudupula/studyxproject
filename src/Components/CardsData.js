import { Description } from "@mui/icons-material";
import ReactPlayer from 'react-player';
const Cardsdata = [
    {
    id: 1,
        rname: "Data Science",
        imgdata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oA-Oy6zQc4gpTLKVYw6qd7aWFn2uW64t23AOYIYmtheP4s13V9SeUAn4qlMfr27Nims&usqp=CAU",
        address: "India",
        delimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oA-Oy6zQc4gpTLKVYw6qd7aWFn2uW64t23AOYIYmtheP4s13V9SeUAn4qlMfr27Nims&usqp=CAU",
        somedata: "1050 + order placed from here recently",
        price: 4999,
        rating: "4.0",
        arrimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oA-Oy6zQc4gpTLKVYw6qd7aWFn2uW64t23AOYIYmtheP4s13V9SeUAn4qlMfr27Nims&usqp=CAU",
         qnty:0,
         description:"Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific subject matter expertise to uncover actionable insights hidden in an organization’s data. These insights can be used to guide decision making and strategic planning.",
         video:"https://youtu.be/X3paOmcrTjQ"
    },
    {
        id: 2,
            rname: "Digital marketing",
            imgdata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAMWUjsfZQFWjAyqVVEDnRUJVxgr2bS2pLw&usqp=CAU",
            address: "India",
            delimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAMWUjsfZQFWjAyqVVEDnRUJVxgr2bS2pLw&usqp=CAU",
            somedata: "1050 + order placed from here recently",
            price: 2999,
            rating: "4.5",
            arrimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oA-Oy6zQc4gpTLKVYw6qd7aWFn2uW64t23AOYIYmtheP4s13V9SeUAn4qlMfr27Nims&usqp=CAU",
             qnty:0,
             description:"Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.",
             video:"https://youtu.be/lmpCkBaKO10"
        },
        {
            id: 3,
                rname: "Full stack Developer",
                imgdata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnG4B3Ysi0O2U5x0TBjyPI1GxL9Rug41ILg&usqp=CAU",
                address: "India",
                delimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAMWUjsfZQFWjAyqVVEDnRUJVxgr2bS2pLw&usqp=CAU",
                somedata: "1050 + order placed from here recently",
                price: 5999,
                rating: "4.9",
                arrimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oA-Oy6zQc4gpTLKVYw6qd7aWFn2uW64t23AOYIYmtheP4s13V9SeUAn4qlMfr27Nims&usqp=CAU",
                 qnty:0,
                 description:"The full stack developer definition is “someone who can work on both the back-end and front-end of systems.” This means that they can develop fully fledged platforms (with databases, servers and clients) which don't need other applications to function.",
                 video:"https://youtu.be/8KaJRw-rfn8"
            },
            {
                id: 4,
                    rname: "UI/UX Design",
                    imgdata:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezBdx8qGhw6IvSA-DHfcz5xMCx9fPM3pi6Q&usqp=CAU",
                    address: "India",
                    delimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAMWUjsfZQFWjAyqVVEDnRUJVxgr2bS2pLw&usqp=CAU",
                    somedata: "1050 + order placed from here recently",
                    price: 2999,
                    rating: "4.2",
                    arrimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oA-Oy6zQc4gpTLKVYw6qd7aWFn2uW64t23AOYIYmtheP4s13V9SeUAn4qlMfr27Nims&usqp=CAU",
                     qnty:0,
                     description:"UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. They also process flows or sitemaps.",
                     video:"https://youtu.be/55NvZjUZIO8"
                },
                {
                    id: 5,
                        rname: "BA power Bi Tools",
                        imgdata:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGm8WMU4dWjckJqbiuxSAhBP8xN3FUr_T9g&usqp=CAU",
                        address: "India",
                        delimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAMWUjsfZQFWjAyqVVEDnRUJVxgr2bS2pLw&usqp=CAU",
                        somedata: "1050 + order placed from here recently",
                        price: 3999,
                        rating: "4.2",
                        arrimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oA-Oy6zQc4gpTLKVYw6qd7aWFn2uW64t23AOYIYmtheP4s13V9SeUAn4qlMfr27Nims&usqp=CAU",
                         qnty:0,
                         description:"A power tool is a tool that is actuated by an additional power source and mechanism other than the solely manual labor used with hand tools ",
                        
                         video:"https://youtu.be/H84UJn1CiWo"
                    },
                    {
                        id: 6,
                            rname: "Artifical Intelligence",
                            imgdata:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGFS1qkWyZK28b5jJOcSNkOCYx4ggo7oRWA&usqp=CAU",
                            address: "India",
                            delimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAMWUjsfZQFWjAyqVVEDnRUJVxgr2bS2pLw&usqp=CAU",
                            somedata: "1050 + order placed from here recently",
                            price: 4999,
                            rating: "4.2",
                            arrimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oA-Oy6zQc4gpTLKVYw6qd7aWFn2uW64t23AOYIYmtheP4s13V9SeUAn4qlMfr27Nims&usqp=CAU",
                             qnty:0,
                             description:"Artificial intelligence (AI) refers to the simulation or approximation of human intelligence in machines. The goals of artificial intelligence include computer-enhanced learning, reasoning, and perception. AI is being used today across different industries from finance to healthcare.",
                             video:"https://youtu.be/oV74Najm6Nc"
                        },

       
    
];

export default Cardsdata;