import React, {Component}from 'react'
import axios from  'axios'
class Feed  extends Component{
    state ={
        comments : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res =>{
                this.setState({
                    comments : res.data.slice(0, 100)
                })
        })
    }
    render(){
        const { comments } = this.state
        const listOfcomments = comments.length 
        ? comments.map(comments =>{ 
            return(
                <div className="comment card">
                    <div className="card-content">
                        <span className = "card-title">@{comments.email}</span>
                        <h4>{comments.name}</h4>
                        <p>{comments.body}</p>
                    </div>
                </div>
            )
        })
        :(
            <div className = "center">
                <p>NO FEED!!!</p>
            </div>
        )
        return(
            <div className = "text-center">
                <h1>Feed</h1>
                {listOfcomments}
            </div>
        )
        }
}
export default Feed