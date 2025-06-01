import React from 'react';

const EmailInteraction = () => {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dietarydata = formData.getAll("dietaryRestrictions");
    const allData = {
      ...data,
      dietarydata
    };
    console.log(allData);
  }

  return (
    <section className='section-email'>
    <form onSubmit={handleSubmit}>
  <div className="form-grid">
    <div className="column">
      <div className="form-group">
        <label htmlFor="email" className="label-email">Email:</label>
        <input id="email" name="email" type="email" className="input-email" />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="label-email">Password:</label>
        <input id="password" name="password" type="password" className="input-email" />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="label-email">Description:</label>
        <textarea id="description" name="description" className="input-email" />
      </div>

      <fieldset className="form-group">
        <legend className="label-email">Employment Status:</legend>
        <label><input type="radio" name="employmentStatus" value="unemployed" /> Unemployed</label>
        <label><input type="radio" name="employmentStatus" value="part-time" /> Part-time</label>
        <label><input type="radio" name="employmentStatus" value="full-time" defaultChecked /> Full-time</label>
      </fieldset>
    </div>

    <div className="column">
      <fieldset className="form-group">
        <legend className="label-email">Dietary restrictions:</legend>
        <label><input type="checkbox" name="dietaryRestrictions" value="kosher" /> Kosher</label>
        <label><input type="checkbox" name="dietaryRestrictions" value="vegan" /> Vegan</label>
        <label><input type="checkbox" name="dietaryRestrictions" value="gluten-free" defaultChecked /> Gluten-free</label>
      </fieldset>

      <div className="form-group">
        <label htmlFor="favColor" className="label-email">What is your favorite color?</label>
        <select id="favColor" name="favColor" className="input-email" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </div>
    </div>
  </div>

  <div className="button-container-email">
    <button className="button-email">Submit</button>
  </div>
</form>
    </section>
  );
};

export default EmailInteraction;
