import React from "react";

function About() {
  return (
    <>
      <section id="petPals" class="spotlight style2 right">
        <span class="image fit main">
          <img src="images/Pet-Pals.png" alt="Pet Pals Website" />
        </span>
        <div class="content">
          <header>
            <h2>Pet Pals</h2>
            <p>A new way for you to find friends for your pet pals.</p>
          </header>
          <p>
            Designed the backend using GraphQL, MongoDB, and Apollo Client.
            Designed front end using React and Material UI.
          </p>
          <ul class="actions">
            <li>
              <a
                href="https://hidden-headland-00556.herokuapp.com/"
                target="_blank"
                class="button"
              >
                Website
              </a>
            </li>
          </ul>
          <ul class="actions">
            <li>
              <a
                href="https://github.com/BryantTrinh/Pet-Pals-A-Social-Media-App-for-Pets"
                target="_blank"
                class="button"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <a href="#ourVacation" class="goto-next scrolly">
          Next
        </a>
      </section>

      <section id="ourVacation" class="spotlight style3 left">
        <span class="image fit main bottom">
          <img src="images/Our-Vacation.png" alt="Our Vacation Website" />
        </span>
        <div class="content">
          <header>
            <h2>Our Vacation</h2>
            <p>An one stop shop for you and your friends to plan a vacation.</p>
          </header>
          <p>
            Wrote the entire backend logic to handle all routes. Utilized MySQL
            database and RESTful API. Utilzed Handlebars.js and CSS to ensure
            front end looked nice.
          </p>
          <ul class="actions">
            <li>
              <a
                href="https://aqueous-forest-87623.herokuapp.com/"
                target="_blank"
                class="button"
              >
                Website
              </a>
            </li>
          </ul>
          <ul class="actions">
            <li>
              <a
                href="https://github.com/sickOfYourCodes/Group-Travel-Planner"
                target="_blank"
                class="button"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <a href="#pokemon" class="goto-next scrolly">
          Next
        </a>
      </section>

      <section id="pokemon" class="spotlight style2 right">
        <span class="image fit main">
          <img
            src="images/Pokemon-Battle-Simulator.png"
            alt="Pokemon Battle Simulator Website"
          />
        </span>
        <div class="content">
          <header>
            <h2>Pokemon Battle Simulator</h2>
            <p>A fun, turn-based, "Pokemon" game.</p>
          </header>
          <p>
            Designed backend JavaScript logic using API requests. Designed
            frontend HTML and CSS to ensure mobile responsiveness.
          </p>
          <ul class="actions">
            <li>
              <a
                href="https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/"
                target="_blank"
                class="button"
              >
                Website
              </a>
            </li>
          </ul>
          <ul class="actions">
            <li>
              <a
                href="https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator"
                target="_blank"
                class="button"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <a href="#footer" class="goto-next scrolly">
          Next
        </a>
      </section>
      {/* <section id="four" class="spotlight style3 left">
      <span class="image fit main bottom"><img src="images/pic04.jpg" alt="" /></span>
      <div class="content">
        <header>
          <h2>Interdum felis blandit praesent sed augue</h2>
          <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
        </header>
        <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
          mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing
          lorem.</p>
        <ul class="actions">
          <li><a href="#" class="button">Learn More</a></li>
        </ul>
      </div>
      <a href="#footer" class="goto-next scrolly">Next</a>
    </section> */}
    </>
  );
}

export default About;
