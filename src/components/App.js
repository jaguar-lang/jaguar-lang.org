import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

const copyright = (() => {
  const start = 2018;
  const now = (new Date()).getFullYear();

  if (now > start) {
    return `${start}-${now}`;
  } else {
    return start;
  }
})();

const surveyUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSckhGi-XRhNlQFAjYuJx8MrjbypJHsyIh1tR8QpkDppgZxE-Q/viewform?embedded=true';

class App extends Component {
  render() {
    return (
      <div className="home-page">
        <main>
          <nav>
            <div className="nav-gutter">
              <div className="logo">
                <img src={logo} width={48} alt="" />
                <span>Jaguar</span>
              </div>
              <ul>
                <li><a href="https://github.com/jaguar-lang/jaguar">Coming <span className="line-through">Soon</span> at some point...</a></li>
                {/*
                <li><a href="">Install</a></li>
                <li><a href="">Community</a></li>
                <li><a href="">Contribute</a></li>
                */}
              </ul>
              <div className="nav-spacer" />
              <div className="nav-social">
                <a  
                  className="github-button"
                  href="https://github.com/jaguar-lang/jaguar"
                  data-size="large"
                  aria-label="Star jaguar-lang/jaguar on GitHub"
                >
                  Github
                </a>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/jaguarlang"
                  data-size="large"
                  data-show-count="false"
                  data-show-screen-name="false"
                  data-dnt="true"
                >
                  Follow @jaguarlang on Twitter
                </a>
              </div>
            </div>
          </nav>
          <header>
            <div className="tagline">
              <div>
                Jaguar is a
              </div>
              <div>
                Reactive Programming Language
              </div>
            </div>
            <a
              className="install-button"
              href={surveyUrl}
            >
              Get Notified When It's Available
            </a>
          </header>
          <div style={{ padding: 100, textAlign: 'center' }}>
            <div>
              <img src={logo} width={300} alt="Jaguar logo" />
            </div>
            <div style={{ maxWidth: 466, margin: '0 auto', textAlign: 'justify' }}>
              <p>
                You're here early! <b>Jaguar</b> is already 2+ years in the
                making, and there may be many more ahead before it's production
                ready. You can <a href={surveyUrl}>sign up to be notified</a> when
                the first pre-alpha releases come out.
              </p>
              <p>
                Jaguar is currently developed solely by <a href="https://twitter.com/_jayphelps">Jay Phelps</a> in
                his free time. He'd love to dedicate much more time so things
                progressed quicker and other early-stage contributors had additional
                incentive. If this is interests you, or you appreciate Jay's other
                OSS contributions, consider <a href="https://www.patreon.com/jayphelps">becoming a Backer on Patreon</a>.
              </p>
              <p style={{ textAlign: 'center', marginTop: 36 }}>
                <a className="primary medium button" href="https://www.patreon.com/jayphelps">
                  Become a Backer
                </a>
              </p>
            </div>
          </div>
        </main>
        <footer>
          &copy; {copyright} <a href="https://twitter.com/_jayphelps">Jay Phelps</a>
        </footer>
      </div>
    );
  }
}

export default App;
