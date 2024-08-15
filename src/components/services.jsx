import { Tilt } from "react-tilt";

const Services = () => {
  return (
    <section id="services" className="py-8 md:px-8 px-4 bg-gray-200 dark:bg-black">
      <div className="container mx-auto">
        <h2 className="text-black dark:text-white font-black mb-4 md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Services I Offer
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 350,
            }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col h-full">
              <img
                src="/icons/web.gif"
                alt="Web Development"
                className="w-24 h-24 mb-4 mx-auto"
              />
              <h3 className="text-xl font-medium text-center text-black dark:text-white">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-4 flex-grow">
                Building responsive and user-friendly websites using modern
                frameworks like React, Next.js, and Tailwind CSS. I ensure that
                your website is fast, scalable, and easy to maintain.
              </p>
            </div>
          </Tilt>

          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 350,
            }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col h-full">
              <img
                src="/icons/e-commerce.gif"
                alt="E-commerce Website Development"
                className="w-24 h-24 mb-4 mx-auto"
              />
              <h3 className="text-xl font-medium text-center text-black dark:text-white">
                E-commerce Website Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-4 flex-grow">
                I specialize in creating fully functional and user-friendly
                e-commerce websites tailored to your business needs. Whether
                you&apos;re starting a new online store or looking to revamp your
                existing one, I can help you build a robust platform that drives
                sales and enhances customer experience.
              </p>
            </div>
          </Tilt>

          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 350,
            }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col h-full">
              <img
                src="/icons/company.gif"
                alt="Company Profile Website Development"
                className="w-24 h-24 mb-4 mx-auto"
              />
              <h3 className="text-xl font-medium text-center text-black dark:text-white">
                Company Profile Website Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-4 flex-grow">
                Need a professional online presence for your company? I design and
                develop sleek and modern company profile websites that effectively
                showcase your brand, services, and achievements. Let&apos;s create a
                visually appealing platform that leaves a lasting impression on
                your visitors and provides them with an easy way to contact you.
              </p>
            </div>
          </Tilt>

          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 350,
            }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col h-full">
              <img
                src="/icons/custom.gif"
                alt="Custom Website Development"
                className="w-24 h-24 mb-4 mx-auto"
              />
              <h3 className="text-xl font-medium text-center text-black dark:text-white">
                Custom Website Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-4 flex-grow">
                Every business is unique, and so should be its website. I offer
                custom website development services tailored to your specific
                requirements. Whether you need a bespoke solution for your niche
                industry or a complex web application, I can turn your ideas into
                reality.
              </p>
            </div>
          </Tilt>

          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 350,
            }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col h-full">
              <img
                src="/icons/portfolio.gif"
                alt="Portfolio Website Development"
                className="w-24 h-24 mb-4 mx-auto"
              />
              <h3 className="text-xl font-medium text-center text-black dark:text-white">
                Portfolio Website Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-4 flex-grow">
                An online portfolio is your digital identity. I craft stunning
                portfolio websites that showcase your skills, experiences, and
                achievements in a compelling way. Let&apos;s create a platform that
                helps you stand out in your industry and in the job market.
              </p>
            </div>
          </Tilt>

          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 350,
            }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col h-full">
              <img
                src="/icons/api.gif"
                alt="API Integration"
                className="w-24 h-24 mb-4 mx-auto"
              />
              <h3 className="text-xl font-medium text-center text-black dark:text-white">
                API Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-4 flex-grow">
                Connecting your web applications with third-party services using
                robust and secure API integrations. I make sure your app
                communicates effectively with external platforms.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Services;
