const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
        <div className="flex mt-4 sm:justify-center sm:mt-0">
        <span className="text-sm text-gray-500 dark:text-gray-400">
    © 2024 <a href="/" className="hover:underline">Houstin Angwenyi</a>. All Rights Reserved.
  </span>

        </div>
        <hr className="my-6 border-gray300 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center mt-4 space-x-4">

  <span className="text-sm text-gray-500 dark:text-gray-400">
    Designed and developed by <a href="https://www.houstinangwenyi.com" className="hover:underline">Houstin Angwenyi</a>
  </span>
</div>
      </div>
    </footer>
  );
};


export default Footer
