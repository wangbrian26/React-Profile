import React from "react";

function Footer() {
  return (
    <footer id="footer">
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
      <ul class="copyright">
        <li>&copy; Brian Wang 2023. All rights reserved.</li>
      </ul>
    </footer>
  );
}

export default Footer;
