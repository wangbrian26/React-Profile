import React from "react";

function About() {
  window.scrollTo(0, 0);
  return (
    <>
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
                  <p>
                    Full Stack Software Engineer
                    <br />
                    Fountain Valley
                  </p>
                </header>
              </div>
              <div class="col-4 col-12-medium">
                <p>
                  Brian is a current software engineer who has completed UCI's
                  Full Stack Web Development Bootcamp. He is actively looking to
                  improve his skills and hopes to join a company who will give
                  him the environment to grow and learn.{" "}
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
        <a href="#main" class="goto-next scrolly">
          Next
        </a>
      </section>
      <div id="main" class="wrapper style1">
        <div class="container">
          <div class="row gtr-150">
            <div class="col-4 col-12-medium">
              <section id="sidebar">
                <section>
                  <h3>Education</h3>
                  <h5>University of California, Irvine 2022-2023</h5>
                  <p>Full Stack Web Development Certificate</p>
                  <h5>Loyola Marymout University 2019-2020</h5>
                  <p>Teaching Credential</p>
                  <h5>University of California, Santa Barbara 2015-2020</h5>
                  <p>
                    Bachelor of Arts in English
                    <br />
                    Minor in Applied Psyhcology and Education
                  </p>
                </section>
                <hr />
                <section>
                  <h3>Leadership and Volunteer</h3>
                  <h5>Teaching Assistant</h5>
                  <p>
                    Volunteered in Elementary, Middle, and High Schools in and
                    around Santa Barbara County.
                  </p>
                  <h5>Vietnamese Student Association</h5>
                  <p>
                    Wrote and directed a 3 hour production with over 200
                    students and a budget of over $20,000. Fundraised over
                    $10,000 for various charities.
                  </p>
                  <h5>Taiwanese American Student Association</h5>
                  <p>
                    Spearheaded fundraisers that raised over $6,000 for various
                    charities.
                  </p>
                </section>
              </section>
            </div>
            <div class="col-8 col-12-medium imp-medium">
              <section id="content">
                <h3>Experience</h3>
                <h4>Green Dot Public Schools</h4>
                <h5>Instructional Steering Committee</h5>
                <p>
                  Wrote and proposed Green Dot Public School's 5 year technology
                  plan. Oversaw the implementation of new technologies in the
                  district. Determined which educational technology contracts to
                  proceed with.
                </p>
                <h5>Culture/Grade Level Lead</h5>
                <p>
                  Proposed and implemented various programs to improve student
                  engagement and achievement. Communicated teacher's concerns
                  with administrators. Collaborated with administrators to
                  improve school culture.
                </p>
                <h5>ELA Teacher</h5>
                <p>
                  Helped improve students' reading levels by an average of 2
                  years.
                </p>
                <h4>University of California, Santa Barbara</h4>
                <h5>Cultural Mentor Program Director</h5>
                <p>
                  Oversaw the Cultural Mentor and Mentee Program that helped
                  over 200 first year students successfully transition into
                  college.
                </p>
                <h5>Check, Connect, and Respect Mentor</h5>
                <p>
                  Coordinated with a small team that checked in with high risk
                  students at a local high school to promote better academic and
                  social engagement.
                </p>
                <h4>Nikka Ramen</h4>
                <h5>Assistant Manager</h5>
                <p>
                  Integrated 3 new software systems into the workforce. Trained
                  and managed a team of 15 workers.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
