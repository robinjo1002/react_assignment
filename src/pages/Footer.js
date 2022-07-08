import React from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF); 

const Footer = () => {
  return (
    <div class="site-footer-wrapper centered dark">
      <div class="footer-divider"></div>
      <div class="site-footer">
        <ul class="footer-links structural">
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_faq_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href=""
              placeholder="footer_responsive_link_faq"
            >
              <span id="" data-uia="data-uia-footer-label">
                <Link to="/movie">Movies</Link>
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_faq_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href=""
              placeholder="footer_responsive_link_faq"
            >
              <span id="" data-uia="data-uia-footer-label">
                <Link to="/tv">TV Shows</Link>
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_faq_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href=""
              placeholder="footer_responsive_link_faq"
            >
              <span id="" data-uia="data-uia-footer-label">
                <Link to="/login">Login</Link>
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_faq_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href=""
              placeholder="footer_responsive_link_faq"
            >
              <span id="" data-uia="data-uia-footer-label">
              <Link to="">FAQ</Link>
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_help_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href=""
              placeholder="footer_responsive_link_help"
            >
              <span id="" data-uia="data-uia-footer-label">
              <Link to="">Help Center</Link>
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_account_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href=""
              placeholder="footer_responsive_link_account"
            >
              <span id="" data-uia="data-uia-footer-label">
              <Link to="">Account</Link>
              </span>
            </a>
          </li>

          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_corporate_information_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href=""
              placeholder="footer_responsive_link_corporate_information"
            >
              <span id="" data-uia="data-uia-footer-label">
                
                <Link to="">Corporate Information</Link>
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_contact_us_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href=""
              placeholder="footer_responsive_link_contact_us"
            >
              <span id="" data-uia="data-uia-footer-label">
                
                <Link to="">Contact Us</Link>
              </span>
            </a>
          </li>
        </ul>
        <div class="social_icons">
            <a href="https://www.facebook.com/Metacritic" target="_blank" rel="noopener" class="social_round"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
            <a href="https://www.instagram.com/metacritic/" target="_blank" rel="noopener" class="social_round"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://twitter.com/metacritic" target="_blank" rel="noopener" class="social_round"><FontAwesomeIcon icon={faCoffee} /></a>
        </div>
        <span className="trademark">© 2022 FOSSMINT, A RED VENTURES COMPANY. ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  );
};

export default Footer;
