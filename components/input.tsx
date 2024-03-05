type InputProps = {
  title: string;
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  required: boolean;
};

export function Input({ title, type, name, placeholder, required }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor={name}>
        {title}
      </label>
      <input
        className="border rounded-md py-2 px-5 outline-none focus:ring-2 ring-blue-500"
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </div>
  );
}
