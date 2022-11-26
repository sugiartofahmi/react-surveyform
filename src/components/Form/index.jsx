import FormLayout from "../../layouts/FormLayout";
import TextField from "../TextField";
import Button from "../Button";
import Radio from "../Radio";
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
          <Radio label="Web Programing" value="web" />
          <Radio label="UI/UX" value="ui/ux" />
          <Radio label="Operating System" value="os" />
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
