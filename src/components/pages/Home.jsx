import React, {Component} from 'react';
import axios from 'axios'

class Home extends Component{
    state = {
        post : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                this.setState({
                    post: res.data.slice(0,50)
                })
            })
    }
    render(){
        const {post} = this.state
        const listOfPost = post.length 
        ? (
            post.map(post => {
                return (
                    <div className = "post card" key = {post.id}>
                        <div className = "card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        )
        : (
            <div className =  "text-center">
                <p>No Post Yet!!</p>
            </div>
        )

        return (
            <div className  = "text-center">
                <h1>Home Page</h1>
                {listOfPost}
            </div>
        )
    }
}
export default Home