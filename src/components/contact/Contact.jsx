import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contact, contactDelete }) => {
  const { name, number, id } = contact;

  const deleteContact = () => {
    contactDelete(id);
  };
  return (
    <>
      <ul className={css["contact-info"]}>
        <li>
          <FaUser />
          {name}
        </li>
        <li>
          <FaPhoneAlt />
          {number}
        </li>
      </ul>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </>
  );
};

export default Contact;
