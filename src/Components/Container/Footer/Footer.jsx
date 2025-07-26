import React from "react";
import { Container } from "../Container";
import styles from "./Footer.module.scss";
import { FaInstagram, FaTwitter, FaRegEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>

          <div className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>Mega News</h2>
            <p className={styles.sectionText}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
              Egestas Purus Viverra Accumsan In Nisl Nisi. Arcu Cursus Vitae
              Congue Mauris Rhoncus Aenean Vel Elit Scelerisque. In Egestas Erat
              Imperdiet Sed Euismod Nisi Porta Lorem Mollis. Morbi Tristique
              Senectus Et Netus. Mattis...
            </p>
          </div>


          <div className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>Categories</h2>
            <ul className={styles.categoryList}>
              <li className={styles.categoryItem}>Culture</li>
              <li className={styles.categoryItem}>Fashion</li>
              <li className={styles.categoryItem}>Featured</li>
              <li className={styles.categoryItem}>Food</li>
              <li className={styles.categoryItem}>Healthy Living</li>
              <li className={styles.categoryItem}>Technology</li>
            </ul>
          </div>

          <div className={styles.newsletterSection}>
            <h2 className={styles.sectionTitle}>Newsletters</h2>
            <div className={styles.emailInput} style={{position: 'relative'}}>
              <FaRegEnvelope style={{position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: 18, pointerEvents: 'none'}} />
              <input
                type="email"
                placeholder="Write Your Email..."
                className={styles.emailField}
                style={{paddingLeft: 36}}
              />
            </div>
          </div>

          <div className={styles.socialSection}>
            <h2 className={styles.sectionTitle}>Social Network</h2>
            <div className={styles.socialButtons}>
              <button className={`${styles.socialButton} ${styles.instagram}`} style={{marginRight: 12}}>
                <FaInstagram className={styles.iconWhite} style={{marginRight: 6}} /> Instagram
              </button>
              <button className={`${styles.socialButton} ${styles.twitter}`}>
                <FaTwitter className={styles.iconWhite} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.footerSection}>
        <h2 className={styles.sectionTitle}>New Comments</h2>
          <div className={styles.commentsList}>
            <div className={styles.commentItem}>
              <strong className={styles.commentAuthor}>Ellamartx</strong>
              <p className={styles.commentText}>
                Hey Nice Post This Look ❤️ | Feel It Should Be Delicious. Thank
                You
              </p>
            </div>
            <div className={styles.commentItem}>
              <strong className={styles.commentAuthor}>Cassia</strong>
              <p className={styles.commentText}>
                Take A Rest, I'll Be Close Up You Again In 2 Next Game Go Go Go
              </p>
            </div>
            <div className={styles.commentItem}>
              <strong className={styles.commentAuthor}>Amanda</strong>
              <p className={styles.commentText}>
                You Were Stunning Today, Joe! ❤️ Great Match 🔥🔥
              </p>
            </div>
            <div className={styles.commentItem}>
              <strong className={styles.commentAuthor}>Denis Simonassi</strong>
              <p className={styles.commentText}>
                It Was A Great Match Today. Jeiran! You Did Great! 🏆
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Follow On Instagram</h2>
          <div className={styles.instagramGrid}>
            <div className={styles.instagramItem}></div>
            <div className={styles.instagramItem}></div>
            <div className={styles.instagramItem}></div>
            <div className={styles.instagramItem}></div>
            <div className={styles.instagramItem}></div>
            <div className={styles.instagramItem}></div>
            <div className={styles.instagramItem}></div>
            <div className={styles.instagramItem}></div>
            <div className={styles.instagramItem}></div>
          </div>
        </div>
      </footer>
      <div className={styles.footerBottom}>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>
              Privacy Policy
            </a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.footerLink}>
              Terms & Conditions
            </a>
          </div>
          <div className={styles.copyright}>
            All rights reserved © {new Date().getFullYear()}
          </div>
        </div>
    </Container>
  );
}
