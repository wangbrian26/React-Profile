import React from "react";

function About() {
  return (
    <section id="one" class="spotlight style1 bottom">
      <span class="image fit main">
        <img src="images/BrianHor.jpg" alt="Brian Horizontal Image" />
      </span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <header>
                <h2>Brian Wang</h2>
                <p>Full Stack Software Engineer</p>
              </header>
            </div>
            <div class="col-4 col-12-medium">
              <p>
                Brian is a current software engineer who has completed UCI's
                Full Stack Web Development Bootcamp. He is actively looking to
                improve his skills and hopes to join a company who will give him
                the environment to grow and learn.{" "}
              </p>
            </div>
            <div class="col-4 col-12-medium">
              <p>
                As a former teacher in Compton, CA, Brian hopes to one day be
                able to create powerful programs that can help recognize
                individual student needs and target those skills with fun and
                interactive activities.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#footer" class="goto-next scrolly">
        Next
      </a>
    </section>
  );
}

export default About;
