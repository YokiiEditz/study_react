//import { Component } from 'react';

// class ChildComponent extends Component {

//     render() {
//         return <div>This is the Child Component!</div>;
//     }
// }

// export default ChildComponent;

// "use strict"
// import { Component } from 'react'

// export default class ChildComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     increment() {
//         this.setState({ count: this.state.count + 1 });
//     }

//     render() {
//         return (
//             <div>
//                 Count: {this.state.count}
//                 <button onClick={() => this.increment()}>Increment</button>
//             </div>
//         );
//     }
// }


// // class ChildComponent extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             users: [],
// //             isLoading: true
// //         };
// //     }

// //     componentDidMount() {
// //         fetch('https://jsonplaceholder.typicode.com/users')
// //             .then(response => response.json())
// //             .then(data => {
// //                 this.setState({
// //                     users: data,
// //                     isLoading: false
// //                 });
// //             })
// //             .catch(error => console.error('Error fetching users:', error));
// //     }

// //     render() {
// //         const { users, isLoading } = this.state;

// //         if (isLoading) {
// //             return <div>Loading...</div>;
// //         }

// //         return (
// //             <div>
// //                 <h2>User List</h2>
// //                 <ul>
// //                     {users.map(user => (
// //                         <li key={user.id}>{user.name}</li>
// //                     ))}
// //                 </ul>
// //             </div>
// //         );
// //     }
// // }


// class ChildComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: null,
//             isLoading: false,
//             error: null
//         };
//     }

//     componentDidMount() {
//         this.setState({ isLoading: true });
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(data => {
//                 const timer = () => (
//                     setTimeout(
//                         () => {
//                             console.log("Timer is here!!!");
//                             this.setState({ data, isLoading: false })
//                         }, 3000))
//                 timer()
//                 return () => { console.log("timer is cleared!!"); clearTimeout(timer) }
//             })
//             .catch(error => this.setState({ error, isLoading: false }));
//     }

//     componentDidUpdate(prevProps) {
//         // Fetch new data if the component receives new props
//         if (this.props.url !== prevProps.url) {
//             this.setState({ isLoading: true });
//             fetch(this.props.url)
//                 .then(response => response.json())
//                 .then(data => this.setState({ data, isLoading: false }))
//                 .catch(error => this.setState({ error, isLoading: false }));
//         }
//     }

//     componentWillUnmount() {
//         const { timerId } = this.state;
//         if (timerId) {
//             console.log("timer is cleared!!");
//             clearTimeout(timerId); // Cancel the timer
//         }
//     }

//     render() {
//         const { data, isLoading, error } = this.state;

//         if (isLoading) {
//             return <div>Loading...</div>;
//         }

//         if (error) {
//             return <div>Error: {error.message}</div>;
//         }

//         return (
//             <div>
//                 {data && (
//                     <div>
//                         <h2>Data</h2>
//                         <div>{JSON.stringify(data, null, 2)}</div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }


// export default ChildComponent;
