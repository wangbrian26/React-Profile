import React from "react";
import { Link } from "react-router-dom";

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <section id="banner">
        <div class="content">
          <header>
            <h2>Brian Wang</h2>
            <p>
              Hi! I am a full stack developer who aims to learn and
              <br />
              develop, in order to create future programs for students
              <br />
              and teachers to improve their learning experience.
            </p>
            <h4>
              Hi! I am a full stack developer who aims to learn and develop in order to create programs for students and teachers to improve their learning experience.
            </h4>
          </header>
          <span class="image">
            <img src="/images/BrianTwo.PNG" alt="Brian Wang" />
          </span>
          <ul class="icons">
            <li>
              <a
                href="http://www.linkedin.com/in/wangbrian26"
                target="_blank"
                class="icon brands alt fa-linkedin-in"
              >
                <span class="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="http://www.github.com/wangbrian26"
                target="_blank"
                class="icon brands alt fa-github"
              >
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto: brian.wang.19@tfacorps.org"
                class="icon solid alt fa-envelope"
              >
                <span class="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="#skills" class="goto-next scrolly">
          Next
        </a>
      </section>
      <section id="skills" class="wrapper style1 special fade-up">
        <div class="container">
          <header class="major">
            <h2>Full Stack Developer Skills</h2>
            <p>
              Through UCI's Web Development Bootcamp, I am proficient in the
              following skills and more:
            </p>
          </header>
          <div class="box alt">
            <div class="row gtr-uniform">
              <section class="col-4 col-6-medium col-12-xsmall">
                <span class="icon solid alt major fa-solid fa-database"></span>
                <h3>MongoDB</h3>
              </section>
              <section class="col-4 col-6-medium col-12-xsmall">
                <span class="icon solid alt major fa-server"></span>
                <h3>MySQL</h3>
              </section>
              <section class="col-4 col-6-medium col-12-xsmall">
                <span class="icon solid alt major fa-server"></span>
                <h3>GraphQL</h3>
                {/* <p>
                  Feugiat accumsan lorem eu ac lorem amet accumsan donec.
                  Blandit orci porttitor.
                </p> */}
              </section>
              <section class="col-4 col-6-medium col-12-xsmall">
                <span class="icon solid alt major fa-object-group"></span>
                <h3>React</h3>
              </section>
              <section class="col-4 col-6-medium col-12-xsmall">
                <span class="icon solid alt major fa-keyboard"></span>
                <h3>JavaScript</h3>
              </section>
              <section class="col-4 col-6-medium col-12-xsmall">
                <span class="icon solid alt major fa-user"></span>
                <h3>Python</h3>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
