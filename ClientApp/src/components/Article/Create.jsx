import React, { Component } from 'react';
import axios from 'axios';

export class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangePublishedDateTime = this.onChangePublishedDateTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            body: '',
            publishedDateTime: '',
            numberOfLikes: ''
        }      
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeAuthor(e){
        this.setState({
            author: e.target.value
        });
    }

    onChangeBody(e){
        this.setState({
            body: e.target.value
        });
    }

    onChangePublishedDateTime(e){
        this.setState({
            publishedDateTime: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const {history} = this.props;

        let articleObject = {
            Id: Math.floor(Math.random()*1000),
            title: this.state.title,
            author: this.state.author,
            body: this.state.body,
            publishedDateTime: this.state.publishedDateTime,
            numberOfLikes: '0'           
        }

        axios.post("api/Articles/AddArticle", articleObject).then(result => {
            history.push('/articles');
        })

    }

    render() {

        return (
            <div className="article-form" >
                <h3>Add new article</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Article Title:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Article Body: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.body}
                            onChange={this.onChangeBody}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Published DateTime:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.publishedDateTime}
                                    onChange={this.onChangePublishedDateTime}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Add Article" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}