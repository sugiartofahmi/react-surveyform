const FormLayout = ({ children }) => {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-xl border-3 border-gray-200 rounded px-8 pt-6 pb-8 mb-4">
        {children}
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 by Fahmi. All rights reserved.
      </p>
    </div>
  );
};

export default FormLayout;
