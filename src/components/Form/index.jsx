import FormLayout from "../../layouts/FormLayout";
import TextField from "../TextField";
import Button from "../Button";
const Form = () => {
  return (
    <FormLayout>
      <TextField
        label="Nama Lengkap"
        type="text"
        placeholder="Masukan Nama Lengkap"
      />
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="fullname"
        >
          Course
        </label>
        <div className="flex flex-col gap-y-4">
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              value="WP"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexRadioDefault1"
            >
              Web Programing
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              value="UI/UX"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexRadioDefault1"
            >
              UI/UX
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              value="SO"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexRadioDefault1"
            >
              Sistem Operasi
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              value="AP"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexRadioDefault1"
            >
              Algoritma Pemograman
            </label>
          </div>
        </div>
      </div>
      <TextField label="Kelas" type="text" placeholder="Masukan Kelas" />
      <div className="flex items-center justify-between">
        <Button type="submit" text="Submit" padding="px-5 py-1" />
      </div>
    </FormLayout>
  );
};
export default Form;
