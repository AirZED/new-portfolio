import quotes from "./projects/quotesapp.png";
import meals from "./projects/mealapp.png";
import airbnb from "./projects/airbnbapp.png";
import connectapp from "./projects/connectapp.png";
import varenaapp from "./projects/varenaapp.png";
import messaging from "./projects/messaging.png"
import ecommerce from "./projects/ecommerce.png"
import hobbliq from "./projects/hobbliq.jpg"

const project_data = [
  {
    id: 1,
    topic: "Hobbliq",
    stack: "React Js, Express Js, MongoDB, Cloudflare Bucket",
    doneAt: "2024",
    category: "Full Stack",
    github: "",
    image: hobbliq,
    url: "https://hobbliq-frontend.vercel.app/",
    description:
      "Hobbliq is a comprehensive event ticketing and management web application designed to streamline the entire event planning process. The platform helps event organizers collect attendee information, manage event registrations, and handle all event-related tasks in one unified system. Built with React for the frontend and Express.js for the backend, Hobbliq provides a seamless experience for both event organizers and attendees. The application features integrated task management capabilities, eliminating the need for separate task management tools. With MongoDB as the database and Cloudflare Bucket for file storage, Hobbliq offers a robust and scalable solution for events of all sizes. Organizers can efficiently track attendees, manage event logistics, and coordinate tasks all from a single platform, making event management more efficient and organized.",
  },
  {
    id: 2,
    topic: "Mfoniso Ecommerce API",
    stack: "Node Js, Express and Mongo DB",
    doneAt: "2023",
    category: "Backend Dev",
    github: "https://github.com/AirZED/eccommerce-backend",
    image: ecommerce,
    url: "https://ecommerce-backend-3p2x.onrender.com/api-docs",
    description:
      "The e-commerce project is a dynamic and user-friendly online platform designed to facilitate seamless product discovery, selection, and purchase. It empowers users to create, manage, and review products within an engaging and intuitive interface. The platform includes key functionalities such as user registration and authentication, product management enabling the creation, editing, and deletion of products, a shopping cart for adding, updating, and removing products, a secure and streamlined checkout process, user reviews for adding and viewing product feedback, and a search and filter feature for effortless product discovery.",
  },
  {
    id: 3,
    topic: "Anonymous API",
    stack: "Node Js, Express and Mongo DB",
    doneAt: "2023",
    category: "Backend Dev.",
    github: "https://github.com/AirZED/anonymous-messaging-backend",
    image: messaging,
    url: "https://documenter.getpostman.com/view/22877787/2s9Xxtzbwx",
    description:
      "Building a Secure and Anonymous Messaging Backend. In an age where privacy and confidentiality are paramount, I'm taking on the challenge of constructing a robust and secure backend system. My goal is to create a platform that enables users to exchange messages with complete anonymity and confidence. Empowering Anonymous Communication: My project is dedicated to providing a safe space for individuals to communicate without the fear of revealing their identities. I understand the importance of enabling candid conversations where users can express themselves freely, unencumbered by concerns about personal information exposure. Ensuring Data Security: Security is at the heart of my mission. I am committed to implementing state-of-the-art encryption and data protection measures to safeguard user information and messages. Your privacy is my top priority, and my system is designed to withstand potential threats.",
  },
  {
    id: 4,
    topic: "Nice Meals",
    stack: "React Js, Firebase and Redux",
    category: "Frontend Dev.",
    doneAt: "2022",
    image: meals,
    github: "https://github.com/AirZED/food-order-app",
    url: "https://food-order-app-pied.vercel.app/",
    description:
      "NiceMeals is a web application hosted on Vercel that is built with ReactJS, Firebase, React Router, and Redux. The platform allows users to browse through a collection of meals, add them to their cart, and complete their orders online. With a clean and modern user interface, users can easily navigate through the platform and interact with different features. Users can browse through different categories of meals, view detailed descriptions and images of each meal, and add their favorite meals to their cart. The platform also features a functionality that allows users to complete their orders online, make payments, and track their orders in real-time. Overall, this web application represents a great alternative to other platforms that offer similar functionality. If you're looking for a user-friendly platform to browse and order meals online, NiceMeals hosted on Vercel and powered by Firebase, ReactJS, React Router, and Redux is definitely worth checking out.",
  },
  {
    id: 5,
    category: "Frontend Dev.",
    topic: "AirBNB Clone",
    stack: "React Js",
    doneAt: "2022",
    image: airbnb,
    github: "https://github.com/AirZED/HNG-TASK-3",
    url: "https://hng3.vercel.app/Air%20BnB",
    description:
      "AirBNB Clone is a web application built with ReactJS, and React Router. The platform offers a simple and elegant landing page that allows users to search for properties by location, view detailed descriptions and images of each property, and book their desired accommodations. With a sleek and modern user interface, the landing page presents users with a variety of options to explore, making it easy to find and book the perfect accommodation. The platform also offers property owners the ability to create their own listings, manage bookings, and communicate with potential guests. Overall, this web application represents a great alternative to other platforms that offer similar functionality. If you're looking for a user-friendly platform to book accommodation options or create your own listings, AirBNB Clone hosted on Vercel and powered by Firebase and ReactJS is definitely worth checking out.",
  },
  {
    id: 6,
    topic: "StartHub Connect",
    stack: "React Js, Firebase and Redux",
    doneAt: "2023",
    category: "Frontend Dev.",
    github: "https://github.com/SIH-FRONTEND/sih-connect",
    image: connectapp,
    url: "https://start-hub-connect.web.app/",
    description:
      "Start Hub Connect is a web application built with Firebase, ReactJS, and React Router. The platform aims to connect startup founders and entrepreneurs with investors and mentors, providing a space for individuals to network, collaborate, and grow their businesses. With a sleek and modern user interface, users can easily create a profile, browse through a directory of other users, and connect with potential collaborators or investors. The platform also offers a variety of resources and tools to help users develop and grow their businesses, including access to mentorship, funding opportunities, and educational content. Overall, Start Hub Connect represents a great opportunity for individuals in the startup space to connect and collaborate with like-minded individuals. If you're looking to expand your network and grow your business, this platform is definitely worth checking out.",
  },
  {
    id: 7,
    topic: "Varena",
    stack: "React Js, Express Js, Node Js, MongoDB",
    doneAt: "2022",
    category: "Frontend Team",
    github: "https://github.com/workshopapps/nftcreatures.web",
    image: varenaapp,
    url: "https://varena.app/",
    description:
      "Varena is a free-to-play play-to-earn online NFT battle royale game where users send their NFT characters to battle each other for ultimate supremacy. The player's NFTs are made to compete against each other in a constant battle until there remains only one. Just like every other play-to-earn game, there is a reward the users benefit from as they play. In Varena the ultimate winner goes home with a $1000 cash reward. The battle takes place every day at a specific time (i.e 5pm WAT) and the winner is announced every day.",
  },
 
];

export default project_data;

const extra = [
  {
    id: 1,
    topic: "WSC InstaClone",
    stack: "React Js, IndexedDb and Dexie Js",
    doneAt: "2022",
    image: "./../assets/projects/mealapp.png",
    category: "Frontend Development",
    description:
      "WSC InstaClone is a ReactJS-based platform designed to offer users an immersive social media experience that closely resembles Instagram. With advanced features such as image sharing and browsing, users can connect with others, share their life experiences and interact with the community by liking and commenting on posts. Built with IndexedDB, this platform allows users to store data locally in their browser, so they can browse images and posts even when offline. The user interface is intuitive and user-friendly, making it easy for users to navigate and interact with the platform. If you're looking for a fun and engaging social media experience that is built with ReactJS and features IndexedDB, this app is definitely worth checking out.",
  },
  {
    id: 2,
    topic: "Coffee App",
    stack: "HTML, CSS and JavaScript",
    doneAt: "2021",
    category: "Frontend Development",
    image: "./../assets/projects/mealapp.png",
    description:
      " Built with HTML, CSS, and JavaScript, the platform features an intuitive user interface that allows users to easily book reservations at their preferred hotel. With a responsive design, the website is optimized for use on different devices, including mobile devices, tablets, and desktop computers. Users can easily search for hotels based on their preferred location, check-in and check-out dates, and the number of guests. The platform also features an interactive map that allows users to visualize the location of their preferred hotel. Overall, this web application is a great choice for users who are looking for a seamless hotel reservation experience. With its elegant design and intuitive user interface, it represents a great alternative to other hotel booking platforms. If you're looking for a user-friendly platform to book your next hotel reservation, the Coffee Hotel Site is definitely worth checking out.",
  },

  {
    id: 3,
    topic: "View Quotes",
    stack: "React Js, Firebase and Redux",
    doneAt: "2022",
    category: "Frontend Dev.",
    github: "https://github.com/AirZED/quotespage-with-react-router",
    image: quotes,
    url: "https://quotespage-with-react-router-4zu6.vercel.app/quotes",

    description:
      "View Quotes is a web application hosted on Vercel that is built with ReactJS, React Router, Firebase, and Redux. The platform allows users to view a collection of quotes, leave comments on them, and share them on social media platforms. With a clean and intuitive user interface, users can easily navigate through the platform and interact with different features. Users can browse through a collection of quotes, sort them by author or category, and also search for specific quotes. Users can also leave comments on their favorite quotes and engage in discussions with other users. The platform also features a functionality that allows users to share their favorite quotes on social media platforms such as Twitter and Facebook. Overall, this web application represents a great alternative to other platforms that offer similar functionality. If you're looking for a user-friendly platform to view, comment, and share quotes, View Quotes hosted on Vercel and powered by Firebase, ReactJS, React Router, and Redux is definitely worth checking out.",
  },
];
