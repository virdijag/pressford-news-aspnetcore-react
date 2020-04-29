using System.Collections.Generic;
using System.Linq;

namespace Articles.Data
{
    public class ArticleService : IArticleService
    {
        public void AddArticle(Article article)
        {
           Data.Articles.Add(article);
        }

        public void DeleteArticle(int articleId)
        {
             var article = Data.Articles.FirstOrDefault(x => x.Id == articleId);

             if(article != null)
            {
                Data.Articles.Remove(article);
            }
        }

        public List<Article> GetAllArticles() => Data.Articles.ToList();
        
        public Article GetArticleById(int articleId) => Data.Articles.FirstOrDefault(x => x.Id == articleId);

        public void UpdateArticle(int articleId, Article article)
        {
            var oldArticle = Data.Articles.FirstOrDefault(x => x.Id == articleId);

            if(oldArticle != null)
            {
                oldArticle.Title = article.Title;
                oldArticle.Body = article.Body;
                oldArticle.Author = article.Author;
                oldArticle.PublishedDateTime = article.PublishedDateTime;
                oldArticle.NumberOfLikes = article.NumberOfLikes;
            }
        }
    }
}