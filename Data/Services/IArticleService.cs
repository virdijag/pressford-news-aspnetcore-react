
using System.Collections.Generic;

namespace Articles.Data
{
    public interface IArticleService
    {
        List<Article> GetAllArticles();

        Article GetArticleById(int articleId);

        void UpdateArticle(int articleId, Article article);

        void DeleteArticle(int articleId);

        void AddArticle(Article article);
    }

}