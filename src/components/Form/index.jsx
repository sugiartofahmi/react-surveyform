import FormLayout from "../../layouts/FormLayout";
import TextField from "../TextField";
import Button from "../Button";
import Select from "../Select";
import { useState } from "react";
const Form = () => {
  const selectCourse = [
    {
      name: "Web",
      value: "web",
    },
    {
      name: "UI/UX",
      value: "ui/ux",
    },
    {
      name: "Operating System",
      value: "so",
    },
  ];
  const [fields, setFields] = useState({
    name: "",
    kelas: "",
    course: "",
  });

  return (
    <FormLayout>
      <h1>{fields.course}</h1>
      <TextField
        label="Nama Lengkap"
        type="text"
        placeholder="Masukan Nama Lengkap"
        value={fields["name"]}
        onChange={(e) => setFields({ ...fields, ["name"]: e.target.value })}
      />
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Course
        </label>
        <Select
          onChange={(e) => setFields({ ...fields, ["course"]: e.target.value })}
          data={selectCourse}
        />
      </div>
      <TextField
        value={fields["kelas"]}
        onChange={(e) => setFields({ ...fields, ["kelas"]: e.target.value })}
        label="Kelas"
        type="text"
        placeholder="Masukan Kelas"
      />
      <div className="flex items-center justify-between">
        <Button type="submit" text="Submit" padding="px-5 py-1" />
      </div>
    </FormLayout>
  );
};
export default Form;
