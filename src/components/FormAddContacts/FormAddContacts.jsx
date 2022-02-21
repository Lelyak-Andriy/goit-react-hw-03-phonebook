import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FormAddContacts.module.css";

class FormAddContacts extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChangeName = (name) => {
    this.setState({ name });
  };

  handleChangeNumber = (number) => {
    this.setState({ number });
  };

  handleClearForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    const { addContact } = this.props;
    const nameApp = this.state.name;
    const numberApp = this.state.number;
    return (
      <form
        className={styles.form}
        onSubmit={(e) => {
          this.handleClearForm();
          return addContact(e, nameApp, numberApp);
        }}
      >
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name Surname"
            value={name}
            onChange={(e) => this.handleChangeName(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            type="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Phone"
            value={number}
            onChange={(e) => this.handleChangeNumber(e.target.value)}
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default FormAddContacts;
