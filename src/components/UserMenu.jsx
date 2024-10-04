import { HiUser } from "react-icons/hi";

export default function UserMenu({ name }) {
  return (
    <div>
      <p><HiUser className="my-icon" size="32" color="red"/> {name}</p>
    </div>
  );
};