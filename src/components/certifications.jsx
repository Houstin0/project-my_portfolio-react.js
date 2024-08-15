const Certifications = () => {
  return (
    <section className="md:py-8 md:px-8 px-4 bg-gray-200 dark:bg-black">
              <span className="hash-span" id="certifications">
        &nbsp;
      </span>
      <span className="hash-span">
        &nbsp;
      </span>
      <div className="container mx-auto">
        <h2 className="text-black dark:text-white font-black mb-4 md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Certifications & Badges
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
          <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6">
            <img
              src="Moringa_cert.jpg"
              alt="Certification Logo"
              className="w-full h-50 object-fill mb-4"
            />
            <h3 className="text-xl font-medium text-black dark:text-white">
              Software Engineering Certificate
            </h3>
            <h3 className="text-base font-bold text-black dark:text-white">
              Moringa School
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Certificate awarded for successfully completing the Software
              Engineering course at Moringa School. The
              program covered both back-end and front-end technologies,
              incorporating content from Flatiron School.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6">
            <blockquote
              className="badgr-badge bg-white p-3"
              style={{
                fontFamily:
                  'Helvetica, Roboto, "Segoe UI", Calibri, sans-serif',
              }}
            >
              <a href="https://api.badgr.io/public/assertions/L9kDvGVPT5-cqcHfF4Az0g?identity__email=houstin00%40gmail.com"   target="_blank"
  rel="noopener noreferrer">
                <img
                  width="120px"
                  height="120px"
                  src="https://api.badgr.io/public/assertions/L9kDvGVPT5-cqcHfF4Az0g/image"
                  alt="Postman API Fundamentals Student Expert Badge"
                />
              </a>
              <p
                className="badgr-badge-name"
                style={{
                  hyphens: "auto",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontStretch: "normal",
                  lineHeight: 1.25,
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: "#05012c",
                }}
              >
                Postman API Fundamentals Student Expert
              </p>
              <p
                className="badgr-badge-date"
                style={{
                  margin: 0,
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontStretch: "normal",
                  lineHeight: 1.67,
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: "#555555",
                }}
              >
                <strong
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontStretch: "normal",
                    lineHeight: 1.67,
                    letterSpacing: "normal",
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  Awarded:
                </strong>
                Aug 15, 2024
              </p>
              <p style={{ margin: "16px 0", padding: 0 }}>
                <a
                  className="badgr-badge-verify hover:bg-purple-500"
                  target="_blank"
                  href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FL9kDvGVPT5-cqcHfF4Az0g%3Fidentity__email%3Dhoustin00%2540gmail.com&identity__email=houstin00%40gmail.com"
                  style={{
                    boxSizing: "content-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: "bold",
                    width: "48px",
                    height: "16px",
                    borderRadius: "4px",
                    border: "solid 1px black",
                    textDecoration: "none",
                    padding: "6px 16px",
                    color: "black",
                  }}
                >
                  VERIFY
                </a>
              </p>
              <script
                async="async"
                src="https://badgr.com/assets/widgets.bundle.js"
              ></script>
            </blockquote>
            <h3 className="mt-2 text-base font-bold text-black dark:text-white">
              Postman
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Certified Postman API Fundamentals Student Expert, demonstrating
              proficiency in essential API skills and usage. Gained hands-on
              experience with API concepts, including making GET, POST, PATCH,
              and DELETE requests, working with query parameters, headers, and
              response codes. Skilled in basic scripting, API key authorization,
              and integrating APIs into applications. This certification
              highlights my ability to effectively consume and utilize APIs in
              modern software development.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6">
            <a
              href="https://media.geeksforgeeks.org/courses/certificates/d3d6634adc87bc4fa6be301c283cdde1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="geekforgeeks_cert.png"
                alt="Certification Logo"
                className="w-full h-50 object-fill mb-4"
              />
            </a>

            <h3 className="text-xl font-medium text-black dark:text-white">
              API Bootcamp Certificate
            </h3>
            <h3 className="text-base font-bold text-black dark:text-white">
              GeeksforGeeks
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sucessfully completed a 5-week course on GeeksforGeeks API
              Bootcamp - Sponsored by Postman
            </p>
            <a
              href="https://media.geeksforgeeks.org/courses/certificates/d3d6634adc87bc4fa6be301c283cdde1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Certification
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
