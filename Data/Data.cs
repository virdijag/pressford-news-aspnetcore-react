using System.Collections.Generic;
using System;

namespace Articles.Data
{
    public static class Data
    {
        public static List<Article> Articles => AllArticles;

        public static List<Article> AllArticles { get => allArticles; set => allArticles = value; }

        static List<Article> allArticles = new List<Article>()
        {
            
            new Article()
            {
                Author = "Joe Bloggs",
                Title = "New Opportunities at Pressford Consulting",
                Body = "ArticleBodySamples.Article1",
                PublishedDateTime = DateTime.UtcNow,
                NumberOfLikes = 6
            },
            new Article()
            {
                Author = "Joe Bloggs",
                Title = "Pressford Consulting Huge Investment in Technology",
                Body = "ArticleBodySamples.Article2",
                PublishedDateTime = DateTime.UtcNow,
                NumberOfLikes = 2
            },
            new Article()
            {
                Author = "Rohan Penta",
                Title = "Reducing Our Carbon Foot Print",
                Body = "ArticleBodySamples.Article3",
                PublishedDateTime = DateTime.UtcNow,
                NumberOfLikes = 8
            },
             new Article()
            {
                Author = "Joe Bloggs",
                Title = "Pressford Consulting Win Best Place To Work 2019",
                Body = "ArticleBodySamples.Article4",
                PublishedDateTime = DateTime.UtcNow,
                NumberOfLikes = 10
            }
        };
    }

}