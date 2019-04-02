import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HTML/CSS</h1>
        <h2>A beautiful demonstration</h2>
        <div className="outter_box">
          outter box
         <div className="inner_box">
          inner box
         </div>
        </div>
        <div className="float">
          This is <p className="display">floating</p>  to the right and using <p className="font">display: block</p> to show floating in the middle!
        </div>
        <div className="background_image"><p>Check out this sweet background image!</p></div>
        <div className="position_box">
          <div className="relative">relative</div>
          <div className="absolute">absolute</div>
          <div className="fixed">fixed</div>
        </div>
        <div className="selectors">
          <p className="selectors_title">Selectors Box*</p>
          <br/>
          <span className="selectors_dot">This element <span>is</span>** using className(.) as the selector</span>
          <span id="selectors_id">This element <span>is</span>** using id(#) as the selector</span>
          <br/>
          <br/>
          *<span className="selectors_explanation">this effect was brought to you by the CSS selector "+" (div + p).</span>
          <br/>
          **<span className="selectors_explanation">"<span>is</span>" using ">" as a selector to select any "span" wrapped in another "span" element and turn it <span>red</span>!</span>
        </div>
        <div className="animations">
          <p>Animations BABY!!!</p>
          <div className="keyframe_box">
            <p>Keyframe Fun!!!</p>
          </div>
          <div className="transition_box">
            <p>Trasition Fun!!!</p>
          </div>
          <div className="transform_box">
            <p>Transformation Fun!!!</p>
          </div>
        </div>
        <div className="grid">
          <div className="item1">Header</div>
          <div className="item2">Menu</div>
          <div className="item3">Main</div>
          <div className="item4">Right</div>
          <div className="item5">Footer</div>
        </div>
        <article>
          <h1>Article Tag</h1>
          <p>This section of the site is using an article tag. </p>
        </article>
        <section>
          <h1>Section Tag</h1>
          <p>This section of the site is using a section tag</p>
        </section>
        <footer>This is a footer tag</footer>
        <img className="pic" src="https://images.unsplash.com/photo-1531750985903-9018577a2472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="cool pic"/>
        <p className="pic_p">^^self closing tag yalllllll</p>
      </div>
    );
  }
}

export default App;
