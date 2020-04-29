import React, { Component } from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {getAllArticles} from '../../actions/articleActions';

export class Articles extends Component {
    constructor(props) {
        super(props);

        this.onArticleUpdate = this.onArticleUpdate.bind(this);
        this.onArticleDelete = this.onArticleDelete.bind(this);

        this.state = {
            articles: [],
            loading: true,
            failed: false,
            error: ''
        }
    }

    componentDidMount() {
        //this.populateArticlesData();
        this.props.getAllArticles();
    }

    componentDidUpdate(prevProps){
        if(prevProps.articles.data != this.props.articles.data){
            this.setState({articles: this.props.articles.data});
        }
    }

   // populateArticlesData() {
        //    axios.get("api/Articles/GetArticles").then(result => {
        //       const response = result.data;

        //      this.setState({ articles: response, loading: false });
        //  })

      //  axios.get('./data.json')
        //    .then(result => {
         //       const response = result.data;
        //        this.setState({ articles: response, loading: false, failed: false, error: '' });
       //     }).catch(error => {
       //         this.setState({ articles: [], loading: false, failed: true, error: 'Articles cannot be loaded' });
      //      });
   // }

    onArticleUpdate(id) {
        const { history } = this.props;
        history.push('/update/' + id);
    }

    onArticleDelete(id) {
        const { history } = this.props;
        history.push('/delete/' + id);
    }


    renderAllArticlesTable(articles) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>PublishedDateTime</th>
                        <th>NumberOfLikes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map(article => (
                            <tr key={article.id}>
                                <td>{article.author}</td>
                                <td>{article.title}</td>
                                <td>{article.body}</td>
                                <td>{article.publishedDateTime}</td>
                                <td>{article.numberOfLikes}</td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.onArticleUpdate(article.id)} className="btn btn-success">
                                            Update
                                        </button>
                                        <button onClick={() => this.onArticleDelete(article.id)} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        );
    }

    render() {

        // let content = this.state.loading ? (
        //     <p>
        //         <em>Loading...</em>
        //     </p>
        // ) : (this.state.failed ? (
        //     <div>
        //         <em>{this.state.error}</em>
        //     </div>) : (this.renderAllArticlesTable(this.state.articles))

        //     )

        let content = this.props.articles.loading ?
        (
            <p>
                <em>loading...</em>
            </p>
        ):(
            this.state.articles.length && this.renderAllArticlesTable(this.state.articles)
        );

        return (
            <div>
                <h1>All Articles</h1>
                <p>Summary:</p>
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({articles}) => ({
    articles
});

export default connect(mapStateToProps, {getAllArticles})(Articles);