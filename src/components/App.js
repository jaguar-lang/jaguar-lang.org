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
            <h1>
              <span>Jaguar is a</span>
              <br />
              <span>
                Reactive Programming Language
              </span>
            </h1>
            <a
              className="install-button"
              href={surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Notified When Its Available
            </a>
          </header>
          <div style={{ padding: 100, textAlign: 'center' }}>
            <div>
              <img src={logo} width={300} alt="Jaguar logo" />
            </div>
            <div style={{ maxWidth: 438, margin: '0 auto', textAlign: 'justify' }}>
              <p>
                You're here early! <b>Jaguar</b> is already 2+ years in the making,
                but many more are ahead before it's production ready. If
                you're interested in trying out pre-alpha releases or even
                contributing, <a href={surveyUrl} target="_blank" rel="noopener noreferrer">sign up to be notified</a>.
              </p>
              <p>
                More information to come.
              </p>
            </div>
          </div>
        </main>
        <footer>
          &copy; {copyright} <a href="https://twitter.com/_jayphelps" target="_blank" rel="noopener noreferrer">Jay Phelps</a>
        </footer>
      </div>
    );
  }
}

export default App;
