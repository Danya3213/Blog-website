import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

import "./NewPosts.scss";

export const NewPosts = () => {
  const [savedPosts, setSavedPosts] = useState([]);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "12 Mobile UX Design Trends For 2018",
      description:
        "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
      author: "Jon Kantner",
      date: "July 14, 2022",
      image:
        "https://te-st.org/wp-content/uploads/2020/11/apps_title-1024x633.jpg",
      isSaved: false,
    },
    {
      id: 2,
      title: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      description:
        "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      author: "James",
      date: "July 12, 2022",
      image:
        "https://winnebagoanimals.org/wp-content/uploads/2021/08/squirrel.jpg",
      isSaved: false,
    },
    {
      id: 3,
      title: "How To Become A Master Designer",
      description:
        "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition…",
      author: "Linda",
      date: "July 10, 2022",
      image:
        "https://penji.co/wp-content/uploads/2022/10/john-jennings-fg7J6NnebBc-unsplash-scaled-e1679333271247.jpg.webp",
      isSaved: false,
    },
    {
      id: 4,
      title: "No Boat Bottomfish: Jetty Fishing On The...",
      description:
        "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you looking to go fishing and bring home deliciou",
      author: "Louis Hoevenburgs",
      date: "July 13, 2022",
      image:
        "https://images.squarespace-cdn.com/content/v1/62581449c1ecb34599a1321e/1680196569416-9J0E63M8IWO7M51QOO3A/unsplash-image-dP6i0grBlTY.jpg",
      isSaved: false,
    },
    {
      id: 5,
      title: "Becoming A Self-Driving Car & Machine Learning...",
      description:
        "How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite a journey for me. A year ago I left my full-time",
      author: "Cassie Evans",
      date: "July 12, 2022",
      image:
        "https://images.unsplash.com/photo-1619848156437-44a0466fbc21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isSaved: false,
    },
    {
      id: 6,
      title: "This Free Course Can Teach You Music...",
      description:
        "A Berlin-based music software company, just released a free interactive music course that runs right in your browser. One thing that",
      author: "Patricia",
      date: "July 9, 2022",
      image:
        "https://sensormedia.com.ua/wp-content/uploads/2025/03/tozh-otrymuyuchy-shhorazu-shans-pryyednatysya-do-zajchykiv-%E2%80%94-spershu-na-zaproshennya-zgodom-povertayuchys-do-nyh-u-dumkah-i-vchynkah-%E2%80%94-vona-hapayet.webp",
      isSaved: false,
    },
  ]);

  const handleSavePost = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, isSaved: !post.isSaved }
          : post
      )
    );

    setSavedPosts(prevSaved => {
      const post = posts.find(post => post.id === postId);

      if (post.isSaved) {
        return prevSaved.filter(id => id !== postId);
      } else {
        return [...prevSaved, post];
      }
    });
  };

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const latestPosts = sortedPosts.slice(0, 6);

  return (
    <section className="new-posts">
      <div className="container new-posts__container">
        <div className="new-posts__box">
          <h2 className="new-posts__title">New Posts</h2>
          <a className="new-posts__more" href="#">
            Show All
            <span className="new-posts__arrow">
              <IoIosArrowForward
                size={16}
                style={{ fill: "rgba(62, 50, 50, 0.50)" }}
              />
            </span>
          </a>
        </div>
        <ul className="new-posts__list">
          {latestPosts.map((post, index) => (
            <li key={index} className="new-posts__item">
              <img
                src={post.image}
                alt={post.title}
                className="new-posts__image"
              />
              <div className="new-posts__content">
                <div>
                  <h3 className="new-posts__subtitle">{post.title}</h3>
                  <p className="new-posts__description">{post.description}</p>
                </div>
                <div className="new-posts__managment">
                  <img className="new-posts__avatar" src="#" alt="" />
                  <div className="new-posts__info">
                    <a className="new-posts__author" href="#">
                      {post.author}
                    </a>
                    <span className="new-posts__date">{post.date}</span>
                  </div>
                  <button
                    className="new-posts__save"
                    onClick={() => handleSavePost(post.id)}
                  >
                    {post.isSaved ? (
                      <FaBookmark style={{ fill: "#3E3232" }} />
                    ) : (
                      <FaRegBookmark style={{ fill: "rgba(62, 50, 50, 0.50)" }} />
                    )}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
