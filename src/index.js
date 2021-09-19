import "./style.css";
import React from "react";
import ReactDOM from "react-dom";

class Rea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (    
            <div id="language">    
                <p>{this.state.count}</p>
                <h1>React</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                +
                </button>
            </div>
            );
        }
    }

class Vue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (    
            <div id="language">    
                <p>{this.state.count}</p>
                <h1>Vue</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                +
                </button>
            </div>
            );
        }
    }

    class Angular extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }
        render() {
            return (    
                <div id="language">    
                    <p>{this.state.count}</p>
                    <h1>Angular</h1>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    +
                    </button>
                </div>
                );
            }
        }

        class Ember extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    count: 0
                };
            }
            render() {
                return (    
                    <div id="language">    
                        <p>{this.state.count}</p>
                        <h1>Ember</h1>
                        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                        +
                        </button>
                    </div>
                    );
                }
            }
            
const App = (props) => {
    return React.createElement('h2', { style: { textAlign: 'center'}}, 'Vote Your JS Library!', React.createElement(Rea), React.createElement(Vue), React.createElement(Angular), React.createElement(Ember));
}

ReactDOM.render(<App />, document.getElementById('root'));

