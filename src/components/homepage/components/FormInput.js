import React from "react";

class FormInput extends React.Component {
  render() {
    return (
      <div id="form-input" className="text-center mid-container">
        <form>
          <fieldset className="cf">
            <input
              id="shorten_url"
              taborder="1"
              name="url"
              type="text"
              className="shorten-input"
              placeholder="Paste a link to shorten it"
              value=""
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
            />
            <input
              id="shorten_btn"
              type="submit"
              className="button button-primary button-large shorten-button"
              value="Shorten"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default FormInput;
