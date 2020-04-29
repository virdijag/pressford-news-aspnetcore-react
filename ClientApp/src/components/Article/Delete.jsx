import React, { Component } from 'react';
import axios from 'axios';

export class Delete extends Component {
    constructor(props) {
        super(props);

        this.OnCancel = this.OnCancel.bind(this);
        this.OnConfirmation = this.OnConfirmation.bind(this);

        this.state = {
            title: '',
            author: '',
            body: '',
            publishedDateTime: '',
            numberOfLikes: ''
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get("api/Articles/SingleArticle/" + id).then(article => {
            const response = article.data;

            this.setState({
                title: response.title,
                author: response.author,
                body: response.body,
                publishedDateTime: new Date(response.publishedDateTime),
                numberOfLikes: response.numberOfLikes
            });
        })
    }

    OnCancel(e) {
        const { history } = this.props;
        history.push('/articles');
    }

    OnConfirmation(e) {
        const { id } = this.props.match.params;
        const { history } = this.props;

        axios.delete("api/Articles/DeleteArticle/" + id).then(result => {
            history.push('/articles');
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Delete article confirmation</h2>

                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title"> {this.state.title} </h4>
                        <p class="card-text"> {this.state.body} </p>
                        <button onClick={this.OnCancel} class="btn btn-default">
                            Cancel
            </button>
                        <button onClick={this.OnConfirmation} class="btn btn-danger">
                            Confirm
            </button>
                    </div>
                </div>
            </div>
        )
    }

}