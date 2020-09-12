import React, { Component } from 'react'

class Test extends Component
{

    state = {
        title: '',
        body: ''
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({

                title: data.title,
                body: data.completed
            }))

    }



    // componentWillMount()
    // {
    //     console.log('component will mount')
    // }

    // componentDidUpdate()
    // {
    //     console.log('component will mount')
    // }

    // UNSAFE_componentWillReceiveProps(nextProps, nextState)
    // {
    //     console.log('components receive')
    // }

    render()
    {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>

            </div>
        )
    }
}
export default Test;