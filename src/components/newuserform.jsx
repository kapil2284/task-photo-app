import { useState } from "react";
import '../styles/newuserform.css'
const NewUserForm = () =>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        phone: '',
        website: '',
      });

      const [formSubmitted,setFormSubmitted] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
    
        // Make a POST request using fetch
        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setFormSubmitted(true);
            console.log('Response data:', data);
          })
          .catch((error) => {
            // Handle errors
            console.error('Error:', error);
          });
      };
    
      const handleInputChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        console.log(value);
        const val = {[name]: value};
        setFormData({ ...formData, ...val });
      };
    
      return formSubmitted?<h3>Thanks for submitting the form</h3>:(
        <div className="container">
        <div className='newuserform'>
          <h1>Register new user</h1>
          <form onSubmit={handleSubmit}>
          <div className="row">
      <div className="col-25">
        <label>First Name</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name.."
          />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Last Name</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name.."
          />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >email</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email.."
          />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Address Line 1</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            placeholder="Address Line 1"
          />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Address Line 2</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            placeholder="Address Line 2"
          />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >City</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City.."
          />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Phone</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone.."
          />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Website</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="Website.."
          />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Company Name</label>
      </div>
      <div className="col-75">
      <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name.."
          />
      </div>
    </div>
    <div className="row lastrow">
      <button type="submit" value="Submit" name="formSubmit">Submit</button>
    </div>
          </form>
        </div>
        </div>
      );
}

export default NewUserForm