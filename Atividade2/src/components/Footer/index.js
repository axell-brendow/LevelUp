import React from 'react';
import './index.css';

function Footer() {
  return (
    <div className="footer-root">
      <footer className="footer-root footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Super Store</strong><br/><br/><small>Uma PWA construída utilizando Angular 8, Bulma, Font Awesome,
              Animate.css, Lodash e jQuery. O fonte deste projeto foi desenvolvido durante o workshop online<br/> <a
                  href="https://www.semanadoangular.com.br?utm_source=superstore&utm_medium=footer&utm_campaign=sda17">Semana
                do Angular 2017</a></small>
            </p>
            <small>
              Feito com carinho por <a
                href="https://stewan.io?utm_source=superstore&utm_medium=footer&utm_campaign=sda17">Stewan & Team</a>
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
