
using System;

namespace Articles.Data
{
    public class Article
    {
        public int Id {get; set; }

        public string Author { get; set;}
        public string Title {get;set;}

        public string Body {get; set;}
        public DateTime PublishedDateTime { get; set; } 

        public int NumberOfLikes { get; set; }      
    }
}