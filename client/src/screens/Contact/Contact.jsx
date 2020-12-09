import React from 'react';
import './Contact.css'

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <div className='contact'>
          <h2 id='proj-name'>CONTACT</h2>
          
          <section className='contact-section'>

            <form
            className='contact-form'
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xdopwggw"
            method="POST"
            >
            
            <label className='contact-label'>EMAIL:</label>
            <input className='input' type="email" name="email" />
            <label className='contact-label'>MESSAGE:</label>
            <input className='input' type="textarea" name="message" />
            {status === "SUCCESS" ? <p>Thanks for reaching out!</p> : <button className='submit-button'>SUBMIT</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>

          </section>
        </div>
    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}