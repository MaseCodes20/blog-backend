import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2">
      <div className="mx-auto text-center">
        <p>
          Built by{" "}
          <a
            href="https://www.masecodes.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            MaseCodes
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
