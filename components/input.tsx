type InputProps = {
  title: string;
  type: 'text' | 'email' | 'password';
  name: string;
  placeholder: string;
  required: boolean;
};

export function Input({
  title,
  type,
  name,
  placeholder,
  required,
}: InputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-semibold' htmlFor={name}>
        {title}
      </label>
      <input
        className='rounded-md border px-5 py-2 outline-none ring-blue-500 focus:ring-2'
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </div>
  );
}
