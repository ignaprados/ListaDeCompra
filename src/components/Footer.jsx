import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a
        href="https://ignacioprados.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          {" "}
          <span>© {year} Made by IgnacioPrados</span>
        </p>
      </a>
    </footer>
  );
}

export default Footer;
