import React, { Component } from 'react';

class Footer extends Component {

  render() {

    return (
      <div className="Footer">
        <div className="info logo">&copy; 2017 &mdash; Sparta Plaesent</div>
        <div className="info dash"> &ndash; </div>
        <div className="info links">
          <a href="/" className="link" target="_blank">Instagram</a> &ndash; <a href="/" className="link" target="_blank">Facebook</a> &ndash; <a href="/" className="link" target="_blank">Twitter</a>
        </div>
      </div>
    );
  }
}

export default Footer;